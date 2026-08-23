/**
 * products.js — CATALOGUE DES PRODUITS
 * ------------------------------------------------------------------
 *  Références connues jusqu'à mi-2026. À compléter avec les nouveautés.
 *  Certaines déclinaisons ont été générées par combinaison marque × modèle :
 *  vérifie qu'elles existent bien avant de leur associer un prix.
 *
 *  Pour ajouter un prix, remplis le tableau offers d'un produit :
 *    offers: [ { id:"ref-unique", m:"ldlc-fr", price:229, shipping:0,
 *                url:"https://...", stock:"ok" } ]
 *  (le générateur d'offres de admin.html fabrique cette ligne pour toi)
 */

const PRODUCTS = [
{
id: "gpu-asus-geforce-rtx-5090-rog-astral-oc",
category: "GPU",
brand: "ASUS",
name: "ASUS GeForce RTX 5090 ROG Astral OC",
spec: "32 Go GDDR7 · PCIe 5.0",
image: "",
offers: []
},
{
id: "gpu-asus-geforce-rtx-5090-rog-strix-oc",
category: "GPU",
brand: "ASUS",
name: "ASUS GeForce RTX 5090 ROG Strix OC",
spec: "32 Go GDDR7 · PCIe 5.0",
image: "",
offers: []
},
{
id: "gpu-asus-geforce-rtx-5090-tuf-gaming-oc",
category: "GPU",
brand: "ASUS",
name: "ASUS GeForce RTX 5090 TUF Gaming OC",
spec: "32 Go GDDR7 · PCIe 5.0",
image: "",
offers: []
},
{
id: "gpu-msi-geforce-rtx-5090-suprim-x",
category: "GPU",
brand: "MSI",
name: "MSI GeForce RTX 5090 SUPRIM X",
spec: "32 Go GDDR7 · PCIe 5.0",
image: "",
offers: []
},
{
id: "gpu-msi-geforce-rtx-5090-gaming-trio-oc",
category: "GPU",
brand: "MSI",
name: "MSI GeForce RTX 5090 Gaming Trio OC",
spec: "32 Go GDDR7 · PCIe 5.0",
image: "",
offers: []
},
{
id: "gpu-msi-geforce-rtx-5090-ventus-3x-oc",
category: "GPU",
brand: "MSI",
name: "MSI GeForce RTX 5090 Ventus 3X OC",
spec: "32 Go GDDR7 · PCIe 5.0",
image: "",
offers: []
},
{
id: "gpu-gigabyte-geforce-rtx-5090-aorus-master",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte GeForce RTX 5090 AORUS Master",
spec: "32 Go GDDR7 · PCIe 5.0",
image: "",
offers: []
},
{
id: "gpu-gigabyte-geforce-rtx-5090-gaming-oc",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte GeForce RTX 5090 Gaming OC",
spec: "32 Go GDDR7 · PCIe 5.0",
image: "",
offers: []
},
{
id: "gpu-gigabyte-geforce-rtx-5090-windforce-oc",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte GeForce RTX 5090 WindForce OC",
spec: "32 Go GDDR7 · PCIe 5.0",
image: "",
offers: []
},
{
id: "gpu-palit-geforce-rtx-5090-gamerock",
category: "GPU",
brand: "Palit",
name: "Palit GeForce RTX 5090 GameRock",
spec: "32 Go GDDR7 · PCIe 5.0",
image: "",
offers: []
},
{
id: "gpu-palit-geforce-rtx-5090-gamingpro-oc",
category: "GPU",
brand: "Palit",
name: "Palit GeForce RTX 5090 GamingPro OC",
spec: "32 Go GDDR7 · PCIe 5.0",
image: "",
offers: []
},
{
id: "gpu-zotac-geforce-rtx-5090-amp-extreme-airo",
category: "GPU",
brand: "Zotac",
name: "Zotac GeForce RTX 5090 AMP Extreme AIRO",
spec: "32 Go GDDR7 · PCIe 5.0",
image: "",
offers: []
},
{
id: "gpu-zotac-geforce-rtx-5090-trinity-oc",
category: "GPU",
brand: "Zotac",
name: "Zotac GeForce RTX 5090 Trinity OC",
spec: "32 Go GDDR7 · PCIe 5.0",
image: "",
offers: []
},
{
id: "gpu-inno3d-geforce-rtx-5090-ichill-x3",
category: "GPU",
brand: "Inno3D",
name: "Inno3D GeForce RTX 5090 iChill X3",
spec: "32 Go GDDR7 · PCIe 5.0",
image: "",
offers: []
},
{
id: "gpu-inno3d-geforce-rtx-5090-x3-oc",
category: "GPU",
brand: "Inno3D",
name: "Inno3D GeForce RTX 5090 X3 OC",
spec: "32 Go GDDR7 · PCIe 5.0",
image: "",
offers: []
},
{
id: "gpu-pny-geforce-rtx-5090-xlr8-gaming-verto-oc",
category: "GPU",
brand: "PNY",
name: "PNY GeForce RTX 5090 XLR8 Gaming Verto OC",
spec: "32 Go GDDR7 · PCIe 5.0",
image: "",
offers: []
},
{
id: "gpu-gainward-geforce-rtx-5090-phoenix-gs",
category: "GPU",
brand: "Gainward",
name: "Gainward GeForce RTX 5090 Phoenix GS",
spec: "32 Go GDDR7 · PCIe 5.0",
image: "",
offers: []
},
{
id: "gpu-asus-geforce-rtx-5080-rog-astral-oc",
category: "GPU",
brand: "ASUS",
name: "ASUS GeForce RTX 5080 ROG Astral OC",
spec: "16 Go GDDR7 · PCIe 5.0",
image: "",
offers: []
},
{
id: "gpu-asus-geforce-rtx-5080-rog-strix-oc",
category: "GPU",
brand: "ASUS",
name: "ASUS GeForce RTX 5080 ROG Strix OC",
spec: "16 Go GDDR7 · PCIe 5.0",
image: "",
offers: []
},
{
id: "gpu-asus-geforce-rtx-5080-tuf-gaming-oc",
category: "GPU",
brand: "ASUS",
name: "ASUS GeForce RTX 5080 TUF Gaming OC",
spec: "16 Go GDDR7 · PCIe 5.0",
image: "",
offers: []
},
{
id: "gpu-msi-geforce-rtx-5080-suprim-x",
category: "GPU",
brand: "MSI",
name: "MSI GeForce RTX 5080 SUPRIM X",
spec: "16 Go GDDR7 · PCIe 5.0",
image: "",
offers: []
},
{
id: "gpu-msi-geforce-rtx-5080-gaming-trio-oc",
category: "GPU",
brand: "MSI",
name: "MSI GeForce RTX 5080 Gaming Trio OC",
spec: "16 Go GDDR7 · PCIe 5.0",
image: "",
offers: []
},
{
id: "gpu-msi-geforce-rtx-5080-ventus-3x-oc",
category: "GPU",
brand: "MSI",
name: "MSI GeForce RTX 5080 Ventus 3X OC",
spec: "16 Go GDDR7 · PCIe 5.0",
image: "",
offers: []
},
{
id: "gpu-gigabyte-geforce-rtx-5080-aorus-master",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte GeForce RTX 5080 AORUS Master",
spec: "16 Go GDDR7 · PCIe 5.0",
image: "",
offers: []
},
{
id: "gpu-gigabyte-geforce-rtx-5080-gaming-oc",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte GeForce RTX 5080 Gaming OC",
spec: "16 Go GDDR7 · PCIe 5.0",
image: "",
offers: []
},
{
id: "gpu-gigabyte-geforce-rtx-5080-windforce-oc",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte GeForce RTX 5080 WindForce OC",
spec: "16 Go GDDR7 · PCIe 5.0",
image: "",
offers: []
},
{
id: "gpu-palit-geforce-rtx-5080-gamerock",
category: "GPU",
brand: "Palit",
name: "Palit GeForce RTX 5080 GameRock",
spec: "16 Go GDDR7 · PCIe 5.0",
image: "",
offers: []
},
{
id: "gpu-palit-geforce-rtx-5080-gamingpro-oc",
category: "GPU",
brand: "Palit",
name: "Palit GeForce RTX 5080 GamingPro OC",
spec: "16 Go GDDR7 · PCIe 5.0",
image: "",
offers: []
},
{
id: "gpu-zotac-geforce-rtx-5080-amp-extreme-airo",
category: "GPU",
brand: "Zotac",
name: "Zotac GeForce RTX 5080 AMP Extreme AIRO",
spec: "16 Go GDDR7 · PCIe 5.0",
image: "",
offers: []
},
{
id: "gpu-zotac-geforce-rtx-5080-trinity-oc",
category: "GPU",
brand: "Zotac",
name: "Zotac GeForce RTX 5080 Trinity OC",
spec: "16 Go GDDR7 · PCIe 5.0",
image: "",
offers: []
},
{
id: "gpu-inno3d-geforce-rtx-5080-ichill-x3",
category: "GPU",
brand: "Inno3D",
name: "Inno3D GeForce RTX 5080 iChill X3",
spec: "16 Go GDDR7 · PCIe 5.0",
image: "",
offers: []
},
{
id: "gpu-inno3d-geforce-rtx-5080-x3-oc",
category: "GPU",
brand: "Inno3D",
name: "Inno3D GeForce RTX 5080 X3 OC",
spec: "16 Go GDDR7 · PCIe 5.0",
image: "",
offers: []
},
{
id: "gpu-pny-geforce-rtx-5080-xlr8-gaming-verto-oc",
category: "GPU",
brand: "PNY",
name: "PNY GeForce RTX 5080 XLR8 Gaming Verto OC",
spec: "16 Go GDDR7 · PCIe 5.0",
image: "",
offers: []
},
{
id: "gpu-gainward-geforce-rtx-5080-phoenix-gs",
category: "GPU",
brand: "Gainward",
name: "Gainward GeForce RTX 5080 Phoenix GS",
spec: "16 Go GDDR7 · PCIe 5.0",
image: "",
offers: []
},
{
id: "gpu-asus-geforce-rtx-5070-ti-rog-astral-oc",
category: "GPU",
brand: "ASUS",
name: "ASUS GeForce RTX 5070 Ti ROG Astral OC",
spec: "16 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-asus-geforce-rtx-5070-ti-rog-strix-oc",
category: "GPU",
brand: "ASUS",
name: "ASUS GeForce RTX 5070 Ti ROG Strix OC",
spec: "16 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-asus-geforce-rtx-5070-ti-tuf-gaming-oc",
category: "GPU",
brand: "ASUS",
name: "ASUS GeForce RTX 5070 Ti TUF Gaming OC",
spec: "16 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-msi-geforce-rtx-5070-ti-suprim-x",
category: "GPU",
brand: "MSI",
name: "MSI GeForce RTX 5070 Ti SUPRIM X",
spec: "16 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-msi-geforce-rtx-5070-ti-gaming-trio-oc",
category: "GPU",
brand: "MSI",
name: "MSI GeForce RTX 5070 Ti Gaming Trio OC",
spec: "16 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-msi-geforce-rtx-5070-ti-ventus-3x-oc",
category: "GPU",
brand: "MSI",
name: "MSI GeForce RTX 5070 Ti Ventus 3X OC",
spec: "16 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-gigabyte-geforce-rtx-5070-ti-aorus-master",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte GeForce RTX 5070 Ti AORUS Master",
spec: "16 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-gigabyte-geforce-rtx-5070-ti-gaming-oc",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte GeForce RTX 5070 Ti Gaming OC",
spec: "16 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-gigabyte-geforce-rtx-5070-ti-windforce-oc",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte GeForce RTX 5070 Ti WindForce OC",
spec: "16 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-palit-geforce-rtx-5070-ti-gamerock",
category: "GPU",
brand: "Palit",
name: "Palit GeForce RTX 5070 Ti GameRock",
spec: "16 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-palit-geforce-rtx-5070-ti-gamingpro-oc",
category: "GPU",
brand: "Palit",
name: "Palit GeForce RTX 5070 Ti GamingPro OC",
spec: "16 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-zotac-geforce-rtx-5070-ti-amp-extreme-airo",
category: "GPU",
brand: "Zotac",
name: "Zotac GeForce RTX 5070 Ti AMP Extreme AIRO",
spec: "16 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-zotac-geforce-rtx-5070-ti-trinity-oc",
category: "GPU",
brand: "Zotac",
name: "Zotac GeForce RTX 5070 Ti Trinity OC",
spec: "16 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-inno3d-geforce-rtx-5070-ti-ichill-x3",
category: "GPU",
brand: "Inno3D",
name: "Inno3D GeForce RTX 5070 Ti iChill X3",
spec: "16 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-inno3d-geforce-rtx-5070-ti-x3-oc",
category: "GPU",
brand: "Inno3D",
name: "Inno3D GeForce RTX 5070 Ti X3 OC",
spec: "16 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-pny-geforce-rtx-5070-ti-xlr8-gaming-verto-oc",
category: "GPU",
brand: "PNY",
name: "PNY GeForce RTX 5070 Ti XLR8 Gaming Verto OC",
spec: "16 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-gainward-geforce-rtx-5070-ti-phoenix-gs",
category: "GPU",
brand: "Gainward",
name: "Gainward GeForce RTX 5070 Ti Phoenix GS",
spec: "16 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-asus-geforce-rtx-5070-tuf-gaming-oc",
category: "GPU",
brand: "ASUS",
name: "ASUS GeForce RTX 5070 TUF Gaming OC",
spec: "12 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-asus-geforce-rtx-5070-prime-oc",
category: "GPU",
brand: "ASUS",
name: "ASUS GeForce RTX 5070 Prime OC",
spec: "12 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-asus-geforce-rtx-5070-dual-oc",
category: "GPU",
brand: "ASUS",
name: "ASUS GeForce RTX 5070 Dual OC",
spec: "12 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-msi-geforce-rtx-5070-gaming-trio-oc",
category: "GPU",
brand: "MSI",
name: "MSI GeForce RTX 5070 Gaming Trio OC",
spec: "12 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-msi-geforce-rtx-5070-ventus-3x-oc",
category: "GPU",
brand: "MSI",
name: "MSI GeForce RTX 5070 Ventus 3X OC",
spec: "12 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-msi-geforce-rtx-5070-ventus-2x-oc",
category: "GPU",
brand: "MSI",
name: "MSI GeForce RTX 5070 Ventus 2X OC",
spec: "12 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-gigabyte-geforce-rtx-5070-gaming-oc",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte GeForce RTX 5070 Gaming OC",
spec: "12 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-gigabyte-geforce-rtx-5070-eagle-oc",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte GeForce RTX 5070 Eagle OC",
spec: "12 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-gigabyte-geforce-rtx-5070-windforce-oc",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte GeForce RTX 5070 WindForce OC",
spec: "12 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-palit-geforce-rtx-5070-gamingpro-oc",
category: "GPU",
brand: "Palit",
name: "Palit GeForce RTX 5070 GamingPro OC",
spec: "12 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-palit-geforce-rtx-5070-jetstream-oc",
category: "GPU",
brand: "Palit",
name: "Palit GeForce RTX 5070 JetStream OC",
spec: "12 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-palit-geforce-rtx-5070-dual",
category: "GPU",
brand: "Palit",
name: "Palit GeForce RTX 5070 Dual",
spec: "12 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-zotac-geforce-rtx-5070-trinity-oc",
category: "GPU",
brand: "Zotac",
name: "Zotac GeForce RTX 5070 Trinity OC",
spec: "12 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-zotac-geforce-rtx-5070-twin-edge-oc",
category: "GPU",
brand: "Zotac",
name: "Zotac GeForce RTX 5070 Twin Edge OC",
spec: "12 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-inno3d-geforce-rtx-5070-x3-oc",
category: "GPU",
brand: "Inno3D",
name: "Inno3D GeForce RTX 5070 X3 OC",
spec: "12 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-inno3d-geforce-rtx-5070-twin-x2",
category: "GPU",
brand: "Inno3D",
name: "Inno3D GeForce RTX 5070 Twin X2",
spec: "12 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-pny-geforce-rtx-5070-verto-dual",
category: "GPU",
brand: "PNY",
name: "PNY GeForce RTX 5070 Verto Dual",
spec: "12 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-gainward-geforce-rtx-5070-ghost-oc",
category: "GPU",
brand: "Gainward",
name: "Gainward GeForce RTX 5070 Ghost OC",
spec: "12 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-asus-geforce-rtx-5060-ti-16-go-tuf-gaming-oc",
category: "GPU",
brand: "ASUS",
name: "ASUS GeForce RTX 5060 Ti 16 Go TUF Gaming OC",
spec: "16 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-asus-geforce-rtx-5060-ti-16-go-prime-oc",
category: "GPU",
brand: "ASUS",
name: "ASUS GeForce RTX 5060 Ti 16 Go Prime OC",
spec: "16 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-asus-geforce-rtx-5060-ti-16-go-dual-oc",
category: "GPU",
brand: "ASUS",
name: "ASUS GeForce RTX 5060 Ti 16 Go Dual OC",
spec: "16 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-msi-geforce-rtx-5060-ti-16-go-gaming-trio-oc",
category: "GPU",
brand: "MSI",
name: "MSI GeForce RTX 5060 Ti 16 Go Gaming Trio OC",
spec: "16 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-msi-geforce-rtx-5060-ti-16-go-ventus-3x-oc",
category: "GPU",
brand: "MSI",
name: "MSI GeForce RTX 5060 Ti 16 Go Ventus 3X OC",
spec: "16 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-msi-geforce-rtx-5060-ti-16-go-ventus-2x-oc",
category: "GPU",
brand: "MSI",
name: "MSI GeForce RTX 5060 Ti 16 Go Ventus 2X OC",
spec: "16 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-gigabyte-geforce-rtx-5060-ti-16-go-gaming-oc",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte GeForce RTX 5060 Ti 16 Go Gaming OC",
spec: "16 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-gigabyte-geforce-rtx-5060-ti-16-go-eagle-oc",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte GeForce RTX 5060 Ti 16 Go Eagle OC",
spec: "16 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-gigabyte-geforce-rtx-5060-ti-16-go-windforce-oc",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte GeForce RTX 5060 Ti 16 Go WindForce OC",
spec: "16 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-palit-geforce-rtx-5060-ti-16-go-gamingpro-oc",
category: "GPU",
brand: "Palit",
name: "Palit GeForce RTX 5060 Ti 16 Go GamingPro OC",
spec: "16 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-palit-geforce-rtx-5060-ti-16-go-jetstream-oc",
category: "GPU",
brand: "Palit",
name: "Palit GeForce RTX 5060 Ti 16 Go JetStream OC",
spec: "16 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-palit-geforce-rtx-5060-ti-16-go-dual",
category: "GPU",
brand: "Palit",
name: "Palit GeForce RTX 5060 Ti 16 Go Dual",
spec: "16 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-zotac-geforce-rtx-5060-ti-16-go-trinity-oc",
category: "GPU",
brand: "Zotac",
name: "Zotac GeForce RTX 5060 Ti 16 Go Trinity OC",
spec: "16 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-zotac-geforce-rtx-5060-ti-16-go-twin-edge-oc",
category: "GPU",
brand: "Zotac",
name: "Zotac GeForce RTX 5060 Ti 16 Go Twin Edge OC",
spec: "16 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-inno3d-geforce-rtx-5060-ti-16-go-x3-oc",
category: "GPU",
brand: "Inno3D",
name: "Inno3D GeForce RTX 5060 Ti 16 Go X3 OC",
spec: "16 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-inno3d-geforce-rtx-5060-ti-16-go-twin-x2",
category: "GPU",
brand: "Inno3D",
name: "Inno3D GeForce RTX 5060 Ti 16 Go Twin X2",
spec: "16 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-pny-geforce-rtx-5060-ti-16-go-verto-dual",
category: "GPU",
brand: "PNY",
name: "PNY GeForce RTX 5060 Ti 16 Go Verto Dual",
spec: "16 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-gainward-geforce-rtx-5060-ti-16-go-ghost-oc",
category: "GPU",
brand: "Gainward",
name: "Gainward GeForce RTX 5060 Ti 16 Go Ghost OC",
spec: "16 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-asus-geforce-rtx-5060-ti-8-go-tuf-gaming-oc",
category: "GPU",
brand: "ASUS",
name: "ASUS GeForce RTX 5060 Ti 8 Go TUF Gaming OC",
spec: "8 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-asus-geforce-rtx-5060-ti-8-go-prime-oc",
category: "GPU",
brand: "ASUS",
name: "ASUS GeForce RTX 5060 Ti 8 Go Prime OC",
spec: "8 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-asus-geforce-rtx-5060-ti-8-go-dual-oc",
category: "GPU",
brand: "ASUS",
name: "ASUS GeForce RTX 5060 Ti 8 Go Dual OC",
spec: "8 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-msi-geforce-rtx-5060-ti-8-go-gaming-trio-oc",
category: "GPU",
brand: "MSI",
name: "MSI GeForce RTX 5060 Ti 8 Go Gaming Trio OC",
spec: "8 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-msi-geforce-rtx-5060-ti-8-go-ventus-3x-oc",
category: "GPU",
brand: "MSI",
name: "MSI GeForce RTX 5060 Ti 8 Go Ventus 3X OC",
spec: "8 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-msi-geforce-rtx-5060-ti-8-go-ventus-2x-oc",
category: "GPU",
brand: "MSI",
name: "MSI GeForce RTX 5060 Ti 8 Go Ventus 2X OC",
spec: "8 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-gigabyte-geforce-rtx-5060-ti-8-go-gaming-oc",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte GeForce RTX 5060 Ti 8 Go Gaming OC",
spec: "8 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-gigabyte-geforce-rtx-5060-ti-8-go-eagle-oc",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte GeForce RTX 5060 Ti 8 Go Eagle OC",
spec: "8 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-gigabyte-geforce-rtx-5060-ti-8-go-windforce-oc",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte GeForce RTX 5060 Ti 8 Go WindForce OC",
spec: "8 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-palit-geforce-rtx-5060-ti-8-go-gamingpro-oc",
category: "GPU",
brand: "Palit",
name: "Palit GeForce RTX 5060 Ti 8 Go GamingPro OC",
spec: "8 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-palit-geforce-rtx-5060-ti-8-go-jetstream-oc",
category: "GPU",
brand: "Palit",
name: "Palit GeForce RTX 5060 Ti 8 Go JetStream OC",
spec: "8 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-palit-geforce-rtx-5060-ti-8-go-dual",
category: "GPU",
brand: "Palit",
name: "Palit GeForce RTX 5060 Ti 8 Go Dual",
spec: "8 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-zotac-geforce-rtx-5060-ti-8-go-trinity-oc",
category: "GPU",
brand: "Zotac",
name: "Zotac GeForce RTX 5060 Ti 8 Go Trinity OC",
spec: "8 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-zotac-geforce-rtx-5060-ti-8-go-twin-edge-oc",
category: "GPU",
brand: "Zotac",
name: "Zotac GeForce RTX 5060 Ti 8 Go Twin Edge OC",
spec: "8 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-inno3d-geforce-rtx-5060-ti-8-go-x3-oc",
category: "GPU",
brand: "Inno3D",
name: "Inno3D GeForce RTX 5060 Ti 8 Go X3 OC",
spec: "8 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-inno3d-geforce-rtx-5060-ti-8-go-twin-x2",
category: "GPU",
brand: "Inno3D",
name: "Inno3D GeForce RTX 5060 Ti 8 Go Twin X2",
spec: "8 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-pny-geforce-rtx-5060-ti-8-go-verto-dual",
category: "GPU",
brand: "PNY",
name: "PNY GeForce RTX 5060 Ti 8 Go Verto Dual",
spec: "8 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-gainward-geforce-rtx-5060-ti-8-go-ghost-oc",
category: "GPU",
brand: "Gainward",
name: "Gainward GeForce RTX 5060 Ti 8 Go Ghost OC",
spec: "8 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-asus-geforce-rtx-5060-dual-oc",
category: "GPU",
brand: "ASUS",
name: "ASUS GeForce RTX 5060 Dual OC",
spec: "8 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-asus-geforce-rtx-5060-prime-oc",
category: "GPU",
brand: "ASUS",
name: "ASUS GeForce RTX 5060 Prime OC",
spec: "8 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-msi-geforce-rtx-5060-ventus-2x-oc",
category: "GPU",
brand: "MSI",
name: "MSI GeForce RTX 5060 Ventus 2X OC",
spec: "8 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-msi-geforce-rtx-5060-shadow-3x-oc",
category: "GPU",
brand: "MSI",
name: "MSI GeForce RTX 5060 Shadow 3X OC",
spec: "8 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-gigabyte-geforce-rtx-5060-eagle-oc",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte GeForce RTX 5060 Eagle OC",
spec: "8 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-gigabyte-geforce-rtx-5060-windforce-oc",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte GeForce RTX 5060 WindForce OC",
spec: "8 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-palit-geforce-rtx-5060-dual",
category: "GPU",
brand: "Palit",
name: "Palit GeForce RTX 5060 Dual",
spec: "8 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-palit-geforce-rtx-5060-stormx",
category: "GPU",
brand: "Palit",
name: "Palit GeForce RTX 5060 StormX",
spec: "8 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-zotac-geforce-rtx-5060-twin-edge-oc",
category: "GPU",
brand: "Zotac",
name: "Zotac GeForce RTX 5060 Twin Edge OC",
spec: "8 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-zotac-geforce-rtx-5060-solo",
category: "GPU",
brand: "Zotac",
name: "Zotac GeForce RTX 5060 Solo",
spec: "8 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-inno3d-geforce-rtx-5060-twin-x2",
category: "GPU",
brand: "Inno3D",
name: "Inno3D GeForce RTX 5060 Twin X2",
spec: "8 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-pny-geforce-rtx-5060-verto-dual",
category: "GPU",
brand: "PNY",
name: "PNY GeForce RTX 5060 Verto Dual",
spec: "8 Go GDDR7",
image: "",
offers: []
},
{
id: "gpu-asus-geforce-rtx-4090-rog-astral-oc",
category: "GPU",
brand: "ASUS",
name: "ASUS GeForce RTX 4090 ROG Astral OC",
spec: "24 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-asus-geforce-rtx-4090-rog-strix-oc",
category: "GPU",
brand: "ASUS",
name: "ASUS GeForce RTX 4090 ROG Strix OC",
spec: "24 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-asus-geforce-rtx-4090-tuf-gaming-oc",
category: "GPU",
brand: "ASUS",
name: "ASUS GeForce RTX 4090 TUF Gaming OC",
spec: "24 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-msi-geforce-rtx-4090-suprim-x",
category: "GPU",
brand: "MSI",
name: "MSI GeForce RTX 4090 SUPRIM X",
spec: "24 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-msi-geforce-rtx-4090-gaming-trio-oc",
category: "GPU",
brand: "MSI",
name: "MSI GeForce RTX 4090 Gaming Trio OC",
spec: "24 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-msi-geforce-rtx-4090-ventus-3x-oc",
category: "GPU",
brand: "MSI",
name: "MSI GeForce RTX 4090 Ventus 3X OC",
spec: "24 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-gigabyte-geforce-rtx-4090-aorus-master",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte GeForce RTX 4090 AORUS Master",
spec: "24 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-gigabyte-geforce-rtx-4090-gaming-oc",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte GeForce RTX 4090 Gaming OC",
spec: "24 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-gigabyte-geforce-rtx-4090-windforce-oc",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte GeForce RTX 4090 WindForce OC",
spec: "24 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-palit-geforce-rtx-4090-gamerock",
category: "GPU",
brand: "Palit",
name: "Palit GeForce RTX 4090 GameRock",
spec: "24 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-palit-geforce-rtx-4090-gamingpro-oc",
category: "GPU",
brand: "Palit",
name: "Palit GeForce RTX 4090 GamingPro OC",
spec: "24 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-zotac-geforce-rtx-4090-amp-extreme-airo",
category: "GPU",
brand: "Zotac",
name: "Zotac GeForce RTX 4090 AMP Extreme AIRO",
spec: "24 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-zotac-geforce-rtx-4090-trinity-oc",
category: "GPU",
brand: "Zotac",
name: "Zotac GeForce RTX 4090 Trinity OC",
spec: "24 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-inno3d-geforce-rtx-4090-ichill-x3",
category: "GPU",
brand: "Inno3D",
name: "Inno3D GeForce RTX 4090 iChill X3",
spec: "24 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-inno3d-geforce-rtx-4090-x3-oc",
category: "GPU",
brand: "Inno3D",
name: "Inno3D GeForce RTX 4090 X3 OC",
spec: "24 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-pny-geforce-rtx-4090-xlr8-gaming-verto-oc",
category: "GPU",
brand: "PNY",
name: "PNY GeForce RTX 4090 XLR8 Gaming Verto OC",
spec: "24 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-gainward-geforce-rtx-4090-phoenix-gs",
category: "GPU",
brand: "Gainward",
name: "Gainward GeForce RTX 4090 Phoenix GS",
spec: "24 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-asus-geforce-rtx-4080-super-rog-astral-oc",
category: "GPU",
brand: "ASUS",
name: "ASUS GeForce RTX 4080 Super ROG Astral OC",
spec: "16 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-asus-geforce-rtx-4080-super-rog-strix-oc",
category: "GPU",
brand: "ASUS",
name: "ASUS GeForce RTX 4080 Super ROG Strix OC",
spec: "16 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-asus-geforce-rtx-4080-super-tuf-gaming-oc",
category: "GPU",
brand: "ASUS",
name: "ASUS GeForce RTX 4080 Super TUF Gaming OC",
spec: "16 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-msi-geforce-rtx-4080-super-suprim-x",
category: "GPU",
brand: "MSI",
name: "MSI GeForce RTX 4080 Super SUPRIM X",
spec: "16 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-msi-geforce-rtx-4080-super-gaming-trio-oc",
category: "GPU",
brand: "MSI",
name: "MSI GeForce RTX 4080 Super Gaming Trio OC",
spec: "16 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-msi-geforce-rtx-4080-super-ventus-3x-oc",
category: "GPU",
brand: "MSI",
name: "MSI GeForce RTX 4080 Super Ventus 3X OC",
spec: "16 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-gigabyte-geforce-rtx-4080-super-aorus-master",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte GeForce RTX 4080 Super AORUS Master",
spec: "16 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-gigabyte-geforce-rtx-4080-super-gaming-oc",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte GeForce RTX 4080 Super Gaming OC",
spec: "16 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-gigabyte-geforce-rtx-4080-super-windforce-oc",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte GeForce RTX 4080 Super WindForce OC",
spec: "16 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-palit-geforce-rtx-4080-super-gamerock",
category: "GPU",
brand: "Palit",
name: "Palit GeForce RTX 4080 Super GameRock",
spec: "16 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-palit-geforce-rtx-4080-super-gamingpro-oc",
category: "GPU",
brand: "Palit",
name: "Palit GeForce RTX 4080 Super GamingPro OC",
spec: "16 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-zotac-geforce-rtx-4080-super-amp-extreme-airo",
category: "GPU",
brand: "Zotac",
name: "Zotac GeForce RTX 4080 Super AMP Extreme AIRO",
spec: "16 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-zotac-geforce-rtx-4080-super-trinity-oc",
category: "GPU",
brand: "Zotac",
name: "Zotac GeForce RTX 4080 Super Trinity OC",
spec: "16 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-inno3d-geforce-rtx-4080-super-ichill-x3",
category: "GPU",
brand: "Inno3D",
name: "Inno3D GeForce RTX 4080 Super iChill X3",
spec: "16 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-inno3d-geforce-rtx-4080-super-x3-oc",
category: "GPU",
brand: "Inno3D",
name: "Inno3D GeForce RTX 4080 Super X3 OC",
spec: "16 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-pny-geforce-rtx-4080-super-xlr8-gaming-verto-oc",
category: "GPU",
brand: "PNY",
name: "PNY GeForce RTX 4080 Super XLR8 Gaming Verto OC",
spec: "16 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-gainward-geforce-rtx-4080-super-phoenix-gs",
category: "GPU",
brand: "Gainward",
name: "Gainward GeForce RTX 4080 Super Phoenix GS",
spec: "16 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-asus-geforce-rtx-4070-ti-super-rog-astral-oc",
category: "GPU",
brand: "ASUS",
name: "ASUS GeForce RTX 4070 Ti Super ROG Astral OC",
spec: "16 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-asus-geforce-rtx-4070-ti-super-rog-strix-oc",
category: "GPU",
brand: "ASUS",
name: "ASUS GeForce RTX 4070 Ti Super ROG Strix OC",
spec: "16 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-asus-geforce-rtx-4070-ti-super-tuf-gaming-oc",
category: "GPU",
brand: "ASUS",
name: "ASUS GeForce RTX 4070 Ti Super TUF Gaming OC",
spec: "16 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-msi-geforce-rtx-4070-ti-super-suprim-x",
category: "GPU",
brand: "MSI",
name: "MSI GeForce RTX 4070 Ti Super SUPRIM X",
spec: "16 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-msi-geforce-rtx-4070-ti-super-gaming-trio-oc",
category: "GPU",
brand: "MSI",
name: "MSI GeForce RTX 4070 Ti Super Gaming Trio OC",
spec: "16 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-msi-geforce-rtx-4070-ti-super-ventus-3x-oc",
category: "GPU",
brand: "MSI",
name: "MSI GeForce RTX 4070 Ti Super Ventus 3X OC",
spec: "16 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-gigabyte-geforce-rtx-4070-ti-super-aorus-master",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte GeForce RTX 4070 Ti Super AORUS Master",
spec: "16 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-gigabyte-geforce-rtx-4070-ti-super-gaming-oc",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte GeForce RTX 4070 Ti Super Gaming OC",
spec: "16 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-gigabyte-geforce-rtx-4070-ti-super-windforce-oc",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte GeForce RTX 4070 Ti Super WindForce OC",
spec: "16 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-palit-geforce-rtx-4070-ti-super-gamerock",
category: "GPU",
brand: "Palit",
name: "Palit GeForce RTX 4070 Ti Super GameRock",
spec: "16 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-palit-geforce-rtx-4070-ti-super-gamingpro-oc",
category: "GPU",
brand: "Palit",
name: "Palit GeForce RTX 4070 Ti Super GamingPro OC",
spec: "16 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-zotac-geforce-rtx-4070-ti-super-amp-extreme-airo",
category: "GPU",
brand: "Zotac",
name: "Zotac GeForce RTX 4070 Ti Super AMP Extreme AIRO",
spec: "16 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-zotac-geforce-rtx-4070-ti-super-trinity-oc",
category: "GPU",
brand: "Zotac",
name: "Zotac GeForce RTX 4070 Ti Super Trinity OC",
spec: "16 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-inno3d-geforce-rtx-4070-ti-super-ichill-x3",
category: "GPU",
brand: "Inno3D",
name: "Inno3D GeForce RTX 4070 Ti Super iChill X3",
spec: "16 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-inno3d-geforce-rtx-4070-ti-super-x3-oc",
category: "GPU",
brand: "Inno3D",
name: "Inno3D GeForce RTX 4070 Ti Super X3 OC",
spec: "16 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-pny-geforce-rtx-4070-ti-super-xlr8-gaming-verto-oc",
category: "GPU",
brand: "PNY",
name: "PNY GeForce RTX 4070 Ti Super XLR8 Gaming Verto OC",
spec: "16 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-gainward-geforce-rtx-4070-ti-super-phoenix-gs",
category: "GPU",
brand: "Gainward",
name: "Gainward GeForce RTX 4070 Ti Super Phoenix GS",
spec: "16 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-asus-geforce-rtx-4070-super-tuf-gaming-oc",
category: "GPU",
brand: "ASUS",
name: "ASUS GeForce RTX 4070 Super TUF Gaming OC",
spec: "12 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-asus-geforce-rtx-4070-super-prime-oc",
category: "GPU",
brand: "ASUS",
name: "ASUS GeForce RTX 4070 Super Prime OC",
spec: "12 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-asus-geforce-rtx-4070-super-dual-oc",
category: "GPU",
brand: "ASUS",
name: "ASUS GeForce RTX 4070 Super Dual OC",
spec: "12 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-msi-geforce-rtx-4070-super-gaming-trio-oc",
category: "GPU",
brand: "MSI",
name: "MSI GeForce RTX 4070 Super Gaming Trio OC",
spec: "12 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-msi-geforce-rtx-4070-super-ventus-3x-oc",
category: "GPU",
brand: "MSI",
name: "MSI GeForce RTX 4070 Super Ventus 3X OC",
spec: "12 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-msi-geforce-rtx-4070-super-ventus-2x-oc",
category: "GPU",
brand: "MSI",
name: "MSI GeForce RTX 4070 Super Ventus 2X OC",
spec: "12 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-gigabyte-geforce-rtx-4070-super-gaming-oc",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte GeForce RTX 4070 Super Gaming OC",
spec: "12 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-gigabyte-geforce-rtx-4070-super-eagle-oc",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte GeForce RTX 4070 Super Eagle OC",
spec: "12 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-gigabyte-geforce-rtx-4070-super-windforce-oc",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte GeForce RTX 4070 Super WindForce OC",
spec: "12 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-palit-geforce-rtx-4070-super-gamingpro-oc",
category: "GPU",
brand: "Palit",
name: "Palit GeForce RTX 4070 Super GamingPro OC",
spec: "12 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-palit-geforce-rtx-4070-super-jetstream-oc",
category: "GPU",
brand: "Palit",
name: "Palit GeForce RTX 4070 Super JetStream OC",
spec: "12 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-palit-geforce-rtx-4070-super-dual",
category: "GPU",
brand: "Palit",
name: "Palit GeForce RTX 4070 Super Dual",
spec: "12 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-zotac-geforce-rtx-4070-super-trinity-oc",
category: "GPU",
brand: "Zotac",
name: "Zotac GeForce RTX 4070 Super Trinity OC",
spec: "12 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-zotac-geforce-rtx-4070-super-twin-edge-oc",
category: "GPU",
brand: "Zotac",
name: "Zotac GeForce RTX 4070 Super Twin Edge OC",
spec: "12 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-inno3d-geforce-rtx-4070-super-x3-oc",
category: "GPU",
brand: "Inno3D",
name: "Inno3D GeForce RTX 4070 Super X3 OC",
spec: "12 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-inno3d-geforce-rtx-4070-super-twin-x2",
category: "GPU",
brand: "Inno3D",
name: "Inno3D GeForce RTX 4070 Super Twin X2",
spec: "12 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-pny-geforce-rtx-4070-super-verto-dual",
category: "GPU",
brand: "PNY",
name: "PNY GeForce RTX 4070 Super Verto Dual",
spec: "12 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-gainward-geforce-rtx-4070-super-ghost-oc",
category: "GPU",
brand: "Gainward",
name: "Gainward GeForce RTX 4070 Super Ghost OC",
spec: "12 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-asus-geforce-rtx-4070-tuf-gaming-oc",
category: "GPU",
brand: "ASUS",
name: "ASUS GeForce RTX 4070 TUF Gaming OC",
spec: "12 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-asus-geforce-rtx-4070-prime-oc",
category: "GPU",
brand: "ASUS",
name: "ASUS GeForce RTX 4070 Prime OC",
spec: "12 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-asus-geforce-rtx-4070-dual-oc",
category: "GPU",
brand: "ASUS",
name: "ASUS GeForce RTX 4070 Dual OC",
spec: "12 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-msi-geforce-rtx-4070-gaming-trio-oc",
category: "GPU",
brand: "MSI",
name: "MSI GeForce RTX 4070 Gaming Trio OC",
spec: "12 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-msi-geforce-rtx-4070-ventus-3x-oc",
category: "GPU",
brand: "MSI",
name: "MSI GeForce RTX 4070 Ventus 3X OC",
spec: "12 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-msi-geforce-rtx-4070-ventus-2x-oc",
category: "GPU",
brand: "MSI",
name: "MSI GeForce RTX 4070 Ventus 2X OC",
spec: "12 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-gigabyte-geforce-rtx-4070-gaming-oc",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte GeForce RTX 4070 Gaming OC",
spec: "12 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-gigabyte-geforce-rtx-4070-eagle-oc",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte GeForce RTX 4070 Eagle OC",
spec: "12 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-gigabyte-geforce-rtx-4070-windforce-oc",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte GeForce RTX 4070 WindForce OC",
spec: "12 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-palit-geforce-rtx-4070-gamingpro-oc",
category: "GPU",
brand: "Palit",
name: "Palit GeForce RTX 4070 GamingPro OC",
spec: "12 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-palit-geforce-rtx-4070-jetstream-oc",
category: "GPU",
brand: "Palit",
name: "Palit GeForce RTX 4070 JetStream OC",
spec: "12 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-palit-geforce-rtx-4070-dual",
category: "GPU",
brand: "Palit",
name: "Palit GeForce RTX 4070 Dual",
spec: "12 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-zotac-geforce-rtx-4070-trinity-oc",
category: "GPU",
brand: "Zotac",
name: "Zotac GeForce RTX 4070 Trinity OC",
spec: "12 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-zotac-geforce-rtx-4070-twin-edge-oc",
category: "GPU",
brand: "Zotac",
name: "Zotac GeForce RTX 4070 Twin Edge OC",
spec: "12 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-inno3d-geforce-rtx-4070-x3-oc",
category: "GPU",
brand: "Inno3D",
name: "Inno3D GeForce RTX 4070 X3 OC",
spec: "12 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-inno3d-geforce-rtx-4070-twin-x2",
category: "GPU",
brand: "Inno3D",
name: "Inno3D GeForce RTX 4070 Twin X2",
spec: "12 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-pny-geforce-rtx-4070-verto-dual",
category: "GPU",
brand: "PNY",
name: "PNY GeForce RTX 4070 Verto Dual",
spec: "12 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-gainward-geforce-rtx-4070-ghost-oc",
category: "GPU",
brand: "Gainward",
name: "Gainward GeForce RTX 4070 Ghost OC",
spec: "12 Go GDDR6X",
image: "",
offers: []
},
{
id: "gpu-asus-geforce-rtx-4060-ti-16-go-tuf-gaming-oc",
category: "GPU",
brand: "ASUS",
name: "ASUS GeForce RTX 4060 Ti 16 Go TUF Gaming OC",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-asus-geforce-rtx-4060-ti-16-go-prime-oc",
category: "GPU",
brand: "ASUS",
name: "ASUS GeForce RTX 4060 Ti 16 Go Prime OC",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-asus-geforce-rtx-4060-ti-16-go-dual-oc",
category: "GPU",
brand: "ASUS",
name: "ASUS GeForce RTX 4060 Ti 16 Go Dual OC",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-msi-geforce-rtx-4060-ti-16-go-gaming-trio-oc",
category: "GPU",
brand: "MSI",
name: "MSI GeForce RTX 4060 Ti 16 Go Gaming Trio OC",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-msi-geforce-rtx-4060-ti-16-go-ventus-3x-oc",
category: "GPU",
brand: "MSI",
name: "MSI GeForce RTX 4060 Ti 16 Go Ventus 3X OC",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-msi-geforce-rtx-4060-ti-16-go-ventus-2x-oc",
category: "GPU",
brand: "MSI",
name: "MSI GeForce RTX 4060 Ti 16 Go Ventus 2X OC",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-gigabyte-geforce-rtx-4060-ti-16-go-gaming-oc",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte GeForce RTX 4060 Ti 16 Go Gaming OC",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-gigabyte-geforce-rtx-4060-ti-16-go-eagle-oc",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte GeForce RTX 4060 Ti 16 Go Eagle OC",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-gigabyte-geforce-rtx-4060-ti-16-go-windforce-oc",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte GeForce RTX 4060 Ti 16 Go WindForce OC",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-palit-geforce-rtx-4060-ti-16-go-gamingpro-oc",
category: "GPU",
brand: "Palit",
name: "Palit GeForce RTX 4060 Ti 16 Go GamingPro OC",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-palit-geforce-rtx-4060-ti-16-go-jetstream-oc",
category: "GPU",
brand: "Palit",
name: "Palit GeForce RTX 4060 Ti 16 Go JetStream OC",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-palit-geforce-rtx-4060-ti-16-go-dual",
category: "GPU",
brand: "Palit",
name: "Palit GeForce RTX 4060 Ti 16 Go Dual",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-zotac-geforce-rtx-4060-ti-16-go-trinity-oc",
category: "GPU",
brand: "Zotac",
name: "Zotac GeForce RTX 4060 Ti 16 Go Trinity OC",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-zotac-geforce-rtx-4060-ti-16-go-twin-edge-oc",
category: "GPU",
brand: "Zotac",
name: "Zotac GeForce RTX 4060 Ti 16 Go Twin Edge OC",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-inno3d-geforce-rtx-4060-ti-16-go-x3-oc",
category: "GPU",
brand: "Inno3D",
name: "Inno3D GeForce RTX 4060 Ti 16 Go X3 OC",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-inno3d-geforce-rtx-4060-ti-16-go-twin-x2",
category: "GPU",
brand: "Inno3D",
name: "Inno3D GeForce RTX 4060 Ti 16 Go Twin X2",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-pny-geforce-rtx-4060-ti-16-go-verto-dual",
category: "GPU",
brand: "PNY",
name: "PNY GeForce RTX 4060 Ti 16 Go Verto Dual",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-gainward-geforce-rtx-4060-ti-16-go-ghost-oc",
category: "GPU",
brand: "Gainward",
name: "Gainward GeForce RTX 4060 Ti 16 Go Ghost OC",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-asus-geforce-rtx-4060-ti-tuf-gaming-oc",
category: "GPU",
brand: "ASUS",
name: "ASUS GeForce RTX 4060 Ti TUF Gaming OC",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-asus-geforce-rtx-4060-ti-prime-oc",
category: "GPU",
brand: "ASUS",
name: "ASUS GeForce RTX 4060 Ti Prime OC",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-asus-geforce-rtx-4060-ti-dual-oc",
category: "GPU",
brand: "ASUS",
name: "ASUS GeForce RTX 4060 Ti Dual OC",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-msi-geforce-rtx-4060-ti-gaming-trio-oc",
category: "GPU",
brand: "MSI",
name: "MSI GeForce RTX 4060 Ti Gaming Trio OC",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-msi-geforce-rtx-4060-ti-ventus-3x-oc",
category: "GPU",
brand: "MSI",
name: "MSI GeForce RTX 4060 Ti Ventus 3X OC",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-msi-geforce-rtx-4060-ti-ventus-2x-oc",
category: "GPU",
brand: "MSI",
name: "MSI GeForce RTX 4060 Ti Ventus 2X OC",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-gigabyte-geforce-rtx-4060-ti-gaming-oc",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte GeForce RTX 4060 Ti Gaming OC",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-gigabyte-geforce-rtx-4060-ti-eagle-oc",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte GeForce RTX 4060 Ti Eagle OC",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-gigabyte-geforce-rtx-4060-ti-windforce-oc",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte GeForce RTX 4060 Ti WindForce OC",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-palit-geforce-rtx-4060-ti-gamingpro-oc",
category: "GPU",
brand: "Palit",
name: "Palit GeForce RTX 4060 Ti GamingPro OC",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-palit-geforce-rtx-4060-ti-jetstream-oc",
category: "GPU",
brand: "Palit",
name: "Palit GeForce RTX 4060 Ti JetStream OC",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-palit-geforce-rtx-4060-ti-dual",
category: "GPU",
brand: "Palit",
name: "Palit GeForce RTX 4060 Ti Dual",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-zotac-geforce-rtx-4060-ti-trinity-oc",
category: "GPU",
brand: "Zotac",
name: "Zotac GeForce RTX 4060 Ti Trinity OC",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-zotac-geforce-rtx-4060-ti-twin-edge-oc",
category: "GPU",
brand: "Zotac",
name: "Zotac GeForce RTX 4060 Ti Twin Edge OC",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-inno3d-geforce-rtx-4060-ti-x3-oc",
category: "GPU",
brand: "Inno3D",
name: "Inno3D GeForce RTX 4060 Ti X3 OC",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-inno3d-geforce-rtx-4060-ti-twin-x2",
category: "GPU",
brand: "Inno3D",
name: "Inno3D GeForce RTX 4060 Ti Twin X2",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-pny-geforce-rtx-4060-ti-verto-dual",
category: "GPU",
brand: "PNY",
name: "PNY GeForce RTX 4060 Ti Verto Dual",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-gainward-geforce-rtx-4060-ti-ghost-oc",
category: "GPU",
brand: "Gainward",
name: "Gainward GeForce RTX 4060 Ti Ghost OC",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-asus-geforce-rtx-4060-dual-oc",
category: "GPU",
brand: "ASUS",
name: "ASUS GeForce RTX 4060 Dual OC",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-asus-geforce-rtx-4060-prime-oc",
category: "GPU",
brand: "ASUS",
name: "ASUS GeForce RTX 4060 Prime OC",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-msi-geforce-rtx-4060-ventus-2x-oc",
category: "GPU",
brand: "MSI",
name: "MSI GeForce RTX 4060 Ventus 2X OC",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-msi-geforce-rtx-4060-shadow-3x-oc",
category: "GPU",
brand: "MSI",
name: "MSI GeForce RTX 4060 Shadow 3X OC",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-gigabyte-geforce-rtx-4060-eagle-oc",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte GeForce RTX 4060 Eagle OC",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-gigabyte-geforce-rtx-4060-windforce-oc",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte GeForce RTX 4060 WindForce OC",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-palit-geforce-rtx-4060-dual",
category: "GPU",
brand: "Palit",
name: "Palit GeForce RTX 4060 Dual",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-palit-geforce-rtx-4060-stormx",
category: "GPU",
brand: "Palit",
name: "Palit GeForce RTX 4060 StormX",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-zotac-geforce-rtx-4060-twin-edge-oc",
category: "GPU",
brand: "Zotac",
name: "Zotac GeForce RTX 4060 Twin Edge OC",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-zotac-geforce-rtx-4060-solo",
category: "GPU",
brand: "Zotac",
name: "Zotac GeForce RTX 4060 Solo",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-inno3d-geforce-rtx-4060-twin-x2",
category: "GPU",
brand: "Inno3D",
name: "Inno3D GeForce RTX 4060 Twin X2",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-pny-geforce-rtx-4060-verto-dual",
category: "GPU",
brand: "PNY",
name: "PNY GeForce RTX 4060 Verto Dual",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-asus-geforce-rtx-3060-12-go-dual-oc",
category: "GPU",
brand: "ASUS",
name: "ASUS GeForce RTX 3060 12 Go Dual OC",
spec: "12 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-asus-geforce-rtx-3060-12-go-prime-oc",
category: "GPU",
brand: "ASUS",
name: "ASUS GeForce RTX 3060 12 Go Prime OC",
spec: "12 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-msi-geforce-rtx-3060-12-go-ventus-2x-oc",
category: "GPU",
brand: "MSI",
name: "MSI GeForce RTX 3060 12 Go Ventus 2X OC",
spec: "12 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-msi-geforce-rtx-3060-12-go-shadow-3x-oc",
category: "GPU",
brand: "MSI",
name: "MSI GeForce RTX 3060 12 Go Shadow 3X OC",
spec: "12 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-gigabyte-geforce-rtx-3060-12-go-eagle-oc",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte GeForce RTX 3060 12 Go Eagle OC",
spec: "12 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-gigabyte-geforce-rtx-3060-12-go-windforce-oc",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte GeForce RTX 3060 12 Go WindForce OC",
spec: "12 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-palit-geforce-rtx-3060-12-go-dual",
category: "GPU",
brand: "Palit",
name: "Palit GeForce RTX 3060 12 Go Dual",
spec: "12 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-palit-geforce-rtx-3060-12-go-stormx",
category: "GPU",
brand: "Palit",
name: "Palit GeForce RTX 3060 12 Go StormX",
spec: "12 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-zotac-geforce-rtx-3060-12-go-twin-edge-oc",
category: "GPU",
brand: "Zotac",
name: "Zotac GeForce RTX 3060 12 Go Twin Edge OC",
spec: "12 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-zotac-geforce-rtx-3060-12-go-solo",
category: "GPU",
brand: "Zotac",
name: "Zotac GeForce RTX 3060 12 Go Solo",
spec: "12 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-inno3d-geforce-rtx-3060-12-go-twin-x2",
category: "GPU",
brand: "Inno3D",
name: "Inno3D GeForce RTX 3060 12 Go Twin X2",
spec: "12 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-pny-geforce-rtx-3060-12-go-verto-dual",
category: "GPU",
brand: "PNY",
name: "PNY GeForce RTX 3060 12 Go Verto Dual",
spec: "12 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-asus-geforce-rtx-3050-8-go-dual-oc",
category: "GPU",
brand: "ASUS",
name: "ASUS GeForce RTX 3050 8 Go Dual OC",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-asus-geforce-rtx-3050-8-go-prime-oc",
category: "GPU",
brand: "ASUS",
name: "ASUS GeForce RTX 3050 8 Go Prime OC",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-msi-geforce-rtx-3050-8-go-ventus-2x-oc",
category: "GPU",
brand: "MSI",
name: "MSI GeForce RTX 3050 8 Go Ventus 2X OC",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-msi-geforce-rtx-3050-8-go-shadow-3x-oc",
category: "GPU",
brand: "MSI",
name: "MSI GeForce RTX 3050 8 Go Shadow 3X OC",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-gigabyte-geforce-rtx-3050-8-go-eagle-oc",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte GeForce RTX 3050 8 Go Eagle OC",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-gigabyte-geforce-rtx-3050-8-go-windforce-oc",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte GeForce RTX 3050 8 Go WindForce OC",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-palit-geforce-rtx-3050-8-go-dual",
category: "GPU",
brand: "Palit",
name: "Palit GeForce RTX 3050 8 Go Dual",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-palit-geforce-rtx-3050-8-go-stormx",
category: "GPU",
brand: "Palit",
name: "Palit GeForce RTX 3050 8 Go StormX",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-zotac-geforce-rtx-3050-8-go-twin-edge-oc",
category: "GPU",
brand: "Zotac",
name: "Zotac GeForce RTX 3050 8 Go Twin Edge OC",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-zotac-geforce-rtx-3050-8-go-solo",
category: "GPU",
brand: "Zotac",
name: "Zotac GeForce RTX 3050 8 Go Solo",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-inno3d-geforce-rtx-3050-8-go-twin-x2",
category: "GPU",
brand: "Inno3D",
name: "Inno3D GeForce RTX 3050 8 Go Twin X2",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-pny-geforce-rtx-3050-8-go-verto-dual",
category: "GPU",
brand: "PNY",
name: "PNY GeForce RTX 3050 8 Go Verto Dual",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-sapphire-radeon-rx-9070-xt-nitro",
category: "GPU",
brand: "Sapphire",
name: "Sapphire Radeon RX 9070 XT Nitro+",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-sapphire-radeon-rx-9070-xt-pulse",
category: "GPU",
brand: "Sapphire",
name: "Sapphire Radeon RX 9070 XT Pulse",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-powercolor-radeon-rx-9070-xt-red-devil",
category: "GPU",
brand: "PowerColor",
name: "PowerColor Radeon RX 9070 XT Red Devil",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-powercolor-radeon-rx-9070-xt-hellhound",
category: "GPU",
brand: "PowerColor",
name: "PowerColor Radeon RX 9070 XT Hellhound",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-xfx-radeon-rx-9070-xt-speedster-merc-310",
category: "GPU",
brand: "XFX",
name: "XFX Radeon RX 9070 XT Speedster MERC 310",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-xfx-radeon-rx-9070-xt-speedster-qick-319",
category: "GPU",
brand: "XFX",
name: "XFX Radeon RX 9070 XT Speedster QICK 319",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-asrock-radeon-rx-9070-xt-taichi-oc",
category: "GPU",
brand: "ASRock",
name: "ASRock Radeon RX 9070 XT Taichi OC",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-asrock-radeon-rx-9070-xt-steel-legend-oc",
category: "GPU",
brand: "ASRock",
name: "ASRock Radeon RX 9070 XT Steel Legend OC",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-asus-radeon-rx-9070-xt-tuf-gaming-oc",
category: "GPU",
brand: "ASUS",
name: "ASUS Radeon RX 9070 XT TUF Gaming OC",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-gigabyte-radeon-rx-9070-xt-gaming-oc",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte Radeon RX 9070 XT Gaming OC",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-sapphire-radeon-rx-9070-nitro",
category: "GPU",
brand: "Sapphire",
name: "Sapphire Radeon RX 9070 Nitro+",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-sapphire-radeon-rx-9070-pulse",
category: "GPU",
brand: "Sapphire",
name: "Sapphire Radeon RX 9070 Pulse",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-powercolor-radeon-rx-9070-red-devil",
category: "GPU",
brand: "PowerColor",
name: "PowerColor Radeon RX 9070 Red Devil",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-powercolor-radeon-rx-9070-hellhound",
category: "GPU",
brand: "PowerColor",
name: "PowerColor Radeon RX 9070 Hellhound",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-xfx-radeon-rx-9070-speedster-merc-310",
category: "GPU",
brand: "XFX",
name: "XFX Radeon RX 9070 Speedster MERC 310",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-xfx-radeon-rx-9070-speedster-qick-319",
category: "GPU",
brand: "XFX",
name: "XFX Radeon RX 9070 Speedster QICK 319",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-asrock-radeon-rx-9070-taichi-oc",
category: "GPU",
brand: "ASRock",
name: "ASRock Radeon RX 9070 Taichi OC",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-asrock-radeon-rx-9070-steel-legend-oc",
category: "GPU",
brand: "ASRock",
name: "ASRock Radeon RX 9070 Steel Legend OC",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-asus-radeon-rx-9070-tuf-gaming-oc",
category: "GPU",
brand: "ASUS",
name: "ASUS Radeon RX 9070 TUF Gaming OC",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-gigabyte-radeon-rx-9070-gaming-oc",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte Radeon RX 9070 Gaming OC",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-sapphire-radeon-rx-9060-xt-16-go-pulse",
category: "GPU",
brand: "Sapphire",
name: "Sapphire Radeon RX 9060 XT 16 Go Pulse",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-sapphire-radeon-rx-9060-xt-16-go-pure",
category: "GPU",
brand: "Sapphire",
name: "Sapphire Radeon RX 9060 XT 16 Go Pure",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-powercolor-radeon-rx-9060-xt-16-go-hellhound",
category: "GPU",
brand: "PowerColor",
name: "PowerColor Radeon RX 9060 XT 16 Go Hellhound",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-powercolor-radeon-rx-9060-xt-16-go-fighter",
category: "GPU",
brand: "PowerColor",
name: "PowerColor Radeon RX 9060 XT 16 Go Fighter",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-xfx-radeon-rx-9060-xt-16-go-speedster-qick-319",
category: "GPU",
brand: "XFX",
name: "XFX Radeon RX 9060 XT 16 Go Speedster QICK 319",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-xfx-radeon-rx-9060-xt-16-go-swift",
category: "GPU",
brand: "XFX",
name: "XFX Radeon RX 9060 XT 16 Go Swift",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-asrock-radeon-rx-9060-xt-16-go-steel-legend-oc",
category: "GPU",
brand: "ASRock",
name: "ASRock Radeon RX 9060 XT 16 Go Steel Legend OC",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-asrock-radeon-rx-9060-xt-16-go-challenger-oc",
category: "GPU",
brand: "ASRock",
name: "ASRock Radeon RX 9060 XT 16 Go Challenger OC",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-asus-radeon-rx-9060-xt-16-go-dual-oc",
category: "GPU",
brand: "ASUS",
name: "ASUS Radeon RX 9060 XT 16 Go Dual OC",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-gigabyte-radeon-rx-9060-xt-16-go-gaming-oc",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte Radeon RX 9060 XT 16 Go Gaming OC",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-gigabyte-radeon-rx-9060-xt-16-go-eagle",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte Radeon RX 9060 XT 16 Go Eagle",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-sapphire-radeon-rx-9060-xt-8-go-pulse",
category: "GPU",
brand: "Sapphire",
name: "Sapphire Radeon RX 9060 XT 8 Go Pulse",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-sapphire-radeon-rx-9060-xt-8-go-pure",
category: "GPU",
brand: "Sapphire",
name: "Sapphire Radeon RX 9060 XT 8 Go Pure",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-powercolor-radeon-rx-9060-xt-8-go-hellhound",
category: "GPU",
brand: "PowerColor",
name: "PowerColor Radeon RX 9060 XT 8 Go Hellhound",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-powercolor-radeon-rx-9060-xt-8-go-fighter",
category: "GPU",
brand: "PowerColor",
name: "PowerColor Radeon RX 9060 XT 8 Go Fighter",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-xfx-radeon-rx-9060-xt-8-go-speedster-qick-319",
category: "GPU",
brand: "XFX",
name: "XFX Radeon RX 9060 XT 8 Go Speedster QICK 319",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-xfx-radeon-rx-9060-xt-8-go-swift",
category: "GPU",
brand: "XFX",
name: "XFX Radeon RX 9060 XT 8 Go Swift",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-asrock-radeon-rx-9060-xt-8-go-steel-legend-oc",
category: "GPU",
brand: "ASRock",
name: "ASRock Radeon RX 9060 XT 8 Go Steel Legend OC",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-asrock-radeon-rx-9060-xt-8-go-challenger-oc",
category: "GPU",
brand: "ASRock",
name: "ASRock Radeon RX 9060 XT 8 Go Challenger OC",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-asus-radeon-rx-9060-xt-8-go-dual-oc",
category: "GPU",
brand: "ASUS",
name: "ASUS Radeon RX 9060 XT 8 Go Dual OC",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-gigabyte-radeon-rx-9060-xt-8-go-gaming-oc",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte Radeon RX 9060 XT 8 Go Gaming OC",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-gigabyte-radeon-rx-9060-xt-8-go-eagle",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte Radeon RX 9060 XT 8 Go Eagle",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-sapphire-radeon-rx-7900-xtx-nitro",
category: "GPU",
brand: "Sapphire",
name: "Sapphire Radeon RX 7900 XTX Nitro+",
spec: "24 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-sapphire-radeon-rx-7900-xtx-pulse",
category: "GPU",
brand: "Sapphire",
name: "Sapphire Radeon RX 7900 XTX Pulse",
spec: "24 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-powercolor-radeon-rx-7900-xtx-red-devil",
category: "GPU",
brand: "PowerColor",
name: "PowerColor Radeon RX 7900 XTX Red Devil",
spec: "24 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-powercolor-radeon-rx-7900-xtx-hellhound",
category: "GPU",
brand: "PowerColor",
name: "PowerColor Radeon RX 7900 XTX Hellhound",
spec: "24 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-xfx-radeon-rx-7900-xtx-speedster-merc-310",
category: "GPU",
brand: "XFX",
name: "XFX Radeon RX 7900 XTX Speedster MERC 310",
spec: "24 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-xfx-radeon-rx-7900-xtx-speedster-qick-319",
category: "GPU",
brand: "XFX",
name: "XFX Radeon RX 7900 XTX Speedster QICK 319",
spec: "24 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-asrock-radeon-rx-7900-xtx-taichi-oc",
category: "GPU",
brand: "ASRock",
name: "ASRock Radeon RX 7900 XTX Taichi OC",
spec: "24 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-asrock-radeon-rx-7900-xtx-steel-legend-oc",
category: "GPU",
brand: "ASRock",
name: "ASRock Radeon RX 7900 XTX Steel Legend OC",
spec: "24 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-asus-radeon-rx-7900-xtx-tuf-gaming-oc",
category: "GPU",
brand: "ASUS",
name: "ASUS Radeon RX 7900 XTX TUF Gaming OC",
spec: "24 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-gigabyte-radeon-rx-7900-xtx-gaming-oc",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte Radeon RX 7900 XTX Gaming OC",
spec: "24 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-sapphire-radeon-rx-7900-xt-nitro",
category: "GPU",
brand: "Sapphire",
name: "Sapphire Radeon RX 7900 XT Nitro+",
spec: "20 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-sapphire-radeon-rx-7900-xt-pulse",
category: "GPU",
brand: "Sapphire",
name: "Sapphire Radeon RX 7900 XT Pulse",
spec: "20 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-powercolor-radeon-rx-7900-xt-red-devil",
category: "GPU",
brand: "PowerColor",
name: "PowerColor Radeon RX 7900 XT Red Devil",
spec: "20 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-powercolor-radeon-rx-7900-xt-hellhound",
category: "GPU",
brand: "PowerColor",
name: "PowerColor Radeon RX 7900 XT Hellhound",
spec: "20 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-xfx-radeon-rx-7900-xt-speedster-merc-310",
category: "GPU",
brand: "XFX",
name: "XFX Radeon RX 7900 XT Speedster MERC 310",
spec: "20 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-xfx-radeon-rx-7900-xt-speedster-qick-319",
category: "GPU",
brand: "XFX",
name: "XFX Radeon RX 7900 XT Speedster QICK 319",
spec: "20 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-asrock-radeon-rx-7900-xt-taichi-oc",
category: "GPU",
brand: "ASRock",
name: "ASRock Radeon RX 7900 XT Taichi OC",
spec: "20 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-asrock-radeon-rx-7900-xt-steel-legend-oc",
category: "GPU",
brand: "ASRock",
name: "ASRock Radeon RX 7900 XT Steel Legend OC",
spec: "20 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-asus-radeon-rx-7900-xt-tuf-gaming-oc",
category: "GPU",
brand: "ASUS",
name: "ASUS Radeon RX 7900 XT TUF Gaming OC",
spec: "20 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-gigabyte-radeon-rx-7900-xt-gaming-oc",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte Radeon RX 7900 XT Gaming OC",
spec: "20 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-sapphire-radeon-rx-7900-gre-pulse",
category: "GPU",
brand: "Sapphire",
name: "Sapphire Radeon RX 7900 GRE Pulse",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-sapphire-radeon-rx-7900-gre-pure",
category: "GPU",
brand: "Sapphire",
name: "Sapphire Radeon RX 7900 GRE Pure",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-powercolor-radeon-rx-7900-gre-hellhound",
category: "GPU",
brand: "PowerColor",
name: "PowerColor Radeon RX 7900 GRE Hellhound",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-powercolor-radeon-rx-7900-gre-fighter",
category: "GPU",
brand: "PowerColor",
name: "PowerColor Radeon RX 7900 GRE Fighter",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-xfx-radeon-rx-7900-gre-speedster-qick-319",
category: "GPU",
brand: "XFX",
name: "XFX Radeon RX 7900 GRE Speedster QICK 319",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-xfx-radeon-rx-7900-gre-swift",
category: "GPU",
brand: "XFX",
name: "XFX Radeon RX 7900 GRE Swift",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-asrock-radeon-rx-7900-gre-steel-legend-oc",
category: "GPU",
brand: "ASRock",
name: "ASRock Radeon RX 7900 GRE Steel Legend OC",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-asrock-radeon-rx-7900-gre-challenger-oc",
category: "GPU",
brand: "ASRock",
name: "ASRock Radeon RX 7900 GRE Challenger OC",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-asus-radeon-rx-7900-gre-dual-oc",
category: "GPU",
brand: "ASUS",
name: "ASUS Radeon RX 7900 GRE Dual OC",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-gigabyte-radeon-rx-7900-gre-gaming-oc",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte Radeon RX 7900 GRE Gaming OC",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-gigabyte-radeon-rx-7900-gre-eagle",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte Radeon RX 7900 GRE Eagle",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-sapphire-radeon-rx-7800-xt-pulse",
category: "GPU",
brand: "Sapphire",
name: "Sapphire Radeon RX 7800 XT Pulse",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-sapphire-radeon-rx-7800-xt-pure",
category: "GPU",
brand: "Sapphire",
name: "Sapphire Radeon RX 7800 XT Pure",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-powercolor-radeon-rx-7800-xt-hellhound",
category: "GPU",
brand: "PowerColor",
name: "PowerColor Radeon RX 7800 XT Hellhound",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-powercolor-radeon-rx-7800-xt-fighter",
category: "GPU",
brand: "PowerColor",
name: "PowerColor Radeon RX 7800 XT Fighter",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-xfx-radeon-rx-7800-xt-speedster-qick-319",
category: "GPU",
brand: "XFX",
name: "XFX Radeon RX 7800 XT Speedster QICK 319",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-xfx-radeon-rx-7800-xt-swift",
category: "GPU",
brand: "XFX",
name: "XFX Radeon RX 7800 XT Swift",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-asrock-radeon-rx-7800-xt-steel-legend-oc",
category: "GPU",
brand: "ASRock",
name: "ASRock Radeon RX 7800 XT Steel Legend OC",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-asrock-radeon-rx-7800-xt-challenger-oc",
category: "GPU",
brand: "ASRock",
name: "ASRock Radeon RX 7800 XT Challenger OC",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-asus-radeon-rx-7800-xt-dual-oc",
category: "GPU",
brand: "ASUS",
name: "ASUS Radeon RX 7800 XT Dual OC",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-gigabyte-radeon-rx-7800-xt-gaming-oc",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte Radeon RX 7800 XT Gaming OC",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-gigabyte-radeon-rx-7800-xt-eagle",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte Radeon RX 7800 XT Eagle",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-sapphire-radeon-rx-7700-xt-pulse",
category: "GPU",
brand: "Sapphire",
name: "Sapphire Radeon RX 7700 XT Pulse",
spec: "12 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-sapphire-radeon-rx-7700-xt-pure",
category: "GPU",
brand: "Sapphire",
name: "Sapphire Radeon RX 7700 XT Pure",
spec: "12 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-powercolor-radeon-rx-7700-xt-hellhound",
category: "GPU",
brand: "PowerColor",
name: "PowerColor Radeon RX 7700 XT Hellhound",
spec: "12 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-powercolor-radeon-rx-7700-xt-fighter",
category: "GPU",
brand: "PowerColor",
name: "PowerColor Radeon RX 7700 XT Fighter",
spec: "12 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-xfx-radeon-rx-7700-xt-speedster-qick-319",
category: "GPU",
brand: "XFX",
name: "XFX Radeon RX 7700 XT Speedster QICK 319",
spec: "12 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-xfx-radeon-rx-7700-xt-swift",
category: "GPU",
brand: "XFX",
name: "XFX Radeon RX 7700 XT Swift",
spec: "12 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-asrock-radeon-rx-7700-xt-steel-legend-oc",
category: "GPU",
brand: "ASRock",
name: "ASRock Radeon RX 7700 XT Steel Legend OC",
spec: "12 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-asrock-radeon-rx-7700-xt-challenger-oc",
category: "GPU",
brand: "ASRock",
name: "ASRock Radeon RX 7700 XT Challenger OC",
spec: "12 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-asus-radeon-rx-7700-xt-dual-oc",
category: "GPU",
brand: "ASUS",
name: "ASUS Radeon RX 7700 XT Dual OC",
spec: "12 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-gigabyte-radeon-rx-7700-xt-gaming-oc",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte Radeon RX 7700 XT Gaming OC",
spec: "12 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-gigabyte-radeon-rx-7700-xt-eagle",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte Radeon RX 7700 XT Eagle",
spec: "12 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-sapphire-radeon-rx-7600-xt-pulse",
category: "GPU",
brand: "Sapphire",
name: "Sapphire Radeon RX 7600 XT Pulse",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-powercolor-radeon-rx-7600-xt-fighter",
category: "GPU",
brand: "PowerColor",
name: "PowerColor Radeon RX 7600 XT Fighter",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-powercolor-radeon-rx-7600-xt-reaper",
category: "GPU",
brand: "PowerColor",
name: "PowerColor Radeon RX 7600 XT Reaper",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-xfx-radeon-rx-7600-xt-swift",
category: "GPU",
brand: "XFX",
name: "XFX Radeon RX 7600 XT Swift",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-asrock-radeon-rx-7600-xt-challenger-oc",
category: "GPU",
brand: "ASRock",
name: "ASRock Radeon RX 7600 XT Challenger OC",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-gigabyte-radeon-rx-7600-xt-eagle",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte Radeon RX 7600 XT Eagle",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-sapphire-radeon-rx-7600-pulse",
category: "GPU",
brand: "Sapphire",
name: "Sapphire Radeon RX 7600 Pulse",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-powercolor-radeon-rx-7600-fighter",
category: "GPU",
brand: "PowerColor",
name: "PowerColor Radeon RX 7600 Fighter",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-powercolor-radeon-rx-7600-reaper",
category: "GPU",
brand: "PowerColor",
name: "PowerColor Radeon RX 7600 Reaper",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-xfx-radeon-rx-7600-swift",
category: "GPU",
brand: "XFX",
name: "XFX Radeon RX 7600 Swift",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-asrock-radeon-rx-7600-challenger-oc",
category: "GPU",
brand: "ASRock",
name: "ASRock Radeon RX 7600 Challenger OC",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-gigabyte-radeon-rx-7600-eagle",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte Radeon RX 7600 Eagle",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-sapphire-radeon-rx-6750-xt-pulse",
category: "GPU",
brand: "Sapphire",
name: "Sapphire Radeon RX 6750 XT Pulse",
spec: "12 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-powercolor-radeon-rx-6750-xt-fighter",
category: "GPU",
brand: "PowerColor",
name: "PowerColor Radeon RX 6750 XT Fighter",
spec: "12 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-powercolor-radeon-rx-6750-xt-reaper",
category: "GPU",
brand: "PowerColor",
name: "PowerColor Radeon RX 6750 XT Reaper",
spec: "12 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-xfx-radeon-rx-6750-xt-swift",
category: "GPU",
brand: "XFX",
name: "XFX Radeon RX 6750 XT Swift",
spec: "12 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-asrock-radeon-rx-6750-xt-challenger-oc",
category: "GPU",
brand: "ASRock",
name: "ASRock Radeon RX 6750 XT Challenger OC",
spec: "12 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-gigabyte-radeon-rx-6750-xt-eagle",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte Radeon RX 6750 XT Eagle",
spec: "12 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-sapphire-radeon-rx-6650-xt-pulse",
category: "GPU",
brand: "Sapphire",
name: "Sapphire Radeon RX 6650 XT Pulse",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-powercolor-radeon-rx-6650-xt-fighter",
category: "GPU",
brand: "PowerColor",
name: "PowerColor Radeon RX 6650 XT Fighter",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-powercolor-radeon-rx-6650-xt-reaper",
category: "GPU",
brand: "PowerColor",
name: "PowerColor Radeon RX 6650 XT Reaper",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-xfx-radeon-rx-6650-xt-swift",
category: "GPU",
brand: "XFX",
name: "XFX Radeon RX 6650 XT Swift",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-asrock-radeon-rx-6650-xt-challenger-oc",
category: "GPU",
brand: "ASRock",
name: "ASRock Radeon RX 6650 XT Challenger OC",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-gigabyte-radeon-rx-6650-xt-eagle",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte Radeon RX 6650 XT Eagle",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-sapphire-radeon-rx-6600-pulse",
category: "GPU",
brand: "Sapphire",
name: "Sapphire Radeon RX 6600 Pulse",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-powercolor-radeon-rx-6600-fighter",
category: "GPU",
brand: "PowerColor",
name: "PowerColor Radeon RX 6600 Fighter",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-powercolor-radeon-rx-6600-reaper",
category: "GPU",
brand: "PowerColor",
name: "PowerColor Radeon RX 6600 Reaper",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-xfx-radeon-rx-6600-swift",
category: "GPU",
brand: "XFX",
name: "XFX Radeon RX 6600 Swift",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-asrock-radeon-rx-6600-challenger-oc",
category: "GPU",
brand: "ASRock",
name: "ASRock Radeon RX 6600 Challenger OC",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-gigabyte-radeon-rx-6600-eagle",
category: "GPU",
brand: "Gigabyte",
name: "Gigabyte Radeon RX 6600 Eagle",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-intel-arc-b580-limited-edition",
category: "GPU",
brand: "Intel",
name: "Intel Arc B580 Limited Edition",
spec: "12 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-asrock-arc-b580-steel-legend-oc",
category: "GPU",
brand: "ASRock",
name: "ASRock Arc B580 Steel Legend OC",
spec: "12 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-asrock-arc-b580-challenger-oc",
category: "GPU",
brand: "ASRock",
name: "ASRock Arc B580 Challenger OC",
spec: "12 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-sparkle-arc-b580-titan-oc",
category: "GPU",
brand: "Sparkle",
name: "Sparkle Arc B580 Titan OC",
spec: "12 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-intel-arc-b570-limited-edition",
category: "GPU",
brand: "Intel",
name: "Intel Arc B570 Limited Edition",
spec: "10 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-asrock-arc-b570-steel-legend-oc",
category: "GPU",
brand: "ASRock",
name: "ASRock Arc B570 Steel Legend OC",
spec: "10 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-asrock-arc-b570-challenger-oc",
category: "GPU",
brand: "ASRock",
name: "ASRock Arc B570 Challenger OC",
spec: "10 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-sparkle-arc-b570-titan-oc",
category: "GPU",
brand: "Sparkle",
name: "Sparkle Arc B570 Titan OC",
spec: "10 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-intel-arc-a770-16-go-limited-edition",
category: "GPU",
brand: "Intel",
name: "Intel Arc A770 16 Go Limited Edition",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-asrock-arc-a770-16-go-steel-legend-oc",
category: "GPU",
brand: "ASRock",
name: "ASRock Arc A770 16 Go Steel Legend OC",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-asrock-arc-a770-16-go-challenger-oc",
category: "GPU",
brand: "ASRock",
name: "ASRock Arc A770 16 Go Challenger OC",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-sparkle-arc-a770-16-go-titan-oc",
category: "GPU",
brand: "Sparkle",
name: "Sparkle Arc A770 16 Go Titan OC",
spec: "16 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-intel-arc-a750-limited-edition",
category: "GPU",
brand: "Intel",
name: "Intel Arc A750 Limited Edition",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-asrock-arc-a750-steel-legend-oc",
category: "GPU",
brand: "ASRock",
name: "ASRock Arc A750 Steel Legend OC",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-asrock-arc-a750-challenger-oc",
category: "GPU",
brand: "ASRock",
name: "ASRock Arc A750 Challenger OC",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "gpu-sparkle-arc-a750-titan-oc",
category: "GPU",
brand: "Sparkle",
name: "Sparkle Arc A750 Titan OC",
spec: "8 Go GDDR6",
image: "",
offers: []
},
{
id: "cpu-amd-ryzen-9-9950x3d",
category: "CPU",
brand: "AMD",
name: "AMD Ryzen 9 9950X3D",
spec: "16 c / 32 th · 3D V-Cache · AM5",
image: "",
offers: []
},
{
id: "cpu-amd-ryzen-9-9950x",
category: "CPU",
brand: "AMD",
name: "AMD Ryzen 9 9950X",
spec: "16 c / 32 th · AM5",
image: "",
offers: []
},
{
id: "cpu-amd-ryzen-9-9900x3d",
category: "CPU",
brand: "AMD",
name: "AMD Ryzen 9 9900X3D",
spec: "12 c · 3D V-Cache · AM5",
image: "",
offers: []
},
{
id: "cpu-amd-ryzen-9-9900x",
category: "CPU",
brand: "AMD",
name: "AMD Ryzen 9 9900X",
spec: "12 c / 24 th · AM5",
image: "",
offers: []
},
{
id: "cpu-amd-ryzen-7-9800x3d",
category: "CPU",
brand: "AMD",
name: "AMD Ryzen 7 9800X3D",
spec: "8 c · 3D V-Cache · AM5",
image: "",
offers: []
},
{
id: "cpu-amd-ryzen-7-9700x",
category: "CPU",
brand: "AMD",
name: "AMD Ryzen 7 9700X",
spec: "8 c / 16 th · AM5",
image: "",
offers: []
},
{
id: "cpu-amd-ryzen-5-9600x",
category: "CPU",
brand: "AMD",
name: "AMD Ryzen 5 9600X",
spec: "6 c / 12 th · AM5",
image: "",
offers: []
},
{
id: "cpu-amd-ryzen-5-9600",
category: "CPU",
brand: "AMD",
name: "AMD Ryzen 5 9600",
spec: "6 c · 65 W · AM5",
image: "",
offers: []
},
{
id: "cpu-amd-ryzen-9-7950x3d",
category: "CPU",
brand: "AMD",
name: "AMD Ryzen 9 7950X3D",
spec: "16 c · 3D V-Cache · AM5",
image: "",
offers: []
},
{
id: "cpu-amd-ryzen-9-7950x",
category: "CPU",
brand: "AMD",
name: "AMD Ryzen 9 7950X",
spec: "16 c / 32 th · AM5",
image: "",
offers: []
},
{
id: "cpu-amd-ryzen-9-7900x3d",
category: "CPU",
brand: "AMD",
name: "AMD Ryzen 9 7900X3D",
spec: "12 c · 3D V-Cache · AM5",
image: "",
offers: []
},
{
id: "cpu-amd-ryzen-9-7900x",
category: "CPU",
brand: "AMD",
name: "AMD Ryzen 9 7900X",
spec: "12 c / 24 th · AM5",
image: "",
offers: []
},
{
id: "cpu-amd-ryzen-9-7900",
category: "CPU",
brand: "AMD",
name: "AMD Ryzen 9 7900",
spec: "12 c · 65 W · AM5",
image: "",
offers: []
},
{
id: "cpu-amd-ryzen-7-7800x3d",
category: "CPU",
brand: "AMD",
name: "AMD Ryzen 7 7800X3D",
spec: "8 c · 3D V-Cache · AM5",
image: "",
offers: []
},
{
id: "cpu-amd-ryzen-7-7700x",
category: "CPU",
brand: "AMD",
name: "AMD Ryzen 7 7700X",
spec: "8 c / 16 th · AM5",
image: "",
offers: []
},
{
id: "cpu-amd-ryzen-7-7700",
category: "CPU",
brand: "AMD",
name: "AMD Ryzen 7 7700",
spec: "8 c · 65 W · AM5",
image: "",
offers: []
},
{
id: "cpu-amd-ryzen-5-7600x",
category: "CPU",
brand: "AMD",
name: "AMD Ryzen 5 7600X",
spec: "6 c / 12 th · AM5",
image: "",
offers: []
},
{
id: "cpu-amd-ryzen-5-7600",
category: "CPU",
brand: "AMD",
name: "AMD Ryzen 5 7600",
spec: "6 c · 65 W · AM5",
image: "",
offers: []
},
{
id: "cpu-amd-ryzen-5-7500f",
category: "CPU",
brand: "AMD",
name: "AMD Ryzen 5 7500F",
spec: "6 c · sans IGP · AM5",
image: "",
offers: []
},
{
id: "cpu-amd-ryzen-5-7400f",
category: "CPU",
brand: "AMD",
name: "AMD Ryzen 5 7400F",
spec: "6 c · sans IGP · AM5",
image: "",
offers: []
},
{
id: "cpu-amd-ryzen-7-8700g",
category: "CPU",
brand: "AMD",
name: "AMD Ryzen 7 8700G",
spec: "8 c · APU Radeon 780M · AM5",
image: "",
offers: []
},
{
id: "cpu-amd-ryzen-5-8600g",
category: "CPU",
brand: "AMD",
name: "AMD Ryzen 5 8600G",
spec: "6 c · APU Radeon 760M · AM5",
image: "",
offers: []
},
{
id: "cpu-amd-ryzen-5-8500g",
category: "CPU",
brand: "AMD",
name: "AMD Ryzen 5 8500G",
spec: "6 c · APU · AM5",
image: "",
offers: []
},
{
id: "cpu-amd-ryzen-7-5800x3d",
category: "CPU",
brand: "AMD",
name: "AMD Ryzen 7 5800X3D",
spec: "8 c · 3D V-Cache · AM4",
image: "",
offers: []
},
{
id: "cpu-amd-ryzen-7-5700x3d",
category: "CPU",
brand: "AMD",
name: "AMD Ryzen 7 5700X3D",
spec: "8 c · 3D V-Cache · AM4",
image: "",
offers: []
},
{
id: "cpu-amd-ryzen-7-5800x",
category: "CPU",
brand: "AMD",
name: "AMD Ryzen 7 5800X",
spec: "8 c / 16 th · AM4",
image: "",
offers: []
},
{
id: "cpu-amd-ryzen-7-5700x",
category: "CPU",
brand: "AMD",
name: "AMD Ryzen 7 5700X",
spec: "8 c / 16 th · AM4",
image: "",
offers: []
},
{
id: "cpu-amd-ryzen-7-5700g",
category: "CPU",
brand: "AMD",
name: "AMD Ryzen 7 5700G",
spec: "8 c · APU · AM4",
image: "",
offers: []
},
{
id: "cpu-amd-ryzen-9-5950x",
category: "CPU",
brand: "AMD",
name: "AMD Ryzen 9 5950X",
spec: "16 c / 32 th · AM4",
image: "",
offers: []
},
{
id: "cpu-amd-ryzen-9-5900x",
category: "CPU",
brand: "AMD",
name: "AMD Ryzen 9 5900X",
spec: "12 c / 24 th · AM4",
image: "",
offers: []
},
{
id: "cpu-amd-ryzen-5-5600x",
category: "CPU",
brand: "AMD",
name: "AMD Ryzen 5 5600X",
spec: "6 c / 12 th · AM4",
image: "",
offers: []
},
{
id: "cpu-amd-ryzen-5-5600",
category: "CPU",
brand: "AMD",
name: "AMD Ryzen 5 5600",
spec: "6 c / 12 th · AM4",
image: "",
offers: []
},
{
id: "cpu-amd-ryzen-5-5600g",
category: "CPU",
brand: "AMD",
name: "AMD Ryzen 5 5600G",
spec: "6 c · APU · AM4",
image: "",
offers: []
},
{
id: "cpu-amd-ryzen-5-5500",
category: "CPU",
brand: "AMD",
name: "AMD Ryzen 5 5500",
spec: "6 c / 12 th · AM4",
image: "",
offers: []
},
{
id: "cpu-amd-ryzen-5-4500",
category: "CPU",
brand: "AMD",
name: "AMD Ryzen 5 4500",
spec: "6 c / 12 th · AM4",
image: "",
offers: []
},
{
id: "cpu-amd-ryzen-7-3700x",
category: "CPU",
brand: "AMD",
name: "AMD Ryzen 7 3700X",
spec: "8 c / 16 th · AM4",
image: "",
offers: []
},
{
id: "cpu-amd-ryzen-5-3600",
category: "CPU",
brand: "AMD",
name: "AMD Ryzen 5 3600",
spec: "6 c / 12 th · AM4",
image: "",
offers: []
},
{
id: "cpu-intel-core-ultra-9-285k",
category: "CPU",
brand: "Intel",
name: "Intel Core Ultra 9 285K",
spec: "24 c · LGA1851",
image: "",
offers: []
},
{
id: "cpu-intel-core-ultra-7-265k",
category: "CPU",
brand: "Intel",
name: "Intel Core Ultra 7 265K",
spec: "20 c · LGA1851",
image: "",
offers: []
},
{
id: "cpu-intel-core-ultra-7-265kf",
category: "CPU",
brand: "Intel",
name: "Intel Core Ultra 7 265KF",
spec: "20 c · sans IGP · LGA1851",
image: "",
offers: []
},
{
id: "cpu-intel-core-ultra-5-245k",
category: "CPU",
brand: "Intel",
name: "Intel Core Ultra 5 245K",
spec: "14 c · LGA1851",
image: "",
offers: []
},
{
id: "cpu-intel-core-ultra-5-235",
category: "CPU",
brand: "Intel",
name: "Intel Core Ultra 5 235",
spec: "14 c · LGA1851",
image: "",
offers: []
},
{
id: "cpu-intel-core-i9-14900k",
category: "CPU",
brand: "Intel",
name: "Intel Core i9-14900K",
spec: "24 c · LGA1700",
image: "",
offers: []
},
{
id: "cpu-intel-core-i9-14900kf",
category: "CPU",
brand: "Intel",
name: "Intel Core i9-14900KF",
spec: "24 c · sans IGP · LGA1700",
image: "",
offers: []
},
{
id: "cpu-intel-core-i7-14700k",
category: "CPU",
brand: "Intel",
name: "Intel Core i7-14700K",
spec: "20 c · LGA1700",
image: "",
offers: []
},
{
id: "cpu-intel-core-i7-14700kf",
category: "CPU",
brand: "Intel",
name: "Intel Core i7-14700KF",
spec: "20 c · sans IGP · LGA1700",
image: "",
offers: []
},
{
id: "cpu-intel-core-i5-14600k",
category: "CPU",
brand: "Intel",
name: "Intel Core i5-14600K",
spec: "14 c · LGA1700",
image: "",
offers: []
},
{
id: "cpu-intel-core-i5-14600kf",
category: "CPU",
brand: "Intel",
name: "Intel Core i5-14600KF",
spec: "14 c · sans IGP · LGA1700",
image: "",
offers: []
},
{
id: "cpu-intel-core-i5-14400",
category: "CPU",
brand: "Intel",
name: "Intel Core i5-14400",
spec: "10 c · LGA1700",
image: "",
offers: []
},
{
id: "cpu-intel-core-i5-14400f",
category: "CPU",
brand: "Intel",
name: "Intel Core i5-14400F",
spec: "10 c · sans IGP · LGA1700",
image: "",
offers: []
},
{
id: "cpu-intel-core-i3-14100f",
category: "CPU",
brand: "Intel",
name: "Intel Core i3-14100F",
spec: "4 c · sans IGP · LGA1700",
image: "",
offers: []
},
{
id: "cpu-intel-core-i9-13900k",
category: "CPU",
brand: "Intel",
name: "Intel Core i9-13900K",
spec: "24 c · LGA1700",
image: "",
offers: []
},
{
id: "cpu-intel-core-i9-13900kf",
category: "CPU",
brand: "Intel",
name: "Intel Core i9-13900KF",
spec: "24 c · sans IGP · LGA1700",
image: "",
offers: []
},
{
id: "cpu-intel-core-i7-13700k",
category: "CPU",
brand: "Intel",
name: "Intel Core i7-13700K",
spec: "16 c · LGA1700",
image: "",
offers: []
},
{
id: "cpu-intel-core-i7-13700kf",
category: "CPU",
brand: "Intel",
name: "Intel Core i7-13700KF",
spec: "16 c · sans IGP · LGA1700",
image: "",
offers: []
},
{
id: "cpu-intel-core-i5-13600k",
category: "CPU",
brand: "Intel",
name: "Intel Core i5-13600K",
spec: "14 c · LGA1700",
image: "",
offers: []
},
{
id: "cpu-intel-core-i5-13600kf",
category: "CPU",
brand: "Intel",
name: "Intel Core i5-13600KF",
spec: "14 c · sans IGP · LGA1700",
image: "",
offers: []
},
{
id: "cpu-intel-core-i5-13400",
category: "CPU",
brand: "Intel",
name: "Intel Core i5-13400",
spec: "10 c · LGA1700",
image: "",
offers: []
},
{
id: "cpu-intel-core-i5-13400f",
category: "CPU",
brand: "Intel",
name: "Intel Core i5-13400F",
spec: "10 c · sans IGP · LGA1700",
image: "",
offers: []
},
{
id: "cpu-intel-core-i3-13100f",
category: "CPU",
brand: "Intel",
name: "Intel Core i3-13100F",
spec: "4 c · sans IGP · LGA1700",
image: "",
offers: []
},
{
id: "cpu-intel-core-i9-12900k",
category: "CPU",
brand: "Intel",
name: "Intel Core i9-12900K",
spec: "16 c · LGA1700",
image: "",
offers: []
},
{
id: "cpu-intel-core-i7-12700k",
category: "CPU",
brand: "Intel",
name: "Intel Core i7-12700K",
spec: "12 c · LGA1700",
image: "",
offers: []
},
{
id: "cpu-intel-core-i5-12600k",
category: "CPU",
brand: "Intel",
name: "Intel Core i5-12600K",
spec: "10 c · LGA1700",
image: "",
offers: []
},
{
id: "cpu-intel-core-i5-12400",
category: "CPU",
brand: "Intel",
name: "Intel Core i5-12400",
spec: "6 c · LGA1700",
image: "",
offers: []
},
{
id: "cpu-intel-core-i5-12400f",
category: "CPU",
brand: "Intel",
name: "Intel Core i5-12400F",
spec: "6 c · sans IGP · LGA1700",
image: "",
offers: []
},
{
id: "cpu-intel-core-i3-12100f",
category: "CPU",
brand: "Intel",
name: "Intel Core i3-12100F",
spec: "4 c · sans IGP · LGA1700",
image: "",
offers: []
},
{
id: "carte-mere-asus-rog-crosshair-x870e-hero",
category: "Carte mère",
brand: "ASUS",
name: "ASUS ROG Crosshair X870E Hero",
spec: "AM5 · X870E · ATX",
image: "",
offers: []
},
{
id: "carte-mere-asus-rog-strix-x870e-e-gaming-wifi",
category: "Carte mère",
brand: "ASUS",
name: "ASUS ROG Strix X870E-E Gaming WiFi",
spec: "AM5 · X870E · ATX",
image: "",
offers: []
},
{
id: "carte-mere-asus-rog-strix-x870-a-gaming-wifi",
category: "Carte mère",
brand: "ASUS",
name: "ASUS ROG Strix X870-A Gaming WiFi",
spec: "AM5 · X870 · ATX",
image: "",
offers: []
},
{
id: "carte-mere-asus-tuf-gaming-x870-plus-wifi",
category: "Carte mère",
brand: "ASUS",
name: "ASUS TUF Gaming X870-Plus WiFi",
spec: "AM5 · X870 · ATX",
image: "",
offers: []
},
{
id: "carte-mere-asus-proart-x870e-creator-wifi",
category: "Carte mère",
brand: "ASUS",
name: "ASUS ProArt X870E-Creator WiFi",
spec: "AM5 · X870E · ATX",
image: "",
offers: []
},
{
id: "carte-mere-asus-rog-strix-b850-f-gaming-wifi",
category: "Carte mère",
brand: "ASUS",
name: "ASUS ROG Strix B850-F Gaming WiFi",
spec: "AM5 · B850 · ATX",
image: "",
offers: []
},
{
id: "carte-mere-asus-tuf-gaming-b850-plus-wifi",
category: "Carte mère",
brand: "ASUS",
name: "ASUS TUF Gaming B850-Plus WiFi",
spec: "AM5 · B850 · ATX",
image: "",
offers: []
},
{
id: "carte-mere-asus-prime-b850m-a-wifi",
category: "Carte mère",
brand: "ASUS",
name: "ASUS Prime B850M-A WiFi",
spec: "AM5 · B850 · micro-ATX",
image: "",
offers: []
},
{
id: "carte-mere-asus-rog-strix-b650e-f-gaming-wifi",
category: "Carte mère",
brand: "ASUS",
name: "ASUS ROG Strix B650E-F Gaming WiFi",
spec: "AM5 · B650E · ATX",
image: "",
offers: []
},
{
id: "carte-mere-asus-rog-strix-b650e-i-gaming-wifi",
category: "Carte mère",
brand: "ASUS",
name: "ASUS ROG Strix B650E-I Gaming WiFi",
spec: "AM5 · B650E · mini-ITX",
image: "",
offers: []
},
{
id: "carte-mere-asus-tuf-gaming-b650-plus-wifi",
category: "Carte mère",
brand: "ASUS",
name: "ASUS TUF Gaming B650-Plus WiFi",
spec: "AM5 · B650 · ATX",
image: "",
offers: []
},
{
id: "carte-mere-asus-prime-b650m-a-ii",
category: "Carte mère",
brand: "ASUS",
name: "ASUS Prime B650M-A II",
spec: "AM5 · B650 · micro-ATX",
image: "",
offers: []
},
{
id: "carte-mere-asus-prime-a620m-k",
category: "Carte mère",
brand: "ASUS",
name: "ASUS Prime A620M-K",
spec: "AM5 · A620 · micro-ATX",
image: "",
offers: []
},
{
id: "carte-mere-msi-meg-x870e-godlike",
category: "Carte mère",
brand: "MSI",
name: "MSI MEG X870E Godlike",
spec: "AM5 · X870E · E-ATX",
image: "",
offers: []
},
{
id: "carte-mere-msi-mpg-x870e-carbon-wifi",
category: "Carte mère",
brand: "MSI",
name: "MSI MPG X870E Carbon WiFi",
spec: "AM5 · X870E · ATX",
image: "",
offers: []
},
{
id: "carte-mere-msi-mag-x870-tomahawk-wifi",
category: "Carte mère",
brand: "MSI",
name: "MSI MAG X870 Tomahawk WiFi",
spec: "AM5 · X870 · ATX",
image: "",
offers: []
},
{
id: "carte-mere-msi-mpg-b850-edge-ti-wifi",
category: "Carte mère",
brand: "MSI",
name: "MSI MPG B850 Edge TI WiFi",
spec: "AM5 · B850 · ATX",
image: "",
offers: []
},
{
id: "carte-mere-msi-mag-b850-tomahawk-max-wifi",
category: "Carte mère",
brand: "MSI",
name: "MSI MAG B850 Tomahawk Max WiFi",
spec: "AM5 · B850 · ATX",
image: "",
offers: []
},
{
id: "carte-mere-msi-pro-b850m-a-wifi",
category: "Carte mère",
brand: "MSI",
name: "MSI PRO B850M-A WiFi",
spec: "AM5 · B850 · micro-ATX",
image: "",
offers: []
},
{
id: "carte-mere-msi-mpg-b650-carbon-wifi",
category: "Carte mère",
brand: "MSI",
name: "MSI MPG B650 Carbon WiFi",
spec: "AM5 · B650 · ATX",
image: "",
offers: []
},
{
id: "carte-mere-msi-mag-b650-tomahawk-wifi",
category: "Carte mère",
brand: "MSI",
name: "MSI MAG B650 Tomahawk WiFi",
spec: "AM5 · B650 · ATX",
image: "",
offers: []
},
{
id: "carte-mere-msi-mag-b650m-mortar-wifi",
category: "Carte mère",
brand: "MSI",
name: "MSI MAG B650M Mortar WiFi",
spec: "AM5 · B650 · micro-ATX",
image: "",
offers: []
},
{
id: "carte-mere-msi-pro-b650m-a-wifi",
category: "Carte mère",
brand: "MSI",
name: "MSI PRO B650M-A WiFi",
spec: "AM5 · B650 · micro-ATX",
image: "",
offers: []
},
{
id: "carte-mere-msi-pro-a620m-e",
category: "Carte mère",
brand: "MSI",
name: "MSI PRO A620M-E",
spec: "AM5 · A620 · micro-ATX",
image: "",
offers: []
},
{
id: "carte-mere-gigabyte-x870e-aorus-master",
category: "Carte mère",
brand: "Gigabyte",
name: "Gigabyte X870E AORUS Master",
spec: "AM5 · X870E · ATX",
image: "",
offers: []
},
{
id: "carte-mere-gigabyte-x870-aorus-elite-wifi7",
category: "Carte mère",
brand: "Gigabyte",
name: "Gigabyte X870 AORUS Elite WiFi7",
spec: "AM5 · X870 · ATX",
image: "",
offers: []
},
{
id: "carte-mere-gigabyte-b850-aorus-elite-wifi7",
category: "Carte mère",
brand: "Gigabyte",
name: "Gigabyte B850 AORUS Elite WiFi7",
spec: "AM5 · B850 · ATX",
image: "",
offers: []
},
{
id: "carte-mere-gigabyte-b650-aorus-elite-ax-v2",
category: "Carte mère",
brand: "Gigabyte",
name: "Gigabyte B650 AORUS Elite AX V2",
spec: "AM5 · B650 · ATX",
image: "",
offers: []
},
{
id: "carte-mere-gigabyte-b650m-aorus-elite-ax",
category: "Carte mère",
brand: "Gigabyte",
name: "Gigabyte B650M AORUS Elite AX",
spec: "AM5 · B650 · micro-ATX",
image: "",
offers: []
},
{
id: "carte-mere-gigabyte-b650m-ds3h",
category: "Carte mère",
brand: "Gigabyte",
name: "Gigabyte B650M DS3H",
spec: "AM5 · B650 · micro-ATX",
image: "",
offers: []
},
{
id: "carte-mere-gigabyte-a620m-s2h",
category: "Carte mère",
brand: "Gigabyte",
name: "Gigabyte A620M S2H",
spec: "AM5 · A620 · micro-ATX",
image: "",
offers: []
},
{
id: "carte-mere-asrock-x870e-taichi",
category: "Carte mère",
brand: "ASRock",
name: "ASRock X870E Taichi",
spec: "AM5 · X870E · ATX",
image: "",
offers: []
},
{
id: "carte-mere-asrock-b850-pro-rs-wifi",
category: "Carte mère",
brand: "ASRock",
name: "ASRock B850 Pro RS WiFi",
spec: "AM5 · B850 · ATX",
image: "",
offers: []
},
{
id: "carte-mere-asrock-b650e-steel-legend-wifi",
category: "Carte mère",
brand: "ASRock",
name: "ASRock B650E Steel Legend WiFi",
spec: "AM5 · B650E · ATX",
image: "",
offers: []
},
{
id: "carte-mere-asrock-b650m-pro-rs-wifi",
category: "Carte mère",
brand: "ASRock",
name: "ASRock B650M Pro RS WiFi",
spec: "AM5 · B650 · micro-ATX",
image: "",
offers: []
},
{
id: "carte-mere-asrock-b650e-pg-itx-wifi",
category: "Carte mère",
brand: "ASRock",
name: "ASRock B650E PG-ITX WiFi",
spec: "AM5 · B650E · mini-ITX",
image: "",
offers: []
},
{
id: "carte-mere-asrock-a620m-hdv-m-2",
category: "Carte mère",
brand: "ASRock",
name: "ASRock A620M-HDV/M.2",
spec: "AM5 · A620 · micro-ATX",
image: "",
offers: []
},
{
id: "carte-mere-asus-rog-strix-x570-e-gaming",
category: "Carte mère",
brand: "ASUS",
name: "ASUS ROG Strix X570-E Gaming",
spec: "AM4 · X570 · ATX",
image: "",
offers: []
},
{
id: "carte-mere-asus-rog-strix-b550-f-gaming-wifi-ii",
category: "Carte mère",
brand: "ASUS",
name: "ASUS ROG Strix B550-F Gaming WiFi II",
spec: "AM4 · B550 · ATX",
image: "",
offers: []
},
{
id: "carte-mere-asus-tuf-gaming-b550-plus-wifi-ii",
category: "Carte mère",
brand: "ASUS",
name: "ASUS TUF Gaming B550-Plus WiFi II",
spec: "AM4 · B550 · ATX",
image: "",
offers: []
},
{
id: "carte-mere-asus-prime-b550m-a-wifi-ii",
category: "Carte mère",
brand: "ASUS",
name: "ASUS Prime B550M-A WiFi II",
spec: "AM4 · B550 · micro-ATX",
image: "",
offers: []
},
{
id: "carte-mere-asus-prime-a520m-k",
category: "Carte mère",
brand: "ASUS",
name: "ASUS Prime A520M-K",
spec: "AM4 · A520 · micro-ATX",
image: "",
offers: []
},
{
id: "carte-mere-msi-mag-b550-tomahawk-max-wifi",
category: "Carte mère",
brand: "MSI",
name: "MSI MAG B550 Tomahawk Max WiFi",
spec: "AM4 · B550 · ATX",
image: "",
offers: []
},
{
id: "carte-mere-msi-mag-b550m-mortar-max-wifi",
category: "Carte mère",
brand: "MSI",
name: "MSI MAG B550M Mortar Max WiFi",
spec: "AM4 · B550 · micro-ATX",
image: "",
offers: []
},
{
id: "carte-mere-msi-b450-tomahawk-max-ii",
category: "Carte mère",
brand: "MSI",
name: "MSI B450 Tomahawk Max II",
spec: "AM4 · B450 · ATX",
image: "",
offers: []
},
{
id: "carte-mere-msi-pro-b550m-vc-wifi",
category: "Carte mère",
brand: "MSI",
name: "MSI PRO B550M-VC WiFi",
spec: "AM4 · B550 · micro-ATX",
image: "",
offers: []
},
{
id: "carte-mere-gigabyte-b550-aorus-elite-ax-v2",
category: "Carte mère",
brand: "Gigabyte",
name: "Gigabyte B550 AORUS Elite AX V2",
spec: "AM4 · B550 · ATX",
image: "",
offers: []
},
{
id: "carte-mere-gigabyte-b550m-ds3h-ac",
category: "Carte mère",
brand: "Gigabyte",
name: "Gigabyte B550M DS3H AC",
spec: "AM4 · B550 · micro-ATX",
image: "",
offers: []
},
{
id: "carte-mere-gigabyte-b450m-ds3h-v2",
category: "Carte mère",
brand: "Gigabyte",
name: "Gigabyte B450M DS3H V2",
spec: "AM4 · B450 · micro-ATX",
image: "",
offers: []
},
{
id: "carte-mere-asrock-b550m-pro4",
category: "Carte mère",
brand: "ASRock",
name: "ASRock B550M Pro4",
spec: "AM4 · B550 · micro-ATX",
image: "",
offers: []
},
{
id: "carte-mere-asrock-b450m-pro4-r2-0",
category: "Carte mère",
brand: "ASRock",
name: "ASRock B450M Pro4 R2.0",
spec: "AM4 · B450 · micro-ATX",
image: "",
offers: []
},
{
id: "carte-mere-asrock-b550m-itx-ac",
category: "Carte mère",
brand: "ASRock",
name: "ASRock B550M-ITX/ac",
spec: "AM4 · B550 · mini-ITX",
image: "",
offers: []
},
{
id: "carte-mere-asus-rog-maximus-z890-hero",
category: "Carte mère",
brand: "ASUS",
name: "ASUS ROG Maximus Z890 Hero",
spec: "LGA1851 · Z890 · ATX",
image: "",
offers: []
},
{
id: "carte-mere-asus-rog-strix-z890-a-gaming-wifi",
category: "Carte mère",
brand: "ASUS",
name: "ASUS ROG Strix Z890-A Gaming WiFi",
spec: "LGA1851 · Z890 · ATX",
image: "",
offers: []
},
{
id: "carte-mere-asus-tuf-gaming-z890-plus-wifi",
category: "Carte mère",
brand: "ASUS",
name: "ASUS TUF Gaming Z890-Plus WiFi",
spec: "LGA1851 · Z890 · ATX",
image: "",
offers: []
},
{
id: "carte-mere-asus-prime-b860m-a-wifi",
category: "Carte mère",
brand: "ASUS",
name: "ASUS Prime B860M-A WiFi",
spec: "LGA1851 · B860 · micro-ATX",
image: "",
offers: []
},
{
id: "carte-mere-msi-meg-z890-ace",
category: "Carte mère",
brand: "MSI",
name: "MSI MEG Z890 Ace",
spec: "LGA1851 · Z890 · E-ATX",
image: "",
offers: []
},
{
id: "carte-mere-msi-mpg-z890-carbon-wifi",
category: "Carte mère",
brand: "MSI",
name: "MSI MPG Z890 Carbon WiFi",
spec: "LGA1851 · Z890 · ATX",
image: "",
offers: []
},
{
id: "carte-mere-msi-mag-z890-tomahawk-wifi",
category: "Carte mère",
brand: "MSI",
name: "MSI MAG Z890 Tomahawk WiFi",
spec: "LGA1851 · Z890 · ATX",
image: "",
offers: []
},
{
id: "carte-mere-msi-mag-b860-tomahawk-wifi",
category: "Carte mère",
brand: "MSI",
name: "MSI MAG B860 Tomahawk WiFi",
spec: "LGA1851 · B860 · ATX",
image: "",
offers: []
},
{
id: "carte-mere-msi-pro-b860m-a-wifi",
category: "Carte mère",
brand: "MSI",
name: "MSI PRO B860M-A WiFi",
spec: "LGA1851 · B860 · micro-ATX",
image: "",
offers: []
},
{
id: "carte-mere-gigabyte-z890-aorus-master",
category: "Carte mère",
brand: "Gigabyte",
name: "Gigabyte Z890 AORUS Master",
spec: "LGA1851 · Z890 · ATX",
image: "",
offers: []
},
{
id: "carte-mere-gigabyte-z890-aorus-elite-wifi7",
category: "Carte mère",
brand: "Gigabyte",
name: "Gigabyte Z890 AORUS Elite WiFi7",
spec: "LGA1851 · Z890 · ATX",
image: "",
offers: []
},
{
id: "carte-mere-gigabyte-b860m-aorus-elite-wifi6e",
category: "Carte mère",
brand: "Gigabyte",
name: "Gigabyte B860M AORUS Elite WiFi6E",
spec: "LGA1851 · B860 · micro-ATX",
image: "",
offers: []
},
{
id: "carte-mere-asrock-z890-steel-legend-wifi",
category: "Carte mère",
brand: "ASRock",
name: "ASRock Z890 Steel Legend WiFi",
spec: "LGA1851 · Z890 · ATX",
image: "",
offers: []
},
{
id: "carte-mere-asrock-b860m-pro-rs",
category: "Carte mère",
brand: "ASRock",
name: "ASRock B860M Pro RS",
spec: "LGA1851 · B860 · micro-ATX",
image: "",
offers: []
},
{
id: "carte-mere-asus-rog-maximus-z790-dark-hero",
category: "Carte mère",
brand: "ASUS",
name: "ASUS ROG Maximus Z790 Dark Hero",
spec: "LGA1700 · Z790 · ATX",
image: "",
offers: []
},
{
id: "carte-mere-asus-rog-strix-z790-a-gaming-wifi-ii",
category: "Carte mère",
brand: "ASUS",
name: "ASUS ROG Strix Z790-A Gaming WiFi II",
spec: "LGA1700 · Z790 · ATX",
image: "",
offers: []
},
{
id: "carte-mere-asus-tuf-gaming-z790-plus-wifi-d4",
category: "Carte mère",
brand: "ASUS",
name: "ASUS TUF Gaming Z790-Plus WiFi D4",
spec: "LGA1700 · Z790 · ATX",
image: "",
offers: []
},
{
id: "carte-mere-asus-tuf-gaming-b760m-plus-wifi",
category: "Carte mère",
brand: "ASUS",
name: "ASUS TUF Gaming B760M-Plus WiFi",
spec: "LGA1700 · B760 · micro-ATX",
image: "",
offers: []
},
{
id: "carte-mere-asus-prime-b760m-a-wifi-d4",
category: "Carte mère",
brand: "ASUS",
name: "ASUS Prime B760M-A WiFi D4",
spec: "LGA1700 · B760 · micro-ATX",
image: "",
offers: []
},
{
id: "carte-mere-asus-prime-h610m-k-d4",
category: "Carte mère",
brand: "ASUS",
name: "ASUS Prime H610M-K D4",
spec: "LGA1700 · H610 · micro-ATX",
image: "",
offers: []
},
{
id: "carte-mere-msi-mpg-z790-carbon-wifi",
category: "Carte mère",
brand: "MSI",
name: "MSI MPG Z790 Carbon WiFi",
spec: "LGA1700 · Z790 · ATX",
image: "",
offers: []
},
{
id: "carte-mere-msi-mag-z790-tomahawk-max-wifi",
category: "Carte mère",
brand: "MSI",
name: "MSI MAG Z790 Tomahawk Max WiFi",
spec: "LGA1700 · Z790 · ATX",
image: "",
offers: []
},
{
id: "carte-mere-msi-mag-b760-tomahawk-wifi",
category: "Carte mère",
brand: "MSI",
name: "MSI MAG B760 Tomahawk WiFi",
spec: "LGA1700 · B760 · ATX",
image: "",
offers: []
},
{
id: "carte-mere-msi-mag-b760m-mortar-wifi",
category: "Carte mère",
brand: "MSI",
name: "MSI MAG B760M Mortar WiFi",
spec: "LGA1700 · B760 · micro-ATX",
image: "",
offers: []
},
{
id: "carte-mere-msi-pro-b760m-a-wifi-ddr4",
category: "Carte mère",
brand: "MSI",
name: "MSI PRO B760M-A WiFi DDR4",
spec: "LGA1700 · B760 · micro-ATX",
image: "",
offers: []
},
{
id: "carte-mere-msi-pro-h610m-e-ddr4",
category: "Carte mère",
brand: "MSI",
name: "MSI PRO H610M-E DDR4",
spec: "LGA1700 · H610 · micro-ATX",
image: "",
offers: []
},
{
id: "carte-mere-gigabyte-z790-aorus-master-x",
category: "Carte mère",
brand: "Gigabyte",
name: "Gigabyte Z790 AORUS Master X",
spec: "LGA1700 · Z790 · ATX",
image: "",
offers: []
},
{
id: "carte-mere-gigabyte-z790-aorus-elite-ax",
category: "Carte mère",
brand: "Gigabyte",
name: "Gigabyte Z790 AORUS Elite AX",
spec: "LGA1700 · Z790 · ATX",
image: "",
offers: []
},
{
id: "carte-mere-gigabyte-b760-gaming-x-ax",
category: "Carte mère",
brand: "Gigabyte",
name: "Gigabyte B760 Gaming X AX",
spec: "LGA1700 · B760 · ATX",
image: "",
offers: []
},
{
id: "carte-mere-gigabyte-b760m-ds3h-ddr4",
category: "Carte mère",
brand: "Gigabyte",
name: "Gigabyte B760M DS3H DDR4",
spec: "LGA1700 · B760 · micro-ATX",
image: "",
offers: []
},
{
id: "carte-mere-gigabyte-h610m-h-ddr4",
category: "Carte mère",
brand: "Gigabyte",
name: "Gigabyte H610M H DDR4",
spec: "LGA1700 · H610 · micro-ATX",
image: "",
offers: []
},
{
id: "carte-mere-asrock-z790-steel-legend-wifi",
category: "Carte mère",
brand: "ASRock",
name: "ASRock Z790 Steel Legend WiFi",
spec: "LGA1700 · Z790 · ATX",
image: "",
offers: []
},
{
id: "carte-mere-asrock-b760m-pro-rs-d4",
category: "Carte mère",
brand: "ASRock",
name: "ASRock B760M Pro RS/D4",
spec: "LGA1700 · B760 · micro-ATX",
image: "",
offers: []
},
{
id: "carte-mere-asrock-b760m-itx-wifi",
category: "Carte mère",
brand: "ASRock",
name: "ASRock B760M-ITX WiFi",
spec: "LGA1700 · B760 · mini-ITX",
image: "",
offers: []
},
{
id: "carte-mere-asrock-h610m-hdv-m-2-r2-0",
category: "Carte mère",
brand: "ASRock",
name: "ASRock H610M-HDV/M.2 R2.0",
spec: "LGA1700 · H610 · micro-ATX",
image: "",
offers: []
},
{
id: "ram-corsair-vengeance-ddr5-32-go-216-6000-cl30",
category: "RAM",
brand: "Corsair",
name: "Corsair Vengeance DDR5 32 Go (2×16) 6000 CL30",
spec: "DDR5 · 6000 CL30 · kit 32 Go (2×16)",
image: "",
offers: []
},
{
id: "ram-corsair-vengeance-ddr5-64-go-232-6000-cl30",
category: "RAM",
brand: "Corsair",
name: "Corsair Vengeance DDR5 64 Go (2×32) 6000 CL30",
spec: "DDR5 · 6000 CL30 · kit 64 Go (2×32)",
image: "",
offers: []
},
{
id: "ram-corsair-vengeance-ddr5-32-go-216-6000-cl36",
category: "RAM",
brand: "Corsair",
name: "Corsair Vengeance DDR5 32 Go (2×16) 6000 CL36",
spec: "DDR5 · 6000 CL36 · kit 32 Go (2×16)",
image: "",
offers: []
},
{
id: "ram-corsair-vengeance-ddr5-64-go-232-6000-cl36",
category: "RAM",
brand: "Corsair",
name: "Corsair Vengeance DDR5 64 Go (2×32) 6000 CL36",
spec: "DDR5 · 6000 CL36 · kit 64 Go (2×32)",
image: "",
offers: []
},
{
id: "ram-corsair-vengeance-ddr5-32-go-216-5600-cl36",
category: "RAM",
brand: "Corsair",
name: "Corsair Vengeance DDR5 32 Go (2×16) 5600 CL36",
spec: "DDR5 · 5600 CL36 · kit 32 Go (2×16)",
image: "",
offers: []
},
{
id: "ram-corsair-vengeance-ddr5-64-go-232-5600-cl36",
category: "RAM",
brand: "Corsair",
name: "Corsair Vengeance DDR5 64 Go (2×32) 5600 CL36",
spec: "DDR5 · 5600 CL36 · kit 64 Go (2×32)",
image: "",
offers: []
},
{
id: "ram-corsair-vengeance-ddr5-32-go-216-6400-cl32",
category: "RAM",
brand: "Corsair",
name: "Corsair Vengeance DDR5 32 Go (2×16) 6400 CL32",
spec: "DDR5 · 6400 CL32 · kit 32 Go (2×16)",
image: "",
offers: []
},
{
id: "ram-corsair-vengeance-ddr5-64-go-232-6400-cl32",
category: "RAM",
brand: "Corsair",
name: "Corsair Vengeance DDR5 64 Go (2×32) 6400 CL32",
spec: "DDR5 · 6400 CL32 · kit 64 Go (2×32)",
image: "",
offers: []
},
{
id: "ram-corsair-vengeance-rgb-ddr5-32-go-216-6000-cl30",
category: "RAM",
brand: "Corsair",
name: "Corsair Vengeance RGB DDR5 32 Go (2×16) 6000 CL30",
spec: "DDR5 · 6000 CL30 · kit 32 Go (2×16)",
image: "",
offers: []
},
{
id: "ram-corsair-vengeance-rgb-ddr5-64-go-232-6000-cl30",
category: "RAM",
brand: "Corsair",
name: "Corsair Vengeance RGB DDR5 64 Go (2×32) 6000 CL30",
spec: "DDR5 · 6000 CL30 · kit 64 Go (2×32)",
image: "",
offers: []
},
{
id: "ram-corsair-vengeance-rgb-ddr5-32-go-216-6000-cl36",
category: "RAM",
brand: "Corsair",
name: "Corsair Vengeance RGB DDR5 32 Go (2×16) 6000 CL36",
spec: "DDR5 · 6000 CL36 · kit 32 Go (2×16)",
image: "",
offers: []
},
{
id: "ram-corsair-vengeance-rgb-ddr5-64-go-232-6000-cl36",
category: "RAM",
brand: "Corsair",
name: "Corsair Vengeance RGB DDR5 64 Go (2×32) 6000 CL36",
spec: "DDR5 · 6000 CL36 · kit 64 Go (2×32)",
image: "",
offers: []
},
{
id: "ram-corsair-vengeance-rgb-ddr5-32-go-216-6400-cl32",
category: "RAM",
brand: "Corsair",
name: "Corsair Vengeance RGB DDR5 32 Go (2×16) 6400 CL32",
spec: "DDR5 · 6400 CL32 · kit 32 Go (2×16)",
image: "",
offers: []
},
{
id: "ram-corsair-vengeance-rgb-ddr5-64-go-232-6400-cl32",
category: "RAM",
brand: "Corsair",
name: "Corsair Vengeance RGB DDR5 64 Go (2×32) 6400 CL32",
spec: "DDR5 · 6400 CL32 · kit 64 Go (2×32)",
image: "",
offers: []
},
{
id: "ram-corsair-dominator-platinum-rgb-ddr5-32-go-216-6000-cl30",
category: "RAM",
brand: "Corsair",
name: "Corsair Dominator Platinum RGB DDR5 32 Go (2×16) 6000 CL30",
spec: "DDR5 · 6000 CL30 · kit 32 Go (2×16)",
image: "",
offers: []
},
{
id: "ram-corsair-dominator-platinum-rgb-ddr5-64-go-232-6000-cl30",
category: "RAM",
brand: "Corsair",
name: "Corsair Dominator Platinum RGB DDR5 64 Go (2×32) 6000 CL30",
spec: "DDR5 · 6000 CL30 · kit 64 Go (2×32)",
image: "",
offers: []
},
{
id: "ram-corsair-dominator-platinum-rgb-ddr5-32-go-216-6600-cl32",
category: "RAM",
brand: "Corsair",
name: "Corsair Dominator Platinum RGB DDR5 32 Go (2×16) 6600 CL32",
spec: "DDR5 · 6600 CL32 · kit 32 Go (2×16)",
image: "",
offers: []
},
{
id: "ram-corsair-dominator-platinum-rgb-ddr5-64-go-232-6600-cl32",
category: "RAM",
brand: "Corsair",
name: "Corsair Dominator Platinum RGB DDR5 64 Go (2×32) 6600 CL32",
spec: "DDR5 · 6600 CL32 · kit 64 Go (2×32)",
image: "",
offers: []
},
{
id: "ram-g-skill-trident-z5-neo-rgb-ddr5-32-go-216-6000-cl30",
category: "RAM",
brand: "G.Skill",
name: "G.Skill Trident Z5 Neo RGB DDR5 32 Go (2×16) 6000 CL30",
spec: "DDR5 · 6000 CL30 · kit 32 Go (2×16)",
image: "",
offers: []
},
{
id: "ram-g-skill-trident-z5-neo-rgb-ddr5-64-go-232-6000-cl30",
category: "RAM",
brand: "G.Skill",
name: "G.Skill Trident Z5 Neo RGB DDR5 64 Go (2×32) 6000 CL30",
spec: "DDR5 · 6000 CL30 · kit 64 Go (2×32)",
image: "",
offers: []
},
{
id: "ram-g-skill-trident-z5-neo-rgb-ddr5-32-go-216-6000-cl28",
category: "RAM",
brand: "G.Skill",
name: "G.Skill Trident Z5 Neo RGB DDR5 32 Go (2×16) 6000 CL28",
spec: "DDR5 · 6000 CL28 · kit 32 Go (2×16)",
image: "",
offers: []
},
{
id: "ram-g-skill-trident-z5-neo-rgb-ddr5-64-go-232-6000-cl28",
category: "RAM",
brand: "G.Skill",
name: "G.Skill Trident Z5 Neo RGB DDR5 64 Go (2×32) 6000 CL28",
spec: "DDR5 · 6000 CL28 · kit 64 Go (2×32)",
image: "",
offers: []
},
{
id: "ram-g-skill-trident-z5-neo-rgb-ddr5-32-go-216-6400-cl32",
category: "RAM",
brand: "G.Skill",
name: "G.Skill Trident Z5 Neo RGB DDR5 32 Go (2×16) 6400 CL32",
spec: "DDR5 · 6400 CL32 · kit 32 Go (2×16)",
image: "",
offers: []
},
{
id: "ram-g-skill-trident-z5-neo-rgb-ddr5-64-go-232-6400-cl32",
category: "RAM",
brand: "G.Skill",
name: "G.Skill Trident Z5 Neo RGB DDR5 64 Go (2×32) 6400 CL32",
spec: "DDR5 · 6400 CL32 · kit 64 Go (2×32)",
image: "",
offers: []
},
{
id: "ram-g-skill-trident-z5-rgb-ddr5-32-go-216-6400-cl32",
category: "RAM",
brand: "G.Skill",
name: "G.Skill Trident Z5 RGB DDR5 32 Go (2×16) 6400 CL32",
spec: "DDR5 · 6400 CL32 · kit 32 Go (2×16)",
image: "",
offers: []
},
{
id: "ram-g-skill-trident-z5-rgb-ddr5-64-go-232-6400-cl32",
category: "RAM",
brand: "G.Skill",
name: "G.Skill Trident Z5 RGB DDR5 64 Go (2×32) 6400 CL32",
spec: "DDR5 · 6400 CL32 · kit 64 Go (2×32)",
image: "",
offers: []
},
{
id: "ram-g-skill-trident-z5-rgb-ddr5-32-go-216-7200-cl34",
category: "RAM",
brand: "G.Skill",
name: "G.Skill Trident Z5 RGB DDR5 32 Go (2×16) 7200 CL34",
spec: "DDR5 · 7200 CL34 · kit 32 Go (2×16)",
image: "",
offers: []
},
{
id: "ram-g-skill-trident-z5-rgb-ddr5-64-go-232-7200-cl34",
category: "RAM",
brand: "G.Skill",
name: "G.Skill Trident Z5 RGB DDR5 64 Go (2×32) 7200 CL34",
spec: "DDR5 · 7200 CL34 · kit 64 Go (2×32)",
image: "",
offers: []
},
{
id: "ram-g-skill-flare-x5-ddr5-32-go-216-6000-cl30",
category: "RAM",
brand: "G.Skill",
name: "G.Skill Flare X5 DDR5 32 Go (2×16) 6000 CL30",
spec: "DDR5 · 6000 CL30 · kit 32 Go (2×16)",
image: "",
offers: []
},
{
id: "ram-g-skill-flare-x5-ddr5-64-go-232-6000-cl30",
category: "RAM",
brand: "G.Skill",
name: "G.Skill Flare X5 DDR5 64 Go (2×32) 6000 CL30",
spec: "DDR5 · 6000 CL30 · kit 64 Go (2×32)",
image: "",
offers: []
},
{
id: "ram-g-skill-flare-x5-ddr5-32-go-216-6000-cl36",
category: "RAM",
brand: "G.Skill",
name: "G.Skill Flare X5 DDR5 32 Go (2×16) 6000 CL36",
spec: "DDR5 · 6000 CL36 · kit 32 Go (2×16)",
image: "",
offers: []
},
{
id: "ram-g-skill-flare-x5-ddr5-64-go-232-6000-cl36",
category: "RAM",
brand: "G.Skill",
name: "G.Skill Flare X5 DDR5 64 Go (2×32) 6000 CL36",
spec: "DDR5 · 6000 CL36 · kit 64 Go (2×32)",
image: "",
offers: []
},
{
id: "ram-g-skill-ripjaws-s5-ddr5-32-go-216-6000-cl30",
category: "RAM",
brand: "G.Skill",
name: "G.Skill Ripjaws S5 DDR5 32 Go (2×16) 6000 CL30",
spec: "DDR5 · 6000 CL30 · kit 32 Go (2×16)",
image: "",
offers: []
},
{
id: "ram-g-skill-ripjaws-s5-ddr5-64-go-232-6000-cl30",
category: "RAM",
brand: "G.Skill",
name: "G.Skill Ripjaws S5 DDR5 64 Go (2×32) 6000 CL30",
spec: "DDR5 · 6000 CL30 · kit 64 Go (2×32)",
image: "",
offers: []
},
{
id: "ram-g-skill-ripjaws-s5-ddr5-32-go-216-5600-cl36",
category: "RAM",
brand: "G.Skill",
name: "G.Skill Ripjaws S5 DDR5 32 Go (2×16) 5600 CL36",
spec: "DDR5 · 5600 CL36 · kit 32 Go (2×16)",
image: "",
offers: []
},
{
id: "ram-g-skill-ripjaws-s5-ddr5-64-go-232-5600-cl36",
category: "RAM",
brand: "G.Skill",
name: "G.Skill Ripjaws S5 DDR5 64 Go (2×32) 5600 CL36",
spec: "DDR5 · 5600 CL36 · kit 64 Go (2×32)",
image: "",
offers: []
},
{
id: "ram-kingston-fury-beast-ddr5-32-go-216-6000-cl36",
category: "RAM",
brand: "Kingston",
name: "Kingston Fury Beast DDR5 32 Go (2×16) 6000 CL36",
spec: "DDR5 · 6000 CL36 · kit 32 Go (2×16)",
image: "",
offers: []
},
{
id: "ram-kingston-fury-beast-ddr5-64-go-232-6000-cl36",
category: "RAM",
brand: "Kingston",
name: "Kingston Fury Beast DDR5 64 Go (2×32) 6000 CL36",
spec: "DDR5 · 6000 CL36 · kit 64 Go (2×32)",
image: "",
offers: []
},
{
id: "ram-kingston-fury-beast-ddr5-32-go-216-5600-cl36",
category: "RAM",
brand: "Kingston",
name: "Kingston Fury Beast DDR5 32 Go (2×16) 5600 CL36",
spec: "DDR5 · 5600 CL36 · kit 32 Go (2×16)",
image: "",
offers: []
},
{
id: "ram-kingston-fury-beast-ddr5-64-go-232-5600-cl36",
category: "RAM",
brand: "Kingston",
name: "Kingston Fury Beast DDR5 64 Go (2×32) 5600 CL36",
spec: "DDR5 · 5600 CL36 · kit 64 Go (2×32)",
image: "",
offers: []
},
{
id: "ram-kingston-fury-beast-ddr5-32-go-216-6000-cl30",
category: "RAM",
brand: "Kingston",
name: "Kingston Fury Beast DDR5 32 Go (2×16) 6000 CL30",
spec: "DDR5 · 6000 CL30 · kit 32 Go (2×16)",
image: "",
offers: []
},
{
id: "ram-kingston-fury-beast-ddr5-64-go-232-6000-cl30",
category: "RAM",
brand: "Kingston",
name: "Kingston Fury Beast DDR5 64 Go (2×32) 6000 CL30",
spec: "DDR5 · 6000 CL30 · kit 64 Go (2×32)",
image: "",
offers: []
},
{
id: "ram-kingston-fury-renegade-ddr5-32-go-216-6400-cl32",
category: "RAM",
brand: "Kingston",
name: "Kingston Fury Renegade DDR5 32 Go (2×16) 6400 CL32",
spec: "DDR5 · 6400 CL32 · kit 32 Go (2×16)",
image: "",
offers: []
},
{
id: "ram-kingston-fury-renegade-ddr5-64-go-232-6400-cl32",
category: "RAM",
brand: "Kingston",
name: "Kingston Fury Renegade DDR5 64 Go (2×32) 6400 CL32",
spec: "DDR5 · 6400 CL32 · kit 64 Go (2×32)",
image: "",
offers: []
},
{
id: "ram-kingston-fury-renegade-ddr5-32-go-216-7200-cl38",
category: "RAM",
brand: "Kingston",
name: "Kingston Fury Renegade DDR5 32 Go (2×16) 7200 CL38",
spec: "DDR5 · 7200 CL38 · kit 32 Go (2×16)",
image: "",
offers: []
},
{
id: "ram-kingston-fury-renegade-ddr5-64-go-232-7200-cl38",
category: "RAM",
brand: "Kingston",
name: "Kingston Fury Renegade DDR5 64 Go (2×32) 7200 CL38",
spec: "DDR5 · 7200 CL38 · kit 64 Go (2×32)",
image: "",
offers: []
},
{
id: "ram-crucial-pro-ddr5-32-go-216-5600-cl46",
category: "RAM",
brand: "Crucial",
name: "Crucial Pro DDR5 32 Go (2×16) 5600 CL46",
spec: "DDR5 · 5600 CL46 · kit 32 Go (2×16)",
image: "",
offers: []
},
{
id: "ram-crucial-pro-ddr5-64-go-232-5600-cl46",
category: "RAM",
brand: "Crucial",
name: "Crucial Pro DDR5 64 Go (2×32) 5600 CL46",
spec: "DDR5 · 5600 CL46 · kit 64 Go (2×32)",
image: "",
offers: []
},
{
id: "ram-crucial-pro-ddr5-32-go-216-6000-cl36",
category: "RAM",
brand: "Crucial",
name: "Crucial Pro DDR5 32 Go (2×16) 6000 CL36",
spec: "DDR5 · 6000 CL36 · kit 32 Go (2×16)",
image: "",
offers: []
},
{
id: "ram-crucial-pro-ddr5-64-go-232-6000-cl36",
category: "RAM",
brand: "Crucial",
name: "Crucial Pro DDR5 64 Go (2×32) 6000 CL36",
spec: "DDR5 · 6000 CL36 · kit 64 Go (2×32)",
image: "",
offers: []
},
{
id: "ram-teamgroup-t-force-delta-rgb-ddr5-32-go-216-6000-cl30",
category: "RAM",
brand: "TeamGroup",
name: "TeamGroup T-Force Delta RGB DDR5 32 Go (2×16) 6000 CL30",
spec: "DDR5 · 6000 CL30 · kit 32 Go (2×16)",
image: "",
offers: []
},
{
id: "ram-teamgroup-t-force-delta-rgb-ddr5-64-go-232-6000-cl30",
category: "RAM",
brand: "TeamGroup",
name: "TeamGroup T-Force Delta RGB DDR5 64 Go (2×32) 6000 CL30",
spec: "DDR5 · 6000 CL30 · kit 64 Go (2×32)",
image: "",
offers: []
},
{
id: "ram-teamgroup-t-force-delta-rgb-ddr5-32-go-216-6400-cl32",
category: "RAM",
brand: "TeamGroup",
name: "TeamGroup T-Force Delta RGB DDR5 32 Go (2×16) 6400 CL32",
spec: "DDR5 · 6400 CL32 · kit 32 Go (2×16)",
image: "",
offers: []
},
{
id: "ram-teamgroup-t-force-delta-rgb-ddr5-64-go-232-6400-cl32",
category: "RAM",
brand: "TeamGroup",
name: "TeamGroup T-Force Delta RGB DDR5 64 Go (2×32) 6400 CL32",
spec: "DDR5 · 6400 CL32 · kit 64 Go (2×32)",
image: "",
offers: []
},
{
id: "ram-patriot-viper-venom-ddr5-32-go-216-6000-cl30",
category: "RAM",
brand: "Patriot",
name: "Patriot Viper Venom DDR5 32 Go (2×16) 6000 CL30",
spec: "DDR5 · 6000 CL30 · kit 32 Go (2×16)",
image: "",
offers: []
},
{
id: "ram-patriot-viper-venom-ddr5-64-go-232-6000-cl30",
category: "RAM",
brand: "Patriot",
name: "Patriot Viper Venom DDR5 64 Go (2×32) 6000 CL30",
spec: "DDR5 · 6000 CL30 · kit 64 Go (2×32)",
image: "",
offers: []
},
{
id: "ram-patriot-viper-venom-ddr5-32-go-216-6200-cl40",
category: "RAM",
brand: "Patriot",
name: "Patriot Viper Venom DDR5 32 Go (2×16) 6200 CL40",
spec: "DDR5 · 6200 CL40 · kit 32 Go (2×16)",
image: "",
offers: []
},
{
id: "ram-patriot-viper-venom-ddr5-64-go-232-6200-cl40",
category: "RAM",
brand: "Patriot",
name: "Patriot Viper Venom DDR5 64 Go (2×32) 6200 CL40",
spec: "DDR5 · 6200 CL40 · kit 64 Go (2×32)",
image: "",
offers: []
},
{
id: "ram-corsair-vengeance-lpx-ddr4-16-go-28-3200-cl16",
category: "RAM",
brand: "Corsair",
name: "Corsair Vengeance LPX DDR4 16 Go (2×8) 3200 CL16",
spec: "DDR4 · 3200 CL16 · kit 16 Go (2×8)",
image: "",
offers: []
},
{
id: "ram-corsair-vengeance-lpx-ddr4-32-go-216-3200-cl16",
category: "RAM",
brand: "Corsair",
name: "Corsair Vengeance LPX DDR4 32 Go (2×16) 3200 CL16",
spec: "DDR4 · 3200 CL16 · kit 32 Go (2×16)",
image: "",
offers: []
},
{
id: "ram-corsair-vengeance-lpx-ddr4-16-go-28-3600-cl18",
category: "RAM",
brand: "Corsair",
name: "Corsair Vengeance LPX DDR4 16 Go (2×8) 3600 CL18",
spec: "DDR4 · 3600 CL18 · kit 16 Go (2×8)",
image: "",
offers: []
},
{
id: "ram-corsair-vengeance-lpx-ddr4-32-go-216-3600-cl18",
category: "RAM",
brand: "Corsair",
name: "Corsair Vengeance LPX DDR4 32 Go (2×16) 3600 CL18",
spec: "DDR4 · 3600 CL18 · kit 32 Go (2×16)",
image: "",
offers: []
},
{
id: "ram-g-skill-ripjaws-v-ddr4-16-go-28-3200-cl16",
category: "RAM",
brand: "G.Skill",
name: "G.Skill Ripjaws V DDR4 16 Go (2×8) 3200 CL16",
spec: "DDR4 · 3200 CL16 · kit 16 Go (2×8)",
image: "",
offers: []
},
{
id: "ram-g-skill-ripjaws-v-ddr4-32-go-216-3200-cl16",
category: "RAM",
brand: "G.Skill",
name: "G.Skill Ripjaws V DDR4 32 Go (2×16) 3200 CL16",
spec: "DDR4 · 3200 CL16 · kit 32 Go (2×16)",
image: "",
offers: []
},
{
id: "ram-g-skill-ripjaws-v-ddr4-16-go-28-3600-cl16",
category: "RAM",
brand: "G.Skill",
name: "G.Skill Ripjaws V DDR4 16 Go (2×8) 3600 CL16",
spec: "DDR4 · 3600 CL16 · kit 16 Go (2×8)",
image: "",
offers: []
},
{
id: "ram-g-skill-ripjaws-v-ddr4-32-go-216-3600-cl16",
category: "RAM",
brand: "G.Skill",
name: "G.Skill Ripjaws V DDR4 32 Go (2×16) 3600 CL16",
spec: "DDR4 · 3600 CL16 · kit 32 Go (2×16)",
image: "",
offers: []
},
{
id: "ram-g-skill-trident-z-rgb-ddr4-16-go-28-3600-cl16",
category: "RAM",
brand: "G.Skill",
name: "G.Skill Trident Z RGB DDR4 16 Go (2×8) 3600 CL16",
spec: "DDR4 · 3600 CL16 · kit 16 Go (2×8)",
image: "",
offers: []
},
{
id: "ram-g-skill-trident-z-rgb-ddr4-32-go-216-3600-cl16",
category: "RAM",
brand: "G.Skill",
name: "G.Skill Trident Z RGB DDR4 32 Go (2×16) 3600 CL16",
spec: "DDR4 · 3600 CL16 · kit 32 Go (2×16)",
image: "",
offers: []
},
{
id: "ram-kingston-fury-beast-ddr4-16-go-28-3200-cl16",
category: "RAM",
brand: "Kingston",
name: "Kingston Fury Beast DDR4 16 Go (2×8) 3200 CL16",
spec: "DDR4 · 3200 CL16 · kit 16 Go (2×8)",
image: "",
offers: []
},
{
id: "ram-kingston-fury-beast-ddr4-32-go-216-3200-cl16",
category: "RAM",
brand: "Kingston",
name: "Kingston Fury Beast DDR4 32 Go (2×16) 3200 CL16",
spec: "DDR4 · 3200 CL16 · kit 32 Go (2×16)",
image: "",
offers: []
},
{
id: "ram-kingston-fury-beast-ddr4-16-go-28-3600-cl18",
category: "RAM",
brand: "Kingston",
name: "Kingston Fury Beast DDR4 16 Go (2×8) 3600 CL18",
spec: "DDR4 · 3600 CL18 · kit 16 Go (2×8)",
image: "",
offers: []
},
{
id: "ram-kingston-fury-beast-ddr4-32-go-216-3600-cl18",
category: "RAM",
brand: "Kingston",
name: "Kingston Fury Beast DDR4 32 Go (2×16) 3600 CL18",
spec: "DDR4 · 3600 CL18 · kit 32 Go (2×16)",
image: "",
offers: []
},
{
id: "ram-crucial-ballistix-ddr4-16-go-28-3200-cl16",
category: "RAM",
brand: "Crucial",
name: "Crucial Ballistix DDR4 16 Go (2×8) 3200 CL16",
spec: "DDR4 · 3200 CL16 · kit 16 Go (2×8)",
image: "",
offers: []
},
{
id: "ram-crucial-ballistix-ddr4-32-go-216-3200-cl16",
category: "RAM",
brand: "Crucial",
name: "Crucial Ballistix DDR4 32 Go (2×16) 3200 CL16",
spec: "DDR4 · 3200 CL16 · kit 32 Go (2×16)",
image: "",
offers: []
},
{
id: "stockage-samsung-9100-pro-1-to",
category: "Stockage",
brand: "Samsung",
name: "Samsung 9100 PRO 1 To",
spec: "NVMe PCIe 5.0 · M.2 2280",
image: "",
offers: []
},
{
id: "stockage-samsung-9100-pro-2-to",
category: "Stockage",
brand: "Samsung",
name: "Samsung 9100 PRO 2 To",
spec: "NVMe PCIe 5.0 · M.2 2280",
image: "",
offers: []
},
{
id: "stockage-samsung-9100-pro-4-to",
category: "Stockage",
brand: "Samsung",
name: "Samsung 9100 PRO 4 To",
spec: "NVMe PCIe 5.0 · M.2 2280",
image: "",
offers: []
},
{
id: "stockage-samsung-990-pro-1-to",
category: "Stockage",
brand: "Samsung",
name: "Samsung 990 PRO 1 To",
spec: "NVMe PCIe 4.0 · M.2 2280",
image: "",
offers: []
},
{
id: "stockage-samsung-990-pro-2-to",
category: "Stockage",
brand: "Samsung",
name: "Samsung 990 PRO 2 To",
spec: "NVMe PCIe 4.0 · M.2 2280",
image: "",
offers: []
},
{
id: "stockage-samsung-990-pro-4-to",
category: "Stockage",
brand: "Samsung",
name: "Samsung 990 PRO 4 To",
spec: "NVMe PCIe 4.0 · M.2 2280",
image: "",
offers: []
},
{
id: "stockage-samsung-990-pro-avec-dissipateur-1-to",
category: "Stockage",
brand: "Samsung",
name: "Samsung 990 PRO avec dissipateur 1 To",
spec: "NVMe PCIe 4.0 · M.2 2280",
image: "",
offers: []
},
{
id: "stockage-samsung-990-pro-avec-dissipateur-2-to",
category: "Stockage",
brand: "Samsung",
name: "Samsung 990 PRO avec dissipateur 2 To",
spec: "NVMe PCIe 4.0 · M.2 2280",
image: "",
offers: []
},
{
id: "stockage-samsung-990-evo-plus-1-to",
category: "Stockage",
brand: "Samsung",
name: "Samsung 990 EVO Plus 1 To",
spec: "NVMe PCIe 4.0 · M.2 2280",
image: "",
offers: []
},
{
id: "stockage-samsung-990-evo-plus-2-to",
category: "Stockage",
brand: "Samsung",
name: "Samsung 990 EVO Plus 2 To",
spec: "NVMe PCIe 4.0 · M.2 2280",
image: "",
offers: []
},
{
id: "stockage-samsung-990-evo-plus-4-to",
category: "Stockage",
brand: "Samsung",
name: "Samsung 990 EVO Plus 4 To",
spec: "NVMe PCIe 4.0 · M.2 2280",
image: "",
offers: []
},
{
id: "stockage-samsung-980-pro-1-to",
category: "Stockage",
brand: "Samsung",
name: "Samsung 980 PRO 1 To",
spec: "NVMe PCIe 4.0 · M.2 2280",
image: "",
offers: []
},
{
id: "stockage-samsung-980-pro-2-to",
category: "Stockage",
brand: "Samsung",
name: "Samsung 980 PRO 2 To",
spec: "NVMe PCIe 4.0 · M.2 2280",
image: "",
offers: []
},
{
id: "stockage-samsung-870-evo-500-go",
category: "Stockage",
brand: "Samsung",
name: "Samsung 870 EVO 500 Go",
spec: "SATA III · 2,5 pouces",
image: "",
offers: []
},
{
id: "stockage-samsung-870-evo-1-to",
category: "Stockage",
brand: "Samsung",
name: "Samsung 870 EVO 1 To",
spec: "SATA III · 2,5 pouces",
image: "",
offers: []
},
{
id: "stockage-samsung-870-evo-2-to",
category: "Stockage",
brand: "Samsung",
name: "Samsung 870 EVO 2 To",
spec: "SATA III · 2,5 pouces",
image: "",
offers: []
},
{
id: "stockage-samsung-870-evo-4-to",
category: "Stockage",
brand: "Samsung",
name: "Samsung 870 EVO 4 To",
spec: "SATA III · 2,5 pouces",
image: "",
offers: []
},
{
id: "stockage-samsung-870-qvo-1-to",
category: "Stockage",
brand: "Samsung",
name: "Samsung 870 QVO 1 To",
spec: "SATA III · 2,5 pouces",
image: "",
offers: []
},
{
id: "stockage-samsung-870-qvo-2-to",
category: "Stockage",
brand: "Samsung",
name: "Samsung 870 QVO 2 To",
spec: "SATA III · 2,5 pouces",
image: "",
offers: []
},
{
id: "stockage-samsung-870-qvo-4-to",
category: "Stockage",
brand: "Samsung",
name: "Samsung 870 QVO 4 To",
spec: "SATA III · 2,5 pouces",
image: "",
offers: []
},
{
id: "stockage-wd-black-sn850x-1-to",
category: "Stockage",
brand: "WD",
name: "WD Black SN850X 1 To",
spec: "NVMe PCIe 4.0 · M.2 2280",
image: "",
offers: []
},
{
id: "stockage-wd-black-sn850x-2-to",
category: "Stockage",
brand: "WD",
name: "WD Black SN850X 2 To",
spec: "NVMe PCIe 4.0 · M.2 2280",
image: "",
offers: []
},
{
id: "stockage-wd-black-sn850x-4-to",
category: "Stockage",
brand: "WD",
name: "WD Black SN850X 4 To",
spec: "NVMe PCIe 4.0 · M.2 2280",
image: "",
offers: []
},
{
id: "stockage-wd-black-sn850x-avec-dissipateur-1-to",
category: "Stockage",
brand: "WD",
name: "WD Black SN850X avec dissipateur 1 To",
spec: "NVMe PCIe 4.0 · M.2 2280",
image: "",
offers: []
},
{
id: "stockage-wd-black-sn850x-avec-dissipateur-2-to",
category: "Stockage",
brand: "WD",
name: "WD Black SN850X avec dissipateur 2 To",
spec: "NVMe PCIe 4.0 · M.2 2280",
image: "",
offers: []
},
{
id: "stockage-wd-black-sn8100-1-to",
category: "Stockage",
brand: "WD",
name: "WD Black SN8100 1 To",
spec: "NVMe PCIe 5.0 · M.2 2280",
image: "",
offers: []
},
{
id: "stockage-wd-black-sn8100-2-to",
category: "Stockage",
brand: "WD",
name: "WD Black SN8100 2 To",
spec: "NVMe PCIe 5.0 · M.2 2280",
image: "",
offers: []
},
{
id: "stockage-wd-black-sn8100-4-to",
category: "Stockage",
brand: "WD",
name: "WD Black SN8100 4 To",
spec: "NVMe PCIe 5.0 · M.2 2280",
image: "",
offers: []
},
{
id: "stockage-wd-blue-sn5000-1-to",
category: "Stockage",
brand: "WD",
name: "WD Blue SN5000 1 To",
spec: "NVMe PCIe 4.0 · M.2 2280",
image: "",
offers: []
},
{
id: "stockage-wd-blue-sn5000-2-to",
category: "Stockage",
brand: "WD",
name: "WD Blue SN5000 2 To",
spec: "NVMe PCIe 4.0 · M.2 2280",
image: "",
offers: []
},
{
id: "stockage-wd-blue-sn580-500-go",
category: "Stockage",
brand: "WD",
name: "WD Blue SN580 500 Go",
spec: "NVMe PCIe 4.0 · M.2 2280",
image: "",
offers: []
},
{
id: "stockage-wd-blue-sn580-1-to",
category: "Stockage",
brand: "WD",
name: "WD Blue SN580 1 To",
spec: "NVMe PCIe 4.0 · M.2 2280",
image: "",
offers: []
},
{
id: "stockage-wd-blue-sn580-2-to",
category: "Stockage",
brand: "WD",
name: "WD Blue SN580 2 To",
spec: "NVMe PCIe 4.0 · M.2 2280",
image: "",
offers: []
},
{
id: "stockage-crucial-t705-1-to",
category: "Stockage",
brand: "Crucial",
name: "Crucial T705 1 To",
spec: "NVMe PCIe 5.0 · M.2 2280",
image: "",
offers: []
},
{
id: "stockage-crucial-t705-2-to",
category: "Stockage",
brand: "Crucial",
name: "Crucial T705 2 To",
spec: "NVMe PCIe 5.0 · M.2 2280",
image: "",
offers: []
},
{
id: "stockage-crucial-t700-1-to",
category: "Stockage",
brand: "Crucial",
name: "Crucial T700 1 To",
spec: "NVMe PCIe 5.0 · M.2 2280",
image: "",
offers: []
},
{
id: "stockage-crucial-t700-2-to",
category: "Stockage",
brand: "Crucial",
name: "Crucial T700 2 To",
spec: "NVMe PCIe 5.0 · M.2 2280",
image: "",
offers: []
},
{
id: "stockage-crucial-t700-4-to",
category: "Stockage",
brand: "Crucial",
name: "Crucial T700 4 To",
spec: "NVMe PCIe 5.0 · M.2 2280",
image: "",
offers: []
},
{
id: "stockage-crucial-t500-1-to",
category: "Stockage",
brand: "Crucial",
name: "Crucial T500 1 To",
spec: "NVMe PCIe 4.0 · M.2 2280",
image: "",
offers: []
},
{
id: "stockage-crucial-t500-2-to",
category: "Stockage",
brand: "Crucial",
name: "Crucial T500 2 To",
spec: "NVMe PCIe 4.0 · M.2 2280",
image: "",
offers: []
},
{
id: "stockage-crucial-p3-plus-500-go",
category: "Stockage",
brand: "Crucial",
name: "Crucial P3 Plus 500 Go",
spec: "NVMe PCIe 4.0 · M.2 2280",
image: "",
offers: []
},
{
id: "stockage-crucial-p3-plus-1-to",
category: "Stockage",
brand: "Crucial",
name: "Crucial P3 Plus 1 To",
spec: "NVMe PCIe 4.0 · M.2 2280",
image: "",
offers: []
},
{
id: "stockage-crucial-p3-plus-2-to",
category: "Stockage",
brand: "Crucial",
name: "Crucial P3 Plus 2 To",
spec: "NVMe PCIe 4.0 · M.2 2280",
image: "",
offers: []
},
{
id: "stockage-crucial-p3-plus-4-to",
category: "Stockage",
brand: "Crucial",
name: "Crucial P3 Plus 4 To",
spec: "NVMe PCIe 4.0 · M.2 2280",
image: "",
offers: []
},
{
id: "stockage-crucial-mx500-500-go",
category: "Stockage",
brand: "Crucial",
name: "Crucial MX500 500 Go",
spec: "SATA III · 2,5 pouces",
image: "",
offers: []
},
{
id: "stockage-crucial-mx500-1-to",
category: "Stockage",
brand: "Crucial",
name: "Crucial MX500 1 To",
spec: "SATA III · 2,5 pouces",
image: "",
offers: []
},
{
id: "stockage-crucial-mx500-2-to",
category: "Stockage",
brand: "Crucial",
name: "Crucial MX500 2 To",
spec: "SATA III · 2,5 pouces",
image: "",
offers: []
},
{
id: "stockage-kingston-kc3000-1-to",
category: "Stockage",
brand: "Kingston",
name: "Kingston KC3000 1 To",
spec: "NVMe PCIe 4.0 · M.2 2280",
image: "",
offers: []
},
{
id: "stockage-kingston-kc3000-2-to",
category: "Stockage",
brand: "Kingston",
name: "Kingston KC3000 2 To",
spec: "NVMe PCIe 4.0 · M.2 2280",
image: "",
offers: []
},
{
id: "stockage-kingston-nv3-500-go",
category: "Stockage",
brand: "Kingston",
name: "Kingston NV3 500 Go",
spec: "NVMe PCIe 4.0 · M.2 2280",
image: "",
offers: []
},
{
id: "stockage-kingston-nv3-1-to",
category: "Stockage",
brand: "Kingston",
name: "Kingston NV3 1 To",
spec: "NVMe PCIe 4.0 · M.2 2280",
image: "",
offers: []
},
{
id: "stockage-kingston-nv3-2-to",
category: "Stockage",
brand: "Kingston",
name: "Kingston NV3 2 To",
spec: "NVMe PCIe 4.0 · M.2 2280",
image: "",
offers: []
},
{
id: "stockage-kingston-a400-240-go",
category: "Stockage",
brand: "Kingston",
name: "Kingston A400 240 Go",
spec: "SATA III · 2,5 pouces",
image: "",
offers: []
},
{
id: "stockage-kingston-a400-480-go",
category: "Stockage",
brand: "Kingston",
name: "Kingston A400 480 Go",
spec: "SATA III · 2,5 pouces",
image: "",
offers: []
},
{
id: "stockage-kingston-a400-960-go",
category: "Stockage",
brand: "Kingston",
name: "Kingston A400 960 Go",
spec: "SATA III · 2,5 pouces",
image: "",
offers: []
},
{
id: "stockage-corsair-mp700-pro-1-to",
category: "Stockage",
brand: "Corsair",
name: "Corsair MP700 Pro 1 To",
spec: "NVMe PCIe 5.0 · M.2 2280",
image: "",
offers: []
},
{
id: "stockage-corsair-mp700-pro-2-to",
category: "Stockage",
brand: "Corsair",
name: "Corsair MP700 Pro 2 To",
spec: "NVMe PCIe 5.0 · M.2 2280",
image: "",
offers: []
},
{
id: "stockage-corsair-mp700-pro-4-to",
category: "Stockage",
brand: "Corsair",
name: "Corsair MP700 Pro 4 To",
spec: "NVMe PCIe 5.0 · M.2 2280",
image: "",
offers: []
},
{
id: "stockage-corsair-mp600-pro-lpx-1-to",
category: "Stockage",
brand: "Corsair",
name: "Corsair MP600 Pro LPX 1 To",
spec: "NVMe PCIe 4.0 · compatible PS5",
image: "",
offers: []
},
{
id: "stockage-corsair-mp600-pro-lpx-2-to",
category: "Stockage",
brand: "Corsair",
name: "Corsair MP600 Pro LPX 2 To",
spec: "NVMe PCIe 4.0 · compatible PS5",
image: "",
offers: []
},
{
id: "stockage-corsair-mp600-pro-lpx-4-to",
category: "Stockage",
brand: "Corsair",
name: "Corsair MP600 Pro LPX 4 To",
spec: "NVMe PCIe 4.0 · compatible PS5",
image: "",
offers: []
},
{
id: "stockage-seagate-firecuda-540-1-to",
category: "Stockage",
brand: "Seagate",
name: "Seagate FireCuda 540 1 To",
spec: "NVMe PCIe 5.0 · M.2 2280",
image: "",
offers: []
},
{
id: "stockage-seagate-firecuda-540-2-to",
category: "Stockage",
brand: "Seagate",
name: "Seagate FireCuda 540 2 To",
spec: "NVMe PCIe 5.0 · M.2 2280",
image: "",
offers: []
},
{
id: "stockage-seagate-firecuda-530r-1-to",
category: "Stockage",
brand: "Seagate",
name: "Seagate FireCuda 530R 1 To",
spec: "NVMe PCIe 4.0 · M.2 2280",
image: "",
offers: []
},
{
id: "stockage-seagate-firecuda-530r-2-to",
category: "Stockage",
brand: "Seagate",
name: "Seagate FireCuda 530R 2 To",
spec: "NVMe PCIe 4.0 · M.2 2280",
image: "",
offers: []
},
{
id: "stockage-sk-hynix-platinum-p51-1-to",
category: "Stockage",
brand: "SK hynix",
name: "SK hynix Platinum P51 1 To",
spec: "NVMe PCIe 5.0 · M.2 2280",
image: "",
offers: []
},
{
id: "stockage-sk-hynix-platinum-p51-2-to",
category: "Stockage",
brand: "SK hynix",
name: "SK hynix Platinum P51 2 To",
spec: "NVMe PCIe 5.0 · M.2 2280",
image: "",
offers: []
},
{
id: "stockage-sk-hynix-platinum-p41-1-to",
category: "Stockage",
brand: "SK hynix",
name: "SK hynix Platinum P41 1 To",
spec: "NVMe PCIe 4.0 · M.2 2280",
image: "",
offers: []
},
{
id: "stockage-sk-hynix-platinum-p41-2-to",
category: "Stockage",
brand: "SK hynix",
name: "SK hynix Platinum P41 2 To",
spec: "NVMe PCIe 4.0 · M.2 2280",
image: "",
offers: []
},
{
id: "stockage-lexar-nm790-1-to",
category: "Stockage",
brand: "Lexar",
name: "Lexar NM790 1 To",
spec: "NVMe PCIe 4.0 · M.2 2280",
image: "",
offers: []
},
{
id: "stockage-lexar-nm790-2-to",
category: "Stockage",
brand: "Lexar",
name: "Lexar NM790 2 To",
spec: "NVMe PCIe 4.0 · M.2 2280",
image: "",
offers: []
},
{
id: "stockage-lexar-nm790-4-to",
category: "Stockage",
brand: "Lexar",
name: "Lexar NM790 4 To",
spec: "NVMe PCIe 4.0 · M.2 2280",
image: "",
offers: []
},
{
id: "stockage-teamgroup-mp44l-1-to",
category: "Stockage",
brand: "TeamGroup",
name: "TeamGroup MP44L 1 To",
spec: "NVMe PCIe 4.0 · M.2 2280",
image: "",
offers: []
},
{
id: "stockage-teamgroup-mp44l-2-to",
category: "Stockage",
brand: "TeamGroup",
name: "TeamGroup MP44L 2 To",
spec: "NVMe PCIe 4.0 · M.2 2280",
image: "",
offers: []
},
{
id: "alimentation-corsair-rme-2025-750-w",
category: "Alimentation",
brand: "Corsair",
name: "Corsair RMe (2025) 750 W",
spec: "750 W · 80+ Gold · ATX 3.1",
image: "",
offers: []
},
{
id: "alimentation-corsair-rme-2025-850-w",
category: "Alimentation",
brand: "Corsair",
name: "Corsair RMe (2025) 850 W",
spec: "850 W · 80+ Gold · ATX 3.1",
image: "",
offers: []
},
{
id: "alimentation-corsair-rme-2025-1000-w",
category: "Alimentation",
brand: "Corsair",
name: "Corsair RMe (2025) 1000 W",
spec: "1000 W · 80+ Gold · ATX 3.1",
image: "",
offers: []
},
{
id: "alimentation-corsair-rme-2025-1200-w",
category: "Alimentation",
brand: "Corsair",
name: "Corsair RMe (2025) 1200 W",
spec: "1200 W · 80+ Gold · ATX 3.1",
image: "",
offers: []
},
{
id: "alimentation-corsair-rmx-shift-750-w",
category: "Alimentation",
brand: "Corsair",
name: "Corsair RMx SHIFT 750 W",
spec: "750 W · 80+ Gold · ATX 3.0",
image: "",
offers: []
},
{
id: "alimentation-corsair-rmx-shift-850-w",
category: "Alimentation",
brand: "Corsair",
name: "Corsair RMx SHIFT 850 W",
spec: "850 W · 80+ Gold · ATX 3.0",
image: "",
offers: []
},
{
id: "alimentation-corsair-rmx-shift-1000-w",
category: "Alimentation",
brand: "Corsair",
name: "Corsair RMx SHIFT 1000 W",
spec: "1000 W · 80+ Gold · ATX 3.0",
image: "",
offers: []
},
{
id: "alimentation-corsair-sf-l-850-w",
category: "Alimentation",
brand: "Corsair",
name: "Corsair SF-L 850 W",
spec: "850 W · 80+ Platinum · SFX-L",
image: "",
offers: []
},
{
id: "alimentation-corsair-sf-l-1000-w",
category: "Alimentation",
brand: "Corsair",
name: "Corsair SF-L 1000 W",
spec: "1000 W · 80+ Platinum · SFX-L",
image: "",
offers: []
},
{
id: "alimentation-corsair-cx-f-rgb-550-w",
category: "Alimentation",
brand: "Corsair",
name: "Corsair CX-F RGB 550 W",
spec: "550 W · 80+ Bronze",
image: "",
offers: []
},
{
id: "alimentation-corsair-cx-f-rgb-650-w",
category: "Alimentation",
brand: "Corsair",
name: "Corsair CX-F RGB 650 W",
spec: "650 W · 80+ Bronze",
image: "",
offers: []
},
{
id: "alimentation-corsair-cx-f-rgb-750-w",
category: "Alimentation",
brand: "Corsair",
name: "Corsair CX-F RGB 750 W",
spec: "750 W · 80+ Bronze",
image: "",
offers: []
},
{
id: "alimentation-corsair-hx-platinum-1000-w",
category: "Alimentation",
brand: "Corsair",
name: "Corsair HX Platinum 1000 W",
spec: "1000 W · 80+ Platinum",
image: "",
offers: []
},
{
id: "alimentation-corsair-hx-platinum-1200-w",
category: "Alimentation",
brand: "Corsair",
name: "Corsair HX Platinum 1200 W",
spec: "1200 W · 80+ Platinum",
image: "",
offers: []
},
{
id: "alimentation-corsair-hx-platinum-1500-w",
category: "Alimentation",
brand: "Corsair",
name: "Corsair HX Platinum 1500 W",
spec: "1500 W · 80+ Platinum",
image: "",
offers: []
},
{
id: "alimentation-be-quiet-pure-power-13-m-650-w",
category: "Alimentation",
brand: "be quiet!",
name: "be quiet! Pure Power 13 M 650 W",
spec: "650 W · 80+ Gold · ATX 3.1",
image: "",
offers: []
},
{
id: "alimentation-be-quiet-pure-power-13-m-750-w",
category: "Alimentation",
brand: "be quiet!",
name: "be quiet! Pure Power 13 M 750 W",
spec: "750 W · 80+ Gold · ATX 3.1",
image: "",
offers: []
},
{
id: "alimentation-be-quiet-pure-power-13-m-850-w",
category: "Alimentation",
brand: "be quiet!",
name: "be quiet! Pure Power 13 M 850 W",
spec: "850 W · 80+ Gold · ATX 3.1",
image: "",
offers: []
},
{
id: "alimentation-be-quiet-pure-power-13-m-1000-w",
category: "Alimentation",
brand: "be quiet!",
name: "be quiet! Pure Power 13 M 1000 W",
spec: "1000 W · 80+ Gold · ATX 3.1",
image: "",
offers: []
},
{
id: "alimentation-be-quiet-straight-power-12-750-w",
category: "Alimentation",
brand: "be quiet!",
name: "be quiet! Straight Power 12 750 W",
spec: "750 W · 80+ Platinum · ATX 3.0",
image: "",
offers: []
},
{
id: "alimentation-be-quiet-straight-power-12-850-w",
category: "Alimentation",
brand: "be quiet!",
name: "be quiet! Straight Power 12 850 W",
spec: "850 W · 80+ Platinum · ATX 3.0",
image: "",
offers: []
},
{
id: "alimentation-be-quiet-straight-power-12-1000-w",
category: "Alimentation",
brand: "be quiet!",
name: "be quiet! Straight Power 12 1000 W",
spec: "1000 W · 80+ Platinum · ATX 3.0",
image: "",
offers: []
},
{
id: "alimentation-be-quiet-straight-power-12-1200-w",
category: "Alimentation",
brand: "be quiet!",
name: "be quiet! Straight Power 12 1200 W",
spec: "1200 W · 80+ Platinum · ATX 3.0",
image: "",
offers: []
},
{
id: "alimentation-be-quiet-dark-power-13-1000-w",
category: "Alimentation",
brand: "be quiet!",
name: "be quiet! Dark Power 13 1000 W",
spec: "1000 W · 80+ Titanium",
image: "",
offers: []
},
{
id: "alimentation-be-quiet-dark-power-13-1300-w",
category: "Alimentation",
brand: "be quiet!",
name: "be quiet! Dark Power 13 1300 W",
spec: "1300 W · 80+ Titanium",
image: "",
offers: []
},
{
id: "alimentation-be-quiet-system-power-11-550-w",
category: "Alimentation",
brand: "be quiet!",
name: "be quiet! System Power 11 550 W",
spec: "550 W · 80+ Bronze",
image: "",
offers: []
},
{
id: "alimentation-be-quiet-system-power-11-650-w",
category: "Alimentation",
brand: "be quiet!",
name: "be quiet! System Power 11 650 W",
spec: "650 W · 80+ Bronze",
image: "",
offers: []
},
{
id: "alimentation-be-quiet-system-power-11-750-w",
category: "Alimentation",
brand: "be quiet!",
name: "be quiet! System Power 11 750 W",
spec: "750 W · 80+ Bronze",
image: "",
offers: []
},
{
id: "alimentation-seasonic-focus-gx-2024-650-w",
category: "Alimentation",
brand: "Seasonic",
name: "Seasonic Focus GX (2024) 650 W",
spec: "650 W · 80+ Gold · ATX 3.0",
image: "",
offers: []
},
{
id: "alimentation-seasonic-focus-gx-2024-750-w",
category: "Alimentation",
brand: "Seasonic",
name: "Seasonic Focus GX (2024) 750 W",
spec: "750 W · 80+ Gold · ATX 3.0",
image: "",
offers: []
},
{
id: "alimentation-seasonic-focus-gx-2024-850-w",
category: "Alimentation",
brand: "Seasonic",
name: "Seasonic Focus GX (2024) 850 W",
spec: "850 W · 80+ Gold · ATX 3.0",
image: "",
offers: []
},
{
id: "alimentation-seasonic-focus-gx-2024-1000-w",
category: "Alimentation",
brand: "Seasonic",
name: "Seasonic Focus GX (2024) 1000 W",
spec: "1000 W · 80+ Gold · ATX 3.0",
image: "",
offers: []
},
{
id: "alimentation-seasonic-vertex-gx-850-w",
category: "Alimentation",
brand: "Seasonic",
name: "Seasonic Vertex GX 850 W",
spec: "850 W · 80+ Gold · ATX 3.0",
image: "",
offers: []
},
{
id: "alimentation-seasonic-vertex-gx-1000-w",
category: "Alimentation",
brand: "Seasonic",
name: "Seasonic Vertex GX 1000 W",
spec: "1000 W · 80+ Gold · ATX 3.0",
image: "",
offers: []
},
{
id: "alimentation-seasonic-vertex-gx-1200-w",
category: "Alimentation",
brand: "Seasonic",
name: "Seasonic Vertex GX 1200 W",
spec: "1200 W · 80+ Gold · ATX 3.0",
image: "",
offers: []
},
{
id: "alimentation-seasonic-prime-tx-1000-w",
category: "Alimentation",
brand: "Seasonic",
name: "Seasonic Prime TX 1000 W",
spec: "1000 W · 80+ Titanium",
image: "",
offers: []
},
{
id: "alimentation-seasonic-prime-tx-1300-w",
category: "Alimentation",
brand: "Seasonic",
name: "Seasonic Prime TX 1300 W",
spec: "1300 W · 80+ Titanium",
image: "",
offers: []
},
{
id: "alimentation-seasonic-prime-tx-1600-w",
category: "Alimentation",
brand: "Seasonic",
name: "Seasonic Prime TX 1600 W",
spec: "1600 W · 80+ Titanium",
image: "",
offers: []
},
{
id: "alimentation-msi-mag-a-gl-pcie5-650-w",
category: "Alimentation",
brand: "MSI",
name: "MSI MAG A GL PCIE5 650 W",
spec: "650 W · 80+ Gold · ATX 3.0",
image: "",
offers: []
},
{
id: "alimentation-msi-mag-a-gl-pcie5-750-w",
category: "Alimentation",
brand: "MSI",
name: "MSI MAG A GL PCIE5 750 W",
spec: "750 W · 80+ Gold · ATX 3.0",
image: "",
offers: []
},
{
id: "alimentation-msi-mag-a-gl-pcie5-850-w",
category: "Alimentation",
brand: "MSI",
name: "MSI MAG A GL PCIE5 850 W",
spec: "850 W · 80+ Gold · ATX 3.0",
image: "",
offers: []
},
{
id: "alimentation-msi-mpg-a-g-pcie5-850-w",
category: "Alimentation",
brand: "MSI",
name: "MSI MPG A G PCIE5 850 W",
spec: "850 W · 80+ Gold · ATX 3.0",
image: "",
offers: []
},
{
id: "alimentation-msi-mpg-a-g-pcie5-1000-w",
category: "Alimentation",
brand: "MSI",
name: "MSI MPG A G PCIE5 1000 W",
spec: "1000 W · 80+ Gold · ATX 3.0",
image: "",
offers: []
},
{
id: "alimentation-nzxt-c-gold-2024-750-w",
category: "Alimentation",
brand: "NZXT",
name: "NZXT C Gold (2024) 750 W",
spec: "750 W · 80+ Gold · ATX 3.1",
image: "",
offers: []
},
{
id: "alimentation-nzxt-c-gold-2024-850-w",
category: "Alimentation",
brand: "NZXT",
name: "NZXT C Gold (2024) 850 W",
spec: "850 W · 80+ Gold · ATX 3.1",
image: "",
offers: []
},
{
id: "alimentation-nzxt-c-gold-2024-1000-w",
category: "Alimentation",
brand: "NZXT",
name: "NZXT C Gold (2024) 1000 W",
spec: "1000 W · 80+ Gold · ATX 3.1",
image: "",
offers: []
},
{
id: "alimentation-nzxt-c-gold-2024-1200-w",
category: "Alimentation",
brand: "NZXT",
name: "NZXT C Gold (2024) 1200 W",
spec: "1200 W · 80+ Gold · ATX 3.1",
image: "",
offers: []
},
{
id: "alimentation-cooler-master-mwe-gold-v2-650-w",
category: "Alimentation",
brand: "Cooler Master",
name: "Cooler Master MWE Gold V2 650 W",
spec: "650 W · 80+ Gold",
image: "",
offers: []
},
{
id: "alimentation-cooler-master-mwe-gold-v2-750-w",
category: "Alimentation",
brand: "Cooler Master",
name: "Cooler Master MWE Gold V2 750 W",
spec: "750 W · 80+ Gold",
image: "",
offers: []
},
{
id: "alimentation-cooler-master-mwe-gold-v2-850-w",
category: "Alimentation",
brand: "Cooler Master",
name: "Cooler Master MWE Gold V2 850 W",
spec: "850 W · 80+ Gold",
image: "",
offers: []
},
{
id: "alimentation-thermaltake-toughpower-gf3-750-w",
category: "Alimentation",
brand: "Thermaltake",
name: "Thermaltake Toughpower GF3 750 W",
spec: "750 W · 80+ Gold · ATX 3.0",
image: "",
offers: []
},
{
id: "alimentation-thermaltake-toughpower-gf3-850-w",
category: "Alimentation",
brand: "Thermaltake",
name: "Thermaltake Toughpower GF3 850 W",
spec: "850 W · 80+ Gold · ATX 3.0",
image: "",
offers: []
},
{
id: "alimentation-thermaltake-toughpower-gf3-1000-w",
category: "Alimentation",
brand: "Thermaltake",
name: "Thermaltake Toughpower GF3 1000 W",
spec: "1000 W · 80+ Gold · ATX 3.0",
image: "",
offers: []
},
{
id: "alimentation-gigabyte-ud-pg5-750-w",
category: "Alimentation",
brand: "Gigabyte",
name: "Gigabyte UD PG5 750 W",
spec: "750 W · 80+ Gold · ATX 3.0",
image: "",
offers: []
},
{
id: "alimentation-gigabyte-ud-pg5-850-w",
category: "Alimentation",
brand: "Gigabyte",
name: "Gigabyte UD PG5 850 W",
spec: "850 W · 80+ Gold · ATX 3.0",
image: "",
offers: []
},
{
id: "alimentation-gigabyte-ud-pg5-1000-w",
category: "Alimentation",
brand: "Gigabyte",
name: "Gigabyte UD PG5 1000 W",
spec: "1000 W · 80+ Gold · ATX 3.0",
image: "",
offers: []
},
{
id: "alimentation-asus-tuf-gaming-gold-750-w",
category: "Alimentation",
brand: "ASUS",
name: "ASUS TUF Gaming Gold 750 W",
spec: "750 W · 80+ Gold · ATX 3.0",
image: "",
offers: []
},
{
id: "alimentation-asus-tuf-gaming-gold-850-w",
category: "Alimentation",
brand: "ASUS",
name: "ASUS TUF Gaming Gold 850 W",
spec: "850 W · 80+ Gold · ATX 3.0",
image: "",
offers: []
},
{
id: "alimentation-asus-tuf-gaming-gold-1000-w",
category: "Alimentation",
brand: "ASUS",
name: "ASUS TUF Gaming Gold 1000 W",
spec: "1000 W · 80+ Gold · ATX 3.0",
image: "",
offers: []
},
{
id: "alimentation-asus-rog-strix-platinum-1000-w",
category: "Alimentation",
brand: "ASUS",
name: "ASUS ROG Strix Platinum 1000 W",
spec: "1000 W · 80+ Platinum",
image: "",
offers: []
},
{
id: "alimentation-asus-rog-strix-platinum-1200-w",
category: "Alimentation",
brand: "ASUS",
name: "ASUS ROG Strix Platinum 1200 W",
spec: "1200 W · 80+ Platinum",
image: "",
offers: []
},
{
id: "boitier-fractal-design-north",
category: "Boîtier",
brand: "Fractal Design",
name: "Fractal Design North",
spec: "ATX moyenne tour · façade noyer",
image: "",
offers: []
},
{
id: "boitier-fractal-design-north-xl",
category: "Boîtier",
brand: "Fractal Design",
name: "Fractal Design North XL",
spec: "E-ATX grande tour · façade bois",
image: "",
offers: []
},
{
id: "boitier-fractal-design-pop-air-rgb",
category: "Boîtier",
brand: "Fractal Design",
name: "Fractal Design Pop Air RGB",
spec: "ATX moyenne tour · maillé",
image: "",
offers: []
},
{
id: "boitier-fractal-design-pop-mini-air",
category: "Boîtier",
brand: "Fractal Design",
name: "Fractal Design Pop Mini Air",
spec: "micro-ATX · maillé",
image: "",
offers: []
},
{
id: "boitier-fractal-design-meshify-2",
category: "Boîtier",
brand: "Fractal Design",
name: "Fractal Design Meshify 2",
spec: "ATX grande tour · flux d'air",
image: "",
offers: []
},
{
id: "boitier-fractal-design-meshify-2-compact",
category: "Boîtier",
brand: "Fractal Design",
name: "Fractal Design Meshify 2 Compact",
spec: "ATX moyenne tour",
image: "",
offers: []
},
{
id: "boitier-fractal-design-torrent",
category: "Boîtier",
brand: "Fractal Design",
name: "Fractal Design Torrent",
spec: "E-ATX · ventilation maximale",
image: "",
offers: []
},
{
id: "boitier-fractal-design-torrent-compact",
category: "Boîtier",
brand: "Fractal Design",
name: "Fractal Design Torrent Compact",
spec: "ATX moyenne tour",
image: "",
offers: []
},
{
id: "boitier-fractal-design-define-7",
category: "Boîtier",
brand: "Fractal Design",
name: "Fractal Design Define 7",
spec: "ATX · insonorisé",
image: "",
offers: []
},
{
id: "boitier-fractal-design-terra",
category: "Boîtier",
brand: "Fractal Design",
name: "Fractal Design Terra",
spec: "mini-ITX · SFF aluminium",
image: "",
offers: []
},
{
id: "boitier-fractal-design-ridge",
category: "Boîtier",
brand: "Fractal Design",
name: "Fractal Design Ridge",
spec: "mini-ITX · SFF",
image: "",
offers: []
},
{
id: "boitier-fractal-design-mood",
category: "Boîtier",
brand: "Fractal Design",
name: "Fractal Design Mood",
spec: "mini-ITX · SFF vertical",
image: "",
offers: []
},
{
id: "boitier-lian-li-o11-dynamic-evo",
category: "Boîtier",
brand: "Lian Li",
name: "Lian Li O11 Dynamic EVO",
spec: "E-ATX · double chambre verre",
image: "",
offers: []
},
{
id: "boitier-lian-li-o11-dynamic-evo-xl",
category: "Boîtier",
brand: "Lian Li",
name: "Lian Li O11 Dynamic EVO XL",
spec: "E-ATX grande tour",
image: "",
offers: []
},
{
id: "boitier-lian-li-o11-vision",
category: "Boîtier",
brand: "Lian Li",
name: "Lian Li O11 Vision",
spec: "E-ATX · 3 faces verre",
image: "",
offers: []
},
{
id: "boitier-lian-li-o11-vision-compact",
category: "Boîtier",
brand: "Lian Li",
name: "Lian Li O11 Vision Compact",
spec: "ATX · verre",
image: "",
offers: []
},
{
id: "boitier-lian-li-o11-air-mini",
category: "Boîtier",
brand: "Lian Li",
name: "Lian Li O11 Air Mini",
spec: "micro-ATX · maillé",
image: "",
offers: []
},
{
id: "boitier-lian-li-lancool-216",
category: "Boîtier",
brand: "Lian Li",
name: "Lian Li Lancool 216",
spec: "ATX · flux d'air",
image: "",
offers: []
},
{
id: "boitier-lian-li-lancool-217",
category: "Boîtier",
brand: "Lian Li",
name: "Lian Li Lancool 217",
spec: "ATX · flux d'air",
image: "",
offers: []
},
{
id: "boitier-lian-li-lancool-207",
category: "Boîtier",
brand: "Lian Li",
name: "Lian Li Lancool 207",
spec: "micro-ATX · compact",
image: "",
offers: []
},
{
id: "boitier-lian-li-lancool-iii",
category: "Boîtier",
brand: "Lian Li",
name: "Lian Li Lancool III",
spec: "ATX grande tour",
image: "",
offers: []
},
{
id: "boitier-lian-li-a4-h2o",
category: "Boîtier",
brand: "Lian Li",
name: "Lian Li A4-H2O",
spec: "mini-ITX · SFF 11 L",
image: "",
offers: []
},
{
id: "boitier-lian-li-q58",
category: "Boîtier",
brand: "Lian Li",
name: "Lian Li Q58",
spec: "mini-ITX · SFF",
image: "",
offers: []
},
{
id: "boitier-nzxt-h5-flow-2024",
category: "Boîtier",
brand: "NZXT",
name: "NZXT H5 Flow (2024)",
spec: "ATX moyenne tour · flux d'air",
image: "",
offers: []
},
{
id: "boitier-nzxt-h5-elite-2024",
category: "Boîtier",
brand: "NZXT",
name: "NZXT H5 Elite (2024)",
spec: "ATX · verre",
image: "",
offers: []
},
{
id: "boitier-nzxt-h7-flow-2024",
category: "Boîtier",
brand: "NZXT",
name: "NZXT H7 Flow (2024)",
spec: "ATX moyenne tour",
image: "",
offers: []
},
{
id: "boitier-nzxt-h7-elite",
category: "Boîtier",
brand: "NZXT",
name: "NZXT H7 Elite",
spec: "ATX · verre + RGB",
image: "",
offers: []
},
{
id: "boitier-nzxt-h9-flow",
category: "Boîtier",
brand: "NZXT",
name: "NZXT H9 Flow",
spec: "ATX · double chambre",
image: "",
offers: []
},
{
id: "boitier-nzxt-h9-elite",
category: "Boîtier",
brand: "NZXT",
name: "NZXT H9 Elite",
spec: "ATX · double chambre verre",
image: "",
offers: []
},
{
id: "boitier-nzxt-h6-flow",
category: "Boîtier",
brand: "NZXT",
name: "NZXT H6 Flow",
spec: "micro-ATX · panoramique",
image: "",
offers: []
},
{
id: "boitier-be-quiet-pure-base-500dx",
category: "Boîtier",
brand: "be quiet!",
name: "be quiet! Pure Base 500DX",
spec: "ATX · flux d'air + ARGB",
image: "",
offers: []
},
{
id: "boitier-be-quiet-pure-base-501",
category: "Boîtier",
brand: "be quiet!",
name: "be quiet! Pure Base 501",
spec: "ATX moyenne tour",
image: "",
offers: []
},
{
id: "boitier-be-quiet-silent-base-802",
category: "Boîtier",
brand: "be quiet!",
name: "be quiet! Silent Base 802",
spec: "ATX · insonorisé",
image: "",
offers: []
},
{
id: "boitier-be-quiet-shadow-base-800-fx",
category: "Boîtier",
brand: "be quiet!",
name: "be quiet! Shadow Base 800 FX",
spec: "ATX · ARGB",
image: "",
offers: []
},
{
id: "boitier-be-quiet-light-base-600-lx",
category: "Boîtier",
brand: "be quiet!",
name: "be quiet! Light Base 600 LX",
spec: "ATX · panoramique",
image: "",
offers: []
},
{
id: "boitier-corsair-4000d-airflow",
category: "Boîtier",
brand: "Corsair",
name: "Corsair 4000D Airflow",
spec: "ATX · référence flux d'air",
image: "",
offers: []
},
{
id: "boitier-corsair-4000d-rgb-airflow",
category: "Boîtier",
brand: "Corsair",
name: "Corsair 4000D RGB Airflow",
spec: "ATX · 3 ventilateurs RGB",
image: "",
offers: []
},
{
id: "boitier-corsair-5000d-airflow",
category: "Boîtier",
brand: "Corsair",
name: "Corsair 5000D Airflow",
spec: "ATX grande tour",
image: "",
offers: []
},
{
id: "boitier-corsair-6500x",
category: "Boîtier",
brand: "Corsair",
name: "Corsair 6500X",
spec: "ATX · double chambre",
image: "",
offers: []
},
{
id: "boitier-corsair-2500x",
category: "Boîtier",
brand: "Corsair",
name: "Corsair 2500X",
spec: "micro-ATX · double chambre",
image: "",
offers: []
},
{
id: "boitier-corsair-3000d-airflow",
category: "Boîtier",
brand: "Corsair",
name: "Corsair 3000D Airflow",
spec: "ATX · budget",
image: "",
offers: []
},
{
id: "boitier-corsair-icue-link-2500x-rgb",
category: "Boîtier",
brand: "Corsair",
name: "Corsair iCUE LINK 2500X RGB",
spec: "micro-ATX · RGB",
image: "",
offers: []
},
{
id: "boitier-cooler-master-masterbox-td500-mesh-v2",
category: "Boîtier",
brand: "Cooler Master",
name: "Cooler Master MasterBox TD500 Mesh V2",
spec: "ATX · maillé ARGB",
image: "",
offers: []
},
{
id: "boitier-cooler-master-nr200p-max",
category: "Boîtier",
brand: "Cooler Master",
name: "Cooler Master NR200P Max",
spec: "mini-ITX · SFF avec AIO",
image: "",
offers: []
},
{
id: "boitier-cooler-master-nr200p-v2",
category: "Boîtier",
brand: "Cooler Master",
name: "Cooler Master NR200P V2",
spec: "mini-ITX · SFF",
image: "",
offers: []
},
{
id: "boitier-cooler-master-qube-500-flatpack",
category: "Boîtier",
brand: "Cooler Master",
name: "Cooler Master QUBE 500 Flatpack",
spec: "ATX · à monter soi-même",
image: "",
offers: []
},
{
id: "boitier-cooler-master-haf-700",
category: "Boîtier",
brand: "Cooler Master",
name: "Cooler Master HAF 700",
spec: "E-ATX grande tour",
image: "",
offers: []
},
{
id: "boitier-phanteks-eclipse-g360a",
category: "Boîtier",
brand: "Phanteks",
name: "Phanteks Eclipse G360A",
spec: "ATX · 3 ventilateurs ARGB",
image: "",
offers: []
},
{
id: "boitier-phanteks-eclipse-g400a",
category: "Boîtier",
brand: "Phanteks",
name: "Phanteks Eclipse G400A",
spec: "ATX moyenne tour",
image: "",
offers: []
},
{
id: "boitier-phanteks-xt-pro-ultra",
category: "Boîtier",
brand: "Phanteks",
name: "Phanteks XT Pro Ultra",
spec: "ATX · budget ARGB",
image: "",
offers: []
},
{
id: "boitier-phanteks-nv5",
category: "Boîtier",
brand: "Phanteks",
name: "Phanteks NV5",
spec: "ATX · panoramique verre",
image: "",
offers: []
},
{
id: "boitier-phanteks-nv7",
category: "Boîtier",
brand: "Phanteks",
name: "Phanteks NV7",
spec: "E-ATX · panoramique",
image: "",
offers: []
},
{
id: "boitier-phanteks-evolv-shift-xt",
category: "Boîtier",
brand: "Phanteks",
name: "Phanteks Evolv Shift XT",
spec: "mini-ITX · SFF vertical",
image: "",
offers: []
},
{
id: "boitier-montech-air-903-max",
category: "Boîtier",
brand: "Montech",
name: "Montech AIR 903 MAX",
spec: "ATX · budget flux d'air",
image: "",
offers: []
},
{
id: "boitier-montech-air-1000-premium",
category: "Boîtier",
brand: "Montech",
name: "Montech AIR 1000 Premium",
spec: "ATX · 4 ventilateurs ARGB",
image: "",
offers: []
},
{
id: "boitier-montech-xr",
category: "Boîtier",
brand: "Montech",
name: "Montech XR",
spec: "ATX · budget",
image: "",
offers: []
},
{
id: "boitier-montech-king-95-pro",
category: "Boîtier",
brand: "Montech",
name: "Montech KING 95 Pro",
spec: "ATX · double chambre",
image: "",
offers: []
},
{
id: "boitier-antec-c8",
category: "Boîtier",
brand: "Antec",
name: "Antec C8",
spec: "E-ATX · double chambre",
image: "",
offers: []
},
{
id: "boitier-antec-c5-argb",
category: "Boîtier",
brand: "Antec",
name: "Antec C5 ARGB",
spec: "ATX moyenne tour",
image: "",
offers: []
},
{
id: "boitier-antec-flux-pro",
category: "Boîtier",
brand: "Antec",
name: "Antec Flux Pro",
spec: "ATX · flux d'air",
image: "",
offers: []
},
{
id: "boitier-deepcool-ch560-digital",
category: "Boîtier",
brand: "DeepCool",
name: "DeepCool CH560 Digital",
spec: "ATX · écran température",
image: "",
offers: []
},
{
id: "boitier-deepcool-ch370",
category: "Boîtier",
brand: "DeepCool",
name: "DeepCool CH370",
spec: "micro-ATX · compact",
image: "",
offers: []
},
{
id: "boitier-deepcool-morpheus",
category: "Boîtier",
brand: "DeepCool",
name: "DeepCool Morpheus",
spec: "E-ATX grande tour",
image: "",
offers: []
},
{
id: "boitier-hyte-y70-touch",
category: "Boîtier",
brand: "Hyte",
name: "Hyte Y70 Touch",
spec: "ATX · écran tactile",
image: "",
offers: []
},
{
id: "boitier-hyte-y60",
category: "Boîtier",
brand: "Hyte",
name: "Hyte Y60",
spec: "ATX · verre panoramique",
image: "",
offers: []
},
{
id: "boitier-hyte-y40",
category: "Boîtier",
brand: "Hyte",
name: "Hyte Y40",
spec: "ATX · verre",
image: "",
offers: []
},
{
id: "boitier-thermaltake-view-270-tg-argb",
category: "Boîtier",
brand: "Thermaltake",
name: "Thermaltake View 270 TG ARGB",
spec: "ATX · verre",
image: "",
offers: []
},
{
id: "boitier-silverstone-fara-r1-pro",
category: "Boîtier",
brand: "SilverStone",
name: "SilverStone FARA R1 Pro",
spec: "ATX · budget",
image: "",
offers: []
},
{
id: "boitier-inwin-a1-prime",
category: "Boîtier",
brand: "InWin",
name: "InWin A1 Prime",
spec: "mini-ITX · avec alim",
image: "",
offers: []
},
{
id: "refroidissement-noctua-nh-d15-g2",
category: "Refroidissement",
brand: "Noctua",
name: "Noctua NH-D15 G2",
spec: "Ventirad double tour · haut de gamme",
image: "",
offers: []
},
{
id: "refroidissement-noctua-nh-d15-g2-lbc",
category: "Refroidissement",
brand: "Noctua",
name: "Noctua NH-D15 G2 LBC",
spec: "Ventirad double tour",
image: "",
offers: []
},
{
id: "refroidissement-noctua-nh-d15-chromax-black",
category: "Refroidissement",
brand: "Noctua",
name: "Noctua NH-D15 chromax.black",
spec: "Ventirad double tour noir",
image: "",
offers: []
},
{
id: "refroidissement-noctua-nh-u12a-chromax-black",
category: "Refroidissement",
brand: "Noctua",
name: "Noctua NH-U12A chromax.black",
spec: "Ventirad simple tour 120 mm",
image: "",
offers: []
},
{
id: "refroidissement-noctua-nh-u12s-redux",
category: "Refroidissement",
brand: "Noctua",
name: "Noctua NH-U12S redux",
spec: "Ventirad simple tour · budget",
image: "",
offers: []
},
{
id: "refroidissement-noctua-nh-u9s",
category: "Refroidissement",
brand: "Noctua",
name: "Noctua NH-U9S",
spec: "Ventirad 92 mm compact",
image: "",
offers: []
},
{
id: "refroidissement-noctua-nh-l12s",
category: "Refroidissement",
brand: "Noctua",
name: "Noctua NH-L12S",
spec: "Ventirad bas profil",
image: "",
offers: []
},
{
id: "refroidissement-noctua-nh-l9i-17xx",
category: "Refroidissement",
brand: "Noctua",
name: "Noctua NH-L9i-17xx",
spec: "Ventirad bas profil ITX",
image: "",
offers: []
},
{
id: "refroidissement-be-quiet-dark-rock-pro-5",
category: "Refroidissement",
brand: "be quiet!",
name: "be quiet! Dark Rock Pro 5",
spec: "Ventirad double tour silencieux",
image: "",
offers: []
},
{
id: "refroidissement-be-quiet-dark-rock-5",
category: "Refroidissement",
brand: "be quiet!",
name: "be quiet! Dark Rock 5",
spec: "Ventirad simple tour",
image: "",
offers: []
},
{
id: "refroidissement-be-quiet-dark-rock-elite",
category: "Refroidissement",
brand: "be quiet!",
name: "be quiet! Dark Rock Elite",
spec: "Ventirad double tour haut de gamme",
image: "",
offers: []
},
{
id: "refroidissement-be-quiet-pure-rock-2-fx",
category: "Refroidissement",
brand: "be quiet!",
name: "be quiet! Pure Rock 2 FX",
spec: "Ventirad ARGB",
image: "",
offers: []
},
{
id: "refroidissement-be-quiet-shadow-rock-3",
category: "Refroidissement",
brand: "be quiet!",
name: "be quiet! Shadow Rock 3",
spec: "Ventirad simple tour",
image: "",
offers: []
},
{
id: "refroidissement-thermalright-peerless-assassin-120-se",
category: "Refroidissement",
brand: "Thermalright",
name: "Thermalright Peerless Assassin 120 SE",
spec: "Ventirad double tour · rapport qualité/prix",
image: "",
offers: []
},
{
id: "refroidissement-thermalright-phantom-spirit-120-se",
category: "Refroidissement",
brand: "Thermalright",
name: "Thermalright Phantom Spirit 120 SE",
spec: "Ventirad double tour",
image: "",
offers: []
},
{
id: "refroidissement-thermalright-phantom-spirit-120-evo",
category: "Refroidissement",
brand: "Thermalright",
name: "Thermalright Phantom Spirit 120 EVO",
spec: "Ventirad double tour",
image: "",
offers: []
},
{
id: "refroidissement-thermalright-assassin-x-120-r-se",
category: "Refroidissement",
brand: "Thermalright",
name: "Thermalright Assassin X 120 R SE",
spec: "Ventirad budget",
image: "",
offers: []
},
{
id: "refroidissement-thermalright-axp90-x47",
category: "Refroidissement",
brand: "Thermalright",
name: "Thermalright AXP90-X47",
spec: "Ventirad bas profil ITX",
image: "",
offers: []
},
{
id: "refroidissement-deepcool-ak620-digital-pro",
category: "Refroidissement",
brand: "DeepCool",
name: "DeepCool AK620 Digital Pro",
spec: "Ventirad double tour · écran",
image: "",
offers: []
},
{
id: "refroidissement-deepcool-ak620",
category: "Refroidissement",
brand: "DeepCool",
name: "DeepCool AK620",
spec: "Ventirad double tour",
image: "",
offers: []
},
{
id: "refroidissement-deepcool-ak500",
category: "Refroidissement",
brand: "DeepCool",
name: "DeepCool AK500",
spec: "Ventirad simple tour",
image: "",
offers: []
},
{
id: "refroidissement-deepcool-ak400",
category: "Refroidissement",
brand: "DeepCool",
name: "DeepCool AK400",
spec: "Ventirad budget",
image: "",
offers: []
},
{
id: "refroidissement-arctic-freezer-36-a-rgb",
category: "Refroidissement",
brand: "Arctic",
name: "Arctic Freezer 36 A-RGB",
spec: "Ventirad double ventilateur",
image: "",
offers: []
},
{
id: "refroidissement-arctic-freezer-36",
category: "Refroidissement",
brand: "Arctic",
name: "Arctic Freezer 36",
spec: "Ventirad budget",
image: "",
offers: []
},
{
id: "refroidissement-cooler-master-hyper-212-halo-black",
category: "Refroidissement",
brand: "Cooler Master",
name: "Cooler Master Hyper 212 Halo Black",
spec: "Ventirad ARGB",
image: "",
offers: []
},
{
id: "refroidissement-cooler-master-masterair-ma824-stealth",
category: "Refroidissement",
brand: "Cooler Master",
name: "Cooler Master MasterAir MA824 Stealth",
spec: "Ventirad double tour",
image: "",
offers: []
},
{
id: "refroidissement-scythe-fuma-3",
category: "Refroidissement",
brand: "Scythe",
name: "Scythe Fuma 3",
spec: "Ventirad double tour",
image: "",
offers: []
},
{
id: "refroidissement-scythe-mugen-6",
category: "Refroidissement",
brand: "Scythe",
name: "Scythe Mugen 6",
spec: "Ventirad simple tour",
image: "",
offers: []
},
{
id: "refroidissement-arctic-liquid-freezer-iii-420",
category: "Refroidissement",
brand: "Arctic",
name: "Arctic Liquid Freezer III 420",
spec: "Watercooling AIO 420 mm",
image: "",
offers: []
},
{
id: "refroidissement-arctic-liquid-freezer-iii-360",
category: "Refroidissement",
brand: "Arctic",
name: "Arctic Liquid Freezer III 360",
spec: "Watercooling AIO 360 mm",
image: "",
offers: []
},
{
id: "refroidissement-arctic-liquid-freezer-iii-280",
category: "Refroidissement",
brand: "Arctic",
name: "Arctic Liquid Freezer III 280",
spec: "Watercooling AIO 280 mm",
image: "",
offers: []
},
{
id: "refroidissement-arctic-liquid-freezer-iii-240",
category: "Refroidissement",
brand: "Arctic",
name: "Arctic Liquid Freezer III 240",
spec: "Watercooling AIO 240 mm",
image: "",
offers: []
},
{
id: "refroidissement-corsair-icue-link-titan-360-rx-rgb",
category: "Refroidissement",
brand: "Corsair",
name: "Corsair iCUE LINK TITAN 360 RX RGB",
spec: "AIO 360 mm",
image: "",
offers: []
},
{
id: "refroidissement-corsair-icue-link-titan-240-rx-rgb",
category: "Refroidissement",
brand: "Corsair",
name: "Corsair iCUE LINK TITAN 240 RX RGB",
spec: "AIO 240 mm",
image: "",
offers: []
},
{
id: "refroidissement-corsair-icue-h150i-elite-lcd-xt",
category: "Refroidissement",
brand: "Corsair",
name: "Corsair iCUE H150i Elite LCD XT",
spec: "AIO 360 mm · écran LCD",
image: "",
offers: []
},
{
id: "refroidissement-corsair-nautilus-360-rs",
category: "Refroidissement",
brand: "Corsair",
name: "Corsair Nautilus 360 RS",
spec: "AIO 360 mm",
image: "",
offers: []
},
{
id: "refroidissement-nzxt-kraken-elite-360-rgb",
category: "Refroidissement",
brand: "NZXT",
name: "NZXT Kraken Elite 360 RGB",
spec: "AIO 360 mm · écran LCD",
image: "",
offers: []
},
{
id: "refroidissement-nzxt-kraken-360-rgb",
category: "Refroidissement",
brand: "NZXT",
name: "NZXT Kraken 360 RGB",
spec: "AIO 360 mm",
image: "",
offers: []
},
{
id: "refroidissement-nzxt-kraken-280",
category: "Refroidissement",
brand: "NZXT",
name: "NZXT Kraken 280",
spec: "AIO 280 mm",
image: "",
offers: []
},
{
id: "refroidissement-nzxt-kraken-240",
category: "Refroidissement",
brand: "NZXT",
name: "NZXT Kraken 240",
spec: "AIO 240 mm",
image: "",
offers: []
},
{
id: "refroidissement-lian-li-galahad-ii-trinity-performance-360",
category: "Refroidissement",
brand: "Lian Li",
name: "Lian Li Galahad II Trinity Performance 360",
spec: "AIO 360 mm",
image: "",
offers: []
},
{
id: "refroidissement-lian-li-galahad-ii-lcd-360",
category: "Refroidissement",
brand: "Lian Li",
name: "Lian Li Galahad II LCD 360",
spec: "AIO 360 mm · écran",
image: "",
offers: []
},
{
id: "refroidissement-msi-mag-coreliquid-e360",
category: "Refroidissement",
brand: "MSI",
name: "MSI MAG Coreliquid E360",
spec: "AIO 360 mm",
image: "",
offers: []
},
{
id: "refroidissement-msi-mpg-coreliquid-a15-360",
category: "Refroidissement",
brand: "MSI",
name: "MSI MPG Coreliquid A15 360",
spec: "AIO 360 mm",
image: "",
offers: []
},
{
id: "refroidissement-deepcool-le720",
category: "Refroidissement",
brand: "DeepCool",
name: "DeepCool LE720",
spec: "AIO 360 mm · budget",
image: "",
offers: []
},
{
id: "refroidissement-deepcool-mystique-360",
category: "Refroidissement",
brand: "DeepCool",
name: "DeepCool Mystique 360",
spec: "AIO 360 mm · écran",
image: "",
offers: []
},
{
id: "refroidissement-be-quiet-pure-loop-3-360mm",
category: "Refroidissement",
brand: "be quiet!",
name: "be quiet! Pure Loop 3 360mm",
spec: "AIO 360 mm silencieux",
image: "",
offers: []
},
{
id: "refroidissement-be-quiet-silent-loop-3-360mm",
category: "Refroidissement",
brand: "be quiet!",
name: "be quiet! Silent Loop 3 360mm",
spec: "AIO 360 mm haut de gamme",
image: "",
offers: []
},
{
id: "refroidissement-thermalright-frozen-notte-360-argb",
category: "Refroidissement",
brand: "Thermalright",
name: "Thermalright Frozen Notte 360 ARGB",
spec: "AIO 360 mm · budget",
image: "",
offers: []
},
{
id: "refroidissement-thermalright-frozen-magic-240",
category: "Refroidissement",
brand: "Thermalright",
name: "Thermalright Frozen Magic 240",
spec: "AIO 240 mm · budget",
image: "",
offers: []
},
{
id: "refroidissement-asus-rog-ryujin-iii-360-argb",
category: "Refroidissement",
brand: "ASUS",
name: "ASUS ROG Ryujin III 360 ARGB",
spec: "AIO 360 mm · écran",
image: "",
offers: []
},
{
id: "refroidissement-asus-tuf-gaming-lc-ii-240-argb",
category: "Refroidissement",
brand: "ASUS",
name: "ASUS TUF Gaming LC II 240 ARGB",
spec: "AIO 240 mm",
image: "",
offers: []
},
{
id: "refroidissement-cooler-master-masterliquid-360l-core-argb",
category: "Refroidissement",
brand: "Cooler Master",
name: "Cooler Master MasterLiquid 360L Core ARGB",
spec: "AIO 360 mm",
image: "",
offers: []
},
{
id: "ventilateur-noctua-nf-a12x25-pwm",
category: "Ventilateur",
brand: "Noctua",
name: "Noctua NF-A12x25 PWM",
spec: "120 mm · référence",
image: "",
offers: []
},
{
id: "ventilateur-noctua-nf-a12x25-chromax-black",
category: "Ventilateur",
brand: "Noctua",
name: "Noctua NF-A12x25 chromax.black",
spec: "120 mm · noir",
image: "",
offers: []
},
{
id: "ventilateur-noctua-nf-a12x25-g2-pwm",
category: "Ventilateur",
brand: "Noctua",
name: "Noctua NF-A12x25 G2 PWM",
spec: "120 mm · nouvelle génération",
image: "",
offers: []
},
{
id: "ventilateur-noctua-nf-f12-pwm",
category: "Ventilateur",
brand: "Noctua",
name: "Noctua NF-F12 PWM",
spec: "120 mm · radiateur",
image: "",
offers: []
},
{
id: "ventilateur-noctua-nf-a14-pwm",
category: "Ventilateur",
brand: "Noctua",
name: "Noctua NF-A14 PWM",
spec: "140 mm",
image: "",
offers: []
},
{
id: "ventilateur-noctua-nf-a14x25-g2-pwm",
category: "Ventilateur",
brand: "Noctua",
name: "Noctua NF-A14x25 G2 PWM",
spec: "140 mm · nouvelle génération",
image: "",
offers: []
},
{
id: "ventilateur-noctua-nf-p12-redux-1700-pwm",
category: "Ventilateur",
brand: "Noctua",
name: "Noctua NF-P12 redux-1700 PWM",
spec: "120 mm · budget",
image: "",
offers: []
},
{
id: "ventilateur-arctic-p12-pwm-pst-pack-de-5",
category: "Ventilateur",
brand: "Arctic",
name: "Arctic P12 PWM PST (pack de 5)",
spec: "120 mm · pack budget",
image: "",
offers: []
},
{
id: "ventilateur-arctic-p12-max",
category: "Ventilateur",
brand: "Arctic",
name: "Arctic P12 Max",
spec: "120 mm · haute pression",
image: "",
offers: []
},
{
id: "ventilateur-arctic-p14-pwm-pst-pack-de-5",
category: "Ventilateur",
brand: "Arctic",
name: "Arctic P14 PWM PST (pack de 5)",
spec: "140 mm · pack",
image: "",
offers: []
},
{
id: "ventilateur-arctic-p12-a-rgb-pack-de-3",
category: "Ventilateur",
brand: "Arctic",
name: "Arctic P12 A-RGB (pack de 3)",
spec: "120 mm · ARGB",
image: "",
offers: []
},
{
id: "ventilateur-be-quiet-silent-wings-4-120mm-pwm",
category: "Ventilateur",
brand: "be quiet!",
name: "be quiet! Silent Wings 4 120mm PWM",
spec: "120 mm · silencieux",
image: "",
offers: []
},
{
id: "ventilateur-be-quiet-silent-wings-4-pro-120mm",
category: "Ventilateur",
brand: "be quiet!",
name: "be quiet! Silent Wings 4 Pro 120mm",
spec: "120 mm · haute performance",
image: "",
offers: []
},
{
id: "ventilateur-be-quiet-silent-wings-4-140mm-pwm",
category: "Ventilateur",
brand: "be quiet!",
name: "be quiet! Silent Wings 4 140mm PWM",
spec: "140 mm · silencieux",
image: "",
offers: []
},
{
id: "ventilateur-be-quiet-light-wings-120mm-argb-pack-de-3",
category: "Ventilateur",
brand: "be quiet!",
name: "be quiet! Light Wings 120mm ARGB (pack de 3)",
spec: "120 mm · ARGB",
image: "",
offers: []
},
{
id: "ventilateur-corsair-icue-link-rx120-rgb-pack-de-3",
category: "Ventilateur",
brand: "Corsair",
name: "Corsair iCUE LINK RX120 RGB (pack de 3)",
spec: "120 mm · ARGB chaînables",
image: "",
offers: []
},
{
id: "ventilateur-corsair-icue-link-rx140-rgb-pack-de-2",
category: "Ventilateur",
brand: "Corsair",
name: "Corsair iCUE LINK RX140 RGB (pack de 2)",
spec: "140 mm · ARGB",
image: "",
offers: []
},
{
id: "ventilateur-corsair-af120-elite",
category: "Ventilateur",
brand: "Corsair",
name: "Corsair AF120 Elite",
spec: "120 mm",
image: "",
offers: []
},
{
id: "ventilateur-lian-li-uni-fan-sl120-v2-pack-de-3",
category: "Ventilateur",
brand: "Lian Li",
name: "Lian Li Uni Fan SL120 V2 (pack de 3)",
spec: "120 mm · ARGB chaînables",
image: "",
offers: []
},
{
id: "ventilateur-lian-li-uni-fan-tl120-pack-de-3",
category: "Ventilateur",
brand: "Lian Li",
name: "Lian Li Uni Fan TL120 (pack de 3)",
spec: "120 mm · ARGB",
image: "",
offers: []
},
{
id: "ventilateur-lian-li-uni-fan-tl-lcd-120-pack-de-3",
category: "Ventilateur",
brand: "Lian Li",
name: "Lian Li Uni Fan TL LCD 120 (pack de 3)",
spec: "120 mm · écran LCD",
image: "",
offers: []
},
{
id: "ventilateur-lian-li-uni-fan-sl-infinity-120-pack-de-3",
category: "Ventilateur",
brand: "Lian Li",
name: "Lian Li Uni Fan SL-Infinity 120 (pack de 3)",
spec: "120 mm · ARGB",
image: "",
offers: []
},
{
id: "ventilateur-thermalright-tl-c12c-s-pack-de-3",
category: "Ventilateur",
brand: "Thermalright",
name: "Thermalright TL-C12C-S (pack de 3)",
spec: "120 mm · budget",
image: "",
offers: []
},
{
id: "ventilateur-thermalright-tl-c12-pro-pack-de-3",
category: "Ventilateur",
brand: "Thermalright",
name: "Thermalright TL-C12 Pro (pack de 3)",
spec: "120 mm · ARGB budget",
image: "",
offers: []
},
{
id: "ventilateur-phanteks-t30-120",
category: "Ventilateur",
brand: "Phanteks",
name: "Phanteks T30-120",
spec: "120 mm · performance maximale",
image: "",
offers: []
},
{
id: "ventilateur-phanteks-m25-120-pack-de-3",
category: "Ventilateur",
brand: "Phanteks",
name: "Phanteks M25-120 (pack de 3)",
spec: "120 mm · ARGB",
image: "",
offers: []
},
{
id: "ventilateur-cooler-master-sickleflow-120-argb-pack-de-3",
category: "Ventilateur",
brand: "Cooler Master",
name: "Cooler Master SickleFlow 120 ARGB (pack de 3)",
spec: "120 mm · ARGB budget",
image: "",
offers: []
},
{
id: "ventilateur-cooler-master-mobius-120p-argb",
category: "Ventilateur",
brand: "Cooler Master",
name: "Cooler Master Mobius 120P ARGB",
spec: "120 mm",
image: "",
offers: []
},
{
id: "ventilateur-noctua-nf-a8-pwm",
category: "Ventilateur",
brand: "Noctua",
name: "Noctua NF-A8 PWM",
spec: "80 mm",
image: "",
offers: []
},
{
id: "ventilateur-arctic-p8-pwm-pst",
category: "Ventilateur",
brand: "Arctic",
name: "Arctic P8 PWM PST",
spec: "80 mm",
image: "",
offers: []
}
];
