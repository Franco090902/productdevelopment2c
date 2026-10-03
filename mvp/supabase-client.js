// ============================================================
// A Jugar MVP — supabase-client.js
// Cliente Supabase inicializado con anon key (seguro para frontend)
// NUNCA usar service_role key aquí
// ============================================================

const SUPABASE_URL  = 'https://nbsgnynamdsxmvkmgygc.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ic2dueW5hbWRzeG12a21neWdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA5Nzg1NTYsImV4cCI6MjEwNjU1NDU1Nn0.GL8FPCq-vkZ4W60PauT37Q3hq8u4h1Jg_6icNHR_flo';

// supabase-js v2 desde CDN (cargado antes en index.html)
const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON, {
  auth: {
    // Para Google OAuth desde archivo local, configurar Site URL en:
    // Supabase Dashboard → Authentication → URL Configuration
    // Site URL: http://localhost o la URL donde sirvas el archivo
    persistSession: true,
    autoRefreshToken: true
  }
});