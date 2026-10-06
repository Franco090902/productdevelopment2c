/* ============================================================
   A Jugar — admin.js
   Panel de métricas interno.
   Requiere: supabase-js v2 y chart.js 4.x cargados antes.
   ============================================================ */

// ── Configuración Supabase (misma anon key que el app principal) ──
const SUPABASE_URL  = 'https://nbsgnynamdsxmvkmgygc.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ic2dueW5hbWRzeG12a21neWdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA5Nzg1NTYsImV4cCI6MjEwNjU1NDU1Nn0.GL8FPCq-vkZ4W60PauT37Q3hq8u4h1Jg_6icNHR_flo';

// Versión de las definiciones de métricas (actualizar al cambiar fórmulas)
const METRICS_VERSION = 'v1.0';

const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON, {
  auth: { persistSession: true, autoRefreshToken: true }
});

// ── Estado global ──────────────────────────────────────────────
const state = {
  session:     null,
  metrics:     null,
  lastUpdated: null,
  charts:      {},       // Chart.js instances, keyed by canvas id
  filters: {
    desde: dateStr(-30),  // últimos 30 días por defecto
    hasta: dateStr(0),
    modo:  'real'
  }
};

// ── Inicialización ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', async () => {
  // Setear filtros en el DOM
  setInputVal('filter-desde', state.filters.desde);
  setInputVal('filter-hasta', state.filters.hasta);
  setInputVal('filter-modo',  state.filters.modo);

  // Escuchar cambios de sesión
  sb.auth.onAuthStateChange(async (event, session) => {
    if (event === 'SIGNED_OUT') { state.session = null; showLogin(); }
  });

  // Verificar sesión existente
  const { data: { session } } = await sb.auth.getSession();
  if (session) {
    state.session = session;
    await checkAccess();
  } else {
    showLogin();
  }

  // Enter en el login
  document.getElementById('login-password')?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleLogin();
  });
  document.getElementById('login-email')?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') document.getElementById('login-password').focus();
  });
});

// ── AUTH ───────────────────────────────────────────────────────
async function handleLogin() {
  const email    = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value;
  const btn      = document.getElementById('btn-login');

  hideEl('login-error'); hideEl('login-no-access');

  if (!email || !password) {
    showLoginError('Completá email y contraseña.');
    return;
  }

  btn.disabled    = true;
  btn.textContent = 'Verificando…';

  const { data, error } = await sb.auth.signInWithPassword({ email, password });

  btn.disabled    = false;
  btn.textContent = 'Entrar';

  if (error) {
    showLoginError(
      error.message === 'Invalid login credentials'
        ? 'Email o contraseña incorrectos.'
        : error.message
    );
    return;
  }

  state.session = data.session;
  await checkAccess();
}

async function checkAccess() {
  // Llamar is_team() para verificar que el usuario tiene permisos
  const { data: isTeam, error } = await sb.rpc('is_team');

  if (error || !isTeam) {
    await sb.auth.signOut();
    state.session = null;
    showEl('login-no-access');
    showLogin();
    return;
  }

  showDashboard();
  document.getElementById('header-email').textContent =
    state.session?.user?.email || '—';
  await loadMetrics();
}

async function handleLogout() {
  await sb.auth.signOut();
  state.session = null;
  state.metrics = null;
  destroyAllCharts();
  showLogin();
}

// ── VISTAS ────────────────────────────────────────────────────
function showLogin() {
  showEl('view-login');
  hideEl('view-dashboard');
}

function showDashboard() {
  hideEl('view-login');
  showEl('view-dashboard');
}

// ── CARGA DE MÉTRICAS ─────────────────────────────────────────
async function loadMetrics() {
  hideEl('dashboard-content');
  hideEl('dashboard-error');
  showEl('dashboard-loading');

  const btn = document.getElementById('btn-refresh');
  if (btn) { btn.disabled = true; btn.textContent = '…'; }

  const { data, error } = await sb.rpc('get_pitch_metrics', {
    fecha_desde: state.filters.desde,
    fecha_hasta: state.filters.hasta,
    modo:        state.filters.modo
  });

  if (btn) { btn.disabled = false; btn.textContent = '↻ Actualizar'; }
  hideEl('dashboard-loading');

  if (error) {
    showDashboardError('Error al llamar get_pitch_metrics: ' + error.message);
    return;
  }
  if (data?.error) {
    showDashboardError('Acceso denegado: ' + data.error);
    return;
  }

  state.metrics     = data;
  state.lastUpdated = new Date();

  updateLastUpdated();
  destroyAllCharts();
  renderAll();

  showEl('dashboard-content');
}

function applyFilters() {
  state.filters.desde = document.getElementById('filter-desde').value;
  state.filters.hasta = document.getElementById('filter-hasta').value;
  state.filters.modo  = document.getElementById('filter-modo').value;
  loadMetrics();
}

// ── RENDER COMPLETO ───────────────────────────────────────────
function renderAll() {
  const m = state.metrics;
  if (!m) return;

  renderNorthStar(m.north_star);
  renderTiempoResolucion(m.tiempo_resolucion);
  renderTiempoPrimerCandidato(m.tiempo_primer_candidato);
  renderTasaResolucion(m.tasa_resolucion);
  renderLiquidez(m.liquidez);
  renderDecisionFactor(m.decision_factor);
  renderPrimerPostulante(m.primer_postulante_elegido);
  renderRetencion(m.retencion);
  renderFunnel(m);
  renderNoMedibles(m.no_medible);
}

// ── NORTH STAR ────────────────────────────────────────────────
function renderNorthStar(ns) {
  if (!ns) return;
  setText('ns-value',  ns.value ?? 0);
  setText('ns-n',      `n = ${ns.n ?? 0}`);
  checkLowData('card-north-star', ns.n);

  // Gráfico semanal
  const weekly = ns.weekly || [];
  const ctx    = document.getElementById('chart-weekly');
  if (!ctx) return;

  const labels = weekly.map(w => fmtWeekLabel(w.week));
  const values = weekly.map(w => w.count);

  if (values.length === 0) {
    ctx.parentElement.innerHTML = '<p style="color:var(--text-muted);font-size:13px;text-align:center;padding:20px">Sin datos para el período</p>';
    return;
  }

  state.charts['chart-weekly'] = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        label: 'Partidos completados',
        data:  values,
        backgroundColor: 'rgba(16,185,129,0.5)',
        borderColor:     '#10b981',
        borderWidth:     1.5,
        borderRadius:    4,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: { legend: { display: false }, tooltip: {
        callbacks: { title: (items) => `Semana del ${items[0].label}` }
      }},
      scales: {
        x: { ticks: { color: '#475569', font: { size: 11 } }, grid: { color: '#1e2d45' } },
        y: { ticks: { color: '#475569', font: { size: 11 }, stepSize: 1 }, grid: { color: '#1e2d45' }, beginAtZero: true }
      }
    }
  });
}

// ── TIEMPO DE RESOLUCIÓN ──────────────────────────────────────
function renderTiempoResolucion(d) {
  if (!d) return;
  const val = d.median_minutes != null ? fmtMinutes(d.median_minutes) : '—';
  setText('tres-value', val.value);
  setText('tres-n', `n = ${d.n ?? 0}`);
  // Actualizar unidad según duración
  const unitEl = document.querySelector('#card-tres .card-unit');
  if (unitEl && d.median_minutes != null) unitEl.textContent = val.unit;
  checkLowData('card-tres', d.n);
}

// ── TIEMPO PRIMER CANDIDATO ───────────────────────────────────
function renderTiempoPrimerCandidato(d) {
  if (!d) return;
  const val = d.median_minutes != null ? fmtMinutes(d.median_minutes) : { value: '—', unit: 'minutos' };
  setText('tpc-value', val.value);
  setText('tpc-n', `n = ${d.n ?? 0}`);
  const unitEl = document.querySelector('#card-tpc .card-unit');
  if (unitEl && d.median_minutes != null) unitEl.textContent = val.unit;
  checkLowData('card-tpc', d.n);
}

// ── TASA DE RESOLUCIÓN ────────────────────────────────────────
function renderTasaResolucion(d) {
  if (!d) return;
  const pct = d.total_publicados > 0
    ? Math.round((d.resueltos / d.total_publicados) * 100)
    : 0;
  setText('tasa-pct', pct + '%');
  setText('tasa-n', `n = ${d.n ?? 0}`);
  setHTML('tasa-breakdown', `
    <div class="tasa-item">
      <span class="tasa-item-label">Resueltos</span>
      <span class="tasa-item-value resolved">${d.resueltos}</span>
    </div>
    <div class="tasa-item">
      <span class="tasa-item-label">Abiertos</span>
      <span class="tasa-item-value open">${d.abiertos}</span>
    </div>
    <div class="tasa-item">
      <span class="tasa-item-label">Cancelados</span>
      <span class="tasa-item-value cancelled">${d.cancelados}</span>
    </div>
  `);
  checkLowData('card-tasa', d.n);
}

// ── LIQUIDEZ ──────────────────────────────────────────────────
function renderLiquidez(d) {
  if (!d) return;
  setText('liq-pct', (d.pct_con_postulacion ?? 0) + '%');
  setText('liq-n',   `n = ${d.n ?? 0}`);
  setText('liq-ppp', d.postulantes_por_partido ?? '—');
  checkLowData('card-liq', d.n);
}

// ── DECISION FACTOR ───────────────────────────────────────────
function renderDecisionFactor(d) {
  if (!d) return;
  setText('df-n', `n = ${d.n ?? 0}`);
  checkLowData('card-df', d.n);

  const dist = d.distribution || [];
  const ctx  = document.getElementById('chart-decision-factor');
  if (!ctx) return;

  if (dist.length === 0) {
    ctx.parentElement.innerHTML = '<p style="color:var(--text-muted);font-size:13px;text-align:center;padding:20px">Sin datos de decision_factor aún</p>';
    return;
  }

  const labels = dist.map(item => esc(item.factor));
  const values = dist.map(item => item.count);
  const total  = values.reduce((a, b) => a + b, 0);

  state.charts['chart-decision-factor'] = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        label: 'Veces elegido',
        data:  values,
        backgroundColor: [
          'rgba(99,102,241,0.7)',
          'rgba(16,185,129,0.7)',
          'rgba(245,158,11,0.7)',
          'rgba(239,68,68,0.7)',
          'rgba(56,189,248,0.7)',
          'rgba(168,85,247,0.7)',
          'rgba(251,146,60,0.7)',
        ].slice(0, values.length),
        borderRadius: 4,
        borderWidth: 0,
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (ctx) => {
              const pct = total > 0 ? Math.round((ctx.raw / total) * 100) : 0;
              return ` ${ctx.raw} (${pct}% del total)`;
            }
          }
        }
      },
      scales: {
        x: { ticks: { color: '#475569', font: { size: 11 } }, grid: { color: '#1e2d45' }, beginAtZero: true },
        y: { ticks: { color: '#94a3b8', font: { size: 12 } }, grid: { display: false } }
      }
    }
  });
}

// ── PRIMER POSTULANTE ELEGIDO ─────────────────────────────────
function renderPrimerPostulante(d) {
  if (!d) return;
  setText('ppe-pct', (d.pct ?? 0) + '%');
  setText('ppe-n',   `n = ${d.n ?? 0}`);
  checkLowData('card-ppe', d.n);
}

// ── RETENCIÓN ─────────────────────────────────────────────────
function renderRetencion(d) {
  if (!d) return;
  setText('ret-pct', (d.pct ?? 0) + '%');
  setText('ret-n',   `n = ${d.n ?? 0} organizadores`);
  checkLowData('card-ret', d.n);
}

// ── EMBUDO ────────────────────────────────────────────────────
function renderFunnel(m) {
  const container = document.getElementById('funnel-container');
  if (!container) return;

  const tasa = m.tasa_resolucion  || {};
  const liq  = m.liquidez         || {};

  // Pasos disponibles
  const totalApps = liq.n_partidos > 0
    ? Math.round((liq.pct_con_postulacion / 100) * liq.n_partidos * (liq.postulantes_por_partido || 0))
    : 0;

  const steps = [
    { label: 'Partidos\npublicados',        count: tasa.total_publicados ?? 0, available: true },
    { label: 'Con al menos\n1 postulación',  count: tasa.total_publicados > 0 ? Math.round((liq.pct_con_postulacion/100)*(liq.n_partidos||0)) : 0, available: true },
    { label: 'Candidato\nelegido',           count: tasa.resueltos ?? 0, available: true },
    { label: 'Partido\nresuelto',            count: tasa.resueltos ?? 0, available: true },
    { label: 'Click\nWhatsApp',              count: null, available: false, nota: 'pendiente' },
    { label: 'Show-up\nconfirmado',          count: null, available: false, nota: 'pendiente' },
  ];

  const maxCount = Math.max(...steps.filter(s => s.available && s.count != null).map(s => s.count), 1);

  container.innerHTML = steps.map((step, i) => {
    const prev  = i > 0 && steps[i-1].available && steps[i-1].count > 0 ? steps[i-1].count : null;
    const pct   = (step.available && prev && step.count != null && prev > 0)
      ? Math.round((step.count / prev) * 100)
      : null;
    const barH  = step.available && step.count != null
      ? Math.max(8, Math.round((step.count / maxCount) * 72))
      : 20;

    return `
      <div class="funnel-step">
        <div class="funnel-bar-wrap">
          <div class="funnel-bar ${step.available ? 'active' : 'unavailable'}"
               style="height:${barH}px"></div>
        </div>
        <div class="funnel-count ${step.available ? '' : 'unavailable'}">
          ${step.available && step.count != null ? step.count : '—'}
        </div>
        ${pct !== null ? `<div class="funnel-pct">${pct}%</div>` : '<div style="height:16px"></div>'}
        <div class="funnel-step-label">${step.label.replace(/\n/g, '<br>')}</div>
        ${!step.available ? `<div class="funnel-na-badge">no medible</div>` : ''}
      </div>
    `;
  }).join('');
}

// ── NO MEDIBLES ───────────────────────────────────────────────
function renderNoMedibles(items) {
  const grid = document.getElementById('no-medible-grid');
  if (!grid || !items) return;

  grid.innerHTML = items.map(item => `
    <div class="card-no-medible">
      <div class="nm-label">${esc(item.label)}</div>
      <div class="nm-badge">No medible aún</div>
      <div class="nm-note">${esc(item.nota)}</div>
    </div>
  `).join('');
}

// ── EXPORTAR CSV ──────────────────────────────────────────────
function exportCSV() {
  const m = state.metrics;
  if (!m) { alert('Primero cargá los datos.'); return; }

  const rows = [
    ['métrica', 'valor', 'n', 'unidad', 'fecha_desde', 'fecha_hasta', 'modo'],
    ['north_star_completados', m.north_star?.value, m.north_star?.n, 'partidos', state.filters.desde, state.filters.hasta, state.filters.modo],
    ['tiempo_resolucion_mediana', m.tiempo_resolucion?.median_minutes, m.tiempo_resolucion?.n, 'minutos', state.filters.desde, state.filters.hasta, state.filters.modo],
    ['tiempo_primer_candidato_mediana', m.tiempo_primer_candidato?.median_minutes, m.tiempo_primer_candidato?.n, 'minutos', state.filters.desde, state.filters.hasta, state.filters.modo],
    ['tasa_resolucion_resueltos', m.tasa_resolucion?.resueltos, m.tasa_resolucion?.n, 'partidos', state.filters.desde, state.filters.hasta, state.filters.modo],
    ['tasa_resolucion_abiertos', m.tasa_resolucion?.abiertos, m.tasa_resolucion?.n, 'partidos', state.filters.desde, state.filters.hasta, state.filters.modo],
    ['tasa_resolucion_cancelados', m.tasa_resolucion?.cancelados, m.tasa_resolucion?.n, 'partidos', state.filters.desde, state.filters.hasta, state.filters.modo],
    ['liquidez_pct_con_postulacion', m.liquidez?.pct_con_postulacion, m.liquidez?.n, '%', state.filters.desde, state.filters.hasta, state.filters.modo],
    ['liquidez_postulantes_por_partido', m.liquidez?.postulantes_por_partido, m.liquidez?.n, 'postulantes', state.filters.desde, state.filters.hasta, state.filters.modo],
    ['primer_postulante_elegido_pct', m.primer_postulante_elegido?.pct, m.primer_postulante_elegido?.n, '%', state.filters.desde, state.filters.hasta, state.filters.modo],
    ['retencion_pct_14d', m.retencion?.pct, m.retencion?.n, '%', state.filters.desde, state.filters.hasta, state.filters.modo],
  ];

  // Decision factor: una fila por opción
  if (m.decision_factor?.distribution) {
    m.decision_factor.distribution.forEach(item => {
      rows.push([
        `decision_factor_${item.factor}`,
        item.count,
        m.decision_factor.n,
        'veces',
        state.filters.desde,
        state.filters.hasta,
        state.filters.modo
      ]);
    });
  }

  const csv = rows.map(r => r.map(csvCell).join(',')).join('\n');
  downloadText(csv, `ajugar_metricas_${state.filters.desde}_${state.filters.hasta}.csv`, 'text/csv');
}

// ── CONGELAR SNAPSHOT ─────────────────────────────────────────
function freezeSnapshot() {
  const m = state.metrics;
  if (!m) { alert('Primero cargá los datos.'); return; }

  const timestamp   = fmtTimestamp(state.lastUpdated || new Date());
  const safeTs      = timestamp.replace(/[: ]/g, '-');

  const snapshotData = {
    generated_at:        timestamp,
    definitions_version: METRICS_VERSION,
    filters: {
      fecha_desde: state.filters.desde,
      fecha_hasta: state.filters.hasta,
      modo:        state.filters.modo,
    },
    data: m
  };

  // JSON
  downloadText(
    JSON.stringify(snapshotData, null, 2),
    `ajugar_snapshot_${safeTs}.json`,
    'application/json'
  );

  // CSV (mismo que exportCSV pero con timestamp y versión extra)
  exportCSV();  // reutiliza la función existente
}

// ── HELPERS DOM ───────────────────────────────────────────────
function showEl(id)    { const el = document.getElementById(id); if (el) el.style.display = ''; }
function hideEl(id)    { const el = document.getElementById(id); if (el) el.style.display = 'none'; }
function setText(id, v){ const el = document.getElementById(id); if (el) el.textContent = v ?? '—'; }
function setHTML(id, v){ const el = document.getElementById(id); if (el) el.innerHTML = v; }
function setInputVal(id, v){ const el = document.getElementById(id); if (el) el.value = v; }

function showLoginError(msg) {
  const el = document.getElementById('login-error');
  if (el) { el.textContent = msg; el.style.display = ''; }
}

function showDashboardError(msg) {
  hideEl('dashboard-loading');
  hideEl('dashboard-content');
  const el = document.getElementById('dashboard-error-msg');
  if (el) el.textContent = msg;
  showEl('dashboard-error');
}

function updateLastUpdated() {
  const el = document.getElementById('last-updated');
  if (el && state.lastUpdated) {
    el.textContent = state.lastUpdated.toLocaleTimeString('es-AR', {
      hour: '2-digit', minute: '2-digit', second: '2-digit'
    });
  }
}

function checkLowData(cardId, n) {
  const card = document.getElementById(cardId);
  if (!card || n == null) return;

  // Eliminar badge anterior si existe
  card.querySelectorAll('.badge-low-data').forEach(b => b.remove());

  if (n < 5 && n >= 0) {
    const badge = document.createElement('div');
    badge.className   = 'badge-low-data';
    badge.textContent = `⚠ Datos insuficientes (n = ${n})`;
    card.appendChild(badge);
  }
}

function destroyAllCharts() {
  Object.values(state.charts).forEach(chart => {
    try { chart.destroy(); } catch(e) {}
  });
  state.charts = {};
}

// ── HELPERS FORMATO ───────────────────────────────────────────
function dateStr(offsetDays) {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  return d.toISOString().split('T')[0];
}

function fmtMinutes(mins) {
  if (mins == null) return { value: '—', unit: 'min' };
  if (mins >= 60) {
    const h = (mins / 60).toFixed(1);
    return { value: h, unit: 'horas' };
  }
  return { value: Math.round(mins), unit: 'min' };
}

function fmtWeekLabel(dateStr) {
  if (!dateStr) return '';
  const [y, m, d] = dateStr.split('-');
  return `${d}/${m}`;
}

function fmtTimestamp(date) {
  return date.toLocaleString('es-AR', {
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit'
  });
}

function esc(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function csvCell(val) {
  if (val === null || val === undefined) return '';
  const s = String(val);
  if (s.includes(',') || s.includes('"') || s.includes('\n')) {
    return '"' + s.replace(/"/g, '""') + '"';
  }
  return s;
}

function downloadText(content, filename, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = filename;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

// ── Exponer al HTML ────────────────────────────────────────────
window.handleLogin   = handleLogin;
window.handleLogout  = handleLogout;
window.applyFilters  = applyFilters;
window.loadMetrics   = loadMetrics;
window.exportCSV     = exportCSV;
window.freezeSnapshot = freezeSnapshot;
