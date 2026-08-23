/**
 * DONNÉES DU SITE — CONFIGS PC
 * ============================
 * C'est ICI que tu modifies tes configs, tes composants et tes liens.
 * Pas besoin de toucher au reste du code pour faire évoluer le catalogue.
 *
 * Structure d'une "offre" (offer) pour un composant :
 * {
 *   merchant:  "Nom du site marchand (ex: Grosbill, LDLC, Amazon)",
 *   price:     229,              // prix en euros (nombre)
 *   url:       "https://...",    // lien final vers la fiche produit
 *   affiliate: true|false,       // true = tu as un lien affilié classique, false = pas d'affiliation dispo
 *   affiliateUrl: "https://...", // (si affiliate=true) le vrai lien affilié à utiliser à la place de `url`
 *   lockerUrl: "https://...",    // (si affiliate=false) le lien vers ton service de "passerelle rémunérée"
 *                                // (Linkvertise, Adfoc.us, Exe.io, etc.) — voir README.md
 * }
 *
 * Le champ `id` de chaque offre DOIT être unique sur tout le site
 * (il sert à retrouver l'offre depuis la page passerelle).
 */

const CONFIGS = [
  {
    id: "config-1500",
    name: "Config du moment — 1500€",
    price: 1500,
    description: "Un bon compromis gaming/streaming pour de la 1440p haute fréquence.",
    components: [
      {
        category: "CPU",
        name: "AMD Ryzen 5 7600X",
        offers: [
          {
            id: "cpu-1500-grosbill",
            merchant: "Grosbill",
            price: 229,
            url: "https://www.grosbill.com/", // <-- remplace par le vrai lien produit
            affiliate: false,
            lockerUrl: "" // <-- colle ici ton lien Linkvertise/Adfoc.us une fois créé
          },
          {
            id: "cpu-1500-ldlc",
            merchant: "LDLC",
            price: 235,
            url: "https://www.ldlc.com/",
            affiliate: true,
            affiliateUrl: "" // <-- colle ici ton lien affilié Awin/Effiliation
          }
        ]
      },
      {
        category: "GPU",
        name: "NVIDIA RTX 4070",
        offers: [
          {
            id: "gpu-1500-grosbill",
            merchant: "Grosbill",
            price: 599,
            url: "https://www.grosbill.com/",
            affiliate: false,
            lockerUrl: ""
          }
        ]
      },
      {
        category: "RAM",
        name: "32 Go DDR5 6000MHz",
        offers: [
          {
            id: "ram-1500-ldlc",
            merchant: "LDLC",
            price: 99,
            url: "https://www.ldlc.com/",
            affiliate: true,
            affiliateUrl: ""
          }
        ]
      },
      {
        category: "Stockage",
        name: "SSD NVMe 1To",
        offers: [
          {
            id: "ssd-1500-amazon",
            merchant: "Amazon",
            price: 69,
            url: "https://www.amazon.fr/",
            affiliate: true,
            affiliateUrl: ""
          }
        ]
      },
      {
        category: "Carte mère",
        name: "B650 AM5",
        offers: [
          {
            id: "mb-1500-grosbill",
            merchant: "Grosbill",
            price: 149,
            url: "https://www.grosbill.com/",
            affiliate: false,
            lockerUrl: ""
          }
        ]
      },
      {
        category: "Alimentation",
        name: "650W 80+ Gold",
        offers: [
          {
            id: "psu-1500-topachat",
            merchant: "TopAchat",
            price: 79,
            url: "https://www.topachat.com/",
            affiliate: false,
            lockerUrl: ""
          }
        ]
      },
      {
        category: "Boîtier",
        name: "Boîtier ATX ventilé",
        offers: [
          {
            id: "case-1500-grosbill",
            merchant: "Grosbill",
            price: 69,
            url: "https://www.grosbill.com/",
            affiliate: false,
            lockerUrl: ""
          }
        ]
      }
    ]
  }
];

// Ne pas toucher : index rapide id -> offre, utilisé par la page passerelle (gateway.html)
function findOfferById(offerId) {
  for (const config of CONFIGS) {
    for (const comp of config.components) {
      for (const offer of comp.offers) {
        if (offer.id === offerId) {
          return { offer, component: comp, config };
        }
      }
    }
  }
  return null;
}
