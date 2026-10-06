/* =====================================================
   A Jugar MVP — app.js
   Flujo: faltante → candidatos → elección → resuelto
   ===================================================== */

// ── ESTADO GLOBAL
let state = {
  user: null, profile: null,
  matches: [], myMatches: [],
  currentMatch: null, currentApps: [],
  resolvedData: null,
  activeFilter: 'all',
  currentView: 'auth',
};

// ── INIT
document.addEventListener('DOMContentLoaded', async () => {
  sb.auth.onAuthStateChange(async (event, session) => {
    if (session?.user) { state.user = session.user; await onUserLoggedIn(); }
    else { state.user = null; state.profile = null; showAuthView(); }
  });
  const { data: { session } } = await sb.auth.getSession();
  if (session?.user) { state.user = session.user; await onUserLoggedIn(); }
  else { showAuthView(); }
});

// ── AUTH
async function handleLogin() {
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value;
  const btn = document.getElementById('btn-login');
  if (!email || !password) { showAuthError('Completá email y contraseña'); return; }
  btn.disabled = true; btn.textContent = 'Entrando...';
  const { error } = await sb.auth.signInWithPassword({ email, password });
  btn.disabled = false; btn.textContent = 'Entrar';
  if (error) showAuthError(error.message === 'Invalid login credentials' ? 'Email o contraseña incorrectos' : error.message);
}

async function handleSignup() {
  const name = document.getElementById('signup-name').value.trim();
  const email = document.getElementById('signup-email').value.trim();
  const password = document.getElementById('signup-password').value;
  const btn = document.getElementById('btn-signup');
  if (!name || !email || !password) { showSignupError('Completá todos los campos'); return; }
  if (password.length < 8) { showSignupError('La contraseña debe tener al menos 8 caracteres'); return; }
  btn.disabled = true; btn.textContent = 'Creando...';
  const { error } = await sb.auth.signUp({ email, password, options: { data: { full_name: name } } });
  btn.disabled = false; btn.textContent = 'Crear cuenta';
  if (error) showSignupError(error.message);
  else showToast('Cuenta creada. Revisá tu email para confirmarla.');
}

async function handleGoogle() {
  const { error } = await sb.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: window.location.href } });
  if (error) showToast('Error con Google: ' + error.message);
}

async function handleLogout() { await sb.auth.signOut(); showToast('Sesión cerrada'); }

function switchAuthPanel(panel) {
  document.getElementById('panel-login').style.display = panel === 'login' ? 'flex' : 'none';
  document.getElementById('panel-signup').style.display = panel === 'signup' ? 'flex' : 'none';
}

function showAuthError(msg) { const e = document.getElementById('auth-error'); e.textContent = msg; e.style.display = 'block'; }
function showSignupError(msg) { const e = document.getElementById('signup-error'); e.textContent = msg; e.style.display = 'block'; }
// ── POST-LOGIN
async function onUserLoggedIn() {
  const { data: profile } = await sb.from('profiles').select('*').eq('id', state.user.id).single();
  state.profile = profile;
  if (!profile || !profile.full_name || !profile.location) { showProfileSetupView(profile); return; }
  showMainApp(); navTo('partidos');
}

// ── PROFILE SETUP
function showProfileSetupView(profile) {
  hideAllViews();
  document.getElementById('view-profile-setup').style.display = 'flex';
  document.getElementById('navbar').style.display = 'none';
  document.getElementById('main-content').style.display = 'none';
  if (profile?.full_name) document.getElementById('setup-name').value = profile.full_name;
  if (profile?.level) document.getElementById('setup-level').value = profile.level;
  if (profile?.location) document.getElementById('setup-location').value = profile.location;
}

async function saveProfileSetup() {
  const full_name = document.getElementById('setup-name').value.trim();
  const level = document.getElementById('setup-level').value;
  const location = document.getElementById('setup-location').value.trim();
  if (!full_name) { showToast('Ingresa tu nombre'); return; }
  if (!level) { showToast('Selecciona tu nivel'); return; }
  if (!location) { showToast('Ingresa tu zona'); return; }
  const { error } = await sb.from('profiles').upsert({ id: state.user.id, full_name, level, location }, { onConflict: 'id' });
  if (error) { showToast('Error: ' + error.message); return; }
  const { data: newProfile } = await sb.from('profiles').select('*').eq('id', state.user.id).single();
  state.profile = newProfile;
  showMainApp(); navTo('partidos');
}

// ── NAVEGACIÓN
function showAuthView() {
  hideAllViews();
  document.getElementById('view-auth').style.display = 'flex';
  document.getElementById('navbar').style.display = 'none';
  document.getElementById('main-content').style.display = 'none';
}

function showMainApp() {
  hideAllViews();
  document.getElementById('view-auth').style.display = 'none';
  document.getElementById('view-profile-setup').style.display = 'none';
  document.getElementById('navbar').style.display = 'block';
  document.getElementById('main-content').style.display = 'block';
  updateNavUser();
  updatePublishFormUser();
}

function hideAllViews() {
  document.querySelectorAll('.view').forEach(v => v.style.display = 'none');
}

function navTo(viewName) {
  state.currentView = viewName;
  document.querySelectorAll('#main-content .view').forEach(v => v.style.display = 'none');
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  const tabMap = { 'partidos': 'tab-partidos', 'mis-partidos': 'tab-mis-partidos', 'publicar': 'tab-publicar', 'mi-perfil': 'tab-mi-perfil' };
  if (tabMap[viewName]) document.getElementById(tabMap[viewName])?.classList.add('active');
  const view = document.getElementById('view-' + viewName);
  if (view) { view.style.display = 'block'; }
  switch (viewName) {
    case 'partidos':     loadAndRenderMatches(); break;
    case 'mis-partidos': loadAndRenderMyMatches(); break;
    case 'mi-perfil':    renderOwnProfile(); break;
  }
}

// ── CARGAR PARTIDOS (todos)
async function loadAndRenderMatches() {
  showLoadingIn('partidos');
  const { data: matches, error } = await sb.from('matches')
    .select('*,organizer:profiles!organizer_id(id,full_name,level,location),applications(id,player_id,status,created_at)')
    .order('published_at', { ascending: false });
  if (error) { showToast('Error cargando partidos: ' + error.message); return; }
  state.matches = matches || [];
  renderMatchesGrid();
}

function renderMatchesGrid() {
  const grid = document.getElementById('partidos-grid');
  const loading = document.getElementById('partidos-loading');
  const empty = document.getElementById('partidos-empty');
  loading.style.display = 'none';
  let filtered = state.matches;
  if (state.activeFilter === 'open') filtered = filtered.filter(m => m.status === 'open');
  if (state.activeFilter === 'resolved') filtered = filtered.filter(m => m.status === 'resolved');
  if (filtered.length === 0) { grid.style.display = 'none'; empty.style.display = 'flex'; return; }
  empty.style.display = 'none'; grid.style.display = 'grid';
  grid.innerHTML = filtered.map(m => buildMatchCard(m, false)).join('');
}

function buildMatchCard(m, isMine) {
  const org = m.organizer || {};
  const isOpen = m.status === 'open';
  const isResolved = m.status === 'resolved';
  const isOrg = m.organizer_id === state.user?.id;
  const apps = m.applications || [];
  const pendingCount = apps.filter(a => a.status === 'pending').length;
  const alreadyApplied = apps.some(a => a.player_id === state.user?.id);
  const fechaStr = formatFecha(m.match_date);
  const nivelClass = getNivelClass(m.level);
  let badge = isOpen ? '<span class="status-badge status-open">Busca jugador</span>' : '<span class="status-badge status-resolved">Resuelto</span>';
  let cta = '';
  if (isMine && isOpen) {
    cta = pendingCount > 0
      ? '<button class="btn-ver-perfil" onclick="event.stopPropagation();verCandidatos(\''+m.id+'\')">'+pendingCount+' candidato'+(pendingCount>1?'s':'')+'</button>'
      : '<span class="card-apps-count">Sin postulaciones</span>';
  } else if (!isOrg && isOpen) {
    cta = alreadyApplied
      ? '<button class="btn-postular" disabled>Postulado</button>'
      : '<button class="btn-postular" onclick="event.stopPropagation();postularme(\''+m.id+'\')">Postularme</button>';
  }
  const orgInitial = (org.full_name||'?')[0].toUpperCase();
  const orgColor = avatarColor(org.id||'');
  const clickAction = isMine && isOpen ? 'verCandidatos(\''+m.id+'\')' : '';
  return '<div class="partido-card'+(isResolved?' resolved':'')+(isOrg?' mine':'')+'" '+(clickAction?'onclick="'+clickAction+'"':'')+'>'+
    '<div class="card-top">'+
    '<div><div class="card-lugar">'+esc(m.club_name)+'</div><div class="card-fecha">'+fechaStr+' — '+m.start_time?.slice(0,5)+'hs</div></div>'+
    badge+'</div>'+
    '<div class="card-nivel"><span class="badge-nivel '+nivelClass+'">'+m.level+'</span>'+
    (isOpen?'<span style="font-size:12px;color:var(--text-muted)">Falta 1 jugador</span>':'')+
    '</div>'+
    '<div class="card-footer">'+
    '<div class="card-organizador"><div class="avatar-sm" style="width:22px;height:22px;font-size:10px;background:'+orgColor+'">'+orgInitial+'</div>'+
    esc(org.full_name||'Desconocido')+(isOrg?' (vos)':'')+'</div>'+
    cta+'</div></div>';
}

function filterMatches(type) {
  state.activeFilter = type;
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  document.getElementById('chip-'+type)?.classList.add('active');
  renderMatchesGrid();
}

// ── MIS PARTIDOS
async function loadAndRenderMyMatches() {
  showLoadingIn('mis-partidos');
  const { data: matches, error } = await sb.from('matches')
    .select('*,organizer:profiles!organizer_id(id,full_name,level,location),applications(id,player_id,status,created_at)')
    .eq('organizer_id', state.user.id)
    .order('created_at', { ascending: false });
  if (error) { showToast('Error cargando tus partidos'); return; }
  state.myMatches = matches || [];
  const grid = document.getElementById('mis-partidos-grid');
  const loading = document.getElementById('mis-partidos-loading');
  const empty = document.getElementById('mis-partidos-empty');
  loading.style.display = 'none';
  if (state.myMatches.length === 0) { grid.style.display='none'; empty.style.display='flex'; return; }
  empty.style.display='none'; grid.style.display='grid';
  grid.innerHTML = state.myMatches.map(m => buildMatchCard(m, true)).join('');
}

// ── PUBLICAR PARTIDO
async function handlePublishMatch(e) {
  e.preventDefault();
  const btn = document.getElementById('btn-publicar');
  const club_name = document.getElementById('p-club').value.trim();
  const location = document.getElementById('p-location').value.trim();
  const match_date = document.getElementById('p-fecha').value;
  const start_time = document.getElementById('p-hora').value;
  const level = document.getElementById('p-nivel').value;
  if (!club_name||!location||!match_date||!start_time||!level) { showToast('Completa todos los campos'); return; }
  btn.disabled=true; btn.textContent='Publicando...';
  const { data: match, error } = await sb.from('matches').insert({
    organizer_id: state.user.id, club_name, location, match_date, start_time, level,
    status:'open', open_slots:1, published_at: new Date().toISOString()
  }).select().single();
  if (error) { btn.disabled=false; btn.textContent='Publicar partido'; showToast('Error: '+error.message); return; }
  await sb.from('match_players').insert({ match_id:match.id, player_id:state.user.id, role:'organizer' });
  btn.disabled=false; btn.textContent='Publicar partido';
  document.getElementById('publish-form').reset();
  showToast('Partido publicado. Ya pueden postularse candidatos.');
  navTo('mis-partidos');
}

// ── CANDIDATOS
async function verCandidatos(matchId) {
  navTo('candidatos');
  const match = state.myMatches.find(m => m.id === matchId) || await fetchMatch(matchId);
  state.currentMatch = match;
  renderCandidatosHeader(match);
  showLoadingIn('candidatos');
  const { data: apps, error } = await sb.from('applications')
    .select('*,player:profiles!player_id(*)')
    .eq('match_id', matchId).eq('status','pending')
    .order('created_at', { ascending: true });
  if (error) { showToast('Error cargando candidatos'); return; }
  state.currentApps = apps || [];
  renderCandidatosList();
}

async function fetchMatch(matchId) {
  const { data } = await sb.from('matches')
    .select('*,organizer:profiles!organizer_id(*),applications(*)').eq('id', matchId).single();
  return data;
}

function renderCandidatosHeader(match) {
  const apps = match.applications || state.currentApps || [];
  const pending = apps.filter(a => a.status === 'pending').length;
  document.getElementById('candidatos-header').innerHTML =
    '<div class="candidatos-match-title">'+esc(match.club_name)+'</div>'+
    '<div class="candidatos-match-meta">'+
    '<span>'+formatFecha(match.match_date)+' '+match.start_time?.slice(0,5)+'hs</span>'+
    '<span>'+esc(match.location)+'</span>'+
    '<span class="badge-nivel '+getNivelClass(match.level)+'">'+match.level+'</span>'+
    '</div>'+
    '<div class="candidatos-count">'+(pending>0?pending+' candidato'+(pending>1?'s':''):'Sin postulaciones aun')+'</div>';
}

function renderCandidatosList() {
  const list = document.getElementById('candidatos-list');
  const loading = document.getElementById('candidatos-loading');
  const empty = document.getElementById('candidatos-empty');
  loading.style.display = 'none';
  if (state.currentApps.length === 0) { list.style.display='none'; empty.style.display='flex'; return; }
  empty.style.display='none'; list.style.display='block';
  list.innerHTML = state.currentApps.map(app => buildCandidateCard(app)).join('');
}

function buildCandidateCard(app) {
  const p = app.player || {};
  const initial = (p.full_name||'?')[0].toUpperCase();
  const color = avatarColor(p.id||'');
  const timeAgo = timeSince(app.created_at);
  return '<div class="candidate-card" id="cand-'+app.id+'">'+
    '<div class="candidate-avatar"><div class="avatar-lg" style="background:linear-gradient(135deg,'+color+',#0d1117);width:56px;height:56px;font-size:22px">'+initial+'</div></div>'+
    '<div class="candidate-info">'+
    '<div class="candidate-name">'+esc(p.full_name||'Sin nombre')+'</div>'+
    '<div class="profile-badges" style="margin-top:4px">'+
    '<span class="badge-nivel '+getNivelClass(p.level)+'">'+esc(p.level||'-')+'</span>'+
    (p.location?'<span style="font-size:12px;color:var(--text-secondary)">'+esc(p.location)+'</span>':'')+
    '</div>'+
    '<div class="candidate-meta">'+
    '<span class="candidate-stat">'+String.fromCharCode(9733)+' '+(p.rating||'5.0')+'</span>'+
    '<span class="candidate-stat">'+(p.matches_played||0)+' partidos</span>'+
    '<span class="candidate-stat">'+(p.attendance_pct||100)+'% asistencia</span>'+
    '</div>'+
    '<div class="candidate-time">Se postulo '+timeAgo+'</div>'+
    '</div>'+
    '<div class="candidate-actions">'+
    '<button class="btn-ver-perfil" onclick="showCandidateModal(\''+app.id+'\')">Ver perfil</button>'+
    '<button class="btn-elegir" onclick="confirmSelection(\''+app.id+'\')">Elegir</button>'+
    '</div></div>';
}

// ── POSTULARSE
async function postularme(matchId) {
  if (!state.user) return;
  const { error } = await sb.from('applications').insert({
    match_id: matchId, player_id: state.user.id,
    status: 'pending', created_at: new Date().toISOString()
  });
  if (error) {
    if (error.code === '23505') showToast('Ya te postulaste a este partido');
    else showToast('Error: ' + error.message);
    return;
  }
  showToast('Postulacion enviada. El organizador revisara tu perfil.');
  loadAndRenderMatches();
}

// ── SELECCION DEL REEMPLAZO
function showCandidateModal(appId) {
  const app = state.currentApps.find(a => a.id === appId);
  if (!app) return;
  const p = app.player || {};
  const initial = (p.full_name||'?')[0].toUpperCase();
  const color = avatarColor(p.id||'');
  document.getElementById('modal-card').innerHTML =
    '<div class="modal-header">'+
    '<div class="avatar-lg" style="background:linear-gradient(135deg,'+color+',#0d1117)">'+initial+'</div>'+
    '<div><div class="modal-nombre">'+esc(p.full_name||'Sin nombre')+'</div>'+
    '<div class="modal-zona">'+esc(p.location||'Sin zona')+'</div>'+
    '<div style="margin-top:6px"><span class="badge-nivel '+getNivelClass(p.level)+'">'+esc(p.level||'-')+'</span></div>'+
    '</div></div>'+
    '<div class="modal-stat-row">'+
    '<div class="modal-stat"><div class="modal-stat-val">'+(p.attendance_pct||100)+'%</div><div class="modal-stat-lbl">Asistencia</div></div>'+
    '<div class="modal-stat"><div class="modal-stat-val">'+(p.matches_played||0)+'</div><div class="modal-stat-lbl">Partidos</div></div>'+
    '<div class="modal-stat"><div class="modal-stat-val">'+String.fromCharCode(9733)+' '+(p.rating||'5.0')+'</div><div class="modal-stat-lbl">Rating</div></div>'+
    '</div>'+
    '<div class="modal-footer">'+
    '<button class="btn-secondary" style="flex:1" onclick="closeModal()">Cerrar</button>'+
    '<button class="btn-elegir" style="flex:1" onclick="closeModal();confirmSelection(\''+appId+'\')">Elegir</button>'+
    '</div>';
  openModal();
}

function confirmSelection(appId) {
  const app = state.currentApps.find(a => a.id === appId);
  if (!app) return;
  const p = app.player || {};
  const initial = (p.full_name||'?')[0].toUpperCase();
  const color = avatarColor(p.id||'');
  document.getElementById('modal-card').innerHTML =
    '<h2 class="confirm-title">Confirmar reemplazo?</h2>'+
    '<p class="confirm-sub">Esto aceptara a este jugador y rechazara las demas postulaciones. El partido quedara resuelto.</p>'+
    '<div class="confirm-player">'+
    '<div class="avatar-lg" style="background:linear-gradient(135deg,'+color+',#0d1117);width:52px;height:52px;font-size:20px">'+initial+'</div>'+
    '<div><div class="confirm-player-name">'+esc(p.full_name||'Sin nombre')+'</div>'+
    '<div class="confirm-player-meta">'+esc(p.level||'')+(p.location?' · '+esc(p.location):'')+'</div></div>'+
    '</div>'+
    '<div class="modal-footer">'+
    '<button class="btn-secondary" style="flex:1" onclick="closeModal()">Cancelar</button>'+
    '<button class="btn-primary" style="flex:1" onclick="acceptCandidate(\''+appId+'\')">Confirmar</button>'+
    '</div>';
  openModal();
}

async function acceptCandidate(appId) {
  closeModal();
  const app = state.currentApps.find(a => a.id === appId);
  if (!app) return;
  const match = state.currentMatch;
  if (!match) return;
  const selectedAt = new Date().toISOString();
  const resolvedAt = new Date().toISOString();
  await sb.from('applications').update({ status:'accepted', selected_at:selectedAt }).eq('id', appId);
  await sb.from('applications').update({ status:'rejected' }).eq('match_id', match.id).neq('id', appId).eq('status','pending');
  await sb.from('matches').update({ status:'resolved', resolved_at:resolvedAt, open_slots:0 }).eq('id', match.id);
  await sb.from('match_players').upsert({ match_id:match.id, player_id:app.player_id, role:'replacement' }, { onConflict:'match_id,player_id' });
  showQualitativeModal(appId, app, match, resolvedAt);
}

function showQualitativeModal(appId, app, match, resolvedAt) {
  const p = app.player || {};
  const opts = ['Nivel','Cercania','Foto','Calificaciones','Asistencia','Conocido en comun','Otro'];
  document.getElementById('modal-card').innerHTML =
    '<div class="cualitativa-title">Una pregunta rapida</div>'+
    '<p class="cualitativa-sub">Que fue lo que mas miraste para elegir a <strong>'+esc(p.full_name||'este jugador')+'</strong>?</p>'+
    '<div class="cualitativa-options">'+
    opts.map(opt => '<label class="cualitativa-option"><input type="radio" name="df" value="'+opt+'" />'+opt+'</label>').join('')+
    '</div>'+
    '<button class="btn-primary btn-full" onclick="submitQualitative(\''+appId+'\',\''+match.id+'\',\''+resolvedAt+'\')">Ver resultado</button>';
  openModal();
}

async function submitQualitative(appId, matchId, resolvedAt) {
  const selected = document.querySelector('input[name="df"]:checked');
  if (selected) await sb.from('matches').update({ decision_factor: selected.value }).eq('id', matchId);
  closeModal();
  await showResolvedView(matchId, appId, resolvedAt);
}

// ── RESUELTO
async function showResolvedView(matchId, appId, resolvedAt) {
  const { data: match } = await sb.from('matches')
    .select('*,organizer:profiles!organizer_id(*),applications(*,player:profiles!player_id(*))')
    .eq('id', matchId).single();
  const acceptedApp = match?.applications?.find(a => a.id === appId || a.status === 'accepted');
  const player = acceptedApp?.player || {};
  const initial = (player.full_name||'?')[0].toUpperCase();
  const color = avatarColor(player.id||'');
  const publishedAt = new Date(match.published_at);
  const firstApp = match.applications?.length > 0
    ? match.applications.reduce((min,a) => new Date(a.created_at)<new Date(min.created_at)?a:min)
    : null;
  const resolvedDate = new Date(resolvedAt || match.resolved_at);
  const totalMs = resolvedDate - publishedAt;
  const td = formatDuration(totalMs);
  const firstCandMs = firstApp ? new Date(firstApp.created_at)-publishedAt : null;
  const fd = firstCandMs ? formatDuration(firstCandMs) : {value:'-',unit:''};
  const totalCands = match.applications?.length || 0;
  document.getElementById('resuelto-info').innerHTML =
    '<div class="resuelto-replacement">'+
    '<div class="avatar-lg" style="background:linear-gradient(135deg,'+color+',#0d1117);width:56px;height:56px;font-size:22px">'+initial+'</div>'+
    '<div class="resuelto-replacement-text">'+
    '<div class="resuelto-replacement-name">'+esc(player.full_name||'Jugador')+'</div>'+
    '<div class="resuelto-replacement-sub">Se sumo como reemplazo</div>'+
    '</div></div>'+
    '<div class="resuelto-match-detail">'+
    esc(match.club_name)+' &middot; '+formatFecha(match.match_date)+' '+match.start_time?.slice(0,5)+'hs'+
    '</div>';
  document.getElementById('resuelto-timing').innerHTML =
    '<div class="timing-label">Partido resuelto en</div>'+
    '<div class="timing-value">'+td.value+'</div>'+
    '<div class="timing-unit">'+td.unit+'</div>';
  document.getElementById('resuelto-metrics').innerHTML =
    '<div class="metric-box"><div class="metric-value">'+totalCands+'</div><div class="metric-label">Candidatos</div></div>'+
    '<div class="metric-box"><div class="metric-value">'+fd.value+'</div><div class="metric-label">1er candidato ('+fd.unit+')</div></div>'+
    '<div class="metric-box"><div class="metric-value">OK</div><div class="metric-label">Partido completado</div></div>';
    
  // NUEVO: Agregar el botón de WhatsApp
  const phone = player.phone || '5491100000000'; // Fallback por si el perfil no tiene teléfono cargado
  document.getElementById('resuelto-metrics').innerHTML += `
    <div style="width: 100%; margin-top: 20px;">
      <button class="btn-primary btn-full" style="background-color: #25D366; color: white;" onclick="contactarPorWhatsapp('${matchId}', '${phone}')">
        💬 Contactar por WhatsApp
      </button>
    </div>
  `;
    
  navTo('resuelto');
}

// ── PERFIL PROPIO
function renderOwnProfile() {
  const p = state.profile;
  if (!p) return;
  const initial = (p.full_name||'?')[0].toUpperCase();
  document.getElementById('profile-main').innerHTML =
    '<div class="profile-top">'+
    '<div class="avatar-lg">'+initial+'</div>'+
    '<div class="profile-info">'+
    '<div class="profile-nombre">'+esc(p.full_name)+'</div>'+
    '<div class="profile-zona">'+esc(p.location||'Sin zona')+'</div>'+
    '<div class="profile-badges" style="margin-top:8px"><span class="badge-nivel '+getNivelClass(p.level)+'">'+esc(p.level)+'</span></div>'+
    '</div></div>'+
    '<div class="profile-stats">'+
    '<div class="stat-box"><div class="stat-value">'+(p.attendance_pct||100)+'%</div><div class="stat-label">Asistencia</div></div>'+
    '<div class="stat-box"><div class="stat-value">'+(p.matches_played||0)+'</div><div class="stat-label">Partidos</div></div>'+
    '<div class="stat-box"><div class="stat-value">'+String.fromCharCode(9733)+' '+(p.rating||'5.0')+'</div><div class="stat-label">Rating</div></div>'+
    '</div>'+
    '<p style="font-size:13px;color:var(--text-muted);padding:12px;background:var(--bg-surface);border-radius:var(--radius-sm)">'+
    'Tu perfil es visible para organizadores cuando te postulas a un partido.</p>';
}

// ── UI HELPERS
function updateNavUser() {
  const p = state.profile;
  const avatarEl = document.getElementById('nav-avatar');
  if (avatarEl && p?.full_name) {
    avatarEl.textContent = p.full_name[0].toUpperCase();
    avatarEl.style.background = 'linear-gradient(135deg,'+avatarColor(state.user?.id||'')+',#00bfa5)';
  }
}

function updatePublishFormUser() {
  const p = state.profile;
  if (!p) return;
  const nameEl = document.getElementById('slot-organizer-name');
  const avatarEl = document.getElementById('slot-organizer-avatar');
  if (nameEl) nameEl.textContent = p.full_name || 'Vos';
  if (avatarEl) avatarEl.textContent = (p.full_name||'?')[0].toUpperCase();
}

function showLoadingIn(section) {
  const ids = {
    'partidos':     { l:'partidos-loading',     g:'partidos-grid',     e:'partidos-empty' },
    'mis-partidos': { l:'mis-partidos-loading', g:'mis-partidos-grid', e:'mis-partidos-empty' },
    'candidatos':   { l:'candidatos-loading',   g:'candidatos-list',   e:'candidatos-empty' },
  };
  const { l, g, e } = ids[section] || {};
  if (l) document.getElementById(l).style.display = 'flex';
  if (g) document.getElementById(g).style.display = 'none';
  if (e) document.getElementById(e).style.display = 'none';
}

function openModal()  { document.getElementById('modal-overlay').classList.add('active'); }
function closeModal() { document.getElementById('modal-overlay').classList.remove('active'); }
function handleModalOverlayClick(e) { if (e.target===document.getElementById('modal-overlay')) closeModal(); }

function showToast(msg) {
  const t = document.getElementById('toast');
  t.innerHTML = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3200);
}

// ── FORMAT HELPERS
function formatFecha(str) {
  if (!str) return '';
  const d = new Date(str+'T00:00:00');
  return d.toLocaleDateString('es-AR', { weekday:'short', day:'numeric', month:'short' });
}

function formatDuration(ms) {
  if (!ms || ms<0) return { value:'0', unit:'seg' };
  const secs=Math.floor(ms/1000), mins=Math.floor(secs/60), hours=Math.floor(mins/60);
  if (hours>0) return { value:hours.toString(), unit:'hora'+(hours>1?'s':'') };
  if (mins>0)  return { value:mins.toString(),  unit:'min' };
  return           { value:secs.toString(),  unit:'seg' };
}

function timeSince(dateStr) {
  const ms=Date.now()-new Date(dateStr).getTime();
  const mins=Math.floor(ms/60000), hrs=Math.floor(mins/60);
  if (hrs>0) return 'hace '+hrs+'h';
  if (mins>0) return 'hace '+mins+' min';
  return 'hace un momento';
}

function getNivelClass(nivel) {
  const map = { 'Principiante':'nivel-principiante','Intermedio':'nivel-intermedio','Avanzado':'nivel-avanzado','Semi-pro':'nivel-semi-pro','Experto':'nivel-experto' };
  return map[nivel]||'nivel-intermedio';
}

function avatarColor(id) {
  const c=['#00e676','#7c4dff','#ff6d00','#00b8d4','#f06292','#ffab40','#69f0ae'];
  let h=0; for(let i=0;i<id.length;i++) h=id.charCodeAt(i)+((h<<5)-h);
  return c[Math.abs(h)%c.length];
}

function esc(str) {
  if (!str) return '';
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}


async function contactarPorWhatsapp(matchId, phone) {
  // 1. Registrar el clic silenciosamente en la base de datos
  await sb.from('matches').update({ whatsapp_click: true }).eq('id', matchId);
  
  // 2. Redirigir al usuario a WhatsApp
  // (Asumimos que 'phone' tiene el formato correcto, ej: 5491123456789)
  window.open(`https://wa.me/${phone}?text=¡Hola! Te elegí como reemplazo en A Jugar.`, '_blank');
}


// ── EXPONER AL HTML
window.navTo=navTo; window.handleLogin=handleLogin; window.handleSignup=handleSignup;
window.handleGoogle=handleGoogle; window.handleLogout=handleLogout;
window.handlePublishMatch=handlePublishMatch; window.switchAuthPanel=switchAuthPanel;
window.saveProfileSetup=saveProfileSetup; window.filterMatches=filterMatches;
window.verCandidatos=verCandidatos; window.postularme=postularme;
window.showCandidateModal=showCandidateModal; window.confirmSelection=confirmSelection;
window.acceptCandidate=acceptCandidate; window.submitQualitative=submitQualitative;
window.closeModal=closeModal; window.handleModalOverlayClick=handleModalOverlayClick;
window.contactarPorWhatsapp=contactarPorWhatsapp;
