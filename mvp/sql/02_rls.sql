-- ============================================================
-- A Jugar MVP — 02_rls.sql
-- Ejecutar en: Supabase Dashboard → SQL Editor (orden: 2 de 3)
-- ============================================================

-- Habilitar RLS en todas las tablas
alter table public.profiles     enable row level security;
alter table public.matches      enable row level security;
alter table public.applications enable row level security;
alter table public.match_players enable row level security;

-- ============================================================
-- PROFILES
-- ============================================================
create policy "profiles_select_authenticated"
  on public.profiles for select
  to authenticated using (true);

create policy "profiles_insert_own"
  on public.profiles for insert
  to authenticated with check (auth.uid() = id);

create policy "profiles_update_own"
  on public.profiles for update
  to authenticated using (auth.uid() = id);

-- ============================================================
-- MATCHES
-- ============================================================
create policy "matches_select_authenticated"
  on public.matches for select
  to authenticated using (true);

create policy "matches_insert_own"
  on public.matches for insert
  to authenticated with check (organizer_id = auth.uid());

create policy "matches_update_organizer"
  on public.matches for update
  to authenticated using (organizer_id = auth.uid());

-- ============================================================
-- APPLICATIONS
-- ============================================================
-- Jugador ve sus propias; organizador ve las de su partido
create policy "applications_select"
  on public.applications for select
  to authenticated
  using (
    player_id = auth.uid()
    or exists (
      select 1 from public.matches m
      where m.id = match_id
        and m.organizer_id = auth.uid()
    )
  );

-- Solo el jugador puede crear su propia postulación
create policy "applications_insert_own"
  on public.applications for insert
  to authenticated
  with check (player_id = auth.uid());

-- Solo el organizador puede cambiar el status (aceptar/rechazar)
create policy "applications_update_organizer"
  on public.applications for update
  to authenticated
  using (
    exists (
      select 1 from public.matches m
      where m.id = match_id
        and m.organizer_id = auth.uid()
    )
  );

-- ============================================================
-- MATCH PLAYERS
-- ============================================================
create policy "match_players_select_authenticated"
  on public.match_players for select
  to authenticated using (true);

create policy "match_players_insert_organizer"
  on public.match_players for insert
  to authenticated
  with check (
    exists (
      select 1 from public.matches m
      where m.id = match_id
        and m.organizer_id = auth.uid()
    )
  );