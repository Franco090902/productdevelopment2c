-- ============================================================
-- A Jugar MVP — 01_schema.sql
-- Ejecutar en: Supabase Dashboard → SQL Editor (orden: 1 de 3)
-- ============================================================

create extension if not exists "pgcrypto";

-- PROFILES
create table public.profiles (
  id             uuid primary key references auth.users(id) on delete cascade,
  full_name      text not null default '',
  avatar_url     text,
  level          text not null default 'Intermedio'
                   check (level in ('Principiante','Intermedio','Avanzado','Semi-pro','Experto')),
  location       text not null default '',
  rating         numeric(2,1) default 5.0
                   check (rating >= 1.0 and rating <= 5.0),
  matches_played integer default 0 check (matches_played >= 0),
  attendance_pct numeric(5,2) default 100
                   check (attendance_pct >= 0 and attendance_pct <= 100),
  created_at     timestamptz not null default now()
);

-- MATCHES
create table public.matches (
  id              uuid primary key default gen_random_uuid(),
  organizer_id    uuid not null references public.profiles(id),
  club_name       text not null,
  location        text not null,
  match_date      date not null,
  start_time      time not null,
  level           text not null
                    check (level in ('Principiante','Intermedio','Avanzado','Semi-pro','Experto')),
  status          text not null default 'open'
                    check (status in ('open','resolved','cancelled')),
  open_slots      integer not null default 1
                    check (open_slots >= 0 and open_slots <= 1),
  decision_factor text,
  published_at    timestamptz not null default now(),
  resolved_at     timestamptz,
  created_at      timestamptz not null default now()
);

-- APPLICATIONS
create table public.applications (
  id          uuid primary key default gen_random_uuid(),
  match_id    uuid not null references public.matches(id) on delete cascade,
  player_id   uuid not null references public.profiles(id) on delete cascade,
  message     text,
  status      text not null default 'pending'
                check (status in ('pending','accepted','rejected')),
  created_at  timestamptz not null default now(),
  selected_at timestamptz,
  unique(match_id, player_id)
);

-- MATCH PLAYERS
create table public.match_players (
  id        uuid primary key default gen_random_uuid(),
  match_id  uuid not null references public.matches(id) on delete cascade,
  player_id uuid not null references public.profiles(id) on delete cascade,
  role      text not null check (role in ('organizer','player','replacement')),
  joined_at timestamptz not null default now(),
  unique(match_id, player_id)
);

-- INDEXES
create index idx_matches_status      on public.matches(status);
create index idx_matches_date        on public.matches(match_date);
create index idx_matches_organizer   on public.matches(organizer_id);
create index idx_applications_match  on public.applications(match_id);
create index idx_applications_player on public.applications(player_id);
create index idx_match_players_match on public.match_players(match_id);

-- TRIGGER: auto-crear perfil al registrarse
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, avatar_url, level, location)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', ''),
    new.raw_user_meta_data->>'avatar_url',
    'Intermedio',
    ''
  )
  on conflict (id) do nothing;
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();