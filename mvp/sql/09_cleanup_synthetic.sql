-- ============================================================
-- A Jugar MVP — 09_cleanup_synthetic.sql
-- Borra TODO lo creado por 08_seed_synthetic.sql (solo IDs con
-- prefijo a0000000-... / b0000000-...). No toca datos reales ni
-- los 5 usuarios del seed original 03_seed_demo.sql.
-- Ejecutar en: Supabase Dashboard → SQL Editor (como postgres)
-- ============================================================

-- 1. Partidos primero (matches.organizer_id no tiene ON DELETE CASCADE).
--    Esto borra en cascada applications y match_players.
DELETE FROM public.matches
WHERE id::text LIKE 'b0000000-0000-0000-0000-%';

-- 2. Usuarios: borra en cascada profiles y pro_interest.
DELETE FROM auth.users
WHERE id::text LIKE 'a0000000-0000-0000-0000-%';

-- Verificación: ambas deben dar 0
-- select count(*) from public.matches  where id::text like 'b0000000-%';
-- select count(*) from public.profiles where id::text like 'a0000000-%';
