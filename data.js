/**
 * ==========================================================================
 *  CONFIGPC — MARCHANDS + CONFIGS
 *  Tu peux tout modifier ici, ou utiliser la page admin.html (plus simple).
 * ==========================================================================
 */

/* Taux de change utilisé UNIQUEMENT pour comparer des prix de devises
   différentes. À ajuster de temps en temps (valeur approximative). */
const EUR_TO_CHF = 0.94;

/* -------------------- ANNUAIRE DES BOUTIQUES --------------------
   Une offre = UNE boutique nationale.
   flag = drapeau de la BOUTIQUE (alternate.fr = drapeau français)
   shipsTo = pays d'où l'on peut réellement commander
   cur = devise de la boutique                                      */
const MERCHANTS = {
  /* ---- FRANCE ---- */
  "amazon-fr":      { name:"Amazon.fr",        flag:"fr", cur:"EUR", shipsTo:["fr"],      warn:"Vérifier que l'article est vendu et expédié par Amazon." },
  "ldlc-fr":        { name:"LDLC",             flag:"fr", cur:"EUR", shipsTo:["fr"] },
  "topachat-fr":    { name:"TopAchat",         flag:"fr", cur:"EUR", shipsTo:["fr","be"], warn:"Belgique : uniquement les articles vendus ET expédiés par TopAchat." },
  "grosbill-fr":    { name:"Grosbill",         flag:"fr", cur:"EUR", shipsTo:["fr","be"] },
  "materielnet-fr": { name:"Materiel.net",     flag:"fr", cur:"EUR", shipsTo:["fr","be"], warn:"Belgique : articles volumineux (boîtiers, écrans) non expédiables." },
  "rdc-fr":         { name:"Rue du Commerce",  flag:"fr", cur:"EUR", shipsTo:["fr","be"] },
  "pccomp-fr":      { name:"PcComponentes.fr", flag:"fr", cur:"EUR", shipsTo:["fr"] },
  "alternate-fr":   { name:"Alternate.fr",     flag:"fr", cur:"EUR", shipsTo:["fr"] },
  "galaxus-fr":     { name:"Galaxus.fr",       flag:"fr", cur:"EUR", shipsTo:["fr"] },
  "cdiscount-fr":   { name:"Cdiscount",        flag:"fr", cur:"EUR", shipsTo:["fr"] },

  /* ---- BELGIQUE ---- */
  "amazon-be":      { name:"Amazon.com.be",    flag:"be", cur:"EUR", shipsTo:["be"],      warn:"Vérifier que l'article est vendu et expédié par Amazon." },
  "ldlc-be":        { name:"LDLC Belgique",    flag:"be", cur:"EUR", shipsTo:["be"] },
  "alternate-be":   { name:"Alternate.be",     flag:"be", cur:"EUR", shipsTo:["be"] },
  "coolblue-be":    { name:"Coolblue.be",      flag:"be", cur:"EUR", shipsTo:["be"] },
  "vandenborre-be": { name:"Vanden Borre",     flag:"be", cur:"EUR", shipsTo:["be"] },
  "galaxus-be":     { name:"Galaxus.be",       flag:"be", cur:"EUR", shipsTo:["be"] },

  /* ---- SUISSE (prix en francs suisses) ---- */
  "digitec-ch":       { name:"Digitec",       flag:"ch", cur:"CHF", shipsTo:["ch"] },
  "galaxus-ch":       { name:"Galaxus.ch",    flag:"ch", cur:"CHF", shipsTo:["ch"] },
  "brack-ch":         { name:"Brack.ch",      flag:"ch", cur:"CHF", shipsTo:["ch"] },
  "ldlc-ch":          { name:"LDLC Suisse",   flag:"ch", cur:"CHF", shipsTo:["ch"], warn:"TVA suisse incluse — aucune taxe supplémentaire en douane." },
  "alternate-ch":     { name:"Alternate.ch",  flag:"ch", cur:"CHF", shipsTo:["ch"], warn:"Dédouanement inclus + forfait 16 CHF par colis." },
  "interdiscount-ch": { name:"Interdiscount", flag:"ch", cur:"CHF", shipsTo:["ch"] },

  /* ---- Amazon UE livrant en Suisse (il n'existe pas d'amazon.ch) ---- */
  "amazon-de-ch":   { name:"Amazon.de",  flag:"de", cur:"EUR", shipsTo:["ch"], warn:"Hors UE : douane et TVA suisse ajoutées au paiement." },
  "amazon-fr-ch":   { name:"Amazon.fr",  flag:"fr", cur:"EUR", shipsTo:["ch"], warn:"Hors UE : douane et TVA suisse ajoutées au paiement." }
};

/* NE PAS UTILISER (vérifié 2026) : Steg Electronics (faillite 2024),
   Microspot (fermé, → Interdiscount), Cdiscount en Belgique (non confirmé). */

const COUNTRY_CUR = { fr:"EUR", be:"EUR", ch:"CHF" };

/* ======================= TES CONFIGS ======================= */
const CONFIGS = [
  {
    id: "config-1500",
    name: "Config du moment — 1500€",
    description: "Un bon compromis gaming/streaming pour de la 1440p haute fréquence.",
    components: [
      { category:"CPU", name:"AMD Ryzen 5 7600X", image:"", offers:[
        { id:"cpu-ldlcfr", m:"ldlc-fr", price:229, shipping:0, url:"https://www.ldlc.com/", affiliate:true, affiliateUrl:"", stock:"ok",
          promo:{ active:true, endDate:"2026-09-15T23:59", oldPrice:259 } },
        { id:"cpu-grosbill", m:"grosbill-fr", price:235, shipping:0, url:"https://www.grosbill.com/", affiliate:false, lockerUrl:"", stock:"ok" },
        { id:"cpu-alternatebe", m:"alternate-be", price:232, shipping:5, url:"https://fr.alternate.be/", affiliate:false, lockerUrl:"", stock:"ok" },
        { id:"cpu-digitec", m:"digitec-ch", price:245, shipping:0, url:"https://www.digitec.ch/", affiliate:false, lockerUrl:"", stock:"ok" },
        { id:"cpu-ldlcch", m:"ldlc-ch", price:252, shipping:8, url:"https://www.ldlc.com/fr-ch/", affiliate:false, lockerUrl:"", stock:"ok" }
      ]},
      { category:"GPU", name:"NVIDIA GeForce RTX 4070", image:"", offers:[
        { id:"gpu-pccompfr", m:"pccomp-fr", price:549, shipping:12, url:"https://www.pccomponentes.fr/", affiliate:false, lockerUrl:"", stock:"ok" },
        { id:"gpu-topachat", m:"topachat-fr", price:579, shipping:0, url:"https://www.topachat.com/", affiliate:false, lockerUrl:"", stock:"ok" },
        { id:"gpu-coolbluebe", m:"coolblue-be", price:589, shipping:0, url:"https://www.coolblue.be/fr/", affiliate:false, lockerUrl:"", stock:"ok" },
        { id:"gpu-digitec", m:"digitec-ch", price:619, shipping:0, url:"https://www.digitec.ch/", affiliate:false, lockerUrl:"", stock:"low" }
      ]},
      { category:"RAM", name:"Corsair Vengeance 32 Go DDR5 6000MHz", image:"", offers:[
        { id:"ram-ldlcfr", m:"ldlc-fr", price:99, shipping:5, url:"https://www.ldlc.com/", affiliate:true, affiliateUrl:"", stock:"ok" },
        { id:"ram-alternatebe", m:"alternate-be", price:104, shipping:5, url:"https://fr.alternate.be/", affiliate:false, lockerUrl:"", stock:"ok" },
        { id:"ram-brackch", m:"brack-ch", price:112, shipping:0, url:"https://www.brack.ch/", affiliate:false, lockerUrl:"", stock:"ok" }
      ]},
      { category:"Stockage", name:"SSD NVMe 1 To Gen4", image:"", offers:[
        { id:"ssd-amazonfr", m:"amazon-fr", price:69, shipping:0, url:"https://www.amazon.fr/", affiliate:true, affiliateUrl:"", stock:"ok" },
        { id:"ssd-amazonbe", m:"amazon-be", price:71, shipping:0, url:"https://www.amazon.com.be/", affiliate:true, affiliateUrl:"", stock:"ok" },
        { id:"ssd-galaxusch", m:"galaxus-ch", price:78, shipping:0, url:"https://www.galaxus.ch/", affiliate:false, lockerUrl:"", stock:"ok" }
      ]},
      { category:"Carte mère", name:"Carte mère B650 AM5", image:"", offers:[
        { id:"mb-grosbill", m:"grosbill-fr", price:149, shipping:0, url:"https://www.grosbill.com/", affiliate:false, lockerUrl:"", stock:"ok" },
        { id:"mb-vdbbe", m:"vandenborre-be", price:155, shipping:0, url:"https://www.vandenborre.be/", affiliate:false, lockerUrl:"", stock:"ok" },
        { id:"mb-digitec", m:"digitec-ch", price:168, shipping:0, url:"https://www.digitec.ch/", affiliate:false, lockerUrl:"", stock:"ok" }
      ]},
      { category:"Alimentation", name:"Alimentation 650W 80+ Gold", image:"", offers:[
        { id:"psu-topachat", m:"topachat-fr", price:79, shipping:0, url:"https://www.topachat.com/", affiliate:false, lockerUrl:"", stock:"ok" },
        { id:"psu-alternatech", m:"alternate-ch", price:92, shipping:0, url:"https://www.alternate.ch/", affiliate:false, lockerUrl:"", stock:"ok" }
      ]},
      { category:"Boîtier", name:"Boîtier ATX ventilé", image:"", offers:[
        { id:"case-grosbill", m:"grosbill-fr", price:69, shipping:0, url:"https://www.grosbill.com/", affiliate:false, lockerUrl:"", stock:"ok" },
        { id:"case-galaxusbe", m:"galaxus-be", price:74, shipping:0, url:"https://www.galaxus.be/", affiliate:false, lockerUrl:"", stock:"ok" },
        { id:"case-digitec", m:"digitec-ch", price:82, shipping:0, url:"https://www.digitec.ch/", affiliate:false, lockerUrl:"", stock:"ok" }
      ]}
    ]
  }
];

/* ===================== moteur (ne pas modifier) ===================== */
function getMerchant(k){ return MERCHANTS[k] || null; }

function currentCountry(){
  try { return (window.CONFIGPC_COUNTRY || localStorage.getItem("configpc_country") || "fr"); }
  catch(e){ return "fr"; }
}
function countryCurrency(c){ return COUNTRY_CUR[c || currentCountry()] || "EUR"; }

function offerMerchant(o){
  const m = getMerchant(o.m);
  if (m) return m;
  return { name:o.merchant || o.m || "Marchand", flag:o.country || "", cur:"EUR", shipsTo:o.shipsTo || [] };
}
function offerCurrency(o){ return offerMerchant(o).cur || "EUR"; }

function offerAvailable(o, country){
  const c = country || currentCountry();
  const ships = offerMerchant(o).shipsTo || [];
  return !ships.length || ships.map(x=>String(x).toLowerCase()).includes(c);
}

/* prix + port, dans la devise de la boutique */
function offerTotal(o){ return (Number(o.price)||0) + (Number(o.shipping)||0); }

/* conversion pour pouvoir comparer des devises différentes */
function convert(amount, from, to){
  if (from === to) return amount;
  if (from === "EUR" && to === "CHF") return amount * EUR_TO_CHF;
  if (from === "CHF" && to === "EUR") return amount / EUR_TO_CHF;
  return amount;
}
/* total ramené à la devise du pays (sert au tri et au total) */
function offerTotalIn(o, cur){
  return convert(offerTotal(o), offerCurrency(o), cur || countryCurrency());
}
/* l'offre est-elle affichée dans une autre devise que celle du pays ? */
function offerIsForeignCurrency(o, country){
  return offerCurrency(o) !== countryCurrency(country);
}

function fmtMoney(v, cur){
  const n = Math.round(v);
  return cur === "CHF" ? (n + " CHF") : (n + " €");
}
/* prix affiché d'une offre, dans SA devise */
function fmtOffer(o){ return fmtMoney(offerTotal(o), offerCurrency(o)); }

function sortedOffers(comp, country){
  const cur = countryCurrency(country);
  return comp.offers
    .filter(o => offerAvailable(o, country))
    .sort((a,b) => offerTotalIn(a,cur) - offerTotalIn(b,cur));
}
function cheapestOffer(comp, country){ return sortedOffers(comp, country)[0]; }

function configTotal(cfg, country){
  const cur = countryCurrency(country);
  return cfg.components.reduce((s,c)=>{
    const o = cheapestOffer(c, country);
    return s + (o ? offerTotalIn(o, cur) : 0);
  }, 0);
}
function configTotalText(cfg, country){ return fmtMoney(configTotal(cfg,country), countryCurrency(country)); }
function missingCount(cfg, country){ return cfg.components.filter(c=>!cheapestOffer(c,country)).length; }

function findOfferById(id){
  for (const cfg of CONFIGS)
    for (const comp of cfg.components)
      for (const o of comp.offers)
        if (o.id === id) return { offer:o, component:comp, config:cfg };
  return null;
}
