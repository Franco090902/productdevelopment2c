-- ============================================================
-- A Jugar MVP — 04_account_type.sql
-- Propósito: agrega account_type a profiles, protege la columna
--            contra automodificación, y crea la función is_team().
-- Ejecutar en: Supabase Dashboard → SQL Editor
-- Orden: 4 de 7 (después de 03_seed_demo.sql)
-- ============================================================

-- ──────────────────────────────────────────────────────────────
-- 1. Agregar columna account_type a profiles
-- ──────────────────────────────────────────────────────────────
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS account_type text NOT NULL DEFAULT 'real'
    CHECK (account_type IN ('real', 'demo', 'team'));

-- ──────────────────────────────────────────────────────────────
-- 2. Marcar los usuarios demo existentes como 'demo'
--    (los 5 usuarios del seed de 03_seed_demo.sql)
-- ──────────────────────────────────────────────────────────────
UPDATE public.profiles
SET account_type = 'demo'
WHERE id IN (
  '11111111-1111-1111-1111-111111111111',  -- matias@demo.com
  '22222222-2222-2222-2222-222222222222',  -- valentina@demo.com
  '33333333-3333-3333-3333-333333333333',  -- rodrigo@demo.com
  '44444444-4444-4444-4444-444444444444',  -- camila@demo.com
  '55555555-5555-5555-5555-555555555555'   -- ignacio@demo.com
);

-- ──────────────────────────────────────────────────────────────
-- 3. Protección capa 1: REVOKE UPDATE sobre account_type
--    El rol authenticated no puede escribir esta columna,
--    aunque la política RLS lo permita para otras columnas.
-- ──────────────────────────────────────────────────────────────
REVOKE UPDATE (account_type) ON public.profiles FROM authenticated;

-- ──────────────────────────────────────────────────────────────
-- 4. Protección capa 2: trigger que impide cambiar account_type
--    Defensa en profundidad: cubre rutas que eviten la capa 1.
-- ──────────────────────────────────────────────────────────────
CREATE OR REPLACE FUNCTION public.prevent_account_type_change()
RETURNS trigger AS $$
BEGIN
  IF NEW.account_type IS DISTINCT FROM OLD.account_type THEN
    RAISE EXCEPTION 'No está permitido cambiar account_type. Contactá al administrador.';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS trg_prevent_account_type_change ON public.profiles;
CREATE TRIGGER trg_prevent_account_type_change
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.prevent_account_type_change();

-- ──────────────────────────────────────────────────────────────
-- 5. Función is_team() — SECURITY DEFINER
--    Devuelve true solo si el usuario autenticado tiene
--    account_type = 'team'. Anon siempre devuelve false.
-- ──────────────────────────────────────────────────────────────
CREATE OR REPLACE FUNCTION public.is_team()
RETURNS boolean AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.profiles
    WHERE id = auth.uid()
      AND account_type = 'team'
  );
$$ LANGUAGE sql SECURITY DEFINER STABLE;

-- Revocar acceso público; solo authenticated puede llamarla
REVOKE EXECUTE ON FUNCTION public.is_team() FROM PUBLIC;
GRANT  EXECUTE ON FUNCTION public.is_team() TO authenticated;

-- ──────────────────────────────────────────────────────────────
-- 6. *** ACCIÓN MANUAL REQUERIDA ***
--    Reemplazá <TU-USER-UUID> con el UUID de tu cuenta real
--    (lo encontrás en Authentication → Users en el Dashboard).
--    Este UPDATE corre como postgres (service_role) desde el
--    SQL Editor del Dashboard, así que el trigger NO lo bloquea.
-- ──────────────────────────────────────────────────────────────

-- UPDATE public.profiles
-- SET account_type = 'team'
-- WHERE id = '<TU-USER-UUID>';

-- ──────────────────────────────────────────────────────────────
-- 7. VERIFICACIÓN — ejecutar después para confirmar
-- ──────────────────────────────────────────────────────────────
-- SELECT id, account_type FROM public.profiles ORDER BY account_type;
-- SELECT public.is_team();   -- false si aún no marcaste tu cuenta
