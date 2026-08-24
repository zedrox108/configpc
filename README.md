# ConfigPC — site de configurations PC (France)

## Les pages

| Fichier | Rôle |
|---|---|
| `index.html` | Accueil : tes configs, filtrables par gamme |
| `config.html` | Détail d'une config : composants, boutiques, liens |
| `gateway.html` | Passerelle affichée avant de partir chez le marchand |
| `admin.html` | **Ton espace privé** : créer, modifier, archiver tes configs |
| `configs.json` | Tes configs (généré par admin.html) |
| `products.js` | Catalogue de 1513 composants — sert à l'autocomplétion |
| `data.js` | Marchands, étiquettes, gammes, types de lien |
| `style.css`, `ui.js`, `logo.png` | Design et éléments visuels |

## Créer une config

Ouvre `admin.html`, clique sur **+ Nouvelle config**, puis renseigne :

- **le nom** et une **description**
- une **étiquette** décorée (Noël, Halloween, Promotion, Black Friday…) — chaque
  étiquette a ses couleurs et sa décoration ; Noël a même de petits flocons animés
- une **gamme** : bas, milieu ou haut de gamme (sert au filtre de l'accueil)
- un **minuteur** : la date jusqu'à laquelle la config reste en ligne

Pour chaque composant, tape les premières lettres — « 7800x » propose le Ryzen 7 7800X3D,
« b650 tomahawk » propose la MSI MAG B650 Tomahawk WiFi — puis clique dessus.
Renseigne ensuite le prix, les frais de port, la quantité, la boutique et le lien.
**Le total se calcule tout seul.**

Quand c'est prêt : onglet **Publier** → Copier → coller dans `configs.json` sur GitHub.

## Les trois types de lien (ta monétisation)

| Type | Ce qui se passe | Ce que tu gagnes |
|---|---|---|
| **Lien direct** | le visiteur va droit sur le produit | rien |
| **Lien affilié** | le visiteur passe par ton lien tracké, sans s'en rendre compte | une commission sur ses achats |
| **Passerelle rémunérée** | premier clic → page intermédiaire qui te paie ; il revient et accède au produit au clic suivant | une rémunération au passage |

Tu choisis le type composant par composant. Rien ne t'empêche de mélanger : lien affilié
sur les gros composants, passerelle sur ceux sans programme d'affiliation, lien direct
quand tu ne veux rien gagner.

## Le minuteur et l'historique

Quand le minuteur d'une config arrive à zéro, elle disparaît du site. En rouvrant
`admin.html`, tu la retrouves dans l'onglet **Historique**, avec son prix de l'époque,
tous ses composants et leurs boutiques. Tu peux la remettre en ligne d'un clic
ou la supprimer définitivement.

Une config supprimée à la main part aussi dans l'historique — rien n'est jamais perdu
tant que tu ne demandes pas la suppression définitive.

## Ajouter une étiquette

Ouvre `data.js`, trouve le bloc `LABELS`, copie une ligne et change les valeurs :
`nom` (le texte), `deco` (les emojis), `bg` (le fond, couleur ou dégradé),
`fg` (la couleur du texte), `bord` (la bordure). Elle apparaîtra dans la liste
déroulante de l'admin.
