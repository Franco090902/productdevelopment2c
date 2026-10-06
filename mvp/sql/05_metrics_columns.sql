-- ============================================================
-- A Jugar MVP — 05_metrics_columns.sql
-- Propósito: agrega columnas para métricas futuras del panel.
--            Todas son nullable o tienen default; NO rompen
--            ningún comportamiento existente del MVP.
-- Ejecutar en: Supabase Dashboard → SQL Editor
-- Orden: 5 de 7 (después de 04_account_type.sql)
-- ============================================================

-- ──────────────────────────────────────────────────────────────
-- 1. matches.outcome — resultado confirmado post-partido
--    null  = no confirmado todavía
--    'played'    = el reemplazo fue y jugó (show-up)
--    'no_show'   = el reemplazo no se presentó
--    'cancelled' = el partido se canceló por otra razón
--
--    Solo se completa cuando el organizador confirma el resultado.
--    El panel lo mostrará como "No medible aún" hasta que haya datos.
-- ──────────────────────────────────────────────────────────────
ALTER TABLE public.matches
  ADD COLUMN IF NOT EXISTS outcome text
    CHECK (outcome IN ('played', 'no_show', 'cancelled'));

-- ──────────────────────────────────────────────────────────────
-- 2. matches.whatsapp_click — flag de derivación a WhatsApp
--    true = el organizador hizo clic en "Contactar por WhatsApp"
--           después de elegir el reemplazo.
--    Registra intención de contacto, NO confirma conversación.
--    (El panel mostrará nota: "un clic no prueba que hubo conversación")
-- ──────────────────────────────────────────────────────────────
ALTER TABLE public.matches
  ADD COLUMN IF NOT EXISTS whatsapp_click boolean NOT NULL DEFAULT false;

-- ──────────────────────────────────────────────────────────────
-- 3. applications.source — origen de la postulación
--    null     = no registrado (postulaciones anteriores a este campo)
--    'listing' = el jugador encontró el partido en el listado de la app
--    'link'    = llegó por un link directo compartido
-- ──────────────────────────────────────────────────────────────
ALTER TABLE public.applications
  ADD COLUMN IF NOT EXISTS source text
    CHECK (source IN ('listing', 'link'));

-- ──────────────────────────────────────────────────────────────
-- 4. VERIFICACIÓN — ejecutar después para confirmar
-- ──────────────────────────────────────────────────────────────
-- SELECT column_name, data_type, is_nullable, column_default
-- FROM information_schema.columns
-- WHERE table_schema = 'public'
--   AND table_name IN ('matches', 'applications')
--   AND column_name IN ('outcome', 'whatsapp_click', 'source')
-- ORDER BY table_name, column_name;
