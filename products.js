/**
 * products.js — CATALOGUE DES PRODUITS
 * ---------------------------------------------------------------
 *  Chaque produit peut recevoir des offres (un marchand = une offre).
 *  Ajoute les prix depuis admin.html, ou directement ici :
 *    offers: [ { id:"unique", m:"ldlc-fr", price:229, shipping:0,
 *                url:"https://...", stock:"ok" } ]
 *
 *  Catalogue constitué à partir des références connues jusqu'à mi-2026.
 *  Les nouveautés plus récentes sont à ajouter à la main.
 */

const PRODUCTS = [
 {
  id: "cpu-amd-ryzen-9-9950x",
  category: "CPU",
  brand: "AMD",
  name: "AMD Ryzen 9 9950X",
  spec: "16 cœurs / 32 threads · AM5",
  image: "",
  offers: []
 },
 {
  id: "cpu-amd-ryzen-9-9900x",
  category: "CPU",
  brand: "AMD",
  name: "AMD Ryzen 9 9900X",
  spec: "12 cœurs / 24 threads · AM5",
  image: "",
  offers: []
 },
 {
  id: "cpu-amd-ryzen-7-9800x3d",
  category: "CPU",
  brand: "AMD",
  name: "AMD Ryzen 7 9800X3D",
  spec: "8 cœurs · 3D V-Cache · AM5",
  image: "",
  offers: []
 },
 {
  id: "cpu-amd-ryzen-7-9700x",
  category: "CPU",
  brand: "AMD",
  name: "AMD Ryzen 7 9700X",
  spec: "8 cœurs / 16 threads · AM5",
  image: "",
  offers: []
 },
 {
  id: "cpu-amd-ryzen-5-9600x",
  category: "CPU",
  brand: "AMD",
  name: "AMD Ryzen 5 9600X",
  spec: "6 cœurs / 12 threads · AM5",
  image: "",
  offers: []
 },
 {
  id: "cpu-amd-ryzen-9-7950x3d",
  category: "CPU",
  brand: "AMD",
  name: "AMD Ryzen 9 7950X3D",
  spec: "16 cœurs · 3D V-Cache · AM5",
  image: "",
  offers: []
 },
 {
  id: "cpu-amd-ryzen-9-7950x",
  category: "CPU",
  brand: "AMD",
  name: "AMD Ryzen 9 7950X",
  spec: "16 cœurs / 32 threads · AM5",
  image: "",
  offers: []
 },
 {
  id: "cpu-amd-ryzen-9-7900x3d",
  category: "CPU",
  brand: "AMD",
  name: "AMD Ryzen 9 7900X3D",
  spec: "12 cœurs · 3D V-Cache · AM5",
  image: "",
  offers: []
 },
 {
  id: "cpu-amd-ryzen-9-7900x",
  category: "CPU",
  brand: "AMD",
  name: "AMD Ryzen 9 7900X",
  spec: "12 cœurs / 24 threads · AM5",
  image: "",
  offers: []
 },
 {
  id: "cpu-amd-ryzen-9-7900",
  category: "CPU",
  brand: "AMD",
  name: "AMD Ryzen 9 7900",
  spec: "12 cœurs · 65 W · AM5",
  image: "",
  offers: []
 },
 {
  id: "cpu-amd-ryzen-7-7800x3d",
  category: "CPU",
  brand: "AMD",
  name: "AMD Ryzen 7 7800X3D",
  spec: "8 cœurs · 3D V-Cache · AM5",
  image: "",
  offers: []
 },
 {
  id: "cpu-amd-ryzen-7-7700x",
  category: "CPU",
  brand: "AMD",
  name: "AMD Ryzen 7 7700X",
  spec: "8 cœurs / 16 threads · AM5",
  image: "",
  offers: []
 },
 {
  id: "cpu-amd-ryzen-7-7700",
  category: "CPU",
  brand: "AMD",
  name: "AMD Ryzen 7 7700",
  spec: "8 cœurs · 65 W · AM5",
  image: "",
  offers: []
 },
 {
  id: "cpu-amd-ryzen-5-7600x",
  category: "CPU",
  brand: "AMD",
  name: "AMD Ryzen 5 7600X",
  spec: "6 cœurs / 12 threads · AM5",
  image: "",
  offers: []
 },
 {
  id: "cpu-amd-ryzen-5-7600",
  category: "CPU",
  brand: "AMD",
  name: "AMD Ryzen 5 7600",
  spec: "6 cœurs · 65 W · AM5",
  image: "",
  offers: []
 },
 {
  id: "cpu-amd-ryzen-5-7500f",
  category: "CPU",
  brand: "AMD",
  name: "AMD Ryzen 5 7500F",
  spec: "6 cœurs · sans IGP · AM5",
  image: "",
  offers: []
 },
 {
  id: "cpu-amd-ryzen-7-8700g",
  category: "CPU",
  brand: "AMD",
  name: "AMD Ryzen 7 8700G",
  spec: "8 cœurs · APU Radeon 780M · AM5",
  image: "",
  offers: []
 },
 {
  id: "cpu-amd-ryzen-5-8600g",
  category: "CPU",
  brand: "AMD",
  name: "AMD Ryzen 5 8600G",
  spec: "6 cœurs · APU Radeon 760M · AM5",
  image: "",
  offers: []
 },
 {
  id: "cpu-amd-ryzen-7-5800x3d",
  category: "CPU",
  brand: "AMD",
  name: "AMD Ryzen 7 5800X3D",
  spec: "8 cœurs · 3D V-Cache · AM4",
  image: "",
  offers: []
 },
 {
  id: "cpu-amd-ryzen-7-5800x",
  category: "CPU",
  brand: "AMD",
  name: "AMD Ryzen 7 5800X",
  spec: "8 cœurs / 16 threads · AM4",
  image: "",
  offers: []
 },
 {
  id: "cpu-amd-ryzen-7-5700x3d",
  category: "CPU",
  brand: "AMD",
  name: "AMD Ryzen 7 5700X3D",
  spec: "8 cœurs · 3D V-Cache · AM4",
  image: "",
  offers: []
 },
 {
  id: "cpu-amd-ryzen-7-5700x",
  category: "CPU",
  brand: "AMD",
  name: "AMD Ryzen 7 5700X",
  spec: "8 cœurs / 16 threads · AM4",
  image: "",
  offers: []
 },
 {
  id: "cpu-amd-ryzen-9-5950x",
  category: "CPU",
  brand: "AMD",
  name: "AMD Ryzen 9 5950X",
  spec: "16 cœurs / 32 threads · AM4",
  image: "",
  offers: []
 },
 {
  id: "cpu-amd-ryzen-9-5900x",
  category: "CPU",
  brand: "AMD",
  name: "AMD Ryzen 9 5900X",
  spec: "12 cœurs / 24 threads · AM4",
  image: "",
  offers: []
 },
 {
  id: "cpu-amd-ryzen-5-5600x",
  category: "CPU",
  brand: "AMD",
  name: "AMD Ryzen 5 5600X",
  spec: "6 cœurs / 12 threads · AM4",
  image: "",
  offers: []
 },
 {
  id: "cpu-amd-ryzen-5-5600",
  category: "CPU",
  brand: "AMD",
  name: "AMD Ryzen 5 5600",
  spec: "6 cœurs / 12 threads · AM4",
  image: "",
  offers: []
 },
 {
  id: "cpu-amd-ryzen-5-5500",
  category: "CPU",
  brand: "AMD",
  name: "AMD Ryzen 5 5500",
  spec: "6 cœurs / 12 threads · AM4",
  image: "",
  offers: []
 },
 {
  id: "cpu-amd-ryzen-5-3600",
  category: "CPU",
  brand: "AMD",
  name: "AMD Ryzen 5 3600",
  spec: "6 cœurs / 12 threads · AM4",
  image: "",
  offers: []
 },
 {
  id: "cpu-intel-core-ultra-9-285k",
  category: "CPU",
  brand: "Intel",
  name: "Intel Core Ultra 9 285K",
  spec: "24 cœurs · LGA1851",
  image: "",
  offers: []
 },
 {
  id: "cpu-intel-core-ultra-7-265k",
  category: "CPU",
  brand: "Intel",
  name: "Intel Core Ultra 7 265K",
  spec: "20 cœurs · LGA1851",
  image: "",
  offers: []
 },
 {
  id: "cpu-intel-core-ultra-5-245k",
  category: "CPU",
  brand: "Intel",
  name: "Intel Core Ultra 5 245K",
  spec: "14 cœurs · LGA1851",
  image: "",
  offers: []
 },
 {
  id: "cpu-intel-core-i9-14900k",
  category: "CPU",
  brand: "Intel",
  name: "Intel Core i9-14900K",
  spec: "24 cœurs · LGA1700",
  image: "",
  offers: []
 },
 {
  id: "cpu-intel-core-i9-14900kf",
  category: "CPU",
  brand: "Intel",
  name: "Intel Core i9-14900KF",
  spec: "24 cœurs · sans IGP · LGA1700",
  image: "",
  offers: []
 },
 {
  id: "cpu-intel-core-i7-14700k",
  category: "CPU",
  brand: "Intel",
  name: "Intel Core i7-14700K",
  spec: "20 cœurs · LGA1700",
  image: "",
  offers: []
 },
 {
  id: "cpu-intel-core-i7-14700kf",
  category: "CPU",
  brand: "Intel",
  name: "Intel Core i7-14700KF",
  spec: "20 cœurs · sans IGP · LGA1700",
  image: "",
  offers: []
 },
 {
  id: "cpu-intel-core-i5-14600k",
  category: "CPU",
  brand: "Intel",
  name: "Intel Core i5-14600K",
  spec: "14 cœurs · LGA1700",
  image: "",
  offers: []
 },
 {
  id: "cpu-intel-core-i5-14400f",
  category: "CPU",
  brand: "Intel",
  name: "Intel Core i5-14400F",
  spec: "10 cœurs · sans IGP · LGA1700",
  image: "",
  offers: []
 },
 {
  id: "cpu-intel-core-i9-13900k",
  category: "CPU",
  brand: "Intel",
  name: "Intel Core i9-13900K",
  spec: "24 cœurs · LGA1700",
  image: "",
  offers: []
 },
 {
  id: "cpu-intel-core-i7-13700k",
  category: "CPU",
  brand: "Intel",
  name: "Intel Core i7-13700K",
  spec: "16 cœurs · LGA1700",
  image: "",
  offers: []
 },
 {
  id: "cpu-intel-core-i5-13600k",
  category: "CPU",
  brand: "Intel",
  name: "Intel Core i5-13600K",
  spec: "14 cœurs · LGA1700",
  image: "",
  offers: []
 },
 {
  id: "cpu-intel-core-i5-13400f",
  category: "CPU",
  brand: "Intel",
  name: "Intel Core i5-13400F",
  spec: "10 cœurs · sans IGP · LGA1700",
  image: "",
  offers: []
 },
 {
  id: "cpu-intel-core-i5-12400f",
  category: "CPU",
  brand: "Intel",
  name: "Intel Core i5-12400F",
  spec: "6 cœurs · sans IGP · LGA1700",
  image: "",
  offers: []
 },
 {
  id: "cpu-intel-core-i3-12100f",
  category: "CPU",
  brand: "Intel",
  name: "Intel Core i3-12100F",
  spec: "4 cœurs · sans IGP · LGA1700",
  image: "",
  offers: []
 },
 {
  id: "gpu-nvidia-geforce-rtx-5090",
  category: "GPU",
  brand: "NVIDIA",
  name: "NVIDIA GeForce RTX 5090",
  spec: "32 Go GDDR7",
  image: "",
  offers: []
 },
 {
  id: "gpu-nvidia-geforce-rtx-5080",
  category: "GPU",
  brand: "NVIDIA",
  name: "NVIDIA GeForce RTX 5080",
  spec: "16 Go GDDR7",
  image: "",
  offers: []
 },
 {
  id: "gpu-nvidia-geforce-rtx-5070-ti",
  category: "GPU",
  brand: "NVIDIA",
  name: "NVIDIA GeForce RTX 5070 Ti",
  spec: "16 Go GDDR7",
  image: "",
  offers: []
 },
 {
  id: "gpu-nvidia-geforce-rtx-5070",
  category: "GPU",
  brand: "NVIDIA",
  name: "NVIDIA GeForce RTX 5070",
  spec: "12 Go GDDR7",
  image: "",
  offers: []
 },
 {
  id: "gpu-nvidia-geforce-rtx-5060-ti",
  category: "GPU",
  brand: "NVIDIA",
  name: "NVIDIA GeForce RTX 5060 Ti",
  spec: "16 Go GDDR7",
  image: "",
  offers: []
 },
 {
  id: "gpu-nvidia-geforce-rtx-5060",
  category: "GPU",
  brand: "NVIDIA",
  name: "NVIDIA GeForce RTX 5060",
  spec: "8 Go GDDR7",
  image: "",
  offers: []
 },
 {
  id: "gpu-nvidia-geforce-rtx-4090",
  category: "GPU",
  brand: "NVIDIA",
  name: "NVIDIA GeForce RTX 4090",
  spec: "24 Go GDDR6X",
  image: "",
  offers: []
 },
 {
  id: "gpu-nvidia-geforce-rtx-4080-super",
  category: "GPU",
  brand: "NVIDIA",
  name: "NVIDIA GeForce RTX 4080 Super",
  spec: "16 Go GDDR6X",
  image: "",
  offers: []
 },
 {
  id: "gpu-nvidia-geforce-rtx-4080",
  category: "GPU",
  brand: "NVIDIA",
  name: "NVIDIA GeForce RTX 4080",
  spec: "16 Go GDDR6X",
  image: "",
  offers: []
 },
 {
  id: "gpu-nvidia-geforce-rtx-4070-ti-super",
  category: "GPU",
  brand: "NVIDIA",
  name: "NVIDIA GeForce RTX 4070 Ti Super",
  spec: "16 Go GDDR6X",
  image: "",
  offers: []
 },
 {
  id: "gpu-nvidia-geforce-rtx-4070-ti",
  category: "GPU",
  brand: "NVIDIA",
  name: "NVIDIA GeForce RTX 4070 Ti",
  spec: "12 Go GDDR6X",
  image: "",
  offers: []
 },
 {
  id: "gpu-nvidia-geforce-rtx-4070-super",
  category: "GPU",
  brand: "NVIDIA",
  name: "NVIDIA GeForce RTX 4070 Super",
  spec: "12 Go GDDR6X",
  image: "",
  offers: []
 },
 {
  id: "gpu-nvidia-geforce-rtx-4070",
  category: "GPU",
  brand: "NVIDIA",
  name: "NVIDIA GeForce RTX 4070",
  spec: "12 Go GDDR6X",
  image: "",
  offers: []
 },
 {
  id: "gpu-nvidia-geforce-rtx-4060-ti-16-go",
  category: "GPU",
  brand: "NVIDIA",
  name: "NVIDIA GeForce RTX 4060 Ti 16 Go",
  spec: "16 Go GDDR6",
  image: "",
  offers: []
 },
 {
  id: "gpu-nvidia-geforce-rtx-4060-ti",
  category: "GPU",
  brand: "NVIDIA",
  name: "NVIDIA GeForce RTX 4060 Ti",
  spec: "8 Go GDDR6",
  image: "",
  offers: []
 },
 {
  id: "gpu-nvidia-geforce-rtx-4060",
  category: "GPU",
  brand: "NVIDIA",
  name: "NVIDIA GeForce RTX 4060",
  spec: "8 Go GDDR6",
  image: "",
  offers: []
 },
 {
  id: "gpu-nvidia-geforce-rtx-3060-12-go",
  category: "GPU",
  brand: "NVIDIA",
  name: "NVIDIA GeForce RTX 3060 12 Go",
  spec: "12 Go GDDR6",
  image: "",
  offers: []
 },
 {
  id: "gpu-nvidia-geforce-rtx-3050",
  category: "GPU",
  brand: "NVIDIA",
  name: "NVIDIA GeForce RTX 3050",
  spec: "8 Go GDDR6",
  image: "",
  offers: []
 },
 {
  id: "gpu-amd-radeon-rx-9070-xt",
  category: "GPU",
  brand: "AMD",
  name: "AMD Radeon RX 9070 XT",
  spec: "16 Go GDDR6",
  image: "",
  offers: []
 },
 {
  id: "gpu-amd-radeon-rx-9070",
  category: "GPU",
  brand: "AMD",
  name: "AMD Radeon RX 9070",
  spec: "16 Go GDDR6",
  image: "",
  offers: []
 },
 {
  id: "gpu-amd-radeon-rx-9060-xt",
  category: "GPU",
  brand: "AMD",
  name: "AMD Radeon RX 9060 XT",
  spec: "16 Go GDDR6",
  image: "",
  offers: []
 },
 {
  id: "gpu-amd-radeon-rx-7900-xtx",
  category: "GPU",
  brand: "AMD",
  name: "AMD Radeon RX 7900 XTX",
  spec: "24 Go GDDR6",
  image: "",
  offers: []
 },
 {
  id: "gpu-amd-radeon-rx-7900-xt",
  category: "GPU",
  brand: "AMD",
  name: "AMD Radeon RX 7900 XT",
  spec: "20 Go GDDR6",
  image: "",
  offers: []
 },
 {
  id: "gpu-amd-radeon-rx-7900-gre",
  category: "GPU",
  brand: "AMD",
  name: "AMD Radeon RX 7900 GRE",
  spec: "16 Go GDDR6",
  image: "",
  offers: []
 },
 {
  id: "gpu-amd-radeon-rx-7800-xt",
  category: "GPU",
  brand: "AMD",
  name: "AMD Radeon RX 7800 XT",
  spec: "16 Go GDDR6",
  image: "",
  offers: []
 },
 {
  id: "gpu-amd-radeon-rx-7700-xt",
  category: "GPU",
  brand: "AMD",
  name: "AMD Radeon RX 7700 XT",
  spec: "12 Go GDDR6",
  image: "",
  offers: []
 },
 {
  id: "gpu-amd-radeon-rx-7600-xt",
  category: "GPU",
  brand: "AMD",
  name: "AMD Radeon RX 7600 XT",
  spec: "16 Go GDDR6",
  image: "",
  offers: []
 },
 {
  id: "gpu-amd-radeon-rx-7600",
  category: "GPU",
  brand: "AMD",
  name: "AMD Radeon RX 7600",
  spec: "8 Go GDDR6",
  image: "",
  offers: []
 },
 {
  id: "gpu-amd-radeon-rx-6750-xt",
  category: "GPU",
  brand: "AMD",
  name: "AMD Radeon RX 6750 XT",
  spec: "12 Go GDDR6",
  image: "",
  offers: []
 },
 {
  id: "gpu-amd-radeon-rx-6600",
  category: "GPU",
  brand: "AMD",
  name: "AMD Radeon RX 6600",
  spec: "8 Go GDDR6",
  image: "",
  offers: []
 },
 {
  id: "gpu-intel-arc-b580",
  category: "GPU",
  brand: "Intel",
  name: "Intel Arc B580",
  spec: "12 Go GDDR6",
  image: "",
  offers: []
 },
 {
  id: "gpu-intel-arc-b570",
  category: "GPU",
  brand: "Intel",
  name: "Intel Arc B570",
  spec: "10 Go GDDR6",
  image: "",
  offers: []
 },
 {
  id: "gpu-intel-arc-a750",
  category: "GPU",
  brand: "Intel",
  name: "Intel Arc A750",
  spec: "8 Go GDDR6",
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
  id: "carte-mere-asus-tuf-gaming-x870-plus-wifi",
  category: "Carte mère",
  brand: "ASUS",
  name: "ASUS TUF Gaming X870-Plus WiFi",
  spec: "AM5 · X870 · ATX",
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
  id: "carte-mere-asus-tuf-gaming-b650-plus-wifi",
  category: "Carte mère",
  brand: "ASUS",
  name: "ASUS TUF Gaming B650-Plus WiFi",
  spec: "AM5 · B650 · ATX",
  image: "",
  offers: []
 },
 {
  id: "carte-mere-asus-prime-b650m-a-wifi",
  category: "Carte mère",
  brand: "ASUS",
  name: "ASUS Prime B650M-A WiFi",
  spec: "AM5 · B650 · mATX",
  image: "",
  offers: []
 },
 {
  id: "carte-mere-asus-prime-a620m-k",
  category: "Carte mère",
  brand: "ASUS",
  name: "ASUS Prime A620M-K",
  spec: "AM5 · A620 · mATX",
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
  id: "carte-mere-msi-pro-b650m-a-wifi",
  category: "Carte mère",
  brand: "MSI",
  name: "MSI PRO B650M-A WiFi",
  spec: "AM5 · B650 · mATX",
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
  id: "carte-mere-gigabyte-b650-aorus-elite-ax",
  category: "Carte mère",
  brand: "Gigabyte",
  name: "Gigabyte B650 AORUS Elite AX",
  spec: "AM5 · B650 · ATX",
  image: "",
  offers: []
 },
 {
  id: "carte-mere-gigabyte-b650m-ds3h",
  category: "Carte mère",
  brand: "Gigabyte",
  name: "Gigabyte B650M DS3H",
  spec: "AM5 · B650 · mATX",
  image: "",
  offers: []
 },
 {
  id: "carte-mere-asrock-b650m-pro-rs",
  category: "Carte mère",
  brand: "ASRock",
  name: "ASRock B650M Pro RS",
  spec: "AM5 · B650 · mATX",
  image: "",
  offers: []
 },
 {
  id: "carte-mere-asrock-b850-pro-rs",
  category: "Carte mère",
  brand: "ASRock",
  name: "ASRock B850 Pro RS",
  spec: "AM5 · B850 · ATX",
  image: "",
  offers: []
 },
 {
  id: "carte-mere-asus-rog-strix-b550-f-gaming",
  category: "Carte mère",
  brand: "ASUS",
  name: "ASUS ROG Strix B550-F Gaming",
  spec: "AM4 · B550 · ATX",
  image: "",
  offers: []
 },
 {
  id: "carte-mere-asus-tuf-gaming-b550-plus",
  category: "Carte mère",
  brand: "ASUS",
  name: "ASUS TUF Gaming B550-Plus",
  spec: "AM4 · B550 · ATX",
  image: "",
  offers: []
 },
 {
  id: "carte-mere-msi-mag-b550-tomahawk",
  category: "Carte mère",
  brand: "MSI",
  name: "MSI MAG B550 Tomahawk",
  spec: "AM4 · B550 · ATX",
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
  id: "carte-mere-gigabyte-b550-aorus-elite-v2",
  category: "Carte mère",
  brand: "Gigabyte",
  name: "Gigabyte B550 AORUS Elite V2",
  spec: "AM4 · B550 · ATX",
  image: "",
  offers: []
 },
 {
  id: "carte-mere-asrock-b450m-pro4",
  category: "Carte mère",
  brand: "ASRock",
  name: "ASRock B450M Pro4",
  spec: "AM4 · B450 · mATX",
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
  id: "carte-mere-asus-tuf-gaming-z890-plus-wifi",
  category: "Carte mère",
  brand: "ASUS",
  name: "ASUS TUF Gaming Z890-Plus WiFi",
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
  id: "carte-mere-gigabyte-z890-aorus-elite-wifi7",
  category: "Carte mère",
  brand: "Gigabyte",
  name: "Gigabyte Z890 AORUS Elite WiFi7",
  spec: "LGA1851 · Z890 · ATX",
  image: "",
  offers: []
 },
 {
  id: "carte-mere-asus-rog-strix-z790-a-gaming-wifi",
  category: "Carte mère",
  brand: "ASUS",
  name: "ASUS ROG Strix Z790-A Gaming WiFi",
  spec: "LGA1700 · Z790 · ATX",
  image: "",
  offers: []
 },
 {
  id: "carte-mere-asus-tuf-gaming-z790-plus-wifi",
  category: "Carte mère",
  brand: "ASUS",
  name: "ASUS TUF Gaming Z790-Plus WiFi",
  spec: "LGA1700 · Z790 · ATX",
  image: "",
  offers: []
 },
 {
  id: "carte-mere-asus-prime-b760m-a-wifi",
  category: "Carte mère",
  brand: "ASUS",
  name: "ASUS Prime B760M-A WiFi",
  spec: "LGA1700 · B760 · mATX",
  image: "",
  offers: []
 },
 {
  id: "carte-mere-msi-mag-z790-tomahawk-wifi",
  category: "Carte mère",
  brand: "MSI",
  name: "MSI MAG Z790 Tomahawk WiFi",
  spec: "LGA1700 · Z790 · ATX",
  image: "",
  offers: []
 },
 {
  id: "carte-mere-msi-pro-b760m-a-wifi",
  category: "Carte mère",
  brand: "MSI",
  name: "MSI PRO B760M-A WiFi",
  spec: "LGA1700 · B760 · mATX",
  image: "",
  offers: []
 },
 {
  id: "carte-mere-msi-pro-h610m-e",
  category: "Carte mère",
  brand: "MSI",
  name: "MSI PRO H610M-E",
  spec: "LGA1700 · H610 · mATX",
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
  id: "carte-mere-gigabyte-b760m-ds3h",
  category: "Carte mère",
  brand: "Gigabyte",
  name: "Gigabyte B760M DS3H",
  spec: "LGA1700 · B760 · mATX",
  image: "",
  offers: []
 },
 {
  id: "carte-mere-asrock-b760m-pro-rs",
  category: "Carte mère",
  brand: "ASRock",
  name: "ASRock B760M Pro RS",
  spec: "LGA1700 · B760 · mATX",
  image: "",
  offers: []
 },
 {
  id: "carte-mere-asrock-h610m-hdv",
  category: "Carte mère",
  brand: "ASRock",
  name: "ASRock H610M-HDV",
  spec: "LGA1700 · H610 · mATX",
  image: "",
  offers: []
 },
 {
  id: "ram-corsair-vengeance-ddr5-32-go-216-6000-cl30",
  category: "RAM",
  brand: "Corsair",
  name: "Corsair Vengeance DDR5 32 Go (2×16) 6000 CL30",
  spec: "DDR5 · 6000 MHz · CL30",
  image: "",
  offers: []
 },
 {
  id: "ram-corsair-vengeance-ddr5-32-go-216-5600-cl36",
  category: "RAM",
  brand: "Corsair",
  name: "Corsair Vengeance DDR5 32 Go (2×16) 5600 CL36",
  spec: "DDR5 · 5600 MHz · CL36",
  image: "",
  offers: []
 },
 {
  id: "ram-corsair-vengeance-rgb-ddr5-32-go-216-6000-cl",
  category: "RAM",
  brand: "Corsair",
  name: "Corsair Vengeance RGB DDR5 32 Go (2×16) 6000 CL36",
  spec: "DDR5 · 6000 MHz · RGB",
  image: "",
  offers: []
 },
 {
  id: "ram-corsair-dominator-platinum-rgb-ddr5-32-go-60",
  category: "RAM",
  brand: "Corsair",
  name: "Corsair Dominator Platinum RGB DDR5 32 Go 6000",
  spec: "DDR5 · 6000 MHz · CL30",
  image: "",
  offers: []
 },
 {
  id: "ram-corsair-vengeance-lpx-ddr4-16-go-28-3200-cl1",
  category: "RAM",
  brand: "Corsair",
  name: "Corsair Vengeance LPX DDR4 16 Go (2×8) 3200 CL16",
  spec: "DDR4 · 3200 MHz · CL16",
  image: "",
  offers: []
 },
 {
  id: "ram-corsair-vengeance-lpx-ddr4-32-go-216-3600-cl",
  category: "RAM",
  brand: "Corsair",
  name: "Corsair Vengeance LPX DDR4 32 Go (2×16) 3600 CL18",
  spec: "DDR4 · 3600 MHz · CL18",
  image: "",
  offers: []
 },
 {
  id: "ram-g-skill-trident-z5-neo-rgb-ddr5-32-go-6000-c",
  category: "RAM",
  brand: "G.Skill",
  name: "G.Skill Trident Z5 Neo RGB DDR5 32 Go 6000 CL30",
  spec: "DDR5 · 6000 MHz · AMD EXPO",
  image: "",
  offers: []
 },
 {
  id: "ram-g-skill-trident-z5-rgb-ddr5-32-go-6400-cl32",
  category: "RAM",
  brand: "G.Skill",
  name: "G.Skill Trident Z5 RGB DDR5 32 Go 6400 CL32",
  spec: "DDR5 · 6400 MHz · XMP",
  image: "",
  offers: []
 },
 {
  id: "ram-g-skill-flare-x5-ddr5-32-go-6000-cl30",
  category: "RAM",
  brand: "G.Skill",
  name: "G.Skill Flare X5 DDR5 32 Go 6000 CL30",
  spec: "DDR5 · 6000 MHz · EXPO",
  image: "",
  offers: []
 },
 {
  id: "ram-g-skill-ripjaws-s5-ddr5-32-go-6000-cl30",
  category: "RAM",
  brand: "G.Skill",
  name: "G.Skill Ripjaws S5 DDR5 32 Go 6000 CL30",
  spec: "DDR5 · 6000 MHz",
  image: "",
  offers: []
 },
 {
  id: "ram-g-skill-ripjaws-v-ddr4-32-go-216-3600-cl16",
  category: "RAM",
  brand: "G.Skill",
  name: "G.Skill Ripjaws V DDR4 32 Go (2×16) 3600 CL16",
  spec: "DDR4 · 3600 MHz",
  image: "",
  offers: []
 },
 {
  id: "ram-kingston-fury-beast-ddr5-32-go-216-6000-cl36",
  category: "RAM",
  brand: "Kingston",
  name: "Kingston Fury Beast DDR5 32 Go (2×16) 6000 CL36",
  spec: "DDR5 · 6000 MHz",
  image: "",
  offers: []
 },
 {
  id: "ram-kingston-fury-beast-ddr5-64-go-232-6000",
  category: "RAM",
  brand: "Kingston",
  name: "Kingston Fury Beast DDR5 64 Go (2×32) 6000",
  spec: "DDR5 · 64 Go",
  image: "",
  offers: []
 },
 {
  id: "ram-kingston-fury-beast-ddr4-16-go-28-3200-cl16",
  category: "RAM",
  brand: "Kingston",
  name: "Kingston Fury Beast DDR4 16 Go (2×8) 3200 CL16",
  spec: "DDR4 · 3200 MHz",
  image: "",
  offers: []
 },
 {
  id: "ram-kingston-fury-renegade-ddr5-32-go-6400-cl32",
  category: "RAM",
  brand: "Kingston",
  name: "Kingston Fury Renegade DDR5 32 Go 6400 CL32",
  spec: "DDR5 · 6400 MHz",
  image: "",
  offers: []
 },
 {
  id: "ram-crucial-pro-ddr5-32-go-216-5600",
  category: "RAM",
  brand: "Crucial",
  name: "Crucial Pro DDR5 32 Go (2×16) 5600",
  spec: "DDR5 · 5600 MHz",
  image: "",
  offers: []
 },
 {
  id: "ram-crucial-ddr5-16-go-4800",
  category: "RAM",
  brand: "Crucial",
  name: "Crucial DDR5 16 Go 4800",
  spec: "DDR5 · 4800 MHz · barrette seule",
  image: "",
  offers: []
 },
 {
  id: "ram-teamgroup-t-force-delta-rgb-ddr5-32-go-6000",
  category: "RAM",
  brand: "TeamGroup",
  name: "TeamGroup T-Force Delta RGB DDR5 32 Go 6000",
  spec: "DDR5 · 6000 MHz · RGB",
  image: "",
  offers: []
 },
 {
  id: "ram-patriot-viper-venom-ddr5-32-go-6000-cl30",
  category: "RAM",
  brand: "Patriot",
  name: "Patriot Viper Venom DDR5 32 Go 6000 CL30",
  spec: "DDR5 · 6000 MHz",
  image: "",
  offers: []
 },
 {
  id: "stockage-samsung-990-pro-1-to",
  category: "Stockage",
  brand: "Samsung",
  name: "Samsung 990 PRO 1 To",
  spec: "NVMe PCIe 4.0 · M.2",
  image: "",
  offers: []
 },
 {
  id: "stockage-samsung-990-pro-2-to",
  category: "Stockage",
  brand: "Samsung",
  name: "Samsung 990 PRO 2 To",
  spec: "NVMe PCIe 4.0 · M.2",
  image: "",
  offers: []
 },
 {
  id: "stockage-samsung-990-pro-4-to",
  category: "Stockage",
  brand: "Samsung",
  name: "Samsung 990 PRO 4 To",
  spec: "NVMe PCIe 4.0 · M.2",
  image: "",
  offers: []
 },
 {
  id: "stockage-samsung-990-evo-plus-1-to",
  category: "Stockage",
  brand: "Samsung",
  name: "Samsung 990 EVO Plus 1 To",
  spec: "NVMe PCIe 4.0/5.0",
  image: "",
  offers: []
 },
 {
  id: "stockage-samsung-990-evo-plus-2-to",
  category: "Stockage",
  brand: "Samsung",
  name: "Samsung 990 EVO Plus 2 To",
  spec: "NVMe PCIe 4.0/5.0",
  image: "",
  offers: []
 },
 {
  id: "stockage-samsung-980-pro-1-to",
  category: "Stockage",
  brand: "Samsung",
  name: "Samsung 980 PRO 1 To",
  spec: "NVMe PCIe 4.0",
  image: "",
  offers: []
 },
 {
  id: "stockage-samsung-870-evo-1-to",
  category: "Stockage",
  brand: "Samsung",
  name: "Samsung 870 EVO 1 To",
  spec: "SATA 2,5 pouces",
  image: "",
  offers: []
 },
 {
  id: "stockage-samsung-870-qvo-2-to",
  category: "Stockage",
  brand: "Samsung",
  name: "Samsung 870 QVO 2 To",
  spec: "SATA 2,5 pouces",
  image: "",
  offers: []
 },
 {
  id: "stockage-samsung-9100-pro-2-to",
  category: "Stockage",
  brand: "Samsung",
  name: "Samsung 9100 PRO 2 To",
  spec: "NVMe PCIe 5.0",
  image: "",
  offers: []
 },
 {
  id: "stockage-wd-black-sn850x-1-to",
  category: "Stockage",
  brand: "WD",
  name: "WD Black SN850X 1 To",
  spec: "NVMe PCIe 4.0",
  image: "",
  offers: []
 },
 {
  id: "stockage-wd-black-sn850x-2-to",
  category: "Stockage",
  brand: "WD",
  name: "WD Black SN850X 2 To",
  spec: "NVMe PCIe 4.0",
  image: "",
  offers: []
 },
 {
  id: "stockage-wd-black-sn850x-4-to",
  category: "Stockage",
  brand: "WD",
  name: "WD Black SN850X 4 To",
  spec: "NVMe PCIe 4.0",
  image: "",
  offers: []
 },
 {
  id: "stockage-wd-black-sn7100-1-to",
  category: "Stockage",
  brand: "WD",
  name: "WD Black SN7100 1 To",
  spec: "NVMe PCIe 4.0",
  image: "",
  offers: []
 },
 {
  id: "stockage-wd-blue-sn580-1-to",
  category: "Stockage",
  brand: "WD",
  name: "WD Blue SN580 1 To",
  spec: "NVMe PCIe 4.0 · entrée de gamme",
  image: "",
  offers: []
 },
 {
  id: "stockage-wd-blue-sa510-1-to",
  category: "Stockage",
  brand: "WD",
  name: "WD Blue SA510 1 To",
  spec: "SATA 2,5 pouces",
  image: "",
  offers: []
 },
 {
  id: "stockage-crucial-t700-1-to",
  category: "Stockage",
  brand: "Crucial",
  name: "Crucial T700 1 To",
  spec: "NVMe PCIe 5.0",
  image: "",
  offers: []
 },
 {
  id: "stockage-crucial-t700-2-to",
  category: "Stockage",
  brand: "Crucial",
  name: "Crucial T700 2 To",
  spec: "NVMe PCIe 5.0",
  image: "",
  offers: []
 },
 {
  id: "stockage-crucial-t500-1-to",
  category: "Stockage",
  brand: "Crucial",
  name: "Crucial T500 1 To",
  spec: "NVMe PCIe 4.0",
  image: "",
  offers: []
 },
 {
  id: "stockage-crucial-t500-2-to",
  category: "Stockage",
  brand: "Crucial",
  name: "Crucial T500 2 To",
  spec: "NVMe PCIe 4.0",
  image: "",
  offers: []
 },
 {
  id: "stockage-crucial-p3-plus-1-to",
  category: "Stockage",
  brand: "Crucial",
  name: "Crucial P3 Plus 1 To",
  spec: "NVMe PCIe 4.0 · budget",
  image: "",
  offers: []
 },
 {
  id: "stockage-crucial-mx500-1-to",
  category: "Stockage",
  brand: "Crucial",
  name: "Crucial MX500 1 To",
  spec: "SATA 2,5 pouces",
  image: "",
  offers: []
 },
 {
  id: "stockage-kingston-kc3000-1-to",
  category: "Stockage",
  brand: "Kingston",
  name: "Kingston KC3000 1 To",
  spec: "NVMe PCIe 4.0",
  image: "",
  offers: []
 },
 {
  id: "stockage-kingston-nv3-1-to",
  category: "Stockage",
  brand: "Kingston",
  name: "Kingston NV3 1 To",
  spec: "NVMe PCIe 4.0 · budget",
  image: "",
  offers: []
 },
 {
  id: "stockage-kingston-nv2-2-to",
  category: "Stockage",
  brand: "Kingston",
  name: "Kingston NV2 2 To",
  spec: "NVMe PCIe 4.0 · budget",
  image: "",
  offers: []
 },
 {
  id: "stockage-kingston-a400-480-go",
  category: "Stockage",
  brand: "Kingston",
  name: "Kingston A400 480 Go",
  spec: "SATA 2,5 pouces",
  image: "",
  offers: []
 },
 {
  id: "stockage-corsair-mp700-pro-2-to",
  category: "Stockage",
  brand: "Corsair",
  name: "Corsair MP700 Pro 2 To",
  spec: "NVMe PCIe 5.0",
  image: "",
  offers: []
 },
 {
  id: "stockage-corsair-mp600-pro-lpx-1-to",
  category: "Stockage",
  brand: "Corsair",
  name: "Corsair MP600 Pro LPX 1 To",
  spec: "NVMe PCIe 4.0 · PS5",
  image: "",
  offers: []
 },
 {
  id: "stockage-seagate-firecuda-530-1-to",
  category: "Stockage",
  brand: "Seagate",
  name: "Seagate FireCuda 530 1 To",
  spec: "NVMe PCIe 4.0",
  image: "",
  offers: []
 },
 {
  id: "stockage-seagate-firecuda-540-2-to",
  category: "Stockage",
  brand: "Seagate",
  name: "Seagate FireCuda 540 2 To",
  spec: "NVMe PCIe 5.0",
  image: "",
  offers: []
 },
 {
  id: "stockage-sk-hynix-platinum-p41-1-to",
  category: "Stockage",
  brand: "SK hynix",
  name: "SK hynix Platinum P41 1 To",
  spec: "NVMe PCIe 4.0",
  image: "",
  offers: []
 },
 {
  id: "stockage-sk-hynix-platinum-p51-2-to",
  category: "Stockage",
  brand: "SK hynix",
  name: "SK hynix Platinum P51 2 To",
  spec: "NVMe PCIe 5.0",
  image: "",
  offers: []
 },
 {
  id: "stockage-lexar-nm790-2-to",
  category: "Stockage",
  brand: "Lexar",
  name: "Lexar NM790 2 To",
  spec: "NVMe PCIe 4.0",
  image: "",
  offers: []
 },
 {
  id: "stockage-lexar-nm790-4-to",
  category: "Stockage",
  brand: "Lexar",
  name: "Lexar NM790 4 To",
  spec: "NVMe PCIe 4.0",
  image: "",
  offers: []
 },
 {
  id: "stockage-teamgroup-mp44l-1-to",
  category: "Stockage",
  brand: "TeamGroup",
  name: "TeamGroup MP44L 1 To",
  spec: "NVMe PCIe 4.0 · budget",
  image: "",
  offers: []
 },
 {
  id: "alimentation-corsair-rm750e-2023",
  category: "Alimentation",
  brand: "Corsair",
  name: "Corsair RM750e (2023)",
  spec: "750 W · 80+ Gold · ATX 3.0",
  image: "",
  offers: []
 },
 {
  id: "alimentation-corsair-rm850e-2023",
  category: "Alimentation",
  brand: "Corsair",
  name: "Corsair RM850e (2023)",
  spec: "850 W · 80+ Gold · ATX 3.0",
  image: "",
  offers: []
 },
 {
  id: "alimentation-corsair-rm1000e",
  category: "Alimentation",
  brand: "Corsair",
  name: "Corsair RM1000e",
  spec: "1000 W · 80+ Gold",
  image: "",
  offers: []
 },
 {
  id: "alimentation-corsair-rm750x-shift",
  category: "Alimentation",
  brand: "Corsair",
  name: "Corsair RM750x SHIFT",
  spec: "750 W · 80+ Gold",
  image: "",
  offers: []
 },
 {
  id: "alimentation-corsair-sf750",
  category: "Alimentation",
  brand: "Corsair",
  name: "Corsair SF750",
  spec: "750 W · 80+ Platinum · SFX",
  image: "",
  offers: []
 },
 {
  id: "alimentation-corsair-cx650f-rgb",
  category: "Alimentation",
  brand: "Corsair",
  name: "Corsair CX650F RGB",
  spec: "650 W · 80+ Bronze",
  image: "",
  offers: []
 },
 {
  id: "alimentation-be-quiet-pure-power-12-m-750w",
  category: "Alimentation",
  brand: "be quiet!",
  name: "be quiet! Pure Power 12 M 750W",
  spec: "750 W · 80+ Gold · ATX 3.0",
  image: "",
  offers: []
 },
 {
  id: "alimentation-be-quiet-pure-power-12-m-850w",
  category: "Alimentation",
  brand: "be quiet!",
  name: "be quiet! Pure Power 12 M 850W",
  spec: "850 W · 80+ Gold",
  image: "",
  offers: []
 },
 {
  id: "alimentation-be-quiet-straight-power-12-1000w",
  category: "Alimentation",
  brand: "be quiet!",
  name: "be quiet! Straight Power 12 1000W",
  spec: "1000 W · 80+ Platinum",
  image: "",
  offers: []
 },
 {
  id: "alimentation-be-quiet-system-power-10-650w",
  category: "Alimentation",
  brand: "be quiet!",
  name: "be quiet! System Power 10 650W",
  spec: "650 W · 80+ Bronze",
  image: "",
  offers: []
 },
 {
  id: "alimentation-seasonic-focus-gx-750",
  category: "Alimentation",
  brand: "Seasonic",
  name: "Seasonic Focus GX-750",
  spec: "750 W · 80+ Gold",
  image: "",
  offers: []
 },
 {
  id: "alimentation-seasonic-focus-gx-850",
  category: "Alimentation",
  brand: "Seasonic",
  name: "Seasonic Focus GX-850",
  spec: "850 W · 80+ Gold",
  image: "",
  offers: []
 },
 {
  id: "alimentation-seasonic-vertex-gx-1000",
  category: "Alimentation",
  brand: "Seasonic",
  name: "Seasonic Vertex GX-1000",
  spec: "1000 W · 80+ Gold · ATX 3.0",
  image: "",
  offers: []
 },
 {
  id: "alimentation-seasonic-prime-tx-1000",
  category: "Alimentation",
  brand: "Seasonic",
  name: "Seasonic Prime TX-1000",
  spec: "1000 W · 80+ Titanium",
  image: "",
  offers: []
 },
 {
  id: "alimentation-msi-mag-a750gl-pcie5",
  category: "Alimentation",
  brand: "MSI",
  name: "MSI MAG A750GL PCIE5",
  spec: "750 W · 80+ Gold",
  image: "",
  offers: []
 },
 {
  id: "alimentation-msi-mpg-a850g-pcie5",
  category: "Alimentation",
  brand: "MSI",
  name: "MSI MPG A850G PCIE5",
  spec: "850 W · 80+ Gold",
  image: "",
  offers: []
 },
 {
  id: "alimentation-nzxt-c850-gold",
  category: "Alimentation",
  brand: "NZXT",
  name: "NZXT C850 Gold",
  spec: "850 W · 80+ Gold",
  image: "",
  offers: []
 },
 {
  id: "alimentation-cooler-master-mwe-gold-750-v2",
  category: "Alimentation",
  brand: "Cooler Master",
  name: "Cooler Master MWE Gold 750 V2",
  spec: "750 W · 80+ Gold",
  image: "",
  offers: []
 },
 {
  id: "alimentation-thermaltake-toughpower-gf3-1000w",
  category: "Alimentation",
  brand: "Thermaltake",
  name: "Thermaltake Toughpower GF3 1000W",
  spec: "1000 W · 80+ Gold",
  image: "",
  offers: []
 },
 {
  id: "alimentation-gigabyte-ud850gm-pg5",
  category: "Alimentation",
  brand: "Gigabyte",
  name: "Gigabyte UD850GM PG5",
  spec: "850 W · 80+ Gold",
  image: "",
  offers: []
 },
 {
  id: "boitier-fractal-design-north",
  category: "Boîtier",
  brand: "Fractal Design",
  name: "Fractal Design North",
  spec: "ATX · façade bois",
  image: "",
  offers: []
 },
 {
  id: "boitier-fractal-design-pop-air",
  category: "Boîtier",
  brand: "Fractal Design",
  name: "Fractal Design Pop Air",
  spec: "ATX · maillé",
  image: "",
  offers: []
 },
 {
  id: "boitier-fractal-design-meshify-2-compact",
  category: "Boîtier",
  brand: "Fractal Design",
  name: "Fractal Design Meshify 2 Compact",
  spec: "ATX · flux d'air",
  image: "",
  offers: []
 },
 {
  id: "boitier-fractal-design-torrent",
  category: "Boîtier",
  brand: "Fractal Design",
  name: "Fractal Design Torrent",
  spec: "ATX · ventilation maximale",
  image: "",
  offers: []
 },
 {
  id: "boitier-lian-li-o11-dynamic-evo",
  category: "Boîtier",
  brand: "Lian Li",
  name: "Lian Li O11 Dynamic EVO",
  spec: "ATX · verre trempé",
  image: "",
  offers: []
 },
 {
  id: "boitier-lian-li-o11-vision",
  category: "Boîtier",
  brand: "Lian Li",
  name: "Lian Li O11 Vision",
  spec: "ATX · 3 faces verre",
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
  id: "boitier-lian-li-lancool-207",
  category: "Boîtier",
  brand: "Lian Li",
  name: "Lian Li Lancool 207",
  spec: "mATX · compact",
  image: "",
  offers: []
 },
 {
  id: "boitier-nzxt-h5-flow-2024",
  category: "Boîtier",
  brand: "NZXT",
  name: "NZXT H5 Flow (2024)",
  spec: "ATX · flux d'air",
  image: "",
  offers: []
 },
 {
  id: "boitier-nzxt-h7-flow",
  category: "Boîtier",
  brand: "NZXT",
  name: "NZXT H7 Flow",
  spec: "ATX · grand format",
  image: "",
  offers: []
 },
 {
  id: "boitier-nzxt-h9-elite",
  category: "Boîtier",
  brand: "NZXT",
  name: "NZXT H9 Elite",
  spec: "ATX · double chambre",
  image: "",
  offers: []
 },
 {
  id: "boitier-be-quiet-pure-base-500dx",
  category: "Boîtier",
  brand: "be quiet!",
  name: "be quiet! Pure Base 500DX",
  spec: "ATX · silencieux",
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
  id: "boitier-corsair-4000d-airflow",
  category: "Boîtier",
  brand: "Corsair",
  name: "Corsair 4000D Airflow",
  spec: "ATX · référence flux d'air",
  image: "",
  offers: []
 },
 {
  id: "boitier-corsair-5000d-airflow",
  category: "Boîtier",
  brand: "Corsair",
  name: "Corsair 5000D Airflow",
  spec: "ATX · grand",
  image: "",
  offers: []
 },
 {
  id: "boitier-corsair-2500x",
  category: "Boîtier",
  brand: "Corsair",
  name: "Corsair 2500X",
  spec: "mATX · double chambre",
  image: "",
  offers: []
 },
 {
  id: "boitier-cooler-master-masterbox-td500-mesh",
  category: "Boîtier",
  brand: "Cooler Master",
  name: "Cooler Master MasterBox TD500 Mesh",
  spec: "ATX · maillé",
  image: "",
  offers: []
 },
 {
  id: "boitier-cooler-master-nr200p",
  category: "Boîtier",
  brand: "Cooler Master",
  name: "Cooler Master NR200P",
  spec: "Mini-ITX · SFF",
  image: "",
  offers: []
 },
 {
  id: "boitier-phanteks-eclipse-g360a",
  category: "Boîtier",
  brand: "Phanteks",
  name: "Phanteks Eclipse G360A",
  spec: "ATX · 3 ventilateurs RGB",
  image: "",
  offers: []
 },
 {
  id: "boitier-phanteks-xt-pro-ultra",
  category: "Boîtier",
  brand: "Phanteks",
  name: "Phanteks XT Pro Ultra",
  spec: "ATX · budget",
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
  id: "boitier-montech-xr",
  category: "Boîtier",
  brand: "Montech",
  name: "Montech XR",
  spec: "ATX · budget",
  image: "",
  offers: []
 },
 {
  id: "boitier-antec-c8",
  category: "Boîtier",
  brand: "Antec",
  name: "Antec C8",
  spec: "ATX · double chambre",
  image: "",
  offers: []
 },
 {
  id: "boitier-deepcool-ch560-digital",
  category: "Boîtier",
  brand: "Deepcool",
  name: "Deepcool CH560 Digital",
  spec: "ATX · écran",
  image: "",
  offers: []
 },
 {
  id: "refroidissement-noctua-nh-d15-chromax-black",
  category: "Refroidissement",
  brand: "Noctua",
  name: "Noctua NH-D15 chromax.black",
  spec: "Ventirad double tour",
  image: "",
  offers: []
 },
 {
  id: "refroidissement-noctua-nh-d15-g2",
  category: "Refroidissement",
  brand: "Noctua",
  name: "Noctua NH-D15 G2",
  spec: "Ventirad haut de gamme",
  image: "",
  offers: []
 },
 {
  id: "refroidissement-noctua-nh-u12s-redux",
  category: "Refroidissement",
  brand: "Noctua",
  name: "Noctua NH-U12S redux",
  spec: "Ventirad simple tour",
  image: "",
  offers: []
 },
 {
  id: "refroidissement-noctua-nh-l9i",
  category: "Refroidissement",
  brand: "Noctua",
  name: "Noctua NH-L9i",
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
  id: "refroidissement-be-quiet-pure-rock-2",
  category: "Refroidissement",
  brand: "be quiet!",
  name: "be quiet! Pure Rock 2",
  spec: "Ventirad budget",
  image: "",
  offers: []
 },
 {
  id: "refroidissement-thermalright-peerless-assassin-1",
  category: "Refroidissement",
  brand: "Thermalright",
  name: "Thermalright Peerless Assassin 120 SE",
  spec: "Ventirad double tour · rapport qualité/prix",
  image: "",
  offers: []
 },
 {
  id: "refroidissement-thermalright-phantom-spirit-120-",
  category: "Refroidissement",
  brand: "Thermalright",
  name: "Thermalright Phantom Spirit 120 SE",
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
  id: "refroidissement-deepcool-ak620",
  category: "Refroidissement",
  brand: "DeepCool",
  name: "DeepCool AK620",
  spec: "Ventirad double tour",
  image: "",
  offers: []
 },
 {
  id: "refroidissement-deepcool-ak400",
  category: "Refroidissement",
  brand: "DeepCool",
  name: "DeepCool AK400",
  spec: "Ventirad simple tour",
  image: "",
  offers: []
 },
 {
  id: "refroidissement-cooler-master-hyper-212-black",
  category: "Refroidissement",
  brand: "Cooler Master",
  name: "Cooler Master Hyper 212 Black",
  spec: "Ventirad classique",
  image: "",
  offers: []
 },
 {
  id: "refroidissement-arctic-freezer-36",
  category: "Refroidissement",
  brand: "Arctic",
  name: "Arctic Freezer 36",
  spec: "Ventirad double ventilateur",
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
  id: "refroidissement-arctic-liquid-freezer-iii-240",
  category: "Refroidissement",
  brand: "Arctic",
  name: "Arctic Liquid Freezer III 240",
  spec: "Watercooling AIO 240 mm",
  image: "",
  offers: []
 },
 {
  id: "refroidissement-corsair-icue-h150i-elite-lcd-xt",
  category: "Refroidissement",
  brand: "Corsair",
  name: "Corsair iCUE H150i Elite LCD XT",
  spec: "AIO 360 mm · écran",
  image: "",
  offers: []
 },
 {
  id: "refroidissement-corsair-icue-link-h100i-rgb",
  category: "Refroidissement",
  brand: "Corsair",
  name: "Corsair iCUE Link H100i RGB",
  spec: "AIO 240 mm",
  image: "",
  offers: []
 },
 {
  id: "refroidissement-nzxt-kraken-360-rgb",
  category: "Refroidissement",
  brand: "NZXT",
  name: "NZXT Kraken 360 RGB",
  spec: "AIO 360 mm · écran LCD",
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
  id: "refroidissement-lian-li-galahad-ii-trinity-360",
  category: "Refroidissement",
  brand: "Lian Li",
  name: "Lian Li Galahad II Trinity 360",
  spec: "AIO 360 mm",
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
  id: "refroidissement-deepcool-le720",
  category: "Refroidissement",
  brand: "DeepCool",
  name: "DeepCool LE720",
  spec: "AIO 360 mm budget",
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
  id: "refroidissement-thermalright-frozen-notte-360",
  category: "Refroidissement",
  brand: "Thermalright",
  name: "Thermalright Frozen Notte 360",
  spec: "AIO 360 mm budget",
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
  id: "ventilateur-arctic-p12-pwm-pst-pack-5",
  category: "Ventilateur",
  brand: "Arctic",
  name: "Arctic P12 PWM PST (pack 5)",
  spec: "120 mm · pack budget",
  image: "",
  offers: []
 },
 {
  id: "ventilateur-arctic-p14-pwm-pst",
  category: "Ventilateur",
  brand: "Arctic",
  name: "Arctic P14 PWM PST",
  spec: "140 mm",
  image: "",
  offers: []
 },
 {
  id: "ventilateur-be-quiet-silent-wings-4-120mm",
  category: "Ventilateur",
  brand: "be quiet!",
  name: "be quiet! Silent Wings 4 120mm",
  spec: "120 mm · silencieux",
  image: "",
  offers: []
 },
 {
  id: "ventilateur-be-quiet-light-wings-120mm-argb",
  category: "Ventilateur",
  brand: "be quiet!",
  name: "be quiet! Light Wings 120mm ARGB",
  spec: "120 mm · ARGB",
  image: "",
  offers: []
 },
 {
  id: "ventilateur-corsair-icue-link-rx120-rgb-pack-3",
  category: "Ventilateur",
  brand: "Corsair",
  name: "Corsair iCUE Link RX120 RGB (pack 3)",
  spec: "120 mm · ARGB",
  image: "",
  offers: []
 },
 {
  id: "ventilateur-lian-li-uni-fan-sl120-v2-pack-3",
  category: "Ventilateur",
  brand: "Lian Li",
  name: "Lian Li Uni Fan SL120 V2 (pack 3)",
  spec: "120 mm · ARGB chaînables",
  image: "",
  offers: []
 },
 {
  id: "ventilateur-lian-li-uni-fan-tl120-pack-3",
  category: "Ventilateur",
  brand: "Lian Li",
  name: "Lian Li Uni Fan TL120 (pack 3)",
  spec: "120 mm · ARGB",
  image: "",
  offers: []
 },
 {
  id: "ventilateur-thermalright-tl-c12c-s-pack-3",
  category: "Ventilateur",
  brand: "Thermalright",
  name: "Thermalright TL-C12C-S (pack 3)",
  spec: "120 mm · budget",
  image: "",
  offers: []
 },
 {
  id: "ventilateur-phanteks-t30-120",
  category: "Ventilateur",
  brand: "Phanteks",
  name: "Phanteks T30-120",
  spec: "120 mm · performance",
  image: "",
  offers: []
 },
 {
  id: "ventilateur-cooler-master-sickleflow-120-argb-pa",
  category: "Ventilateur",
  brand: "Cooler Master",
  name: "Cooler Master SickleFlow 120 ARGB (pack 3)",
  spec: "120 mm · ARGB budget",
  image: "",
  offers: []
 }
];
