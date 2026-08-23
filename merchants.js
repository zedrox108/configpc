/**
 * ==========================================================================
 *  ANNUAIRE DES MARCHANDS — boutiques nationales vérifiées (août 2026)
 * ==========================================================================
 *
 *  Principe : une offre = UNE boutique nationale précise.
 *  Le drapeau affiché est celui de la BOUTIQUE (alternate.fr = drapeau FR),
 *  pas du pays d'origine de l'entreprise.
 *
 *  Dans data.js tu écris juste :  m: "ldlc-fr"
 *  Le site récupère automatiquement le nom, le drapeau et les pays livrés.
 *  Impossible de te tromper sur la compatibilité.
 *
 *  flag    : drapeau affiché (pays de la boutique)
 *  shipsTo : pays d'où l'on peut réellement commander  ("fr","be","ch")
 *  warn    : avertissement affiché sous l'offre (facultatif)
 */

const MERCHANTS = {

  /* ---------------- Boutiques FRANÇAISES ---------------- */
  "amazon-fr":      { name: "Amazon.fr",        flag: "fr", shipsTo: ["fr"],            warn: "Vérifier que l'article est vendu et expédié par Amazon." },
  "ldlc-fr":        { name: "LDLC",             flag: "fr", shipsTo: ["fr"] },
  "topachat-fr":    { name: "TopAchat",         flag: "fr", shipsTo: ["fr","be"],       warn: "Livraison Belgique : uniquement articles vendus ET expédiés par TopAchat." },
  "grosbill-fr":    { name: "Grosbill",         flag: "fr", shipsTo: ["fr","be"] },
  "materielnet-fr": { name: "Materiel.net",     flag: "fr", shipsTo: ["fr","be"],       warn: "Belgique : articles volumineux (boîtiers, écrans) non expédiables." },
  "rdc-fr":         { name: "Rue du Commerce",  flag: "fr", shipsTo: ["fr","be"] },
  "pccomp-fr":      { name: "PcComponentes.fr", flag: "fr", shipsTo: ["fr"] },
  "alternate-fr":   { name: "Alternate.fr",     flag: "fr", shipsTo: ["fr"] },
  "galaxus-fr":     { name: "Galaxus.fr",       flag: "fr", shipsTo: ["fr"] },
  "cdiscount-fr":   { name: "Cdiscount",        flag: "fr", shipsTo: ["fr"] },

  /* ---------------- Boutiques BELGES ---------------- */
  "amazon-be":      { name: "Amazon.com.be",    flag: "be", shipsTo: ["be"],            warn: "Vérifier que l'article est vendu et expédié par Amazon." },
  "ldlc-be":        { name: "LDLC Belgique",    flag: "be", shipsTo: ["be"] },
  "alternate-be":   { name: "Alternate.be",     flag: "be", shipsTo: ["be"] },
  "coolblue-be":    { name: "Coolblue.be",      flag: "be", shipsTo: ["be"] },
  "vandenborre-be": { name: "Vanden Borre",     flag: "be", shipsTo: ["be"] },
  "galaxus-be":     { name: "Galaxus.be",       flag: "be", shipsTo: ["be"] },

  /* ---------------- Boutiques SUISSES ---------------- */
  "digitec-ch":     { name: "Digitec",          flag: "ch", shipsTo: ["ch"] },
  "galaxus-ch":     { name: "Galaxus.ch",       flag: "ch", shipsTo: ["ch"] },
  "brack-ch":       { name: "Brack.ch",         flag: "ch", shipsTo: ["ch"] },
  "ldlc-ch":        { name: "LDLC Suisse",      flag: "ch", shipsTo: ["ch"],            warn: "Prix en CHF, TVA suisse incluse — pas de taxe supplémentaire en douane." },
  "alternate-ch":   { name: "Alternate.ch",     flag: "ch", shipsTo: ["ch"],            warn: "Dédouanement inclus + forfait 16 CHF par colis." },
  "interdiscount-ch": { name: "Interdiscount", flag: "ch", shipsTo: ["ch"] },

  /* -------- Amazon UE livrant en Suisse (pas de boutique amazon.ch) -------- */
  "amazon-de-ch":   { name: "Amazon.de",        flag: "de", shipsTo: ["ch"],            warn: "Hors UE : droits de douane et TVA suisse ajoutés au moment du paiement." },
  "amazon-fr-ch":   { name: "Amazon.fr",        flag: "fr", shipsTo: ["ch"],            warn: "Hors UE : droits de douane et TVA suisse ajoutés au moment du paiement." }
};

/* ⚠️ NE PAS UTILISER (vérifié août 2026) :
   - Steg Electronics : faillite en 2024, activité fermée.
   - Microspot.ch     : fermé par Coop, redirige vers Interdiscount.
   - Cdiscount Belgique : livraison BE non confirmée, ne pas proposer en Belgique.
   - PcComponentes / Alternate.fr en Belgique : leurs CGV excluent la Belgique,
     utiliser Alternate.be à la place.
*/

function getMerchant(key) { return MERCHANTS[key] || null; }
