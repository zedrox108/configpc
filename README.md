# ConfigPC — Site de configs PC avec passerelle de monétisation

## Ce que contient ce prototype

- `index.html` — liste des configs (ex. "Config du moment — 1500€")
- `config.html` — détail d'une config : tous les composants + le lien "Voir l'offre" pour chaque marchand
- `gateway.html` — la **passerelle** : page intermédiaire avant d'arriver sur le site marchand
- `data.js` — **le seul fichier à modifier** pour gérer tes configs, composants et liens
- `style.css` — le design (thème sombre)

Aucune dépendance, aucun serveur nécessaire : tu peux ouvrir `index.html` dans un navigateur,
ou héberger le dossier tel quel sur Netlify / Vercel / GitHub Pages / OVH, etc.

## Comment fonctionne la passerelle

Pour chaque offre (un composant chez un marchand donné), tu choisis dans `data.js` :

**Cas 1 — tu as un vrai programme d'affiliation** (`affiliate: true`)
Un seul clic suffit : la page passerelle affiche un avertissement puis redirige directement
vers `affiliateUrl` (ton lien tracké Amazon Associates, Awin, Effiliation...). Le clic est
enregistré par le réseau d'affiliation, pas besoin d'un aller-retour.

**Cas 2 — pas de programme d'affiliation dispo** (`affiliate: false`)
C'est le flux en 2 étapes que tu avais décrit :
1. L'utilisateur clique sur "Voir l'offre" → arrive sur la passerelle → message d'avertissement
   → clique sur "Continuer" → est envoyé vers `lockerUrl`.
2. `lockerUrl` est le lien fourni par un service de **"link locker" / raccourcisseur monétisé**
   (voir plus bas) : c'est ce service qui te reverse une commission (au clic, à la vue de pub,
   ou à l'action). Une fois l'étape terminée sur ce service, celui-ci redirige l'utilisateur
   vers `gateway.html?ref=<id>&return=1` (ou l'utilisateur revient simplement en arrière).
3. La passerelle détecte alors que l'étape 1 est faite (via `localStorage`) et affiche le
   bouton final "Accéder au produit", qui envoie cette fois directement vers le vrai lien
   produit (`url`).

## Services de "passerelle rémunérée" à connaître

Puisque tu n'auras pas toujours un programme d'affiliation classique, il existe des services
de raccourcissement de liens monétisés (tu inscris un lien, ils te donnent un lien à toi,
et te paient selon les vues/clics/actions des visiteurs) :

- **Linkvertise**
- **Adfoc.us**
- **Exe.io**
- **Ouo.io**

Points importants à vérifier avant de choisir :
- Leurs conditions (montant minimum de retrait, pays éligibles, délais de paiement)
- Le fait que ces services affichent souvent des publicités parfois intrusives : ça peut
  faire fuir une partie de tes visiteurs, à mettre en balance avec le revenu généré
- Certains bloqueurs de pub bloquent ces domaines, ce qui casse le parcours pour une partie
  du trafic — prévois toujours un lien de secours (comme le fait déjà ce prototype :
  si `lockerUrl` est vide, il redirige directement vers le produit sans bloquer l'utilisateur)

## Obligations légales (France) — à ne pas zapper

Tu dois **informer clairement les visiteurs** que le site contient des liens affiliés/rémunérés
(loi consommation + recommandations ARPP sur l'influence commerciale et l'affiliation).
Ce prototype affiche déjà un bandeau de disclosure sur la page d'accueil — pense à l'adapter
et, si tu deviens plus gros, à consulter les mentions légales/CGU adaptées à ton cas
(auto-entreprise, statut, TVA sur les commissions perçues, etc.). Ce n'est pas un conseil
juridique — en cas de doute, vérifie auprès d'un professionnel.

## Pour faire évoluer le site vers un comparateur de prix

Ce prototype est volontairement statique (un simple fichier `data.js`) pour que tu puisses
démarrer tout de suite. Quand tu voudras :
- mettre à jour les prix automatiquement (scraping ou API marchands),
- avoir un vrai back-office pour éditer les configs sans toucher au code,
- stocker un historique de prix pour afficher des courbes,

... il faudra migrer vers une architecture avec un vrai backend (ex. Next.js + base de données
comme PostgreSQL/SQLite), avec un job planifié qui va chercher les prix à intervalles réguliers.
La structure de données de `data.js` (configs → composants → offres) a été pensée pour être
facilement transposée en tables de base de données le moment venu, donc rien à jeter.

## Prochaines étapes suggérées

1. Remplace les URLs d'exemple dans `data.js` par tes vraies fiches produits.
2. Inscris-toi sur un ou deux programmes d'affiliation (Awin, Effiliation, Amazon) pour les
   marchands qui en proposent, et renseigne `affiliateUrl`.
3. Inscris-toi sur un service de link locker pour les marchands sans affiliation, et renseigne
   `lockerUrl`.
4. Héberge le site (Netlify/Vercel en gratuit fonctionnent très bien pour un site statique).
5. Quand le catalogue grossit, on migre vers une vraie base de données + interface d'admin.

---

# 🤖 Le bot de suivi des prix

## Ce qu'il fait

Un programme (`scripts/snapshot.js`) enregistre chaque jour le prix de toutes tes offres
dans `history.json`. Le site lit ce fichier et dessine les courbes de prix
(bouton « 📈 Historique » sur la page Comparateur).

GitHub exécute ce programme automatiquement **tous les jours à 6h UTC**, gratuitement,
sans serveur — c'est le fichier `.github/workflows/prices.yml`.

## Activation (à faire une seule fois)

1. Envoie sur GitHub le dossier `.github/workflows/` et le dossier `scripts/`
   (garde bien la structure des dossiers).
2. Sur GitHub, onglet **Settings** → **Actions** → **General** → tout en bas,
   section « Workflow permissions » : coche **Read and write permissions** → **Save**.
   (Sans ça, le bot ne pourra pas enregistrer l'historique.)
3. Onglet **Actions** → si GitHub demande d'activer les workflows, accepte.
4. Pour tester tout de suite : Actions → « Relevé quotidien des prix » → **Run workflow**.

## Points importants

- **L'historique démarre aujourd'hui.** Il est impossible de récupérer les prix passés :
  cette donnée n'existe que si on l'a enregistrée. Plus tôt le bot tourne, plus tôt les
  courbes ont de la valeur.
- **GitHub désactive les tâches planifiées après 60 jours sans activité sur le dépôt.**
  Si tu ne touches à rien pendant 2 mois, va dans l'onglet Actions et réactive le workflow.
- Aujourd'hui le bot enregistre les prix **que tu as saisis** dans `data.js`.
  Il ne va pas encore les chercher tout seul chez les marchands (voir ci-dessous).

## Et la récupération automatique des prix ?

C'est l'étape suivante, et la plus difficile. Deux voies possibles :

1. **Les flux produits des programmes d'affiliation** (voie propre et légale).
   AliExpress est accessible sans condition. Amazon exige 3 ventes pour ouvrir l'accès
   à son API, puis 10 ventes tous les 30 jours pour la conserver. Awin / Effiliation
   demandent une validation de ton site.
2. **Le scraping** (robot qui lit les pages des marchands) : fragile, souvent contraire
   aux conditions d'utilisation des sites, et activement bloqué par Amazon.
   Déconseillé comme fondation.

C'est pour ça que l'ordre logique reste : lancer le site → obtenir les premières ventes →
débloquer les flux d'affiliation → brancher l'automatisation sur le bot déjà en place.

---

# 🤖 LE BOT DE PRIX AUTOMATIQUE

## Le principe

Tu ne saisis plus aucun prix. Le bot télécharge des **flux produits** (des fichiers que
les marchands publient, contenant nom + prix + stock + lien + code-barres pour des milliers
de références), reconnaît tout seul les produits de ton catalogue, et remplit `offers.json`.

    sources.json  →  scripts/import-feed.js  →  offers.json  →  le site affiche les prix
                                              ↘  scripts/snapshot.js → history.json → courbes

Tout ça tourne chaque jour à 6h sur GitHub, gratuitement.

## Comment brancher un vrai flux

1. Inscris-toi sur une plateforme d'affiliation et récupère l'URL de ton flux :
   - **AliExpress Portals** — inscription libre, aucun seuil. Le plus simple pour démarrer.
   - **Awin / Effiliation / Kwanko / TradeDoubler** — validation de ton site requise.
     C'est là que se trouvent LDLC, Materiel.net, TopAchat, Cdiscount, Fnac, Rakuten…
   - **Amazon PA-API** — nécessite 3 ventes pour ouvrir l'accès, puis 10 tous les 30 jours.
2. Ouvre `sources.json`, complète l'entrée correspondante (`url`, noms de colonnes),
   et passe `actif` à `true`.
3. C'est tout. Le prochain passage du bot remplit les prix automatiquement.

## La reconnaissance automatique des produits

C'est le cœur du bot. Il compare le nom du flux au nom du catalogue avec des règles strictes :

- **Tous les nombres du nom catalogue doivent être présents dans le flux.** Une RTX 5070
  ne peut donc jamais être confondue avec une 5070 Ti, ni une alim 750 W avec une 850 W.
- **Un mot distinctif manquant fait chuter le score.** C'est ce qui empêche de confondre
  « Pure Power » et « Straight Power ».
- **En cas d'égalité entre deux produits, le bot refuse.** Mieux vaut aucun prix qu'un faux prix.

Résultat : sur le flux de démonstration, 14 produits sur 15 sont reconnus, et le seul refus
est justifié (le produit n'existe pas dans le catalogue).

Le rapport de chaque passage est écrit dans `rapport-bot.json` : nombre de lignes lues,
produits reconnus, et exemples de non-reconnus pour que tu puisses compléter ton catalogue.

Pour tester en local et voir le détail :

    DEBUG_BOT=1 node scripts/import-feed.js

## Pourquoi pas du scraping ?

Un robot qui lit les pages des marchands a besoin de **connaître l'adresse de chaque fiche
produit** — soit autant de saisie manuelle que les prix eux-mêmes. En plus, Amazon, LDLC et
Fnac utilisent des protections anti-robot qui bloquent les serveurs comme GitHub, et leurs
conditions d'utilisation l'interdisent le plus souvent. Les flux produits donnent la même
information, en masse, légalement, et avec le lien affilié déjà inclus.

---

# ⚡ MISE À JOUR AUTOMATIQUE DES PRIX — les 3 sources

Le bot tourne chaque matin à 6h sur GitHub, gratuitement. Il puise dans trois
types de sources, que tu actives dans `sources.json`. Aucune n'exige d'audience.

## 1. Boutiques à catalogue public — AUCUNE inscription

Les boutiques **Shopify** et **WooCommerce** publient leur catalogue en JSON,
par conception de leur plateforme :

    Shopify      https://laboutique.fr/products.json?limit=250&page=1
    WooCommerce  https://laboutique.fr/wp-json/wc/store/v1/products

Le script `scripts/import-shops.js` les lit, reconnaît les produits et remplit
les prix. C'est la voie la plus simple : zéro condition, mise à jour en temps réel.

Comment trouver des boutiques exploitables : ouvre `laboutique.fr/products.json`
dans ton navigateur. Si du texte JSON s'affiche, ajoute-la dans la section
`boutiques` de `sources.json`. Ça marche surtout sur les **boutiques spécialisées**
(watercooling, modding, PC sur mesure) — les gros comme LDLC ont leur propre
plateforme et ne l'exposent pas.

Le bot respecte le `robots.txt` de chaque boutique et attend 2 secondes entre
chaque requête.

## 2. Flux d'affiliation — inscription, mais SANS audience requise

Contrairement à une idée répandue, ces plateformes ne demandent ni followers ni
statut d'influenceur. Aucune ne publie de seuil de trafic :

| Plateforme | Entrée | Ce que ça t'apporte |
|---|---|---|
| **Tradedoubler** | token en self-service | **Digitec / Galaxus** → couvre la Suisse ET la Belgique, avec prix, historique de prix, EAN, stock et frais de port |
| **Awin** | dépôt de 5 € remboursé, validation ~2 jours | Cdiscount et d'autres enseignes high-tech françaises |
| **Rakuten Advertising** | site en ligne avec du contenu original | Marketplace Rakuten |

Chaque annonceur valide ensuite individuellement. Un site vide se fait refuser —
le tien ne l'est plus, c'est justement pour ça qu'il fallait le mettre en ligne.

## 3. Fichiers — n'importe quel CSV ou XML

`scripts/import-feed.js` avale n'importe quel fichier contenant nom + prix,
qu'il vienne d'une plateforme d'affiliation ou d'ailleurs. Tu indiques juste le
nom des colonnes dans `sources.json`.

---

# 📉 DÉTECTION AUTOMATIQUE DES BAISSES

Aucune saisie, aucune date de péremption à renseigner. Le bot enregistre les prix
chaque jour ; le site compare le prix du jour au plus haut des 30 derniers jours :

- baisse d'au moins 2 % → badge **📉 −50 € (10 %)**
- prix jamais vu aussi bas → badge **⭐ prix le plus bas**

Ça fonctionne quelle que soit la source des prix, et ça se met à jour tout seul
à chaque passage du bot.

---

# ⚠️ Ce que le bot ne fait pas

Il ne parcourt pas les pages HTML des marchands. Cette technique est interdite par
les conditions d'utilisation de nombreux sites (Topbiz le refuse explicitement dans
son robots.txt), bloquée par les protections anti-robot des gros marchands, et elle
casse à chaque refonte de site. Les trois sources ci-dessus donnent la même
information de façon stable et légitime.
