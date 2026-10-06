-- ============================================================
-- A Jugar MVP — 06_get_pitch_metrics.sql
-- Propósito: RPC principal del panel de métricas.
--            Solo accesible para usuarios con account_type='team'.
-- Ejecutar en: Supabase Dashboard → SQL Editor
-- Orden: 6 de 7 (después de 05_metrics_columns.sql)
-- ============================================================

CREATE OR REPLACE FUNCTION public.get_pitch_metrics(
  fecha_desde date DEFAULT (CURRENT_DATE - INTERVAL '30 days')::date,
  fecha_hasta date DEFAULT CURRENT_DATE,
  modo        text DEFAULT 'real'  -- 'real' | 'real_team' | 'todas'
)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
STABLE
SET search_path = public
AS $$
DECLARE
  v_tz constant text := 'America/Argentina/Buenos_Aires';

  -- North Star
  v_ns_total  bigint;
  v_ns_n      bigint;
  v_ns_weekly jsonb;

  -- Tiempo de resolución
  v_tres_median  numeric;
  v_tres_n       bigint;

  -- Tiempo hasta primer candidato
  v_tpc_median   numeric;
  v_tpc_n        bigint;

  -- Tasa de resolución
  v_resueltos    bigint;
  v_abiertos     bigint;
  v_cancelados   bigint;
  v_total        bigint;

  -- Liquidez
  v_liq_pct      numeric;
  v_liq_n        bigint;
  v_liq_ppp      numeric;

  -- Decision factor
  v_df_dist      jsonb;
  v_df_n         bigint;

  -- Primer postulante elegido
  v_ppe_pct      numeric;
  v_ppe_n        bigint;

  -- Retención
  v_ret_pct      numeric;
  v_ret_n        bigint;

BEGIN
  -- ── Verificación de seguridad ──────────────────────────────
  IF NOT public.is_team() THEN
    RETURN jsonb_build_object('error', 'unauthorized');
  END IF;

  IF modo NOT IN ('real', 'real_team', 'todas') THEN
    RETURN jsonb_build_object('error', 'modo inválido. Valores: real, real_team, todas');
  END IF;

  -- ── Macro de filtro de fecha (usando columna published_at) ──
  -- Convertimos published_at (timestamptz UTC) a fecha en BA antes de comparar.

  -- ── North Star ─────────────────────────────────────────────
  -- Partidos publicados en el período que quedaron resueltos.
  SELECT
    COUNT(*) FILTER (WHERE m.status = 'resolved'),
    COUNT(*)
  INTO v_ns_total, v_ns_n
  FROM matches m
  JOIN profiles p ON p.id = m.organizer_id
  WHERE (m.published_at AT TIME ZONE v_tz)::date BETWEEN fecha_desde AND fecha_hasta
    AND (
      (modo = 'real'      AND p.account_type = 'real') OR
      (modo = 'real_team' AND p.account_type IN ('real', 'team')) OR
      (modo = 'todas')
    );

  -- North Star semanal (agrupado por semana de resolved_at en BA)
  SELECT COALESCE(
    jsonb_agg(
      jsonb_build_object('week', week_start, 'count', cnt)
      ORDER BY week_start
    ),
    '[]'::jsonb
  )
  INTO v_ns_weekly
  FROM (
    SELECT
      to_char(
        date_trunc('week', m.resolved_at AT TIME ZONE v_tz),
        'YYYY-MM-DD'
      ) AS week_start,
      COUNT(*) AS cnt
    FROM matches m
    JOIN profiles p ON p.id = m.organizer_id
    WHERE m.status = 'resolved'
      AND m.resolved_at IS NOT NULL
      AND (m.published_at AT TIME ZONE v_tz)::date BETWEEN fecha_desde AND fecha_hasta
      AND (
        (modo = 'real'      AND p.account_type = 'real') OR
        (modo = 'real_team' AND p.account_type IN ('real', 'team')) OR
        (modo = 'todas')
      )
    GROUP BY 1
  ) weekly_data;

  -- ── Tiempo de resolución ────────────────────────────────────
  SELECT
    ROUND(
      percentile_cont(0.5) WITHIN GROUP (
        ORDER BY EXTRACT(EPOCH FROM (m.resolved_at - m.published_at)) / 60
      )::numeric, 1
    ),
    COUNT(*)
  INTO v_tres_median, v_tres_n
  FROM matches m
  JOIN profiles p ON p.id = m.organizer_id
  WHERE m.status = 'resolved'
    AND m.resolved_at IS NOT NULL
    AND (m.published_at AT TIME ZONE v_tz)::date BETWEEN fecha_desde AND fecha_hasta
    AND (
      (modo = 'real'      AND p.account_type = 'real') OR
      (modo = 'real_team' AND p.account_type IN ('real', 'team')) OR
      (modo = 'todas')
    );

  -- ── Tiempo hasta primer candidato ──────────────────────────
  SELECT
    ROUND(
      percentile_cont(0.5) WITHIN GROUP (
        ORDER BY EXTRACT(EPOCH FROM (fa.first_app_time - m.published_at)) / 60
      )::numeric, 1
    ),
    COUNT(*)
  INTO v_tpc_median, v_tpc_n
  FROM matches m
  JOIN profiles p ON p.id = m.organizer_id
  JOIN (
    SELECT match_id, MIN(created_at) AS first_app_time
    FROM applications
    GROUP BY match_id
  ) fa ON fa.match_id = m.id
  WHERE (m.published_at AT TIME ZONE v_tz)::date BETWEEN fecha_desde AND fecha_hasta
    AND (
      (modo = 'real'      AND p.account_type = 'real') OR
      (modo = 'real_team' AND p.account_type IN ('real', 'team')) OR
      (modo = 'todas')
    );

  -- ── Tasa de resolución ──────────────────────────────────────
  SELECT
    COUNT(*) FILTER (WHERE m.status = 'resolved'),
    COUNT(*) FILTER (WHERE m.status = 'open'),
    COUNT(*) FILTER (WHERE m.status = 'cancelled'),
    COUNT(*)
  INTO v_resueltos, v_abiertos, v_cancelados, v_total
  FROM matches m
  JOIN profiles p ON p.id = m.organizer_id
  WHERE (m.published_at AT TIME ZONE v_tz)::date BETWEEN fecha_desde AND fecha_hasta
    AND (
      (modo = 'real'      AND p.account_type = 'real') OR
      (modo = 'real_team' AND p.account_type IN ('real', 'team')) OR
      (modo = 'todas')
    );

  -- ── Liquidez ────────────────────────────────────────────────
  SELECT
    ROUND(
      COUNT(DISTINCT a.match_id)::numeric / NULLIF(COUNT(DISTINCT m.id), 0) * 100,
      1
    ),
    COUNT(DISTINCT m.id),
    ROUND(
      COUNT(a.id)::numeric / NULLIF(COUNT(DISTINCT a.match_id), 0),
      1
    )
  INTO v_liq_pct, v_liq_n, v_liq_ppp
  FROM matches m
  JOIN profiles p ON p.id = m.organizer_id
  LEFT JOIN applications a ON a.match_id = m.id
  WHERE (m.published_at AT TIME ZONE v_tz)::date BETWEEN fecha_desde AND fecha_hasta
    AND (
      (modo = 'real'      AND p.account_type = 'real') OR
      (modo = 'real_team' AND p.account_type IN ('real', 'team')) OR
      (modo = 'todas')
    );

  -- ── Decision factor ─────────────────────────────────────────
  SELECT
    COALESCE(
      jsonb_agg(
        jsonb_build_object('factor', decision_factor, 'count', cnt)
        ORDER BY cnt DESC
      ),
      '[]'::jsonb
    ),
    COALESCE(SUM(cnt), 0)
  INTO v_df_dist, v_df_n
  FROM (
    SELECT m.decision_factor, COUNT(*) AS cnt
    FROM matches m
    JOIN profiles p ON p.id = m.organizer_id
    WHERE m.decision_factor IS NOT NULL
      AND (m.published_at AT TIME ZONE v_tz)::date BETWEEN fecha_desde AND fecha_hasta
      AND (
        (modo = 'real'      AND p.account_type = 'real') OR
        (modo = 'real_team' AND p.account_type IN ('real', 'team')) OR
        (modo = 'todas')
      )
    GROUP BY m.decision_factor
  ) df;

  -- ── Primer postulante elegido ───────────────────────────────
  WITH match_candidates AS (
    SELECT
      m.id AS match_id,
      (SELECT a.id FROM applications a
       WHERE a.match_id = m.id
       ORDER BY a.created_at ASC LIMIT 1) AS first_app_id,
      (SELECT a.id FROM applications a
       WHERE a.match_id = m.id AND a.status = 'accepted' LIMIT 1) AS accepted_app_id
    FROM matches m
    JOIN profiles p ON p.id = m.organizer_id
    WHERE m.status = 'resolved'
      AND (m.published_at AT TIME ZONE v_tz)::date BETWEEN fecha_desde AND fecha_hasta
      AND (
        (modo = 'real'      AND p.account_type = 'real') OR
        (modo = 'real_team' AND p.account_type IN ('real', 'team')) OR
        (modo = 'todas')
      )
  )
  SELECT
    ROUND(
      COUNT(*) FILTER (
        WHERE first_app_id IS NOT NULL AND first_app_id = accepted_app_id
      )::numeric / NULLIF(COUNT(*) FILTER (WHERE accepted_app_id IS NOT NULL), 0) * 100,
      1
    ),
    COUNT(*) FILTER (WHERE accepted_app_id IS NOT NULL)
  INTO v_ppe_pct, v_ppe_n
  FROM match_candidates;

  -- ── Retención: % organizadores con 2do partido en ≤14 días ─
  WITH org_matches AS (
    SELECT
      m.organizer_id,
      m.published_at,
      ROW_NUMBER() OVER (PARTITION BY m.organizer_id ORDER BY m.published_at) AS rn
    FROM matches m
    JOIN profiles p ON p.id = m.organizer_id
    WHERE (m.published_at AT TIME ZONE v_tz)::date BETWEEN fecha_desde AND fecha_hasta
      AND (
        (modo = 'real'      AND p.account_type = 'real') OR
        (modo = 'real_team' AND p.account_type IN ('real', 'team')) OR
        (modo = 'todas')
      )
  ),
  first_pub  AS (SELECT organizer_id, published_at AS t1 FROM org_matches WHERE rn = 1),
  second_pub AS (SELECT organizer_id, published_at AS t2 FROM org_matches WHERE rn = 2)
  SELECT
    ROUND(
      COUNT(DISTINCT fp.organizer_id) FILTER (
        WHERE sp.t2 IS NOT NULL AND sp.t2 - fp.t1 <= INTERVAL '14 days'
      )::numeric / NULLIF(COUNT(DISTINCT fp.organizer_id), 0) * 100,
      1
    ),
    COUNT(DISTINCT fp.organizer_id)
  INTO v_ret_pct, v_ret_n
  FROM first_pub fp
  LEFT JOIN second_pub sp ON sp.organizer_id = fp.organizer_id;

  -- ── Ensamblado del resultado ────────────────────────────────
  RETURN jsonb_build_object(

    'filtros', jsonb_build_object(
      'fecha_desde',  fecha_desde,
      'fecha_hasta',  fecha_hasta,
      'modo',         modo,
      'generado_en',  to_char(now() AT TIME ZONE v_tz, 'YYYY-MM-DD"T"HH24:MI:SS')
    ),

    'north_star', jsonb_build_object(
      'label',  'Partidos completados gracias a A Jugar',
      'value',  COALESCE(v_ns_total, 0),
      'n',      COALESCE(v_ns_n, 0),
      'weekly', v_ns_weekly
    ),

    'tiempo_resolucion', jsonb_build_object(
      'label',          'Tiempo mediano publicación → resolución (min)',
      'median_minutes', v_tres_median,
      'n',              COALESCE(v_tres_n, 0)
    ),

    'tiempo_primer_candidato', jsonb_build_object(
      'label',          'Tiempo mediano hasta primer candidato (min)',
      'median_minutes', v_tpc_median,
      'n',              COALESCE(v_tpc_n, 0)
    ),

    'tasa_resolucion', jsonb_build_object(
      'label',            'Tasa de resolución',
      'resueltos',        COALESCE(v_resueltos, 0),
      'abiertos',         COALESCE(v_abiertos, 0),
      'cancelados',       COALESCE(v_cancelados, 0),
      'total_publicados', COALESCE(v_total, 0),
      'n',                COALESCE(v_total, 0)
    ),

    'liquidez', jsonb_build_object(
      'label',                'Liquidez del mercado',
      'pct_con_postulacion',  COALESCE(v_liq_pct, 0),
      'n_partidos',           COALESCE(v_liq_n, 0),
      'postulantes_por_partido', COALESCE(v_liq_ppp, 0),
      'n',                    COALESCE(v_liq_n, 0)
    ),

    'decision_factor', jsonb_build_object(
      'label',        'Qué miraron para decidir (decision_factor)',
      'distribution', COALESCE(v_df_dist, '[]'::jsonb),
      'n',            COALESCE(v_df_n, 0)
    ),

    'primer_postulante_elegido', jsonb_build_object(
      'label', '% partidos donde se eligió al primer postulante',
      'pct',   COALESCE(v_ppe_pct, 0),
      'n',     COALESCE(v_ppe_n, 0)
    ),

    'retencion', jsonb_build_object(
      'label',           '% organizadores con 2do partido en ≤14 días',
      'pct',             COALESCE(v_ret_pct, 0),
      'n_organizadores', COALESCE(v_ret_n, 0),
      'n',               COALESCE(v_ret_n, 0)
    ),

    -- Métricas pendientes de infraestructura
    'no_medible', jsonb_build_array(
      jsonb_build_object(
        'key',   'descubrimiento',
        'label', 'Descubrimiento: link vs. listado',
        'nota',  'Requiere applications.source. Columna creada, pendiente de implementar en el app.'
      ),
      jsonb_build_object(
        'key',   'whatsapp_traspaso',
        'label', 'Traspaso a WhatsApp',
        'nota',  'Requiere matches.whatsapp_click. Columna creada, pendiente de implementar en el app.'
      ),
      jsonb_build_object(
        'key',   'show_up_rate',
        'label', 'Show-up rate (fueron y jugaron)',
        'nota',  'Requiere matches.outcome. Columna creada, pendiente de implementar en el app.'
      ),
      jsonb_build_object(
        'key',   'embudo_completo',
        'label', 'Embudo completo (link_opened → signup → sent → chosen → wa → played)',
        'nota',  'Requiere tabla de eventos de funnel. No implementada aún.'
      ),
      jsonb_build_object(
        'key',   'vistas_perfil',
        'label', 'Vistas de perfil antes de elegir',
        'nota',  'Requiere tabla de eventos de funnel. No implementada aún.'
      )
    )

  );
END;
$$;

-- ── Permisos ────────────────────────────────────────────────────
-- Solo authenticated puede llamar la función.
-- La verificación is_team() dentro de la función es la segunda barrera.
REVOKE EXECUTE ON FUNCTION public.get_pitch_metrics(date, date, text) FROM PUBLIC;
GRANT  EXECUTE ON FUNCTION public.get_pitch_metrics(date, date, text) TO authenticated;

-- ── Verificación ────────────────────────────────────────────────
-- Ejecutar con tu sesión de team (desde el panel, no el SQL Editor):
--   const { data } = await sb.rpc('get_pitch_metrics', { fecha_desde: '2024-01-01', fecha_hasta: '2025-12-31', modo: 'todas' });
--   console.log(data);
--
-- Desde el SQL Editor (sin JWT) siempre devolverá {"error":"unauthorized"} — eso es correcto.
-- SELECT public.get_pitch_metrics('2024-01-01', '2025-12-31', 'todas');
