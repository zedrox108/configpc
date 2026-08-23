/**
 * ==========================================================================
 *  TES CONFIGS PC  —  le SEUL fichier à modifier au quotidien
 * ==========================================================================
 *
 *  Une OFFRE s'écrit maintenant très simplement :
 *
 *      { id: "cpu-1500-ldlcfr", m: "ldlc-fr", price: 229, shipping: 0,
 *        url: "https://www.ldlc.com/fiche/xxxx.html" }
 *
 *   m       : la boutique, choisie dans merchants.js (ex "ldlc-fr", "digitec-ch")
 *             -> le nom, le drapeau ET les pays livrés sont automatiques.
 *   id      : identifiant unique sur tout le site (sert à la passerelle)
 *   price   : prix du produit (nombre)
 *   shipping: frais de port (0 si offert)
 *   url     : lien vers la fiche produit
 *   affiliate / affiliateUrl / lockerUrl : voir README
 *   stock   : "ok" | "low" | "out"                        (facultatif)
 *   promo   : { active:true, endDate:"2026-09-15T23:59", oldPrice:239 }  (facultatif)
 *
 *  Un COMPOSANT :
 *   category : "CPU","GPU","RAM","Stockage","Carte mère","Alimentation","Boîtier"
 *   name     : nom du composant
 *   image    : adresse d'une photo du produit (laisse "" si tu n'en as pas)
 */

const CONFIGS = [
  {
    id: "config-1500",
    name: "Config du moment — 1500€",
    description: "Un bon compromis gaming/streaming pour de la 1440p haute fréquence.",
    components: [
      {
        category: "CPU",
        name: "AMD Ryzen 5 7600X",
        image: "",
        offers: [
          { id: "cpu-ldlcfr",   m: "ldlc-fr",     price: 229, shipping: 0, url: "https://www.ldlc.com/",
            affiliate: true, affiliateUrl: "", stock: "ok",
            promo: { active: true, endDate: "2026-09-15T23:59", oldPrice: 259 } },
          { id: "cpu-grosbill", m: "grosbill-fr", price: 235, shipping: 0, url: "https://www.grosbill.com/",
            affiliate: false, lockerUrl: "", stock: "ok" },
          { id: "cpu-alternatebe", m: "alternate-be", price: 232, shipping: 5, url: "https://fr.alternate.be/",
            affiliate: false, lockerUrl: "", stock: "ok" },
          { id: "cpu-digitec",  m: "digitec-ch",  price: 245, shipping: 0, url: "https://www.digitec.ch/",
            affiliate: false, lockerUrl: "", stock: "ok" },
          { id: "cpu-ldlcch",   m: "ldlc-ch",     price: 252, shipping: 8, url: "https://www.ldlc.com/fr-ch/",
            affiliate: false, lockerUrl: "", stock: "ok" }
        ]
      },
      {
        category: "GPU",
        name: "NVIDIA GeForce RTX 4070",
        image: "",
        offers: [
          { id: "gpu-pccompfr", m: "pccomp-fr",   price: 549, shipping: 12, url: "https://www.pccomponentes.fr/",
            affiliate: false, lockerUrl: "", stock: "ok" },
          { id: "gpu-topachat", m: "topachat-fr", price: 579, shipping: 0, url: "https://www.topachat.com/",
            affiliate: false, lockerUrl: "", stock: "ok" },
          { id: "gpu-coolbluebe", m: "coolblue-be", price: 589, shipping: 0, url: "https://www.coolblue.be/fr/",
            affiliate: false, lockerUrl: "", stock: "ok" },
          { id: "gpu-digitec",  m: "digitec-ch",  price: 619, shipping: 0, url: "https://www.digitec.ch/",
            affiliate: false, lockerUrl: "", stock: "low" }
        ]
      },
      {
        category: "RAM",
        name: "Corsair Vengeance 32 Go DDR5 6000MHz",
        image: "",
        offers: [
          { id: "ram-ldlcfr",  m: "ldlc-fr",    price: 99,  shipping: 5, url: "https://www.ldlc.com/",
            affiliate: true, affiliateUrl: "", stock: "ok" },
          { id: "ram-alternatebe", m: "alternate-be", price: 104, shipping: 5, url: "https://fr.alternate.be/",
            affiliate: false, lockerUrl: "", stock: "ok" },
          { id: "ram-brackch", m: "brack-ch",   price: 112, shipping: 0, url: "https://www.brack.ch/",
            affiliate: false, lockerUrl: "", stock: "ok" }
        ]
      },
      {
        category: "Stockage",
        name: "SSD NVMe 1 To Gen4",
        image: "",
        offers: [
          { id: "ssd-amazonfr", m: "amazon-fr",  price: 69, shipping: 0, url: "https://www.amazon.fr/",
            affiliate: true, affiliateUrl: "", stock: "ok" },
          { id: "ssd-amazonbe", m: "amazon-be",  price: 71, shipping: 0, url: "https://www.amazon.com.be/",
            affiliate: true, affiliateUrl: "", stock: "ok" },
          { id: "ssd-galaxusch", m: "galaxus-ch", price: 78, shipping: 0, url: "https://www.galaxus.ch/",
            affiliate: false, lockerUrl: "", stock: "ok" }
        ]
      },
      {
        category: "Carte mère",
        name: "Carte mère B650 AM5",
        image: "",
        offers: [
          { id: "mb-grosbill", m: "grosbill-fr", price: 149, shipping: 0, url: "https://www.grosbill.com/",
            affiliate: false, lockerUrl: "", stock: "ok" },
          { id: "mb-vdbbe",    m: "vandenborre-be", price: 155, shipping: 0, url: "https://www.vandenborre.be/",
            affiliate: false, lockerUrl: "", stock: "ok" },
          { id: "mb-digitec",  m: "digitec-ch",  price: 168, shipping: 0, url: "https://www.digitec.ch/",
            affiliate: false, lockerUrl: "", stock: "ok" }
        ]
      },
      {
        category: "Alimentation",
        name: "Alimentation 650W 80+ Gold",
        image: "",
        offers: [
          { id: "psu-topachat", m: "topachat-fr", price: 79, shipping: 0, url: "https://www.topachat.com/",
            affiliate: false, lockerUrl: "", stock: "ok" },
          { id: "psu-alternatech", m: "alternate-ch", price: 92, shipping: 0, url: "https://www.alternate.ch/",
            affiliate: false, lockerUrl: "", stock: "ok" }
        ]
      },
      {
        category: "Boîtier",
        name: "Boîtier ATX ventilé",
        image: "",
        offers: [
          { id: "case-grosbill", m: "grosbill-fr", price: 69, shipping: 0, url: "https://www.grosbill.com/",
            affiliate: false, lockerUrl: "", stock: "ok" },
          { id: "case-galaxusbe", m: "galaxus-be", price: 74, shipping: 0, url: "https://www.galaxus.be/",
            affiliate: false, lockerUrl: "", stock: "ok" },
          { id: "case-digitec", m: "digitec-ch",  price: 82, shipping: 0, url: "https://www.digitec.ch/",
            affiliate: false, lockerUrl: "", stock: "ok" }
        ]
      }
    ]
  }
];

/* ===================== moteur (ne pas modifier) ===================== */

function currentCountry() {
  try { return (window.CONFIGPC_COUNTRY || localStorage.getItem("configpc_country") || "fr"); }
  catch (e) { return "fr"; }
}

// infos marchand d'une offre (nom, drapeau, pays livrés) depuis merchants.js
function offerMerchant(o) {
  const m = (typeof getMerchant === "function") ? getMerchant(o.m) : null;
  if (m) return m;
  return { name: o.merchant || o.m || "Marchand", flag: o.country || "", shipsTo: o.shipsTo || [] };
}

// l'offre est-elle commandable depuis le pays choisi ?
function offerAvailable(o, country) {
  const c = country || currentCountry();
  const ships = offerMerchant(o).shipsTo || [];
  if (!ships.length) return true;
  return ships.map(x => String(x).toLowerCase()).includes(c);
}

function offerTotal(o) { return (Number(o.price) || 0) + (Number(o.shipping) || 0); }

function sortedOffers(comp, country) {
  return comp.offers
    .filter(o => offerAvailable(o, country))
    .sort((a, b) => offerTotal(a) - offerTotal(b));
}

function cheapestOffer(comp, country) { return sortedOffers(comp, country)[0]; }

function configTotal(cfg, country) {
  return cfg.components.reduce((s, c) => {
    const o = cheapestOffer(c, country);
    return s + (o ? offerTotal(o) : 0);
  }, 0);
}

function missingCount(cfg, country) {
  return cfg.components.filter(c => !cheapestOffer(c, country)).length;
}

function findOfferById(offerId) {
  for (const config of CONFIGS)
    for (const comp of config.components)
      for (const offer of comp.offers)
        if (offer.id === offerId) return { offer, component: comp, config };
  return null;
}
