-- ============================================================
-- A Jugar MVP — 03_seed_demo.sql
-- Ejecutar en: Supabase Dashboard → SQL Editor (orden: 3 de 3)
-- Crea 5 usuarios demo con password: Demo1234!
-- Emails: matias@demo.com, valentina@demo.com, rodrigo@demo.com
--         camila@demo.com, ignacio@demo.com
-- ============================================================

do $$
declare
  uid_matias    uuid := '11111111-1111-1111-1111-111111111111';
  uid_valentina uuid := '22222222-2222-2222-2222-222222222222';
  uid_rodrigo   uuid := '33333333-3333-3333-3333-333333333333';
  uid_camila    uuid := '44444444-4444-4444-4444-444444444444';
  uid_ignacio   uuid := '55555555-5555-5555-5555-555555555555';
  match1_id     uuid := 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa';
  match2_id     uuid := 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb';
begin

  -- ──────────────────────────────────────────────
  -- 1. Crear usuarios en auth.users
  -- ──────────────────────────────────────────────
  insert into auth.users (
    instance_id, id, aud, role, email, encrypted_password,
    email_confirmed_at, raw_app_meta_data, raw_user_meta_data,
    created_at, updated_at,
    confirmation_token, email_change, email_change_token_new, recovery_token
  ) values
  ('00000000-0000-0000-0000-000000000000', uid_matias,    'authenticated', 'authenticated',
   'matias@demo.com',    crypt('Demo1234!', gen_salt('bf')),
   now(), '{"provider":"email","providers":["email"]}', '{"full_name":"Matias García"}',
   now(), now(), '', '', '', ''),
  ('00000000-0000-0000-0000-000000000000', uid_valentina, 'authenticated', 'authenticated',
   'valentina@demo.com', crypt('Demo1234!', gen_salt('bf')),
   now(), '{"provider":"email","providers":["email"]}', '{"full_name":"Valentina Torres"}',
   now(), now(), '', '', '', ''),
  ('00000000-0000-0000-0000-000000000000', uid_rodrigo,   'authenticated', 'authenticated',
   'rodrigo@demo.com',   crypt('Demo1234!', gen_salt('bf')),
   now(), '{"provider":"email","providers":["email"]}', '{"full_name":"Rodrigo Méndez"}',
   now(), now(), '', '', '', ''),
  ('00000000-0000-0000-0000-000000000000', uid_camila,    'authenticated', 'authenticated',
   'camila@demo.com',    crypt('Demo1234!', gen_salt('bf')),
   now(), '{"provider":"email","providers":["email"]}', '{"full_name":"Camila Ruiz"}',
   now(), now(), '', '', '', ''),
  ('00000000-0000-0000-0000-000000000000', uid_ignacio,   'authenticated', 'authenticated',
   'ignacio@demo.com',   crypt('Demo1234!', gen_salt('bf')),
   now(), '{"provider":"email","providers":["email"]}', '{"full_name":"Ignacio Vega"}',
   now(), now(), '', '', '', '')
  on conflict (id) do nothing;

  -- ──────────────────────────────────────────────
  -- 2. Crear identidades (necesario para login por email)
  -- ──────────────────────────────────────────────
  insert into auth.identities (provider_id, user_id, identity_data, provider, last_sign_in_at, created_at, updated_at)
  values
  (uid_matias::text,    uid_matias,    jsonb_build_object('sub', uid_matias::text,    'email', 'matias@demo.com'),    'email', now(), now(), now()),
  (uid_valentina::text, uid_valentina, jsonb_build_object('sub', uid_valentina::text, 'email', 'valentina@demo.com'), 'email', now(), now(), now()),
  (uid_rodrigo::text,   uid_rodrigo,   jsonb_build_object('sub', uid_rodrigo::text,   'email', 'rodrigo@demo.com'),   'email', now(), now(), now()),
  (uid_camila::text,    uid_camila,    jsonb_build_object('sub', uid_camila::text,    'email', 'camila@demo.com'),    'email', now(), now(), now()),
  (uid_ignacio::text,   uid_ignacio,   jsonb_build_object('sub', uid_ignacio::text,   'email', 'ignacio@demo.com'),   'email', now(), now(), now())
  on conflict (provider_id, provider) do nothing;

  -- ──────────────────────────────────────────────
  -- 3. Completar perfiles (el trigger ya los creó básicos)
  -- ──────────────────────────────────────────────
  update public.profiles set
    full_name = 'Matias García', level = 'Avanzado',
    location = 'Palermo, CABA', rating = 4.8, matches_played = 32, attendance_pct = 94
  where id = uid_matias;

  update public.profiles set
    full_name = 'Valentina Torres', level = 'Intermedio',
    location = 'Núñez, CABA', rating = 4.5, matches_played = 17, attendance_pct = 88
  where id = uid_valentina;

  update public.profiles set
    full_name = 'Rodrigo Méndez', level = 'Avanzado',
    location = 'Belgrano, CABA', rating = 4.9, matches_played = 48, attendance_pct = 97
  where id = uid_rodrigo;

  update public.profiles set
    full_name = 'Camila Ruiz', level = 'Principiante',
    location = 'San Isidro, GBA', rating = 3.8, matches_played = 9, attendance_pct = 75
  where id = uid_camila;

  update public.profiles set
    full_name = 'Ignacio Vega', level = 'Intermedio',
    location = 'Villa Urquiza, CABA', rating = 4.6, matches_played = 23, attendance_pct = 91
  where id = uid_ignacio;

  -- ──────────────────────────────────────────────
  -- 4. Crear partidos demo
  -- ──────────────────────────────────────────────
  insert into public.matches (
    id, organizer_id, club_name, location, match_date, start_time,
    level, status, open_slots, published_at, created_at
  ) values
  (match1_id, uid_matias, 'Club Náutico', 'Palermo, CABA',
   current_date + 2, '18:00', 'Avanzado', 'open', 1,
   now() - interval '15 minutes', now() - interval '15 minutes'),
  (match2_id, uid_rodrigo, 'Belgrano Paddle', 'Belgrano, CABA',
   current_date + 3, '10:00', 'Intermedio', 'open', 1,
   now() - interval '30 minutes', now() - interval '30 minutes')
  on conflict (id) do nothing;

  -- ──────────────────────────────────────────────
  -- 5. Agregar organizadores como match_players
  -- ──────────────────────────────────────────────
  insert into public.match_players (match_id, player_id, role) values
  (match1_id, uid_matias,  'organizer'),
  (match2_id, uid_rodrigo, 'organizer')
  on conflict (match_id, player_id) do nothing;

  -- ──────────────────────────────────────────────
  -- 6. Crear postulaciones demo para el partido de Matias
  --    (Valentina, Rodrigo, Camila ya se postularon)
  -- ──────────────────────────────────────────────
  insert into public.applications (match_id, player_id, status, created_at) values
  (match1_id, uid_valentina, 'pending', now() - interval '12 minutes'),
  (match1_id, uid_rodrigo,   'pending', now() - interval '9 minutes'),
  (match1_id, uid_camila,    'pending', now() - interval '5 minutes')
  on conflict (match_id, player_id) do nothing;

  -- Postulación de Ignacio al partido de Rodrigo
  insert into public.applications (match_id, player_id, status, created_at) values
  (match2_id, uid_ignacio, 'pending', now() - interval '20 minutes')
  on conflict (match_id, player_id) do nothing;

end $$;

-- ============================================================
-- VERIFICACIÓN: correr esto para confirmar que todo está bien
-- ============================================================
-- select p.full_name, p.level, p.location from profiles p order by p.full_name;
-- select m.club_name, m.level, m.status from matches m;
-- select p.full_name as candidato, m.club_name from applications a
--   join profiles p on p.id = a.player_id
--   join matches m on m.id = a.match_id;