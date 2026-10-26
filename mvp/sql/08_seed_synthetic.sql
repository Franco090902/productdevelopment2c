-- ============================================================
-- A Jugar MVP — 08_seed_synthetic.sql
-- *** DATOS SINTÉTICOS — NO SON EVIDENCIA REAL ***
-- Autorizados por el docente para practicar el PROCESO de prueba
-- y presentación. No demuestran uso real, mercado ni pago.
--
-- Ejecutar en: Supabase Dashboard → SQL Editor (como postgres)
-- Orden: 8 (después de 07_pro_interest.sql)
-- Requiere: 01 a 06 aplicados. 07 es opcional (si no existe
--           pro_interest, se omite esa parte).
--
-- Cómo queda separado de lo real:
--   * Todas las cuentas se marcan account_type = 'demo'.
--     El panel con modo='real' las EXCLUYE; solo se ven con modo='todas'.
--   * IDs con prefijo reconocible:
--       usuarios  a0000000-0000-0000-0000-0000000000NN
--       partidos  b0000000-0000-0000-0000-0000000000NN
--   * Sin contraseña usable (aleatoria): nadie puede loguearse con ellas.
--   * Teléfonos ficticios 54911000000NN.
--   * Para borrar todo: 09_cleanup_synthetic.sql
--
-- Las fechas son RELATIVAS a now(): quedan dentro del filtro por
-- defecto del panel (últimos 30 días) el día que lo ejecuten.
-- ============================================================

DO $$
DECLARE
  v_tz constant text := 'America/Argentina/Buenos_Aires';
  u         record;
  s         record;
  k         int;
  n         int;
  v_uid     uuid;
  v_mid     uuid;
  v_org     uuid;
  v_player  uuid;
  v_chosen  uuid;
  v_pub     timestamptz;
  v_res     timestamptz;
BEGIN
  -- Guard: no cargar dos veces
  IF EXISTS (SELECT 1 FROM public.matches
             WHERE id = 'b0000000-0000-0000-0000-000000000001') THEN
    RAISE EXCEPTION 'El seed sintético ya está cargado. Ejecutá 09_cleanup_synthetic.sql primero.';
  END IF;

  -- profiles.phone se usa en app.js pero ninguna migración de este repo la crea.
  -- Es idempotente: si ya existe en su base, no hace nada.
  ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS phone text;

  -- El trigger de 04 impide cambiar account_type (también desde el SQL Editor).
  -- Se desactiva solo durante este script y se reactiva al final.
  ALTER TABLE public.profiles DISABLE TRIGGER trg_prevent_account_type_change;

  -- ──────────────────────────────────────────────
  -- 1. Usuarios sintéticos (1-5 organizan, 6-13 se postulan)
  -- ──────────────────────────────────────────────
  FOR u IN SELECT * FROM (VALUES
    (1,  'Sint. Org 01',  'Intermedio', 'Palermo, CABA',       4.6, 22, 92),
    (2,  'Sint. Org 02',  'Intermedio', 'Belgrano, CABA',      4.4, 18, 90),
    (3,  'Sint. Org 03',  'Avanzado',   'Núñez, CABA',         4.7, 35, 95),
    (4,  'Sint. Org 04',  'Intermedio', 'Villa Urquiza, CABA', 4.2, 12, 85),
    (5,  'Sint. Org 05',  'Avanzado',   'Caballito, CABA',     4.5, 27, 93),
    (6,  'Sint. Jug 06',  'Intermedio', 'Palermo, CABA',       4.4, 15, 88),
    (7,  'Sint. Jug 07',  'Intermedio', 'Belgrano, CABA',      4.6, 21, 91),
    (8,  'Sint. Jug 08',  'Avanzado',   'Núñez, CABA',         4.9, 44, 98),
    (9,  'Sint. Jug 09',  'Principiante','San Isidro, GBA',    3.9,  8, 75),
    (10, 'Sint. Jug 10',  'Intermedio', 'Colegiales, CABA',    4.3, 14, 86),
    (11, 'Sint. Jug 11',  'Avanzado',   'Almagro, CABA',       4.8, 38, 96),
    (12, 'Sint. Jug 12',  'Intermedio', 'Villa Urquiza, CABA', 4.5, 19, 89),
    (13, 'Sint. Jug 13',  'Principiante','Caballito, CABA',    3.8,  6, 70)
  ) AS t(n, nombre, nivel, zona, rating, partidos, asist)
  LOOP
    v_uid := ('a0000000-0000-0000-0000-' || lpad(u.n::text, 12, '0'))::uuid;

    INSERT INTO auth.users (
      instance_id, id, aud, role, email, encrypted_password,
      email_confirmed_at, raw_app_meta_data, raw_user_meta_data,
      created_at, updated_at,
      confirmation_token, email_change, email_change_token_new, recovery_token
    ) VALUES (
      '00000000-0000-0000-0000-000000000000', v_uid, 'authenticated', 'authenticated',
      'sintetico' || lpad(u.n::text, 2, '0') || '@sintetico.invalid',
      crypt(gen_random_uuid()::text, gen_salt('bf')),   -- contraseña aleatoria: sin login posible
      now(), '{"provider":"email","providers":["email"]}',
      jsonb_build_object('full_name', u.nombre),
      now(), now(), '', '', '', ''
    ) ON CONFLICT (id) DO NOTHING;

    INSERT INTO auth.identities (provider_id, user_id, identity_data, provider, last_sign_in_at, created_at, updated_at)
    VALUES (v_uid::text, v_uid,
            jsonb_build_object('sub', v_uid::text, 'email', 'sintetico' || lpad(u.n::text, 2, '0') || '@sintetico.invalid'),
            'email', now(), now(), now())
    ON CONFLICT (provider_id, provider) DO NOTHING;

    -- El trigger handle_new_user ya creó el perfil básico: lo completamos.
    UPDATE public.profiles SET
      full_name      = u.nombre,
      level          = u.nivel,
      location       = u.zona,
      rating         = u.rating,
      matches_played = u.partidos,
      attendance_pct = u.asist,
      phone          = '54911000000' || lpad(u.n::text, 2, '0'),
      account_type   = 'demo'
    WHERE id = v_uid;
  END LOOP;

  -- ──────────────────────────────────────────────
  -- 2. Partidos, postulaciones y resolución (14 partidos)
  --    i, organizador, días atrás, horas, min extra, estado,
  --    min hasta resolver, decision_factor, whatsapp_click,
  --    outcome, nº postulaciones, rank del elegido, nivel, club
  -- ──────────────────────────────────────────────
  FOR s IN SELECT * FROM (VALUES
    (1,  1, 24, 2, 0,  'resolved',  38, 'Nivel',             true,  'played',  3, 1,    'Intermedio', 'Club Sintético Norte'),
    (2,  2, 22, 5, 0,  'resolved',  95, 'Cercanía',          true,  'played',  4, 2,    'Intermedio', 'Club Sintético Sur'),
    (3,  3, 20, 1, 0,  'resolved',  22, 'Conocido en común', true,  'played',  2, 1,    'Avanzado',   'Club Sintético Norte'),
    (4,  1, 18, 6, 0,  'resolved', 140, 'Calificaciones',    true,  'no_show', 3, 3,    'Intermedio', 'Club Sintético Oeste'),
    (5,  4, 16, 3, 0,  'cancelled', NULL, NULL,              false, NULL,      1, NULL, 'Intermedio', 'Club Sintético Sur'),
    (6,  2, 14, 4, 0,  'resolved',  55, 'Conocido en común', true,  'played',  3, 2,    'Intermedio', 'Club Sintético Sur'),
    (7,  3, 12, 2, 0,  'resolved', 310, 'Asistencia',        false, NULL,      2, 2,    'Avanzado',   'Club Sintético Norte'),
    (8,  1, 10, 7, 0,  'resolved',  27, 'Nivel',             true,  'played',  4, 1,    'Intermedio', 'Club Sintético Oeste'),
    (9,  5,  8, 1, 0,  'resolved',  70, 'Conocido en común', true,  'played',  3, 3,    'Avanzado',   'Club Sintético Este'),
    (10, 2,  6, 5, 0,  'cancelled', NULL, NULL,              false, NULL,      0, NULL, 'Intermedio', 'Club Sintético Sur'),
    (11, 3,  4, 3, 0,  'resolved',  48, 'Foto',              true,  'no_show', 3, 2,    'Avanzado',   'Club Sintético Norte'),
    (12, 1,  3, 6, 0,  'resolved',  33, 'Cercanía',          true,  'played',  2, 1,    'Intermedio', 'Club Sintético Oeste'),
    (13, 5,  1, 0, 0,  'open',      NULL, NULL,              false, NULL,      2, NULL, 'Avanzado',   'Club Sintético Este'),
    (14, 2,  0, 0, 20, 'open',      NULL, NULL,              false, NULL,      0, NULL, 'Intermedio', 'Club Sintético Sur')
  ) AS t(i, org, d, h, mn, status, mins, factor, wa, outcome, napps, rk, lvl, club)
  LOOP
    v_mid    := ('b0000000-0000-0000-0000-' || lpad(s.i::text, 12, '0'))::uuid;
    v_org    := ('a0000000-0000-0000-0000-' || lpad(s.org::text, 12, '0'))::uuid;
    v_pub    := now() - make_interval(days => s.d, hours => s.h, mins => s.mn);
    v_res    := CASE WHEN s.status = 'resolved' THEN v_pub + make_interval(mins => s.mins) END;
    v_chosen := NULL;

    INSERT INTO public.matches (
      id, organizer_id, club_name, location, match_date, start_time, level,
      status, open_slots, decision_factor, published_at, resolved_at, created_at,
      whatsapp_click, outcome
    ) VALUES (
      v_mid, v_org, s.club,
      (SELECT location FROM public.profiles WHERE id = v_org),
      (v_pub AT TIME ZONE v_tz)::date + 1, '19:00', s.lvl,
      s.status, CASE WHEN s.status = 'resolved' THEN 0 ELSE 1 END,
      s.factor, v_pub, v_res, v_pub,
      s.wa, s.outcome
    );

    FOR k IN 1..s.napps LOOP
      v_player := ('a0000000-0000-0000-0000-' || lpad((6 + ((s.i + k) % 8))::text, 12, '0'))::uuid;

      INSERT INTO public.applications (match_id, player_id, status, created_at, selected_at, source)
      VALUES (
        v_mid, v_player,
        CASE WHEN s.status = 'resolved'
             THEN CASE WHEN k = s.rk THEN 'accepted' ELSE 'rejected' END
             ELSE 'pending' END,
        v_pub + make_interval(mins => 4 + (k - 1) * 7 + (s.i % 3) * 3),
        CASE WHEN s.status = 'resolved' AND k = s.rk THEN v_res - interval '20 seconds' END,
        CASE WHEN k = 1 AND s.i % 4 = 0 THEN 'link' ELSE 'listing' END
      );

      IF s.status = 'resolved' AND k = s.rk THEN v_chosen := v_player; END IF;
    END LOOP;

    INSERT INTO public.match_players (match_id, player_id, role, joined_at)
    VALUES (v_mid, v_org, 'organizer', v_pub);

    IF v_chosen IS NOT NULL THEN
      INSERT INTO public.match_players (match_id, player_id, role, joined_at)
      VALUES (v_mid, v_chosen, 'replacement', v_res);
    END IF;
  END LOOP;

  -- ──────────────────────────────────────────────
  -- 3. Puerta falsa Pro (solo si ya corrieron 07_pro_interest.sql)
  --    8 jugadores ven la pantalla, 5 hacen clic, 3 dejan contacto.
  --    El umbral de la prueba aún NO está definido (ver economía):
  --    no interpretar estos números como éxito o fracaso.
  -- ──────────────────────────────────────────────
  IF to_regclass('public.pro_interest') IS NOT NULL THEN
    FOR n IN 6..13 LOOP
      v_uid := ('a0000000-0000-0000-0000-' || lpad(n::text, 12, '0'))::uuid;

      INSERT INTO public.pro_interest (user_id, event, price_shown, contact, created_at)
      VALUES (v_uid, 'view', 5000, NULL, now() - interval '2 days' + n * interval '3 minutes');

      IF n IN (6, 7, 9, 11, 12) THEN
        INSERT INTO public.pro_interest (user_id, event, price_shown, contact, created_at)
        VALUES (v_uid, 'click_cta', 5000, NULL, now() - interval '2 days' + n * interval '3 minutes' + interval '40 seconds');
      END IF;

      IF n IN (6, 9, 12) THEN
        INSERT INTO public.pro_interest (user_id, event, price_shown, contact, created_at)
        VALUES (v_uid, 'leave_contact', 5000, '54911000000' || lpad(n::text, 2, '0'),
                now() - interval '2 days' + n * interval '3 minutes' + interval '90 seconds');
      END IF;
    END LOOP;
  ELSE
    RAISE NOTICE 'pro_interest no existe: se omitió la parte de la puerta falsa.';
  END IF;

  ALTER TABLE public.profiles ENABLE TRIGGER trg_prevent_account_type_change;
  RAISE NOTICE 'Seed sintético cargado: 13 usuarios, 14 partidos.';
END $$;

-- ============================================================
-- VERIFICACIÓN (ejecutar después)
-- ============================================================
-- select account_type, count(*) from profiles group by 1;          -- 13 deben ser 'demo' (+ los 5 del seed viejo)
-- select status, count(*) from matches where id::text like 'b0000000-%' group by 1;   -- resolved 10, cancelled 2, open 2
--
-- Show-up rate (el panel NO lo calcula: aparece como "No medible aún"):
-- select count(*) filter (where outcome='played')  as jugaron,
--        count(*) filter (where outcome='no_show') as no_show,
--        round(100.0 * count(*) filter (where outcome='played')
--              / nullif(count(*) filter (where outcome in ('played','no_show')), 0), 1) as show_up_pct
-- from matches where id::text like 'b0000000-%';                    -- 7 / 2 / 77.8
--
-- Descubrimiento link vs listado (tampoco lo muestra el panel):
-- select source, count(*) from applications a join matches m on m.id = a.match_id
-- where m.id::text like 'b0000000-%' group by 1;                    -- listing 29, link 3
--
-- Puerta falsa (ejecutar logueado como team, por RLS):
-- select count(distinct user_id) filter (where event='view') vieron,
--        count(distinct user_id) filter (where event='click_cta') clic,
--        count(distinct user_id) filter (where event='leave_contact') contacto
-- from pro_interest;                                                -- 8 / 5 / 3 (+ eventos reales si hubiera)
