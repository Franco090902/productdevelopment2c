-- ============================================================
-- A Jugar MVP — 07_pro_interest.sql
-- Propósito: registro de la prueba "puerta falsa" de A Jugar Pro.
--            Guarda eventos de interés; NO cobra ni procesa pagos.
-- Ejecutar en: Supabase Dashboard → SQL Editor
-- Orden: 7 de 7 (después de 06_get_pitch_metrics.sql)
-- Es aditivo: no modifica tablas ni políticas existentes.
-- ============================================================

CREATE TABLE IF NOT EXISTS public.pro_interest (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  event       text NOT NULL CHECK (event IN ('view', 'click_cta', 'leave_contact')),
  price_shown integer NOT NULL,            -- precio mostrado en ARS por mes
  contact     text,                        -- WhatsApp, solo en 'leave_contact'
  created_at  timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS pro_interest_user_idx  ON public.pro_interest (user_id);
CREATE INDEX IF NOT EXISTS pro_interest_event_idx ON public.pro_interest (event);

ALTER TABLE public.pro_interest ENABLE ROW LEVEL SECURITY;

-- Cada usuario solo puede insertar eventos propios.
DROP POLICY IF EXISTS "pro_interest_insert_own" ON public.pro_interest;
CREATE POLICY "pro_interest_insert_own"
  ON public.pro_interest FOR INSERT
  TO authenticated WITH CHECK (user_id = auth.uid());

-- Solo el equipo (account_type = 'team') puede leer los eventos.
DROP POLICY IF EXISTS "pro_interest_select_team" ON public.pro_interest;
CREATE POLICY "pro_interest_select_team"
  ON public.pro_interest FOR SELECT
  TO authenticated USING (public.is_team());

-- ──────────────────────────────────────────────────────────────
-- LECTURA DE RESULTADOS (ejecutar como usuario del equipo)
-- Un clic es intención, NO pago: no equivale a un suscriptor.
-- ──────────────────────────────────────────────────────────────
-- SELECT
--   count(DISTINCT user_id) FILTER (WHERE event = 'view')          AS usuarios_que_vieron,
--   count(DISTINCT user_id) FILTER (WHERE event = 'click_cta')     AS usuarios_que_hicieron_clic,
--   count(DISTINCT user_id) FILTER (WHERE event = 'leave_contact') AS usuarios_que_dejaron_contacto
-- FROM public.pro_interest;
