/**
 * ========================================================================
 *  DONNÉES DU SITE — CONFIGS PC   (le SEUL fichier à modifier au quotidien)
 * ========================================================================
 *
 *  Chaque CONFIG contient des COMPOSANTS (CPU, GPU...).
 *  Chaque composant a une ou plusieurs OFFRES (un marchand = une offre).
 *
 *  Le site trie automatiquement les offres de la MOINS CHÈRE à la plus chère,
 *  FRAIS DE PORT INCLUS (prix + livraison). Le total de la config se recalcule
 *  tout seul à partir de l'offre la moins chère de chaque composant.
 *
 *  --- Champs d'une OFFRE ---
 *   id        : identifiant unique sur TOUT le site (sert à la passerelle)
 *   merchant  : nom du marchand (ex: "Amazon", "Grosbill")
 *   country   : code pays de l'offre : "fr","de","es","it","gb","be","nl","pt","us"  (facultatif, affiche un vrai drapeau)
 *   price     : prix du produit en euros (nombre)
 *   shipping  : frais de port en euros (nombre, mets 0 si gratuit)
 *   url       : lien final vers la fiche produit
 *   affiliate : true = tu as un lien affilié / false = pas d'affiliation (on passe par le locker)
 *   affiliateUrl : (si affiliate=true) ton lien affilié
 *   lockerUrl : (si affiliate=false) ton lien rémunéré clk.sh (voir README)
 *   stock     : "ok" | "low" | "out"   (affiche un badge stock, facultatif)
 *   promo     : { active:true, endDate:"2026-09-15T23:59", oldPrice:259 }  (facultatif)
 *
 *  --- Champs d'un COMPOSANT ---
 *   category  : "CPU","GPU","RAM","Stockage","Carte mère","Alimentation","Boîtier","Refroidissement"
 *   name      : nom du composant
 *   image     : adresse d'une image du produit (URL). Laisse "" si tu n'en as pas.
 *   offers    : liste des offres (voir ci-dessus)
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
        image: "https://m.media-amazon.com/images/I/61yn-uMBAwL._AC_SL1000_.jpg",
        offers: [
          {
            id: "cpu-1500-amazonde", merchant: "Amazon", country: "de",
            price: 199, shipping: 3, url: "https://www.amazon.de/",
            affiliate: true, affiliateUrl: "", stock: "ok",
            promo: { active: true, endDate: "2026-09-15T23:59", oldPrice: 239 }
          },
          {
            id: "cpu-1500-grosbill", merchant: "Grosbill", country: "fr",
            price: 229, shipping: 0, url: "https://www.grosbill.com/",
            affiliate: false, lockerUrl: "", stock: "ok"
          },
          {
            id: "cpu-1500-ldlc", merchant: "LDLC", country: "fr",
            price: 235, shipping: 5, url: "https://www.ldlc.com/",
            affiliate: true, affiliateUrl: "", stock: "low"
          }
        ]
      },
      {
        category: "GPU",
        name: "NVIDIA GeForce RTX 4070",
        image: "https://m.media-amazon.com/images/I/71bYd0mLZzL._AC_SL1500_.jpg",
        offers: [
          {
            id: "gpu-1500-pccomp", merchant: "PC Componentes", country: "es",
            price: 549, shipping: 12, url: "https://www.pccomponentes.com/",
            affiliate: false, lockerUrl: "", stock: "ok"
          },
          {
            id: "gpu-1500-grosbill", merchant: "Grosbill", country: "fr",
            price: 599, shipping: 0, url: "https://www.grosbill.com/",
            affiliate: false, lockerUrl: "", stock: "ok"
          }
        ]
      },
      {
        category: "RAM",
        name: "Corsair Vengeance 32 Go DDR5 6000MHz",
        image: "https://m.media-amazon.com/images/I/61vLNqM4EGL._AC_SL1500_.jpg",
        offers: [
          {
            id: "ram-1500-ldlc", merchant: "LDLC", country: "fr",
            price: 99, shipping: 5, url: "https://www.ldlc.com/",
            affiliate: true, affiliateUrl: "", stock: "ok"
          }
        ]
      },
      {
        category: "Stockage",
        name: "SSD NVMe 1 To Gen4",
        image: "https://m.media-amazon.com/images/I/71OWesUAG5L._AC_SL1500_.jpg",
        offers: [
          {
            id: "ssd-1500-amazon", merchant: "Amazon", country: "fr",
            price: 69, shipping: 0, url: "https://www.amazon.fr/",
            affiliate: true, affiliateUrl: "", stock: "ok"
          }
        ]
      },
      {
        category: "Carte mère",
        name: "Carte mère B650 AM5",
        image: "https://m.media-amazon.com/images/I/81xk1i5FCUL._AC_SL1500_.jpg",
        offers: [
          {
            id: "mb-1500-grosbill", merchant: "Grosbill", country: "fr",
            price: 149, shipping: 0, url: "https://www.grosbill.com/",
            affiliate: false, lockerUrl: "", stock: "ok"
          }
        ]
      },
      {
        category: "Alimentation",
        name: "Alimentation 650W 80+ Gold",
        image: "https://m.media-amazon.com/images/I/71yr5MnQ0AL._AC_SL1500_.jpg",
        offers: [
          {
            id: "psu-1500-topachat", merchant: "TopAchat", country: "fr",
            price: 79, shipping: 0, url: "https://www.topachat.com/",
            affiliate: false, lockerUrl: "", stock: "ok"
          }
        ]
      },
      {
        category: "Boîtier",
        name: "Boîtier ATX ventilé",
        image: "https://m.media-amazon.com/images/I/71RYw+FvcHL._AC_SL1500_.jpg",
        offers: [
          {
            id: "case-1500-grosbill", merchant: "Grosbill", country: "fr",
            price: 69, shipping: 0, url: "https://www.grosbill.com/",
            affiliate: false, lockerUrl: "", stock: "ok"
          }
        ]
      }
    ]
  }
];

/* ===================== moteur (ne pas modifier) ===================== */

// coût total d'une offre = prix + frais de port
function offerTotal(o) { return (Number(o.price) || 0) + (Number(o.shipping) || 0); }

// offres d'un composant triées de la moins chère à la plus chère (port inclus)
function sortedOffers(comp) {
  return [...comp.offers].sort((a, b) => offerTotal(a) - offerTotal(b));
}

// offre la moins chère d'un composant
function cheapestOffer(comp) { return sortedOffers(comp)[0]; }

// total d'une config = somme des offres les moins chères de chaque composant
function configTotal(cfg) {
  return cfg.components.reduce((sum, c) => {
    const o = cheapestOffer(c);
    return sum + (o ? offerTotal(o) : 0);
  }, 0);
}

// retrouve une offre par son id (utilisé par la passerelle)
function findOfferById(offerId) {
  for (const config of CONFIGS) {
    for (const comp of config.components) {
      for (const offer of comp.offers) {
        if (offer.id === offerId) return { offer, component: comp, config };
      }
    }
  }
  return null;
}
