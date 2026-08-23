/* ui.js — drapeaux SVG, icônes composants, animations. (ne pas modifier) */

/* ---- Drapeaux dessinés en SVG : s'affichent partout, même sur Windows ---- */
const FLAGS = {
  fr: '<rect width="6.67" height="14" x="0" fill="#0055A4"/><rect width="6.67" height="14" x="6.67" fill="#fff"/><rect width="6.66" height="14" x="13.33" fill="#EF4135"/>',
  de: '<rect width="20" height="4.67" y="0" fill="#000"/><rect width="20" height="4.67" y="4.67" fill="#DD0000"/><rect width="20" height="4.66" y="9.33" fill="#FFCE00"/>',
  es: '<rect width="20" height="14" fill="#AA151B"/><rect width="20" height="7" y="3.5" fill="#F1BF00"/>',
  it: '<rect width="6.67" height="14" x="0" fill="#009246"/><rect width="6.67" height="14" x="6.67" fill="#fff"/><rect width="6.66" height="14" x="13.33" fill="#CE2B37"/>',
  be: '<rect width="6.67" height="14" x="0" fill="#000"/><rect width="6.67" height="14" x="6.67" fill="#FDDA24"/><rect width="6.66" height="14" x="13.33" fill="#EF3340"/>',
  nl: '<rect width="20" height="4.67" y="0" fill="#AE1C28"/><rect width="20" height="4.67" y="4.67" fill="#fff"/><rect width="20" height="4.66" y="9.33" fill="#21468B"/>',
  pt: '<rect width="20" height="14" fill="#FF0000"/><rect width="8" height="14" fill="#006600"/>',
  gb: '<rect width="20" height="14" fill="#012169"/><rect width="20" height="2.5" y="5.75" fill="#fff"/><rect width="3" height="14" x="8.5" fill="#fff"/><rect width="20" height="1.4" y="6.3" fill="#C8102E"/><rect width="1.8" height="14" x="9.1" fill="#C8102E"/>',
  ch: '<rect width="20" height="14" fill="#D52B1E"/><rect x="8.2" y="3" width="3.6" height="8" fill="#fff"/><rect x="6" y="5.2" width="8" height="3.6" fill="#fff"/>',
  us: '<rect width="20" height="14" fill="#fff"/><rect width="20" height="2" y="0" fill="#B22234"/><rect width="20" height="2" y="4" fill="#B22234"/><rect width="20" height="2" y="8" fill="#B22234"/><rect width="20" height="2" y="12" fill="#B22234"/><rect width="9" height="7" fill="#3C3B6E"/>'
};
function flagSVG(code) {
  if (!code) return "";
  const c = String(code).toLowerCase();
  if (FLAGS[c]) return `<svg class="flag" viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg">${FLAGS[c]}</svg>`;
  return `<span class="flag" style="display:inline-flex;align-items:center;justify-content:center;font-size:8px;font-weight:700;background:#2a2e38;color:#cfd6e4">${c.toUpperCase()}</span>`;
}

/* ---- Icônes composants (SVG propres, utilisées si pas de photo) ---- */
const ICONS = {
  "CPU": '<rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9" y="9" width="6" height="6" rx="1"/><path d="M9 3v2M12 3v2M15 3v2M9 19v2M12 19v2M15 19v2M3 9h2M3 12h2M3 15h2M19 9h2M19 12h2M19 15h2"/>',
  "GPU": '<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="9" cy="12" r="3"/><path d="M15 9h4M15 12h4M15 15h4M6 18v3"/>',
  "RAM": '<rect x="2" y="8" width="20" height="8" rx="1"/><path d="M6 16v2M10 16v2M14 16v2M18 16v2M6 8V6M18 8V6"/>',
  "Stockage": '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 4v6M12 4v6M16 4v6"/><circle cx="16" cy="16" r="1.4"/>',
  "Carte mère": '<rect x="3" y="3" width="18" height="18" rx="2"/><rect x="6" y="6" width="5" height="5" rx="1"/><path d="M14 7h4M14 10h4M7 14h10M7 17h6"/>',
  "Alimentation": '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M12 8l-2.5 4H12l-1 4 3.5-5H11z" fill="currentColor" stroke="none"/>',
  "Boîtier": '<rect x="6" y="2" width="12" height="20" rx="2"/><circle cx="12" cy="6" r="1.2"/><path d="M9 10h6M9 13h6"/>',
  "Refroidissement": '<circle cx="12" cy="12" r="2"/><path d="M12 2v6M12 16v6M2 12h6M16 12h6M5 5l4 4M15 15l4 4M19 5l-4 4M9 15l-4 4"/>',
  "Écran": '<rect x="2" y="4" width="20" height="13" rx="2"/><path d="M9 21h6M12 17v4"/>'
};
function categoryIcon(cat) {
  const p = ICONS[cat] || '<circle cx="12" cy="12" r="8"/><path d="M12 8v8M8 12h8"/>';
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;
}

/* ---- Apparition au défilement (léger : IntersectionObserver natif) ---- */
function revealOnScroll() {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('in')); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { threshold: 0.08 });
  els.forEach(e => io.observe(e));
}


/* ===================== Sélecteur de pays (FR / BE / CH) ===================== */
const COUNTRIES = {
  fr: { name: "France",   zone: "eu" },
  be: { name: "Belgique", zone: "eu" },
  ch: { name: "Suisse",   zone: "ch" }
};

function getCountry() {
  try {
    const c = localStorage.getItem("configpc_country");
    if (c && COUNTRIES[c]) return c;
  } catch (e) {}
  return "fr";
}

function setCountry(c) {
  if (!COUNTRIES[c]) return;
  try { localStorage.setItem("configpc_country", c); } catch (e) {}
  window.CONFIGPC_COUNTRY = c;
  location.reload();
}

/* Injecte le sélecteur dans l'en-tête */
function initCountrySelector() {
  const cur = getCountry();
  window.CONFIGPC_COUNTRY = cur;
  const header = document.querySelector("header.site");
  if (!header) return;

  const wrap = document.createElement("div");
  wrap.className = "country-select";
  wrap.innerHTML = `
    <button class="country-btn" id="cbtn" aria-label="Changer de pays">
      ${flagSVG(cur)}<span>${COUNTRIES[cur].name}</span><span class="chev">▾</span>
    </button>
    <div class="country-menu" id="cmenu">
      ${Object.keys(COUNTRIES).map(k => `
        <button class="country-item ${k===cur?'active':''}" data-c="${k}">
          ${flagSVG(k)}<span>${COUNTRIES[k].name}</span>
        </button>`).join("")}
    </div>`;

  const tag = header.querySelector(".tag");
  if (tag) tag.replaceWith(wrap); else header.appendChild(wrap);

  const btn = wrap.querySelector("#cbtn");
  const menu = wrap.querySelector("#cmenu");
  btn.addEventListener("click", e => { e.stopPropagation(); menu.classList.toggle("open"); });
  document.addEventListener("click", () => menu.classList.remove("open"));
  wrap.querySelectorAll(".country-item").forEach(it =>
    it.addEventListener("click", () => setCountry(it.dataset.c)));
}

/* Bandeau d'info pour la Suisse (hors UE) */
function countryNotice() {
  if (getCountry() !== "ch") return "";
  return `<div class="notice-ch">🇨🇭 <span>Vous êtes en Suisse : seuls les marchands livrant en Suisse sont affichés. Un achat depuis un site de l'UE peut entraîner une TVA à l'import et des frais de dédouanement.</span></div>`;
}
