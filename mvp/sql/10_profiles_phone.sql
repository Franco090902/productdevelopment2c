-- ============================================================
-- A Jugar MVP — 10_profiles_phone.sql
-- Propósito: documentar en el repo la columna profiles.phone.
--            app.js la usa (setup de perfil y botón de WhatsApp) pero
--            ninguna migración 01–09 la creaba.
-- Es idempotente: si la base ya tiene la columna, no hace nada.
-- Ejecutar en: Supabase Dashboard → SQL Editor
-- Orden recomendado: justo después de 01_schema.sql (en una base
--            nueva, antes de 03_seed_demo.sql). No rompe nada si se
--            ejecuta al final.
-- ============================================================

ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS phone text;

-- Formato esperado por app.js: 5491123456789 (sin + ni guiones).

-- VERIFICACIÓN
-- SELECT column_name, data_type FROM information_schema.columns
-- WHERE table_schema = 'public' AND table_name = 'profiles' AND column_name = 'phone';
