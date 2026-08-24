/**
 * ==========================================================================
 *  CONFIGPC — MARCHANDS & MOTEUR      (site français uniquement)
 * ==========================================================================
 *  Les configs ne sont plus ici : elles vivent dans configs.json,
 *  que tu génères depuis admin.html.
 */

/* -------------------- LES MARCHANDS --------------------
   flag = drapeau de la BOUTIQUE sur laquelle on commande
          (alternate.fr → drapeau français, même si la société est allemande)
   warn = avertissement affiché sous l'offre                          */
const MERCHANTS = {
  /* --- Boutiques françaises --- */
  "amazon-fr":      { name:"Amazon.fr",        flag:"fr", warn:"Vérifier que l'article est vendu et expédié par Amazon." },
  "ldlc-fr":        { name:"LDLC",             flag:"fr" },
  "topachat-fr":    { name:"TopAchat",         flag:"fr" },
  "materielnet-fr": { name:"Materiel.net",     flag:"fr" },
  "grosbill-fr":    { name:"Grosbill",         flag:"fr" },
  "rdc-fr":         { name:"Rue du Commerce",  flag:"fr" },
  "cybertek-fr":    { name:"Cybertek",         flag:"fr" },
  "pccomp-fr":      { name:"PcComponentes.fr", flag:"fr" },
  "alternate-fr":   { name:"Alternate.fr",     flag:"fr" },
  "galaxus-fr":     { name:"Galaxus.fr",       flag:"fr" },
  "cdiscount-fr":   { name:"Cdiscount",        flag:"fr" },
  "fnac-fr":        { name:"Fnac",             flag:"fr", warn:"Attention aux offres marketplace, différentes du stock Fnac." },
  "rakuten-fr":     { name:"Rakuten",          flag:"fr", warn:"Marketplace : livraison et garantie dépendent du vendeur." },
  "joybuy-fr":      { name:"JoyBuy",           flag:"fr", warn:"Marketplace européenne de JD.com — vérifier le vendeur." },
  "1fodiscount-fr": { name:"1FODiscount",      flag:"fr" },
  "topbiz-fr":      { name:"Topbiz",           flag:"fr" },
  "infomax-fr":     { name:"Infomax Paris",    flag:"fr" },
  "reichelt-fr":    { name:"Reichelt",         flag:"fr", warn:"Expédition depuis l'Allemagne." },
  "mrwatercooling-fr": { name:"Mr Watercooling", flag:"fr" },
  "aliexpress-fr":  { name:"AliExpress",       flag:"fr", warn:"Garantie et retours compliqués (SAV en Chine). Méfiance sur les contrefaçons (RAM, SSD, cartes graphiques)." },

  /* --- Boutiques étrangères qui livrent en France --- */
  "caseking-de":    { name:"Caseking",         flag:"de", warn:"Expédition depuis l'Allemagne." },
  "compumsa-be":    { name:"CompuMSA",         flag:"be", warn:"Expédition depuis la Belgique." }
};

/* ==================== LES ÉTIQUETTES ====================
   Chaque étiquette a ses couleurs et sa décoration.
   Tu peux en ajouter : copie un bloc et change les valeurs.       */
const LABELS = {
  "promo":      { nom:"Promotion",         deco:"",    bg:"#e11d2e", fg:"#ffffff", bord:"#ff6b7a" },
  "noel":       { nom:"Spécial Noël",      deco:"🎄❄️", bg:"linear-gradient(135deg,#0f7a3d,#c81d25)", fg:"#ffffff", bord:"#ffd700", flocons:true },
  "halloween":  { nom:"Spécial Halloween", deco:"🎃🕸️", bg:"linear-gradient(135deg,#ff6a00,#4a1d7a)", fg:"#ffffff", bord:"#ff9a3c" },
  "special":    { nom:"Édition spéciale",  deco:"✨",   bg:"linear-gradient(135deg,#7c5cff,#c9a227)", fg:"#ffffff", bord:"#ffd700" },
  "blackfriday":{ nom:"Black Friday",      deco:"🏷️",  bg:"linear-gradient(135deg,#111,#333)", fg:"#ffd700", bord:"#ffd700" },
  "soldes":     { nom:"Soldes",            deco:"🔖",   bg:"linear-gradient(135deg,#0ea5e9,#2563eb)", fg:"#ffffff", bord:"#7dd3fc" },
  "rentree":    { nom:"Spécial Rentrée",   deco:"🎒",   bg:"linear-gradient(135deg,#b45309,#f59e0b)", fg:"#ffffff", bord:"#fcd34d" },
  "ete":        { nom:"Spécial Été",       deco:"☀️🌴", bg:"linear-gradient(135deg,#f59e0b,#06b6d4)", fg:"#ffffff", bord:"#fde68a" },
  "nouveaute":  { nom:"Nouveauté",         deco:"🆕",   bg:"linear-gradient(135deg,#059669,#10b981)", fg:"#ffffff", bord:"#6ee7b7" },
  "coupdecoeur":{ nom:"Coup de cœur",      deco:"❤️",   bg:"linear-gradient(135deg,#be123c,#f43f5e)", fg:"#ffffff", bord:"#fda4af" }
};

/* ==================== LES GAMMES ==================== */
const TIERS = {
  "bas":     { nom:"Bas de gamme",     court:"Bas de gamme",     couleur:"#38bdf8" },
  "milieu":  { nom:"Milieu de gamme",  court:"Milieu de gamme",  couleur:"#a78bfa" },
  "haut":    { nom:"Haut de gamme",    court:"Haut de gamme",    couleur:"#fbbf24" }
};

/* ==================== TYPES DE LIEN (monétisation) ====================
   direct    : lien normal vers le produit, tu ne gagnes rien
   affilie   : lien d'affiliation, la commission est comptée au clic
   passerelle: lien rémunéré (clk.sh…), le visiteur passe par une page
               intermédiaire au premier clic, puis accède au produit    */
const LINK_TYPES = {
  "direct":     { nom:"Lien direct (aucun gain)",        ico:"↗" },
  "affilie":    { nom:"Lien affilié (commission)",       ico:"💶" },
  "passerelle": { nom:"Passerelle rémunérée (clk.sh…)",  ico:"🔁" }
};

/* ===================== moteur (ne pas modifier) ===================== */
function getMerchant(k){ return MERCHANTS[k] || null; }
function getLabel(k){ return LABELS[k] || null; }
function getTier(k){ return TIERS[k] || null; }

function offerMerchant(o){
  return getMerchant(o.m) || { name:o.m || "Marchand", flag:"fr" };
}
function offerTotal(o){
  return ((Number(o.price)||0) + (Number(o.shipping)||0)) * (Number(o.qty)||1);
}
function fmtMoney(v){ return Math.round(v) + " €"; }
function fmtOffer(o){ return fmtMoney(offerTotal(o)); }

/* total d'une config = somme des composants (prix + port) × quantité */
function configTotal(cfg){
  return (cfg.components || []).reduce((s,c)=> s + offerTotal(c), 0);
}
function configTotalText(cfg){ return fmtMoney(configTotal(cfg)); }

/* une config est-elle encore valable ? (timer) */
function configExpiree(cfg){
  if (!cfg.expire) return false;
  const t = new Date(cfg.expire).getTime();
  return !isNaN(t) && t <= Date.now();
}
/* le lien réellement utilisé selon le type choisi */
function offerFinalUrl(o){
  if (o.linkType === "affilie" && o.affiliateUrl) return o.affiliateUrl;
  return o.url || "";
}
