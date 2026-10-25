/* =====================================================
   A Jugar MVP — pro-prueba.js
   PRUEBA "PUERTA FALSA" de A Jugar Pro (Clase 9)

   Qué hace: muestra una pantalla "A Jugar Pro" con precio y
   beneficios y un botón "Quiero Pro". NO cobra ni procesa pagos.
   Al hacer clic se aclara que Pro todavía no existe y se ofrece
   dejar el WhatsApp para avisar.

   Qué mide (tabla pro_interest): vistas, clics y contactos.
   Un clic es intención, NO pago efectivo.

   ESTADO: APAGADA. Primero se hace la Prueba B (entrevistas).
   Para activarla: PRO_PRUEBA_ENABLED = true y ejecutar
   sql/07_pro_interest.sql en Supabase.
   Vista previa sin registrar eventos: abrir index.html?pro_demo=1
   ===================================================== */

const PRO_PRUEBA_ENABLED = false;
const PRO_PRICE_ARS = 5000; // estimación; ver docs/economia-del-producto.md

const PRO_PREVIEW = new URLSearchParams(window.location.search).get('pro_demo') === '1';

const PRO_BENEFITS = [
  { icon: '🔔', title: 'Alertas por zona y nivel', text: 'Enterate apenas se publica un partido que te sirve.' },
  { icon: '✅', title: 'Perfil verificado e historial de asistencia', text: 'Mostrá que sos un jugador que se presenta.' },
  { icon: '📅', title: 'Reserva con 72 h de anticipación', text: 'Próximamente, en clubes adheridos. Sin Pro: hasta 24 h.' },
  { icon: '🏷️', title: 'Descuentos en tiendas de pádel', text: 'Próximamente: bebidas, alquiler de paletas y más.' },
];

document.addEventListener('DOMContentLoaded', () => {
  if (!PRO_PRUEBA_ENABLED && !PRO_PREVIEW) return;
  proInjectTab();
  proInjectView();
});

function proInjectTab() {
  const tabs = document.querySelector('.nav-tabs');
  if (!tabs || document.getElementById('tab-pro')) return;
  const btn = document.createElement('button');
  btn.className = 'nav-tab nav-tab-pro';
  btn.id = 'tab-pro';
  btn.textContent = '⭐ Pro';
  btn.onclick = proOpen;
  tabs.appendChild(btn);
}

function proInjectView() {
  const main = document.getElementById('main-content');
  if (!main || document.getElementById('view-pro')) return;
  const section = document.createElement('section');
  section.className = 'view';
  section.id = 'view-pro';
  section.style.display = 'none';
  section.innerHTML =
    '<div class="pro-wrap">' +
      '<div class="pro-hero">' +
        '<span class="pro-pill">A JUGAR PRO</span>' +
        '<h1 class="pro-title">Encontrá reemplazo antes que nadie</h1>' +
        '<p class="pro-sub">Publicar y postularte sigue siendo gratis. Pro suma ventajas para jugar más y mejor.</p>' +
        '<div class="pro-price"><span class="pro-price-amount">$' + PRO_PRICE_ARS.toLocaleString('es-AR') + '</span><span class="pro-price-period"> / mes</span></div>' +
      '</div>' +
      '<div class="pro-benefits">' +
        PRO_BENEFITS.map(b =>
          '<div class="pro-benefit"><div class="pro-benefit-icon">' + b.icon + '</div>' +
          '<div><div class="pro-benefit-title">' + b.title + '</div>' +
          '<div class="pro-benefit-text">' + b.text + '</div></div></div>'
        ).join('') +
      '</div>' +
      '<button class="btn-primary btn-full pro-cta" id="btn-pro-cta" onclick="proClickCta()">Quiero Pro</button>' +
      '<p class="pro-note">Todavía no se cobra nada.</p>' +
    '</div>';
  main.appendChild(section);
}

function proOpen() {
  navTo('pro');
  document.getElementById('tab-pro')?.classList.add('active');
  proTrack('view');
}

async function proClickCta() {
  await proTrack('click_cta');
  const phone = (typeof state !== 'undefined' && state.profile?.phone) || '';
  const card = document.getElementById('modal-card');
  card.innerHTML =
    '<h2 class="confirm-title">Pro todavía no está disponible</h2>' +
    '<p class="confirm-sub">Estamos probando si te interesa. No se te cobró nada. ' +
    'Si querés, dejanos tu WhatsApp y te avisamos cuando esté listo.</p>' +
    '<div class="form-group"><label class="form-label" for="pro-contact">WhatsApp (opcional)</label>' +
    '<input class="form-input" id="pro-contact" type="tel" value="' + proEsc(phone) + '" placeholder="Ej: 5491123456789" /></div>' +
    '<div class="modal-footer">' +
    '<button class="btn-secondary" style="flex:1" onclick="closeModal()">No, gracias</button>' +
    '<button class="btn-primary" style="flex:1" onclick="proLeaveContact()">Avisame</button>' +
    '</div>';
  openModal();
}

async function proLeaveContact() {
  const contact = document.getElementById('pro-contact')?.value.trim();
  if (!contact) { showToast('Ingresá tu WhatsApp o elegí "No, gracias"'); return; }
  await proTrack('leave_contact', contact);
  closeModal();
  showToast('¡Gracias! Te avisamos cuando Pro esté disponible.');
}

// Registra un evento. En vista previa (?pro_demo=1) no registra nada.
async function proTrack(event, contact) {
  if (PRO_PREVIEW) return;
  if (typeof state === 'undefined' || !state.user) return;
  const { error } = await sb.from('pro_interest').insert({
    user_id: state.user.id,
    event,
    price_shown: PRO_PRICE_ARS,
    contact: contact || null,
  });
  if (error) console.warn('pro_interest:', error.message);
}

function proEsc(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
