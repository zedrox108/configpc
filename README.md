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
