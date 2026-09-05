/* =====================================================
   PadelMatch MVP — experimento.js
   Flujo: ver partidos → ver detalle → postularse → aceptar
   ===================================================== */

// ── DATA ─────────────────────────────────────────────

const currentUser = {
  id: 1,
  nombre: "Matias",
  zona: "Palermo, CABA",
  nivel: "Avanzado",
  asistencia: 94,
  partidos: 32,
  calificaciones: [
    { label: "Estilo de juego", stars: 5 },
    { label: "Puntualidad",     stars: 5 },
    { label: "Fair play",       stars: 4 }
  ],
  historial: [
    { lugar: "Club Nautico", fecha: "28 ago", asistio: true },
    { lugar: "Palermo Paddle", fecha: "21 ago", asistio: true },
    { lugar: "Cenard", fecha: "14 ago", asistio: true },
    { lugar: "Club Atletico", fecha: "07 ago", asistio: false },
    { lugar: "Club Nautico", fecha: "31 jul", asistio: true }
  ]
};

const jugadores = [
  { id: 2, nombre: "Valentina",  inicial: "V", color: "#7c4dff", zona: "Nunez, CABA",   nivel: "Intermedio", asistencia: 88, partidos: 17,
    calificaciones: [{ label: "Estilo de juego", stars: 4 }, { label: "Puntualidad", stars: 4 }, { label: "Fair play", stars: 5 }],
    historial: [{ lugar: "River Paddle", fecha: "30 ago", asistio: true }, { lugar: "Club Atletico", fecha: "22 ago", asistio: true }, { lugar: "Cenard", fecha: "15 ago", asistio: false }]
  },
  { id: 3, nombre: "Rodrigo",    inicial: "R", color: "#ff6d00", zona: "Belgrano, CABA", nivel: "Avanzado",  asistencia: 97, partidos: 48,
    calificaciones: [{ label: "Estilo de juego", stars: 5 }, { label: "Puntualidad", stars: 5 }, { label: "Fair play", stars: 5 }],
    historial: [{ lugar: "Belgrano Paddle", fecha: "29 ago", asistio: true }, { lugar: "Club Nautico", fecha: "22 ago", asistio: true }]
  },
  { id: 4, nombre: "Camila",     inicial: "C", color: "#ff5252", zona: "San Isidro, GBA", nivel: "Principiante", asistencia: 75, partidos: 9,
    calificaciones: [{ label: "Estilo de juego", stars: 3 }, { label: "Puntualidad", stars: 3 }, { label: "Fair play", stars: 4 }],
    historial: [{ lugar: "San Isidro Club", fecha: "27 ago", asistio: true }, { lugar: "Club Norte", fecha: "18 ago", asistio: false }]
  },
  { id: 5, nombre: "Ignacio",    inicial: "I", color: "#00b8d4", zona: "Villa Urquiza, CABA", nivel: "Intermedio", asistencia: 91, partidos: 23,
    calificaciones: [{ label: "Estilo de juego", stars: 4 }, { label: "Puntualidad", stars: 5 }, { label: "Fair play", stars: 4 }],
    historial: [{ lugar: "Urquiza Paddle", fecha: "28 ago", asistio: true }, { lugar: "Cenard", fecha: "20 ago", asistio: true }]
  },
  { id: 6, nombre: "Fernanda",   inicial: "F", color: "#f06292", zona: "Palermo, CABA", nivel: "Avanzado", asistencia: 100, partidos: 61,
    calificaciones: [{ label: "Estilo de juego", stars: 5 }, { label: "Puntualidad", stars: 5 }, { label: "Fair play", stars: 5 }],
    historial: [{ lugar: "Palermo Paddle", fecha: "01 sep", asistio: true }, { lugar: "Club Nautico", fecha: "24 ago", asistio: true }]
  }
];

let partidos = [
  {
    id: 1, organizadorId: 3, lugar: "Belgrano Paddle", fecha: "2026-09-07", hora: "10:00",
    nivel: "Avanzado", estado: "busca",
    desc: "Somos 3 amigos del club, jugamos todos los domingos. Buscamos 4to de nivel similar para completar. Sesion de 90 minutos.",
    jugadoresIds: [3, 2], maxJugadores: 4,
    postulaciones: [{ jugadorId: 5, aceptado: false }, { jugadorId: 4, aceptado: false }]
  },
  {
    id: 2, organizadorId: 6, lugar: "Club Nautico", fecha: "2026-09-08", hora: "19:30",
    nivel: "Avanzado", estado: "busca",
    desc: "Dobles femenino, buscamos una cuarta. Somos regulares del club los lunes a la tarde.",
    jugadoresIds: [6, 2, 5], maxJugadores: 4,
    postulaciones: []
  },
  {
    id: 3, organizadorId: 5, lugar: "Urquiza Paddle", fecha: "2026-09-10", hora: "08:00",
    nivel: "Intermedio", estado: "completo",
    desc: "Partido ya completo. Cuatro amigos de siempre.",
    jugadoresIds: [5, 4, 2, 3], maxJugadores: 4,
    postulaciones: []
  },
  {
    id: 4, organizadorId: 4, lugar: "Palermo Paddle", fecha: "2026-09-11", hora: "12:00",
    nivel: "Cualquier nivel", estado: "busca",
    desc: "Primer partido organizado, somos principiantes. Venimos a divertirnos y aprender. Bienvenidos todos los niveles.",
    jugadoresIds: [4], maxJugadores: 4,
    postulaciones: []
  }
];

// ── STATE ──────────────────────────────────────────────
let currentView = "partidos";
let prevView = "partidos";
let currentPartidoId = null;
let activeFilter = "all";

// ── INIT ──────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  renderProfile();
  renderPartidos();
});

// ── NAVIGATION ────────────────────────────────────────
function showView(viewName) {
  prevView = currentView;
  currentView = viewName;

  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  document.getElementById("view-" + viewName).classList.add("active");

  document.querySelectorAll(".nav-tab").forEach(t => t.classList.remove("active"));
  const tabMap = { partidos: "tab-partidos", perfil: "tab-perfil", publicar: "tab-publicar", postulaciones: null, detalle: null };
  if (tabMap[viewName]) document.getElementById(tabMap[viewName]).classList.add("active");
}

function goBack() {
  showView(prevView === "detalle" ? "partidos" : prevView);
}

// ── PARTIDOS ──────────────────────────────────────────
function renderPartidos() {
  const grid = document.getElementById("partidos-grid");
  const filtered = activeFilter === "all" ? partidos
    : partidos.filter(p => activeFilter === "busca" ? p.estado === "busca" : p.estado === "completo");

  if (filtered.length === 0) {
    grid.innerHTML = '<div class="empty-state"><div class="empty-icon">&#127934;</div><p class="empty-msg">No hay partidos en esta categoria</p><p class="empty-sub">Intenta con otro filtro o publica tu propio partido</p></div>';
    return;
  }

  grid.innerHTML = filtered.map(p => buildPartidoCard(p)).join("");
}

function buildPartidoCard(p) {
  const org = getJugador(p.organizadorId);
  const isBusca = p.estado === "busca";
  const disponibles = p.maxJugadores - p.jugadoresIds.length;
  const yaMePostule = p.postulaciones.some(x => x.jugadorId === currentUser.id);
  const isOrganizador = p.organizadorId === currentUser.id;

  const avatares = p.jugadoresIds.slice(0, 3).map(jid => {
    const j = getJugador(jid);
    return '<div class="avatar-sm" style="background:' + (j.color || "var(--accent)") + '">' + j.inicial + '</div>';
  }).join("");

  const vacios = Array.from({length: Math.min(disponibles, 2)}, () =>
    '<div class="avatar-sm empty">?</div>'
  ).join("");

  let ctaBtn = "";
  if (isBusca && !isOrganizador) {
    if (yaMePostule) {
      ctaBtn = '<button class="btn-postular" disabled>&#10003; Postulado</button>';
    } else {
      ctaBtn = '<button class="btn-postular" onclick="event.stopPropagation(); postularse(' + p.id + ')">Postularme</button>';
    }
  } else if (isOrganizador && p.postulaciones.length > 0) {
    ctaBtn = '<button class="btn-postular" onclick="event.stopPropagation(); verPostulaciones(' + p.id + ')">Ver ' + p.postulaciones.length + ' postulaciones</button>';
  }

  const nivelClass = getNivelClass(p.nivel);
  const fechaStr = formatFecha(p.fecha);

  return '<div class="partido-card ' + (isBusca ? "" : "completo") + '" onclick="verDetalle(' + p.id + ')">' +
    '<div class="card-top">' +
    '<div><div class="card-lugar">' + p.lugar + '</div><div class="card-fecha">' + fechaStr + ' — ' + p.hora + 'hs</div></div>' +
    '<span class="status-badge ' + (isBusca ? "status-busca" : "status-completo") + '">' + (isBusca ? "Buscan jugador" : "Completo") + '</span>' +
    '</div>' +
    '<div class="card-nivel"><span class="badge-nivel ' + nivelClass + '">' + p.nivel + '</span>' +
    (isBusca && disponibles > 0 ? '<span style="font-size:12px;color:var(--text-muted)">Falta' + (disponibles > 1 ? "n " : " ") + disponibles + ' jugador' + (disponibles > 1 ? "es" : "") + '</span>' : '') +
    '</div>' +
    '<div class="card-jugadores"><div class="avatares">' + avatares + vacios + '</div></div>' +
    (p.desc ? '<div class="card-desc">' + p.desc + '</div>' : '') +
    '<div class="card-footer">' +
    '<div class="card-organizador"><div class="avatar-sm" style="width:22px;height:22px;font-size:10px;background:' + (org.color || "var(--accent)") + '">' + org.inicial + '</div>' + org.nombre + '</div>' +
    ctaBtn +
    '</div>' +
    '</div>';
}

function filterPartidos(type) {
  activeFilter = type;
  document.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
  document.getElementById("chip-" + type).classList.add("active");
  renderPartidos();
}

// ── DETALLE PARTIDO ────────────────────────────────────
function verDetalle(id) {
  currentPartidoId = id;
  const p = partidos.find(x => x.id === id);
  const org = getJugador(p.organizadorId);
  const isBusca = p.estado === "busca";
  const disponibles = p.maxJugadores - p.jugadoresIds.length;
  const isOrganizador = p.organizadorId === currentUser.id;
  const yaMePostule = p.postulaciones.some(x => x.jugadorId === currentUser.id);

  let jugadoresHTML = p.jugadoresIds.map(jid => {
    const j = getJugador(jid);
    const isMe = jid === currentUser.id;
    return '<div class="jugador-row" onclick="verPerfilModal(' + jid + ')">' +
      '<div class="avatar-sm" style="background:' + (j.color || "var(--accent)") + '">' + j.inicial + '</div>' +
      '<div class="jugador-info"><div class="jugador-nombre">' + j.nombre + (isMe ? " (vos)" : "") + '</div><div class="jugador-stats">' + j.zona + ' · ' + j.asistencia + '% asistencia · ' + j.partidos + ' partidos</div></div>' +
      '<span class="badge-nivel ' + getNivelClass(j.nivel) + '">' + j.nivel + '</span>' +
      '<button class="btn-ver-perfil">Ver perfil</button>' +
      '</div>';
  }).join("");

  for (let i = 0; i < disponibles; i++) {
    jugadoresHTML += '<div class="jugador-row slot-vacio">' +
      '<div class="avatar-sm empty">?</div>' +
      '<div class="jugador-info"><div class="jugador-nombre" style="color:var(--text-muted)">Lugar disponible</div></div>' +
      '<span class="badge-buscando">Buscando</span>' +
      '</div>';
  }

  let ctaHTML = "";
  if (isBusca && !isOrganizador) {
    if (yaMePostule) {
      ctaHTML = '<div class="aceptado-banner">&#10003; Ya te postulaste — el organizador revisara tu perfil</div>';
    } else {
      ctaHTML = '<button class="btn-primary" onclick="postularse(' + p.id + ')">Postularme a este partido</button>';
    }
  }
  if (isOrganizador && p.postulaciones.length > 0) {
    ctaHTML += '<button class="btn-secondary" onclick="verPostulaciones(' + p.id + ')">Revisar ' + p.postulaciones.length + ' postulaciones</button>';
  }

  document.getElementById("detalle-content").innerHTML =
    '<div class="detalle-card">' +
    '<div class="detalle-header">' +
    '<div><div class="detalle-lugar">' + p.lugar + '</div><div class="detalle-fecha">' + formatFecha(p.fecha) + ' a las ' + p.hora + 'hs</div></div>' +
    '<span class="status-badge ' + (isBusca ? "status-busca" : "status-completo") + '">' + (isBusca ? "Buscan jugador" : "Completo") + '</span>' +
    '</div>' +
    '<div class="detalle-meta">' +
    '<span class="meta-chip">&#127919; ' + p.nivel + '</span>' +
    '<span class="meta-chip">&#128101; ' + p.jugadoresIds.length + '/' + p.maxJugadores + ' jugadores</span>' +
    '<span class="meta-chip">&#128205; ' + p.lugar + '</span>' +
    '</div>' +
    (p.desc ? '<div class="detalle-desc">' + p.desc + '</div>' : '') +
    '<div class="detalle-jugadores-title">Jugadores del partido</div>' +
    '<div class="jugadores-list">' + jugadoresHTML + '</div>' +
    '<div class="detalle-cta">' + ctaHTML +
    '<button class="btn-whatsapp" onclick="compartirWhatsApp(' + p.id + ')">&#128172; Compartir por WhatsApp</button>' +
    '</div>' +
    '</div>';

  showView("detalle");
}

// ── POSTULARSE ─────────────────────────────────────────
function postularse(partidoId) {
  const p = partidos.find(x => x.id === partidoId);
  if (!p || p.estado !== "busca") return;
  const yaPostulado = p.postulaciones.some(x => x.jugadorId === currentUser.id);
  if (yaPostulado) { showToast("Ya te postulaste a este partido"); return; }

  p.postulaciones.push({ jugadorId: currentUser.id, aceptado: false });
  showToast("&#10003; Postulacion enviada — el organizador revisara tu perfil");

  renderPartidos();
  if (currentView === "detalle" && currentPartidoId === partidoId) {
    verDetalle(partidoId);
  }
}

// ── VER POSTULACIONES (organizador) ────────────────────
function verPostulaciones(partidoId) {
  currentPartidoId = partidoId;
  const p = partidos.find(x => x.id === partidoId);

  if (p.postulaciones.length === 0) {
    document.getElementById("postulaciones-list").innerHTML =
      '<div class="empty-state"><div class="empty-icon">&#128234;</div><p class="empty-msg">Sin postulaciones aun</p><p class="empty-sub">Cuando alguien se postule, aparecera aqui</p></div>';
    showView("postulaciones");
    return;
  }

  document.getElementById("postulaciones-list").innerHTML = p.postulaciones.map(post => {
    const j = getJugador(post.jugadorId);
    return '<div class="postulacion-card" id="post-' + post.jugadorId + '">' +
      '<div class="avatar-sm" style="width:44px;height:44px;font-size:18px;background:' + (j.color || "var(--accent)") + '">' + j.inicial + '</div>' +
      '<div class="postulacion-info">' +
      '<div class="postulacion-nombre">' + j.nombre + '</div>' +
      '<div class="postulacion-meta">' + j.nivel + ' · ' + j.asistencia + '% asistencia · ' + j.partidos + ' partidos</div>' +
      '</div>' +
      '<div class="postulacion-actions">' +
      (post.aceptado
        ? '<div class="aceptado-banner">&#10003; Aceptado</div>'
        : '<button class="btn-ver-perfil" onclick="verPerfilModal(' + j.id + ')">Ver perfil</button>' +
          '<button class="btn-primary" style="font-size:13px;padding:8px 16px;" onclick="aceptarJugador(' + partidoId + ',' + j.id + ')">Aceptar</button>' +
          '<button class="btn-danger" onclick="rechazarJugador(' + partidoId + ',' + j.id + ')">Rechazar</button>'
      ) +
      '</div>' +
      '</div>';
  }).join("");

  showView("postulaciones");
}

function aceptarJugador(partidoId, jugadorId) {
  const p = partidos.find(x => x.id === partidoId);
  const post = p.postulaciones.find(x => x.jugadorId === jugadorId);
  if (!post) return;

  post.aceptado = true;
  if (!p.jugadoresIds.includes(jugadorId)) p.jugadoresIds.push(jugadorId);
  if (p.jugadoresIds.length >= p.maxJugadores) p.estado = "completo";

  showToast("&#10003; Jugador aceptado. Ya pueden coordinar por WhatsApp");
  verPostulaciones(partidoId);
  renderPartidos();
}

function rechazarJugador(partidoId, jugadorId) {
  const p = partidos.find(x => x.id === partidoId);
  p.postulaciones = p.postulaciones.filter(x => x.jugadorId !== jugadorId);
  showToast("Postulacion rechazada");
  verPostulaciones(partidoId);
}

// ── PERFIL MODAL ───────────────────────────────────────
function verPerfilModal(jugadorId) {
  const j = getJugador(jugadorId);
  const calHTML = j.calificaciones.map(c =>
    '<div class="modal-cal-row"><span style="flex:1">' + c.label + '</span><span class="stars">' + "&#9733;".repeat(c.stars) + "&#9734;".repeat(5 - c.stars) + '</span></div>'
  ).join("");

  document.getElementById("modal-card").innerHTML =
    '<div class="modal-header">' +
    '<div class="avatar-lg" style="background:linear-gradient(135deg,' + (j.color || "var(--accent)") + ',#000)">' + j.inicial + '</div>' +
    '<div><div class="modal-nombre">' + j.nombre + '</div><div class="modal-zona">&#128205; ' + j.zona + '</div>' +
    '<div style="margin-top:6px"><span class="badge-nivel ' + getNivelClass(j.nivel) + '">' + j.nivel + '</span></div>' +
    '</div></div>' +
    '<div class="modal-stat-row">' +
    '<div class="modal-stat"><div class="modal-stat-val">' + j.asistencia + '%</div><div class="modal-stat-lbl">Asistencia</div></div>' +
    '<div class="modal-stat"><div class="modal-stat-val">' + j.partidos + '</div><div class="modal-stat-lbl">Partidos</div></div>' +
    '<div class="modal-stat"><div class="modal-stat-val">&#9733; ' + (j.calificaciones.reduce((a,c) => a + c.stars, 0) / j.calificaciones.length).toFixed(1) + '</div><div class="modal-stat-lbl">Rating</div></div>' +
    '</div>' +
    '<div class="modal-video">&#127916; Video de nivel (disponible en la app completa)</div>' +
    '<div class="modal-cal">' +
    '<div class="profile-section-title" style="margin-bottom:8px">Calificaciones por pares</div>' +
    calHTML + '</div>' +
    '<div class="modal-footer">' +
    '<button class="btn-primary" style="flex:1" onclick="closeModal()">Cerrar</button>' +
    '</div>';

  document.getElementById("modal-overlay").classList.add("active");
}

function closeModal() {
  document.getElementById("modal-overlay").classList.remove("active");
}

// ── PUBLICAR PARTIDO ───────────────────────────────────
function publicarPartido(e) {
  e.preventDefault();
  const lugar = document.getElementById("p-lugar").value.trim();
  const fecha = document.getElementById("p-fecha").value;
  const hora = document.getElementById("p-hora").value;
  const nivel = document.getElementById("p-nivel").value;
  const desc = document.getElementById("p-desc").value.trim();

  const nuevo = {
    id: partidos.length + 1,
    organizadorId: currentUser.id,
    lugar, fecha, hora, nivel, estado: "busca",
    desc: desc || null,
    jugadoresIds: [currentUser.id, 2, 3],
    maxJugadores: 4,
    postulaciones: []
  };

  partidos.unshift(nuevo);
  renderPartidos();
  document.getElementById("publish-form").reset();
  showToast("&#127914; Partido publicado. Otras personas ya pueden postularse");
  showView("partidos");
}

// ── PERFIL PROPIO ──────────────────────────────────────
function renderProfile() {
  const u = currentUser;
  const calHTML = u.calificaciones.map(c =>
    '<div class="calificacion-row"><span class="calificacion-label">' + c.label + '</span><span class="stars">' + "&#9733;".repeat(c.stars) + "&#9734;".repeat(5 - c.stars) + '</span></div>'
  ).join("");

  const histHTML = u.historial.map(h =>
    '<div class="historial-row"><span class="historial-lugar">' + h.lugar + '</span><span class="historial-fecha">' + h.fecha + '</span><span class="' + (h.asistio ? "historial-asistio" : "historial-no") + '">' + (h.asistio ? "Asistio" : "No asistio") + '</span></div>'
  ).join("");

  document.getElementById("profile-main").innerHTML =
    '<div class="profile-top">' +
    '<div class="avatar-lg">' + u.nombre[0] + '</div>' +
    '<div class="profile-info">' +
    '<div class="profile-nombre">' + u.nombre + '</div>' +
    '<div class="profile-zona">&#128205; ' + u.zona + '</div>' +
    '<div class="profile-badges">' +
    '<span class="badge-nivel ' + getNivelClass(u.nivel) + '">' + u.nivel + '</span>' +
    '<span style="font-size:11px;color:var(--text-muted);padding:2px 8px;background:var(--bg-surface);border-radius:99px;border:1px solid var(--border)">&#9989; Verificado</span>' +
    '</div></div></div>' +
    '<div class="profile-stats">' +
    '<div class="stat-box"><div class="stat-value">' + u.asistencia + '%</div><div class="stat-label">Tasa de asistencia</div></div>' +
    '<div class="stat-box"><div class="stat-value">' + u.partidos + '</div><div class="stat-label">Partidos jugados</div></div>' +
    '<div class="stat-box"><div class="stat-value">&#9733; ' + (u.calificaciones.reduce((a,c) => a + c.stars, 0) / u.calificaciones.length).toFixed(1) + '</div><div class="stat-label">Rating promedio</div></div>' +
    '</div>' +
    '<div class="profile-section-title">Video de nivel</div>' +
    '<div class="profile-video-placeholder" onclick="showToast(\'Funcion disponible en la app completa\')"><div class="video-icon">&#127916;</div><span>Subir video de nivel</span><span style="font-size:11px">Max 60 seg · ayuda a generar confianza</span></div>' +
    '<div class="profile-section-title">Calificaciones por pares</div>' +
    '<div class="calificaciones">' + calHTML + '</div>' +
    '<div class="profile-section-title">Historial de partidos</div>' +
    '<div class="historial">' + histHTML + '</div>';
}

// ── WHATSAPP ───────────────────────────────────────────
function compartirWhatsApp(partidoId) {
  const p = partidos.find(x => x.id === partidoId);
  const msg = encodeURIComponent("&#127934; Partido en " + p.lugar + " el " + formatFecha(p.fecha) + " a las " + p.hora + "hs. Nivel: " + p.nivel + ". Un lugar disponible. Postulate en PadelMatch!");
  window.open("https://api.whatsapp.com/send?text=" + msg, "_blank");
}

// ── HELPERS ────────────────────────────────────────────
function getJugador(id) {
  if (id === currentUser.id) return { ...currentUser, inicial: currentUser.nombre[0], color: null };
  return jugadores.find(j => j.id === id) || { id, nombre: "Desconocido", inicial: "?", color: "var(--border)", zona: "", nivel: "", asistencia: 0, partidos: 0, calificaciones: [], historial: [] };
}

function getNivelClass(nivel) {
  const map = { "Principiante": "nivel-principiante", "Intermedio": "nivel-intermedio", "Avanzado": "nivel-avanzado", "Cualquier nivel": "nivel-cualquiera" };
  return map[nivel] || "nivel-cualquiera";
}

function formatFecha(str) {
  if (!str) return "";
  const d = new Date(str + "T00:00:00");
  return d.toLocaleDateString("es-AR", { weekday: "short", day: "numeric", month: "short" });
}

function showToast(msg) {
  const t = document.getElementById("toast");
  t.innerHTML = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 3200);
}
