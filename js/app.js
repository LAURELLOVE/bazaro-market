(()=>{
const ICON={
 phone:'<rect x="7" y="2.5" width="10" height="19" rx="2"/><path d="M11 18.5h2"/>',
 tablet:'<rect x="4.5" y="2.5" width="15" height="19" rx="2"/><path d="M11 18.5h2"/>',
 laptop:'<rect x="4" y="5" width="16" height="11" rx="1"/><path d="M2 19h20"/>',
 keyboard:'<rect x="2" y="7" width="20" height="10" rx="2"/><path d="M6 10.5h.01M9.5 10.5h.01M13 10.5h.01M16.5 10.5h.01M7 14h10"/>',
 headphones:'<path d="M4 15v-3a8 8 0 0 1 16 0v3"/><rect x="3" y="14" width="4" height="6" rx="1.2"/><rect x="17" y="14" width="4" height="6" rx="1.2"/>',
 speaker:'<rect x="6" y="2.5" width="12" height="19" rx="2"/><circle cx="12" cy="14.5" r="3.2"/><circle cx="12" cy="7" r="1.3"/>',
 tv:'<rect x="2" y="4.5" width="20" height="13" rx="1.5"/><path d="M8 21h8M12 17.5V21"/>',
 camera:'<rect x="3" y="7" width="18" height="13" rx="2"/><circle cx="12" cy="13.5" r="3.8"/><path d="M8.5 7l1.6-2.5h3.8L15.5 7"/>',
 shirt:'<path d="M8 3 3 6l2 4 2-1v12h10V9l2 1 2-4-5-3c-.8 1.8-2.2 3-4 3S8.8 4.8 8 3z"/>',
 dress:'<path d="M9 2.5h6l-1 4 4 14.5H6l4-14.5z"/><path d="M8.5 11h7"/>',
 shoe:'<path d="M2.5 17V10l4.5-1 2.5 3 4.5 1.4 6.5 1.6a1.5 1.5 0 0 1 1 1.4V17z"/><path d="M2.5 20h19M10 12.5l1.5-1.5M12.5 13.3l1.4-1.4"/>',
 bag:'<path d="M5 8h14l-1.2 13H6.2z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>',
 watch:'<circle cx="12" cy="12" r="5.5"/><path d="M9 7l1-4.5h4L15 7M9 17l1 4.5h4l1-4.5M12 9.5V12l1.8 1.2"/>',
 pot:'<path d="M5 10h14v6.5a3.5 3.5 0 0 1-3.5 3.5h-7A3.5 3.5 0 0 1 5 16.5z"/><path d="M2.5 10h19M10 6.5h4M12 6.5V10"/>',
 kettle:'<path d="M6 20h12l-1.5-11h-9z"/><path d="M8 9V7a4 4 0 0 1 8 0v2M16.8 11.5 20 9.5M9 4h6"/>',
 lamp:'<path d="M8 3h8l3.5 8h-15z"/><path d="M12 11v8M8 21h8"/>',
 book:'<path d="M4 19.5V5a2 2 0 0 1 2-2h13.5v16H6a2 2 0 0 0-2 2z"/><path d="M8.5 7.5h7M8.5 11h5"/>',
 bottle:'<path d="M9.5 2.5h5v3h-5z"/><path d="M8 5.5h8l1 3V20a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 7 20V8.5z"/><path d="M7 12h10"/>',
 ball:'<circle cx="12" cy="12" r="9"/><path d="m12 7.5 3.5 2.5-1.3 4h-4.4L8.5 10zM12 3v4.5M3.6 9.6l4.9.4M20.4 9.6l-4.9.4M7 19.5l2.8-5.5M17 19.5l-2.8-5.5"/>',
 dumbbell:'<path d="M6.5 7v10M17.5 7v10M3.5 9.5v5M20.5 9.5v5M6.5 12h11"/>',
 chair:'<path d="M7 3h10v9H7zM5 12h14v3H5zM7 15v6M17 15v6"/>',
 shelf:'<rect x="5" y="2.5" width="14" height="19"/><path d="M5 9h14M5 15h14M8 6.5v2M10 6.5v2M14 12v3M16.5 18v3"/>',
 truck:'<path d="M2 6h11v9H2zM13 9h4l3 3v3h-7z"/><circle cx="6" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',
 sofa:'<path d="M4 11V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3"/><path d="M2 12a2 2 0 0 1 4 0v2h12v-2a2 2 0 0 1 4 0v6H2zM5 18v2M19 18v2"/>',
 router:'<rect x="2.5" y="13" width="19" height="7" rx="1.5"/><path d="M6 16.5h.01M9 16.5h.01M7 13 5 5M17 13l2-8"/>',
 cctv:'<path d="M3 7l13-3 2 6-13 3z"/><path d="M8 11.5 9 15h4M13 15v5M10 20h6M18 7l3-1"/>',
 battery:'<rect x="3" y="7" width="16" height="10" rx="2"/><path d="M21 10.5v3M11.5 9l-2 3.5h3l-2 2.5"/>',
 solar:'<path d="M4 14h16l-2-9H6z"/><path d="M5 9.5h14M10 5l-1 9M14 5l1 9M12 14v5M8 20h8"/>',
 cable:'<path d="M7 3v5M11 3v5M5 8h8v3a4 4 0 0 1-8 0zM9 15v2a4 4 0 0 0 8 0V9a3 3 0 0 1 4-2.8"/>',
 plug:'<path d="M9 2v6M15 2v6M6 8h12v4a6 6 0 0 1-12 0zM12 18v4"/>',
 printer:'<path d="M7 9V3h10v6"/><rect x="3" y="9" width="18" height="8" rx="1.5"/><path d="M7 14h10v7H7z"/>',
 gamepad:'<path d="M6 8h12a4 4 0 0 1 3.9 4.9l-1 4.3a2 2 0 0 1-3.5.8L15 16H9l-2.4 2a2 2 0 0 1-3.5-.8l-1-4.3A4 4 0 0 1 6 8z"/><path d="M7.5 11v3M6 12.5h3M15.5 12h.01M17.5 13.5h.01"/>',
 drive:'<rect x="4" y="3" width="16" height="18" rx="2"/><circle cx="12" cy="11" r="4"/><path d="M12 11h.01M8 18h8"/>',
 server:'<rect x="3" y="3.5" width="18" height="7" rx="1.5"/><rect x="3" y="13.5" width="18" height="7" rx="1.5"/><path d="M7 7h.01M7 17h.01M11 7h6M11 17h6"/>',
 wrench:'<path d="M15 3.5a5 5 0 0 0-4.6 6.9l-6.9 6.9a1.9 1.9 0 0 0 2.7 2.7l6.9-6.9A5 5 0 0 0 20.5 9l-3 1-2.5-2.5 1-3z"/>',
 jar:'<path d="M8 3h8v3H8z"/><path d="M7 6h10a1 1 0 0 1 1 1v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7a1 1 0 0 1 1-1z"/><path d="M6 11h12"/>',
 cup:'<path d="M4 9h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z"/><path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17M8 3c0 1.5 1 1.5 1 3M12 3c0 1.5 1 1.5 1 3"/>',
 fabric:'<path d="M4 4h16v16H4z"/><path d="M4 9h16M4 14h16M9 4v16M14 4v16"/>',
 basket:'<path d="M3 10h18l-2 10H5z"/><path d="M7 10l4-6M17 10l-4-6M5.5 14h13M6.5 17.5h11"/>',
 art:'<path d="M12 3c4 0 7 3.5 7 8s-3 10-7 10-7-5.5-7-10 3-8 7-8z"/><path d="M9 10h.01M15 10h.01M9.5 15c1.5 1 3.5 1 5 0"/>',
 leaf:'<path d="M5 19c0-8 5-14 15-15-1 10-7 15-15 15z"/><path d="M5 19 13 11"/>',
 sprayer:'<path d="M7 7h8v13a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"/><path d="M9 7V4h4v3M15 9h3l3-3M7 12h8"/>',
 soap:'<rect x="4" y="9" width="16" height="11" rx="3"/><circle cx="8" cy="5" r="1.5"/><circle cx="13" cy="4" r="1"/><circle cx="16.5" cy="6" r="1.3"/>',
 sparkle:'<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18"/>'
};
const svg=(k)=>`<svg viewBox="0 0 24 24" aria-hidden="true">${ICON[k]||ICON.sparkle}</svg>`;
const CATS=[
 {id:'food',name:'Food & Spices',i:'jar',h:30},
 {id:'fashion',name:'Fashion & Fabrics',i:'dress',h:330},
 {id:'beauty',name:'Beauty & Wellness',i:'bottle',h:350},
 {id:'home',name:'Home & Crafts',i:'basket',h:40},
 {id:'agri',name:'Farm & Tools',i:'leaf',h:110},
 {id:'phones',name:'Phones & Tablets',i:'phone',h:210},
 {id:'computers',name:'Computers & Networking',i:'laptop',h:225},
 {id:'electronics',name:'TV, Audio & Security',i:'tv',h:250},
 {id:'power',name:'Power & Solar',i:'solar',h:45},
 {id:'services',name:'Services',i:'wrench',h:175}
];
const catName=id=>(CATS.find(c=>c.id===id)||{}).name||'All';
const C={CM:'Cameroon',NG:'Nigeria',GH:'Ghana',CI:"Côte d'Ivoire",SN:'Senegal',KE:'Kenya',ET:'Ethiopia',RW:'Rwanda',MA:'Morocco',ZA:'South Africa'};
const SELLER='PrimeiT Solution';
const MINE=[9,11,13,20,22,23];
const SITES={Site:['Buea','Limbe','Douala']};
const P=[
 // Made in Cameroon
 [30,'Penja White Pepper, 250 g, sun-dried','Penja Gold','food',6500,8000,4.9,3410,1,'jar',30,{Size:['250 g','500 g']},140,'CM',1],
 [31,'Oku White Honey, 500 g, raw and unfiltered','Oku Beekeepers','food',5000,0,4.8,1820,1,'jar',45,null,90,'CM',1],
 [32,'West Region Arabica Coffee, ground, 500 g','Hauts Plateaux Coffee','food',5500,6500,4.7,2210,1,'cup',25,{Grind:['Ground','Whole bean']},75,'CM',1],
 [33,'Pure Cocoa Powder, 400 g, unsweetened','Cocoa Coast','food',4200,0,4.6,960,1,'jar',20,null,60,'CM',1],
 [34,'Njansang Spice, 200 g, ground','Mama Sauce','food',2500,0,4.7,740,1,'jar',35,null,110,'CM',1],
 [35,'Toghu Embroidered Shirt, men, handmade','Bamenda Weavers','fashion',28000,34000,4.8,520,0,'shirt',300,{Size:['M','L','XL','XXL']},14,'CM',1],
 [36,'Ankara Print Wrap Dress, cotton','Mboa Styles','fashion',17500,22000,4.7,640,1,'dress',330,{Size:['S','M','L','XL']},22,'CM',1],
 [37,'Raffia Woven Shoulder Bag','Grassfields Crafts','fashion',12000,0,4.5,310,0,'bag',40,null,9,'CM',1],
 [38,'Ndop Cloth Table Runner, hand-dyed indigo','Grassfields Crafts','home',15000,0,4.6,205,0,'fabric',225,null,12,'CM',1],
 [39,'Beaded Elephant Wall Art, handmade in Foumban','Foumban Artisans','home',45000,52000,4.9,118,0,'art',280,null,4,'CM',1],
 [40,'Shea Butter Body Cream, 400 ml, unscented','Karité du Nord','beauty',6500,0,4.7,2890,1,'bottle',38,null,85,'CM',1],
 [41,'Knapsack Sprayer, 16 L, manual','AgroTech Douala','agri',18500,0,4.4,690,1,'sprayer',120,null,35,'CM',1],
 [42,'Electric Cassava Grater, 1.5 kW','AgroTech Douala','agri',185000,210000,4.5,140,0,'sprayer',95,null,5,'CM',1],
 // Across Africa
 [43,'Kente Stole, handwoven, 2 m','Bonwire Weavers','fashion',25000,0,4.8,430,0,'fabric',50,null,18,'GH',1],
 [44,'African Black Soap, 500 g','Dudu Naturals','beauty',4500,0,4.6,1960,0,'soap',30,null,70,'GH',1],
 [45,'Adire Indigo Fabric, 6 yards','Abeokuta Dyeworks','fashion',22000,26000,4.6,380,0,'fabric',230,null,25,'NG',1],
 [46,'Plantain Chips, pack of 6','Lagos Crunch','food',3800,0,4.4,1240,0,'jar',55,null,200,'NG',1],
 [47,'Kenyan AA Coffee Beans, 500 g','Nyeri Highlands','food',9500,0,4.8,870,0,'cup',15,null,40,'KE',1],
 [48,'Maasai Beaded Leather Sandals','Mara Crafts','fashion',15000,18000,4.5,290,0,'shoe',10,{Size:['38','39','40','41','42']},16,'KE',1],
 [49,'Yirgacheffe Coffee, light roast, 250 g','Sidama Roasters','food',8500,0,4.9,620,0,'cup',35,null,30,'ET',1],
 [50,'Dark Chocolate 70%, pack of 4 bars','Abidjan Cacao','food',6000,7200,4.7,510,0,'jar',15,null,50,'CI',1],
 [51,'Dried Bissap (hibiscus), 500 g','Dakar Fields','food',3500,0,4.6,450,0,'leaf',345,null,80,'SN',1],
 [52,'Agaseke Woven Basket with lid','Kigali Weavers','home',13000,0,4.8,210,0,'basket',45,null,20,'RW',1],
 [53,'Argan Oil, cold-pressed, 100 ml','Atlas Argan','beauty',7900,9500,4.7,1340,0,'bottle',40,null,45,'MA',1],
 [54,'Handwoven Berber Rug, 120 × 180 cm','Atlas Looms','home',95000,0,4.6,95,0,'fabric',15,null,3,'MA',1],
 [55,'Rooibos Tea, 80 bags','Cederberg Tea','food',4800,0,4.7,780,0,'cup',10,null,60,'ZA',1],
 // Electronics sold from Cameroon
 [1,'Aurel X12 Smartphone, 128 GB, 6.5" AMOLED display, 50 MP camera','Aurel','phones',145000,175000,4.4,2381,1,'phone',210,{Color:['Graphite','Ocean','Sand']},34],
 [2,'Swift 10" Tablet with stylus, 64 GB, Wi-Fi + 4G','Swift','phones',99000,119000,4.1,655,0,'tablet',250,null,12],
 [3,'Aurel A5 Smartphone, 64 GB, dual SIM, 5000 mAh battery','Aurel','phones',62000,0,4.2,3120,1,'phone',190,{Color:['Black','Blue']},58],
 [4,'Lumen 14 Laptop, Core i5, 16 GB RAM, 512 GB SSD','Lumen','computers',389000,449000,4.5,1204,1,'laptop',220,{Storage:['512 GB','1 TB']},9],
 [5,'Lumen 15 Business Laptop, Core i7, 16 GB, 1 TB SSD, refurbished','Lumen','computers',265000,340000,4.3,410,0,'laptop',205,null,4],
 [6,'Nexa Mechanical Keyboard, hot-swappable, backlit','Nexa','computers',24500,0,4.4,980,1,'keyboard',190,{Layout:['QWERTY','AZERTY']},40],
 [7,'PrintPro All-in-One Printer, Wi-Fi, scan and copy','PrintPro','computers',69000,79000,4.1,702,0,'printer',200,null,15],
 [8,'Vault 1 TB Portable SSD, USB-C, 1050 MB/s','Vault','computers',54000,65000,4.7,1630,1,'drive',230,null,27],
 [9,'LinkWave AX3000 Wi-Fi 6 Router, dual band, 4 antennas','LinkWave','computers',48500,59000,4.5,1840,1,'router',175,null,22],
 [10,'LinkWave 24-port Gigabit Switch, rack mount','LinkWave','computers',87000,0,4.6,312,0,'server',185,null,6],
 [11,'Cat6 Ethernet Cable, 305 m box, pure copper','LinkWave','computers',38000,0,4.6,540,1,'cable',160,null,18],
 [12,'Outdoor Wi-Fi Access Point, 5 GHz, weatherproof','AirSpan','computers',64000,75000,4.3,220,0,'router',195,null,3],
 [13,'Office Network Installation, up to 20 users, cabling and Wi-Fi setup','PrimeiT Solution','services',150000,0,4.9,86,0,'wrench',175,SITES,99],
 [14,'Kora Pulse Wireless Noise-Cancelling Headphones, 40-hour battery','Kora Audio','electronics',39500,52000,4.6,5120,1,'headphones',265,{Color:['Black','Ivory']},44],
 [15,'Kora Mini Bluetooth Speaker, waterproof, 12-hour playtime','Kora Audio','electronics',18900,0,4.3,1890,1,'speaker',25,{Color:['Coral','Teal','Black']},61],
 [16,'Kora Buds True Wireless Earbuds, 30-hour charging case','Kora Audio','electronics',16500,22000,4.3,6210,1,'headphones',280,{Color:['White','Black']},120],
 [17,'Vista 43" Full HD Smart TV with built-in apps','Vista','electronics',189000,229000,4.2,760,0,'tv',230,null,8],
 [18,'Vista 55" 4K UHD Smart TV, HDR','Vista','electronics',329000,389000,4.4,510,0,'tv',245,null,5],
 [19,'Arena Wireless Game Controller, PC and console','Arena','electronics',21500,0,4.5,1290,1,'gamepad',290,null,33],
 [20,'GuardEye 4-Camera CCTV Kit, 1080p, with 1 TB recorder','GuardEye','electronics',168000,199000,4.5,744,1,'cctv',0,null,11],
 [21,'GuardEye Wi-Fi Indoor Camera, night vision, two-way audio','GuardEye','electronics',19900,25000,4.3,2140,1,'camera',350,null,47],
 [22,'CCTV Installation Service, up to 8 cameras','PrimeiT Solution','services',75000,0,4.8,64,0,'wrench',5,SITES,99],
 [23,'SunVolt 300 W Solar Panel, monocrystalline','SunVolt','power',89000,105000,4.6,860,0,'solar',45,null,4],
 [24,'SunVolt 1 kVA Inverter with 100 Ah battery','SunVolt','power',285000,0,4.4,390,0,'battery',35,null,7],
 [25,'PowerBox 20 000 mAh Power Bank, 22.5 W fast charge','PowerBox','power',14900,18500,4.6,4870,1,'battery',55,{Color:['Black','White']},95],
 [26,'Surge Protector Extension, 6 sockets, 2 USB','PowerBox','power',7900,0,4.4,2210,1,'plug',140,null,80],
 [27,'USB-C Fast Charger 65 W with 1 m cable','PowerBox','phones',9900,12500,4.5,3940,1,'plug',150,null,140],
 [28,'Laptop Backpack, water-resistant, fits 15.6"','Carry','computers',18500,0,4.4,980,0,'bag',210,null,26],
 [29,'Smart Watch, heart-rate and phone notifications','Tempo','phones',32000,41000,4.2,1880,1,'watch',200,{Color:['Black','Silver']},30]
].map(a=>({id:a[0],t:a[1],b:a[2],c:a[3],price:a[4],was:a[5],r:a[6],n:a[7],fast:!!a[8],i:a[9],h:a[10],opts:a[11],stock:a[12],o:a[13]||'CM',m:!!a[14],s:(MINE.includes(a[0])||a[2]===SELLER)?SELLER:a[2]}));
const CITY={CM:'Douala',NG:'Lagos',GH:'Accra',CI:'Abidjan',SN:'Dakar',KE:'Nairobi',ET:'Addis',RW:'Kigali',MA:'Casablanca',ZA:'Joburg'};
const INTRO={
 CM:'Penja pepper, Oku honey and highland coffee, Grassfields and Foumban crafts, plus electronics, solar and installation from sellers in Douala and Buea.',
 NG:'Suya spice, Ofada rice, Aso-Oke and Adire fabrics, and tech from Lagos sellers.',
 GH:'Kente and smocks, shito, raw shea and black soap, and Bolga baskets.',
 CI:"Ivorian chocolate and coffee, attiéké, Korhogo cloth and Senufo carvings.",
 SN:'Bissap and Café Touba, grand boubous, thiouraye incense and souwer glass paintings.',
 KE:'AA coffee and black tea, Maasai beadwork, kikoys and Kisii soapstone.',
 ET:'Yirgacheffe coffee, berbere and teff, habesha dresses and jebena coffee pots.',
 RW:'Single-origin coffee, Akabanga chili oil, Imigongo art and Agaseke baskets.',
 MA:'Argan oil, ras el hanout and dates, Berber rugs, lanterns and tagines.',
 ZA:'Rooibos, biltong and peri-peri, marula oil, shweshwe and Ndebele beadwork.'
};
const SPEC={
 CM:{food:[['Egusi Seeds, 1 kg',4500],['Dried Ndolé Leaves, 250 g',2500]],fashion:[['Kaba Ngondo Dress, cotton',15000]],beauty:[['Palm Kernel Oil, 250 ml',2500],['Moringa Powder, 200 g',3500]],home:[['Bamoun Bronze Figurine, lost-wax cast',38000],['Clay Cooking Pot, handmade',8000]],agri:[['Improved Maize Seed, 5 kg',7500],['Cocoa Pruning Saw',9500]]},
 NG:{food:[['Suya Spice (Yaji), 200 g',3000],['Ofada Rice, 2 kg',6500]],fashion:[['Aso-Oke Gele Headtie',12000],['Agbada, 3-piece, embroidered',45000]],beauty:[['Coconut Hair Oil, 250 ml',3500],['Shea and Cocoa Butter Lotion',4500]],home:[['Akwete Cloth Cushion Cover',9000],['Carved Calabash Bowl',7000]],agri:[['Hand Hoe, forged steel',4500],['Poultry Feeder, 10 kg',6000]]},
 GH:{food:[['Shito Pepper Sauce, 450 g',4000],['Gari, 2 kg',3000]],fashion:[['Batakari Smock, northern weave',30000]],beauty:[['Raw Shea Butter, 500 g',4500]],home:[['Bolga Woven Market Basket',14000],['Adinkra Stamped Cloth',16000]],agri:[['Cocoa Fermentation Box',25000],['Cutlass, 22 inch',3500]]},
 CI:{food:[['Dried Attiéké, 1 kg',3000],['Robusta Coffee, 500 g',5000]],fashion:[['Baoulé Woven Cloth',28000],['Wax Print Shirt',13000]],beauty:[['Karité Soap, 3 bars',3000],['Raw Cocoa Butter, 250 g',4000]],home:[['Korhogo Painted Cloth',22000],['Senufo Carved Stool',35000]],agri:[['Cocoa Pod Harvesting Hook',6500],['Cassava Cuttings Bundle',5000]]},
 SN:{food:[['Café Touba, 250 g',3000],['Thiakry Millet, 1 kg',2500]],fashion:[['Grand Boubou, embroidered',42000],['Leather Babouches',12000]],beauty:[['Thiouraye Incense, 200 g',4000],['Baobab Seed Oil, 50 ml',6000]],home:[['Souwer Glass Painting',18000],['Woven Plastic Floor Mat',9000]],agri:[['Millet Thresher, motorised',120000],['Groundnut Seed, 5 kg',6000]]},
 KE:{food:[['Kenyan Black Tea, 500 g',3500],['Macadamia Nuts, 250 g',6500]],fashion:[['Kikoy Cotton Wrap',9000]],beauty:[['Aloe Vera Gel, 200 ml',3500],['Shea and Baobab Body Butter',5500]],home:[['Kisii Soapstone Bowl',8500],['Sisal Kiondo Basket',11000]],agri:[['Drip Irrigation Kit, 500 m²',65000],['Solar Water Pump',150000]]},
 ET:{food:[['Berbere Spice, 250 g',3500],['Teff Flour, 2 kg',7000]],fashion:[['Habesha Kemis Dress',55000],['Netela Cotton Shawl',15000]],beauty:[['Frankincense Resin, 100 g',4500],['Honey Soap, 3 bars',2500]],home:[['Jebena Clay Coffee Pot',9000],['Mesob Woven Table Basket',40000]],agri:[['Top-bar Beehive',35000],['Ox Plough Blade',12000]]},
 RW:{food:[['Rwandan Coffee, 500 g',7500],['Akabanga Chili Oil, 20 ml',2000]],fashion:[['Kitenge Shirt',14000],['Imigongo Print Tote Bag',9000]],beauty:[['Avocado Oil, 100 ml',5000],['Tea Tree Soap',2500]],home:[['Imigongo Wall Panel',30000]],agri:[['Mushroom Growing Kit',12000],['Hand Water Pump',45000]]},
 MA:{food:[['Ras el Hanout, 200 g',4000],['Medjool Dates, 1 kg',9000]],fashion:[['Cotton Djellaba',38000],['Leather Babouche Slippers',14000]],beauty:[['Rhassoul Clay, 250 g',4500],['Rose Water, 250 ml',3500]],home:[['Brass Lantern, hand-pierced',25000],['Glazed Tagine Pot',15000]],agri:[['Olive Harvest Rake',5000],['Greenhouse Film, 50 m²',30000]]},
 ZA:{food:[['Biltong, 250 g',9500],['Peri-Peri Sauce, 250 ml',3500]],fashion:[['Shweshwe Print Skirt',18000],['Ndebele Beaded Necklace',12000]],beauty:[['Marula Face Oil, 30 ml',9000],['Rooibos Body Lotion',5000]],home:[['Ilala Palm Woven Basket',22000],['Ndebele Painted Mug Set',11000]],agri:[['Water Tank, 1000 L',85000],['Wheelbarrow, heavy duty',28000]]}
};
const SPEC_ICON={food:['jar','cup','jar'],fashion:['dress','shirt','shoe'],beauty:['bottle','soap','bottle'],home:['basket','fabric','art'],agri:['leaf','sprayer','leaf']};
const TECH={
 phones:[['Aurel A5 Smartphone, 64 GB, dual SIM',62000,'phone'],['PowerBox 10 000 mAh Power Bank',9900,'battery']],
 computers:[['Lumen 14 Laptop, Core i5, 16 GB RAM',389000,'laptop'],['LinkWave Wi-Fi 6 Router, dual band',48500,'router']],
 electronics:[['Kora Mini Bluetooth Speaker',18900,'speaker'],['Vista 43" Full HD Smart TV',189000,'tv']],
 power:[['SunVolt 300 W Solar Panel',89000,'solar'],['Solar Home Kit, 4 lights and phone charging',45000,'battery']],
 services:[['Phone and laptop repair, diagnosis included',10000,'wrench'],['Solar installation for homes and shops',120000,'wrench']]
};
const TECH_SELLER={phones:'Mobile',computers:'Tech Hub',electronics:'Electronics',power:'Solar',services:'Tech Services'};
Object.keys(C).forEach((o,ci)=>{
  let k=0;const mk=(t,c,price,i,b,m)=>{const id=100+ci*40+(k++);const h=((CATS.find(x=>x.id===c)||{}).h+((id*29)%50)-25+360)%360;
    P.push({id,t,b,c,price:Math.round(price/100)*100,was:id%3===0?Math.round(price*1.2/500)*500:0,r:Math.min(4.9,4.1+((id*7)%9)/10),n:(id*137)%3000+40,
      fast:o==='CM'&&id%2===0,i,h,opts:null,stock:(id*13)%60+3,o,m,s:b});};
  for(const c in SPEC[o])SPEC[o][c].forEach(([t,pr],j)=>mk(t,c,pr,SPEC_ICON[c][j%3],`${CITY[o]} ${{food:'Pantry',fashion:'Atelier',beauty:'Naturals',home:'Crafts',agri:'Agro'}[c]}`,true));
  if(o!=='CM'){const f=1+((ci*7)%5-2)/20;for(const c in TECH)TECH[c].forEach(([t,pr,i])=>mk(t,c,pr*f,i,`${CITY[o]} ${TECH_SELLER[c]}`,false));}
});

const dd=p=>p.fast?1:p.o==='CM'?4:9;
const cmFirst=(a,b)=>(b.o==='CM')-(a.o==='CM')||(b.m-a.m)||b.n*b.r-a.n*a.r;
const originTag=p=>p.m?`<span class="origin ${p.o==='CM'?'cm':''}">Made in ${C[p.o]}</span>`:'';
const cc=o=>`<span class="cc">${o}</span>`;
const byId=id=>P.find(p=>p.id===+id);

/* state */
const S={stab:'overview',mine:[],edits:{},ostatus:{},q:'',cat:'',sort:'feat',f:{cats:new Set(),minR:0,min:'',max:'',fast:false,deal:false,countries:new Set(),made:false},filtOpen:false,
  cart:[],saved:[],wish:new Set(),recent:[],step:1,ship:'standard',pay:'momo',lastOrder:null,orders:[]};
const KEY='bazaro-v1';
try{const d=JSON.parse(localStorage.getItem(KEY)||'null');if(d){S.cart=d.cart||[];S.saved=d.saved||[];S.wish=new Set(d.wish||[]);S.recent=d.recent||[];S.orders=d.orders||[];S.mine=d.mine||[];S.edits=d.edits||{};S.ostatus=d.ostatus||{};}}catch(e){}
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify({cart:S.cart,saved:S.saved,wish:[...S.wish],recent:S.recent,orders:S.orders,mine:S.mine,edits:S.edits,ostatus:S.ostatus}))}catch(e){}};
S.mine.forEach(p=>{if(!P.some(x=>x.id===p.id))P.push(p)});
for(const id in S.edits){const p=P.find(x=>x.id===+id);if(p)Object.assign(p,S.edits[id])}
const setEdit=p=>{if(p.isNew){const m=S.mine.find(x=>x.id===p.id);if(m)Object.assign(m,p)}else S.edits[p.id]={price:p.price,stock:p.stock,fast:p.fast,was:p.was};save()};

const fmt=n=>new Intl.NumberFormat('fr-FR').format(n);
const money=n=>`<span class="price num">${fmt(n)}<span class="cur">FCFA</span></span>`;
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const pct=p=>p.was?Math.round((1-p.price/p.was)*100):0;
const day=n=>{const d=new Date();d.setDate(d.getDate()+n);return d.toLocaleDateString('en-GB',{weekday:'short',day:'numeric',month:'short'})};
const stars=r=>`<span class="stars" style="--r:${r/5*100}%" role="img" aria-label="${r} out of 5 stars"></span>`;
const fastIc='<svg viewBox="0 0 24 24"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>';
const heartIc='<svg viewBox="0 0 24 24"><path d="M12 20s-7-4.4-9-9a4.8 4.8 0 0 1 9-3 4.8 4.8 0 0 1 9 3c-2 4.6-9 9-9 9z"/></svg>';
const art=(p,extra='',h)=>`<div class="art" style="--h:${h??p.h}">${p.img?`<img src="${p.img}" alt="" style="width:100%;height:100%;object-fit:cover">`:svg(p.i)}${extra}</div>`;
const FREE=25000;

function card(p,{deal}={}){
  const off=pct(p);
  return `<article class="card">
    <a href="#p-${p.id}" aria-label="${esc(p.t)}">${art(p,(off?`<span class="tag">-${off}%</span>`:'')+originTag(p))}</a>
    <button class="heart ${S.wish.has(p.id)?'on':''}" data-wish="${p.id}" aria-label="Save to list" aria-pressed="${S.wish.has(p.id)}">${heartIc}</button>
    <a class="ttl" href="#p-${p.id}">${esc(p.t)}</a>
    <div class="rv">${p.n?`${stars(p.r)}<span class="num">${fmt(p.n)}</span>`:'<span class="chip">New listing</span>'}</div>
    <div class="pr">${money(p.price)}${p.was?`<span class="was num">${fmt(p.was)}</span>`:''}</div>
    ${deal?`<div class="deal-meter" aria-label="${deal}% claimed"><i style="width:${deal}%"></i></div><div class="dl">${deal}% claimed</div>`:
      `<div class="dl">${p.fast?`<span class="fast">${fastIc}Bazaro Express</span> · `:''}${p.o!=='CM'?`Ships from ${C[p.o]} · `:''}Arrives <b>${day(dd(p))}</b></div>`}
    <button class="btn sm" data-add="${p.id}">Add to cart</button>
  </article>`;
}

/* header */
const catSel=document.getElementById('catSel');
CATS.forEach(c=>catSel.insertAdjacentHTML('beforeend',`<option value="${c.id}">${c.name}</option>`));
document.getElementById('deptNav').innerHTML=
  `<button data-nav="cm" class="hot">Made in Cameroon</button><button data-nav="stores">Country stores</button><button data-nav="africa">Across Africa</button><button data-nav="deals">Today's Deals</button><button data-nav="express">Express delivery</button>`+
  CATS.map(c=>`<button data-cat="${c.id}">${c.name}</button>`).join('')+`<button data-nav="sell">Sell on Bazaro</button>`;

function updateCount(){document.getElementById('cartCnt').textContent=S.cart.reduce((a,l)=>a+l.qty,0)}

let tt;function toast(html){const t=document.getElementById('toast');t.innerHTML=html;t.classList.add('show');clearTimeout(tt);tt=setTimeout(()=>t.classList.remove('show'),2600)}

function addToCart(id,qty=1,opt=''){
  const l=S.cart.find(x=>x.id===id&&x.opt===opt);
  if(l)l.qty=Math.min(10,l.qty+qty);else S.cart.push({id,qty,opt});
  save();updateCount();toast(`Added to cart <a href="#cart">View cart</a>`);
}

/* search + suggestions */
const qEl=document.getElementById('q'),sug=document.getElementById('suggest');let sIdx=-1;
function suggestions(){
  const v=qEl.value.trim().toLowerCase();
  if(!v){sug.hidden=true;return}
  const hits=P.filter(p=>(p.t+' '+p.b+' '+catName(p.c)+' '+C[p.o]).toLowerCase().includes(v)).sort(cmFirst).slice(0,6);
  if(!hits.length){sug.hidden=true;return}
  const re=new RegExp('('+v.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+')','i');
  sug.innerHTML=hits.map((p,i)=>`<button type="button" data-go="${p.id}" class="${i===sIdx?'on':''}"><span style="width:28px;flex:none">${art(p)}</span><span>${esc(p.t).replace(re,'<em>$1</em>')}<br><small class="muted">in ${catName(p.c)} · from ${C[p.o]}</small></span></button>`).join('');
  sug.hidden=false;
}
qEl.addEventListener('input',()=>{sIdx=-1;suggestions()});
qEl.addEventListener('keydown',e=>{
  const n=sug.querySelectorAll('button').length;if(sug.hidden||!n)return;
  if(e.key==='ArrowDown'){e.preventDefault();sIdx=(sIdx+1)%n;suggestions()}
  else if(e.key==='ArrowUp'){e.preventDefault();sIdx=(sIdx-1+n)%n;suggestions()}
  else if(e.key==='Enter'&&sIdx>=0){e.preventDefault();sug.querySelectorAll('button')[sIdx].click()}
  else if(e.key==='Escape'){sug.hidden=true}
});
document.addEventListener('click',e=>{if(!e.target.closest('.search'))sug.hidden=true});
document.getElementById('searchForm').addEventListener('submit',e=>{e.preventDefault();sug.hidden=true;S.q=qEl.value.trim();S.cat=catSel.value;resetFilters();go('results')});
function resetFilters(){S.shop=false;S.f={cats:new Set(S.cat?[S.cat]:[]),minR:0,min:'',max:'',fast:false,deal:false,countries:new Set(),made:false}}
document.getElementById('locBtn').addEventListener('click',()=>{const c=['Molyko, Buea','Bonamoussadi, Douala','Bastos, Yaoundé','Up Station, Bamenda'];const el=document.getElementById('locTxt');el.textContent=c[(c.indexOf(el.textContent)+1)%c.length];toast('Delivery location: '+el.textContent)});

function go(h){if(location.hash==='#'+h)render();else location.hash=h}

/* views */
const V=document.getElementById('view');
let heroTimer;
function home(){
  const slides=[
    {e:'Made in Cameroon',t:'Penja pepper, Oku honey, toghu and Ndop cloth',p:'Buy straight from Cameroonian makers and farmers. Local products are listed first and most arrive tomorrow.',i:'jar',h:30,a:['Shop Made in Cameroon','cm']},
    {e:'Across Africa',t:'Kente from Ghana, coffee from Kenya, argan from Morocco',p:'Products from 10 African countries, with customs handled for you and delivery to your door in 7 to 12 days.',i:'fabric',h:50,a:['Shop across Africa','africa']},
    {e:'Bazaro Express',t:'Phones, laptops and solar, delivered next day',p:'Order before 6 pm in Buea, Douala or Yaoundé. Free delivery on orders over 25 000 FCFA.',i:'truck',h:150,a:['Shop Express items','express']}
  ];
  const deals=P.filter(p=>p.was).sort((a,b)=>pct(b)-pct(a)).slice(0,8);
  const claimed=[72,41,88,25,63,54,37,80];
  const recent=S.recent.map(byId).filter(Boolean);
  V.innerHTML=`
  <section class="hero" aria-roledescription="carousel" aria-label="Featured">
    ${slides.map((s,i)=>`<div class="slide" ${i?'hidden':''} role="group" aria-label="${i+1} of ${slides.length}">
      <div><div class="eyebrow">${s.e}</div><h1>${s.t}</h1><p>${s.p}</p><button class="btn" data-hero="${s.a[1]}">${s.a[0]}</button></div>
      <div class="art" style="--h:${s.h}">${svg(s.i)}</div></div>`).join('')}
    <div class="dots">${slides.map((_,i)=>`<button aria-label="Slide ${i+1}" data-dot="${i}" class="${i?'':'on'}"></button>`).join('')}</div>
    <div class="arrows"><button data-step="-1" aria-label="Previous slide">‹</button><button data-step="1" aria-label="Next slide">›</button></div>
  </section>

  <section class="sec"><div class="sec-h"><h2>Made in Cameroon</h2><button class="linkbtn" data-nav="cm">See all local products</button></div>
    <div class="row">${P.filter(p=>p.m&&p.o==='CM').sort(cmFirst).map(p=>card(p)).join('')}</div>
  </section>

  <section class="sec"><div class="sec-h"><h2>Country stores</h2><a href="#stores" style="font-size:13px">See all country stores</a></div>
    <div class="countries">${Object.keys(C).map(o=>`<button class="ctry ${o==='CM'?'cm':''}" data-country="${o}">${cc(o)}<span><b>${C[o]}</b><br><small class="muted num">${P.filter(p=>p.o===o).length} products</small></span></button>`).join('')}</div>
  </section>

  <section class="sec"><div class="sec-h"><h2>Shop by department</h2></div>
    <div class="cats">${CATS.map(c=>`<button class="catbtn" data-cat="${c.id}"><div class="art" style="--h:${c.h}">${svg(c.i)}</div>${c.name}</button>`).join('')}</div>
  </section>

  <section class="sec"><div class="sec-h"><h2>Today's deals</h2><span class="muted">Ends in <span class="timer" id="timer">--:--:--</span> · <button class="linkbtn" data-nav="deals">See all deals</button></span></div>
    <div class="row">${deals.map((p,i)=>card(p,{deal:claimed[i]})).join('')}</div>
  </section>

  <section class="sec promo">
    ${[['Taste of Cameroon','food'],['African fashion and fabrics','fashion'],['Set up your office or shop','computers']].map(([t,c])=>{
      const items=P.filter(p=>p.c===c).sort(cmFirst).slice(0,4);
      return `<div class="panel"><h3>${t}</h3><div class="mini">${items.map(p=>`<a href="#p-${p.id}">${art(p)}<span>${esc(p.t.split(',')[0])}</span></a>`).join('')}</div><button class="linkbtn" style="align-self:flex-start" data-cat="${c}">Shop now</button></div>`}).join('')}
  </section>

  ${recent.length?`<section class="sec"><div class="sec-h"><h2>Your browsing history</h2><button class="linkbtn" data-clear-recent>Clear history</button></div><div class="row">${recent.map(p=>card(p)).join('')}</div></section>`:''}

  <section class="sec"><div class="sec-h"><h2>Top rated near you</h2></div>
    <div class="grid">${[...P].sort((a,b)=>b.r-a.r||b.n-a.n).slice(0,10).map(p=>card(p)).join('')}</div>
  </section>`;
  let cur=0;const sl=V.querySelectorAll('.slide'),dt=V.querySelectorAll('[data-dot]');
  const show=i=>{cur=(i+sl.length)%sl.length;sl.forEach((s,j)=>s.hidden=j!==cur);dt.forEach((d,j)=>d.classList.toggle('on',j===cur))};
  V.querySelectorAll('[data-dot]').forEach(b=>b.onclick=()=>{show(+b.dataset.dot);restart()});
  V.querySelectorAll('[data-step]').forEach(b=>b.onclick=()=>{show(cur+ +b.dataset.step);restart()});
  const restart=()=>{clearInterval(heroTimer);if(!matchMedia('(prefers-reduced-motion: reduce)').matches)heroTimer=setInterval(()=>show(cur+1),6000)};restart();
  const end=new Date();end.setHours(23,59,59,0);
  const tick=()=>{const el=document.getElementById('timer');if(!el)return clearInterval(timerI);let s=Math.max(0,Math.floor((end-new Date())/1000));el.textContent=[s/3600|0,(s%3600)/60|0,s%60].map(x=>String(x).padStart(2,'0')).join(':')};
  clearInterval(timerI);tick();timerI=setInterval(tick,1000);
}
let timerI;

function filtered(){
  const v=S.q.toLowerCase();const f=S.f;
  let list=P.filter(p=>{
    if(S.shop&&p.s!==SELLER)return false;
    if(v&&!(p.t+' '+p.b+' '+catName(p.c)+' '+C[p.o]).toLowerCase().includes(v))return false;
    if(f.cats.size&&!f.cats.has(p.c))return false;
    if(p.r<f.minR)return false;
    if(f.min!==''&&p.price<+f.min)return false;
    if(f.max!==''&&p.price>+f.max)return false;
    if(f.fast&&!p.fast)return false;
    if(f.deal&&!p.was)return false;
    if(f.countries.size&&!f.countries.has(p.o))return false;
    if(f.made&&!p.m)return false;
    return true});
  const so={feat:cmFirst,low:(a,b)=>a.price-b.price,high:(a,b)=>b.price-a.price,rating:(a,b)=>b.r-a.r,deal:(a,b)=>pct(b)-pct(a)}[S.sort];
  return list.sort(so);
}
function results(){
  const list=filtered();const f=S.f;
  const counts=Object.fromEntries(CATS.map(c=>[c.id,P.filter(p=>p.c===c.id).length]));
  const chips=(S.shop?[`<span class="chip">${SELLER} shop</span>`]:[]).concat([...f.cats].map(c=>`<span class="chip">${catName(c)}</span>`)).concat(f.minR?[`<span class="chip">${f.minR}★ &amp; up</span>`]:[],f.fast?['<span class="chip">Express</span>']:[],f.deal?['<span class="chip">On sale</span>']:[],[...f.countries].map(o=>`<span class="chip">From ${C[o]}</span>`),f.made?['<span class="chip">Made in Africa</span>']:[],(f.min||f.max)?[`<span class="chip">${f.min||0} – ${f.max||'any'} FCFA</span>`]:[]);
  V.innerHTML=`
  <div class="panel res-top">
    <div><b class="num">${list.length}</b> result${list.length===1?'':'s'} ${S.q?`for <b>“${esc(S.q)}”</b>`:''} ${chips.length?`<div class="chips" style="margin-top:4px">${chips.join('')}</div>`:''}</div>
    <div style="display:flex;gap:8px;align-items:center">
      <button class="btn ghost sm filt-toggle" id="ft">${S.filtOpen?'Hide':'Show'} filters</button>
      <label for="sort" class="muted" style="font-size:13px">Sort by</label>
      <select id="sort">${[['feat','Featured'],['low','Price: low to high'],['high','Price: high to low'],['rating','Avg. customer review'],['deal','Biggest discount']].map(([k,l])=>`<option value="${k}" ${S.sort===k?'selected':''}>${l}</option>`).join('')}</select>
    </div>
  </div>
  <div class="results">
    <aside class="panel filters ${S.filtOpen?'':'closed'}" aria-label="Filters">
      <h3>Delivery</h3>
      <label><input type="checkbox" id="fFast" ${f.fast?'checked':''}> <span class="fast">${fastIc}Bazaro Express</span></label>
      <h3>Ships from</h3>
      <label><input type="checkbox" id="fMade" ${f.made?'checked':''}> Made in Africa only</label>
      ${Object.keys(C).map(o=>`<label><input type="checkbox" data-fcountry="${o}" ${f.countries.has(o)?'checked':''}> ${o==='CM'?'<b>Cameroon</b>':C[o]} <span class="muted num" style="margin-left:auto">${P.filter(p=>p.o===o).length}</span></label>`).join('')}
      <h3>Department</h3>
      ${CATS.map(c=>`<label><input type="checkbox" data-fcat="${c.id}" ${f.cats.has(c.id)?'checked':''}> ${c.name} <span class="muted num" style="margin-left:auto">${counts[c.id]}</span></label>`).join('')}
      <h3>Customer review</h3>
      ${[4,3,2].map(r=>`<button class="rate ${f.minR===r?'on':''}" data-rate="${r}">${stars(r)} &amp; up</button>`).join('')}
      <h3>Price (FCFA)</h3>
      <div class="pricebox"><input id="pMin" inputmode="numeric" placeholder="Min" value="${f.min}"><span>–</span><input id="pMax" inputmode="numeric" placeholder="Max" value="${f.max}"><button class="btn sm alt" id="pGo">Go</button></div>
      <div class="chips" style="margin-top:8px">${[[0,15000,'Under 15 000'],[15000,50000,'15 000 – 50 000'],[50000,'','Over 50 000']].map(([a,b,l])=>`<button class="chip" data-prange="${a},${b}">${l}</button>`).join('')}</div>
      <h3>Deals</h3>
      <label><input type="checkbox" id="fDeal" ${f.deal?'checked':''}> On sale now</label>
      <button class="linkbtn" id="fClear" style="margin-top:14px">Clear all filters</button>
    </aside>
    <section>${list.length?`<div class="grid">${list.map(p=>card(p)).join('')}</div>`:
      `<div class="panel empty"><h2 style="font-size:20px">No products match those filters</h2><p class="muted">Try removing a filter or searching a broader term.</p><button class="btn" id="fClear2">Clear filters</button></div>`}</section>
  </div>`;
  const rr=()=>results();
  V.querySelector('#sort').onchange=e=>{S.sort=e.target.value;rr()};
  V.querySelector('#ft').onclick=()=>{S.filtOpen=!S.filtOpen;rr()};
  V.querySelector('#fFast').onchange=e=>{f.fast=e.target.checked;rr()};
  V.querySelector('#fDeal').onchange=e=>{f.deal=e.target.checked;rr()};
  V.querySelector('#fMade').onchange=e=>{f.made=e.target.checked;rr()};
  V.querySelectorAll('[data-fcountry]').forEach(i=>i.onchange=()=>{i.checked?f.countries.add(i.dataset.fcountry):f.countries.delete(i.dataset.fcountry);rr()});
  V.querySelectorAll('[data-fcat]').forEach(i=>i.onchange=()=>{i.checked?f.cats.add(i.dataset.fcat):f.cats.delete(i.dataset.fcat);rr()});
  V.querySelectorAll('[data-rate]').forEach(b=>b.onclick=()=>{f.minR=f.minR===+b.dataset.rate?0:+b.dataset.rate;rr()});
  V.querySelector('#pGo').onclick=()=>{f.min=V.querySelector('#pMin').value.replace(/\D/g,'');f.max=V.querySelector('#pMax').value.replace(/\D/g,'');rr()};
  V.querySelectorAll('[data-prange]').forEach(b=>b.onclick=()=>{[f.min,f.max]=b.dataset.prange.split(',');rr()});
  const clr=()=>{S.q='';qEl.value='';S.cat='';catSel.value='';resetFilters();rr()};
  V.querySelector('#fClear').onclick=clr;const c2=V.querySelector('#fClear2');if(c2)c2.onclick=clr;
}

const NAMES=['Ngozi A.','Brice T.','Mireille E.','Samuel N.','Aïcha M.','Kevin F.','Esther B.','Junior K.'];
const TEXTS=[
 ['Exactly as described','Arrived a day early and well packed. Quality is better than I expected for the price.'],
 ['Good value','Does the job well. Setup took five minutes. Would buy from this seller again.'],
 ['Solid, small issues','Works fine, but the instructions were only in one language. Customer service answered quickly.'],
 ['Love it','I bought a second one for my sister. The finish looks premium.'],
 ['Okay for the price','Not the best I have used, but at this price I have no complaints.']
];
function product(id){
  const p=byId(id);if(!p){V.innerHTML='<div class="panel empty"><h2>That product is no longer available</h2><p><a href="#home">Go back to the homepage</a></p></div>';return}
  S.recent=[p.id,...S.recent.filter(x=>x!==p.id)].slice(0,8);save();
  const off=pct(p);let qty=1;let sel={};if(p.opts)for(const k in p.opts)sel[k]=p.opts[k][0];
  const dist=[.62,.21,.08,.04,.05].map((x,i)=>Math.round(x*100*(p.r>4.5&&i===0?1.1:1)));
  const shades=[p.h,(p.h+18)%360,(p.h+340)%360,(p.h+40)%360];
  const rel=P.filter(x=>x.c===p.c&&x.id!==p.id).concat(P.filter(x=>x.c!==p.c).slice(0,4)).slice(0,6);
  const revs=[0,1,2].map(k=>{const i=(p.id+k*3)%TEXTS.length;const n=NAMES[(p.id+k)%NAMES.length];return {n,t:TEXTS[i],r:[5,4,3,5,4][i]}});
  V.innerHTML=`
  <div class="crumbs"><a href="#home">Home</a> › <a href="#store-${p.o.toLowerCase()}" data-setdept="all">${C[p.o]} store</a> › <a href="#store-${p.o.toLowerCase()}" data-setdept="${p.c}">${catName(p.c)}</a> › <span>${esc(p.b)}</span></div>
  <div class="pdp">
    <div class="gallery">
      <div class="thumbs">${shades.map((h,i)=>`<button data-shade="${h}" class="${i?'':'on'}" aria-label="View ${i+1}">${art(p,'',h)}</button>`).join('')}</div>
      <div style="position:relative" id="mainArt">${art(p,off?`<span class="tag">-${off}%</span>`:'')}
        <button class="heart ${S.wish.has(p.id)?'on':''}" data-wish="${p.id}" aria-label="Save to list">${heartIc}</button></div>
    </div>
    <div class="info">
      <a class="brand" href="#results" data-brand="${esc(p.b)}">Visit the ${esc(p.b)} store</a>
      <h1>${esc(p.t)}</h1>
      <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-top:6px;font-size:13px">${cc(p.o)}<span>${p.m?`Made in <b>${C[p.o]}</b> by ${esc(p.b)}`:`Sold from <b>${C[p.o]}</b>`}</span>${p.m&&p.o==='CM'?'<span class="origin cm" style="position:static">Made in Cameroon</span>':''}</div>
      <div style="display:flex;gap:8px;align-items:center;margin-top:6px;font-size:14px">${p.n?`<b>${p.r}</b>${stars(p.r)}`:'<span class="chip">New listing</span>'}<a href="#reviews" data-scroll="reviews" class="num">${fmt(p.n)} ratings</a></div>
      ${p.n>2000?'<div style="margin-top:6px"><span class="chip" style="background:var(--accent-soft);border-color:transparent;font-weight:700">Best seller</span> <span class="muted" style="font-size:13px">in '+catName(p.c)+'</span></div>':''}
      <hr>
      <div style="display:flex;gap:10px;align-items:baseline;flex-wrap:wrap">${off?`<span class="off" style="font-size:22px">-${off}%</span>`:''}<span style="font-size:28px">${money(p.price)}</span></div>
      ${p.was?`<div class="muted" style="font-size:13px">List price: <span class="was num">${fmt(p.was)} FCFA</span></div>`:''}
      <div class="muted" style="font-size:13px;margin-top:4px">Pay with Mobile Money, card, or cash on delivery.</div>
      <hr>
      ${p.opts?Object.entries(p.opts).map(([k,vals])=>`<div style="margin-bottom:12px"><div style="font-size:14px;margin-bottom:6px">${k}: <b data-optlbl="${k}">${vals[0]}</b></div><div class="opts">${vals.map((v,i)=>`<button class="opt ${i?'':'on'}" data-opt="${k}" data-val="${v}">${v}</button>`).join('')}</div></div>`).join(''):''}
      <h3 style="font-size:16px;font-family:var(--f-body);font-weight:700">About this item</h3>
      <ul class="bullets">
        <li>${esc(p.t.split(',').slice(1).join(',').trim()||'Built for everyday use with quality materials')}.</li>
        ${p.desc?`<li>${esc(p.desc)}</li>`:''}<li>${p.cond==='Refurbished'?'Refurbished and tested. ':''}Sold by ${esc(p.s)}, a verified Bazaro seller with ${(p.id*37%9)+90}% positive feedback.</li>
        <li>${p.i==='wrench'?'Done by a certified technician. Price includes labour and a site visit.':'12-month warranty and free returns within 30 days.'}</li>
        <li>${p.fast?'Stocked in our Douala warehouse for next-day delivery.':p.o==='CM'?'Ships from the seller in Cameroon within 2 business days.':`Ships from ${C[p.o]}. Bazaro handles customs, and the price shown includes import duties.`}</li>
      </ul>
    </div>
    <aside class="panel buybox" aria-label="Buy">
      ${money(p.price)}
      <div style="font-size:14px">${p.fast?`<span class="fast">${fastIc}Bazaro Express</span><br>`:''}${p.price>=FREE?'<b>Free</b>':'1 500 FCFA'} delivery <b>${day(dd(p))}</b></div>
      <div style="font-size:13px" class="muted">Deliver to <b style="color:var(--ink)">${esc(document.getElementById('locTxt').textContent)}</b></div>
      ${p.stock<=0?'<div class="off">Out of stock</div>':p.stock<=5?`<div class="off">Only ${p.stock} left in stock</div>`:'<div class="instock">In stock</div>'}
      <div style="display:flex;align-items:center;gap:10px"><span style="font-size:14px">Qty</span><div class="qty"><button id="qm" aria-label="Decrease">−</button><span id="qv" class="num">1</span><button id="qp" aria-label="Increase">+</button></div></div>
      <button class="btn block" id="addBtn" ${p.stock<=0?'disabled style="opacity:.5"':''}>Add to cart</button>
      <button class="btn block" id="buyBtn" style="background:var(--head2);color:var(--head-ink)">Buy now</button>
      <dl class="kv"><dt>Ships from</dt><dd>${p.fast?'Bazaro, Douala':C[p.o]}</dd><dt>Sold by</dt><dd>${esc(p.s)}</dd><dt>Returns</dt><dd>30-day free returns</dd><dt>Payment</dt><dd>Secure transaction</dd></dl>
      <button class="btn ghost block sm" data-wish="${p.id}">${S.wish.has(p.id)?'Saved to your list':'Add to list'}</button>
    </aside>
  </div>

  <section class="sec"><div class="sec-h"><h2>Customers also viewed</h2></div><div class="row">${rel.map(x=>card(x)).join('')}</div></section>

  <section class="reviews" id="reviews">
    <div>
      <h2 style="font-size:22px">Customer reviews</h2>
      <div style="display:flex;gap:8px;align-items:center;margin:8px 0 4px">${stars(p.r)}<b>${p.r} out of 5</b></div>
      <div class="muted num" style="font-size:13px;margin-bottom:12px">${fmt(p.n)} global ratings</div>
      <div class="hist">${dist.map((d,i)=>`<span>${5-i} star</span><div class="b"><i style="width:${Math.min(d,100)}%"></i></div><span class="num">${Math.min(d,100)}%</span>`).join('')}</div>
      <hr style="border:0;border-top:1px solid var(--line);margin:18px 0">
      <h3 style="font-size:16px;font-family:var(--f-body)">Review this product</h3>
      <p class="muted" style="font-size:13px">Share your thoughts with other customers.</p>
      <button class="btn ghost block" id="writeRev">Write a review</button>
    </div>
    <div>
      <h3 style="font-size:16px;font-family:var(--f-body)">Sample reviews</h3>
      <div id="revList">${revs.map(r=>`<div class="review"><div class="who"><span class="avatar">${r.n.split(' ').map(s=>s[0]).join('')}</span>${r.n}</div>
        <div style="display:flex;gap:8px;align-items:center;margin-top:6px">${stars(r.r)}<b style="font-size:14px">${r.t[0]}</b></div>
        <div class="verified">Verified purchase</div><p style="margin:6px 0">${r.t[1]}</p>
        <button class="btn ghost sm" data-helpful>Helpful</button></div>`).join('')}</div>
    </div>
  </section>`;
  const qv=V.querySelector('#qv');
  V.querySelector('#qm').onclick=()=>{qty=Math.max(1,qty-1);qv.textContent=qty};
  V.querySelector('#qp').onclick=()=>{qty=Math.min(10,qty+1);qv.textContent=qty};
  const optStr=()=>Object.values(sel).join(' / ');
  V.querySelector('#addBtn').onclick=()=>addToCart(p.id,qty,optStr());
  V.querySelector('#buyBtn').onclick=()=>{addToCart(p.id,qty,optStr());S.step=1;go('checkout')};
  V.querySelectorAll('[data-opt]').forEach(b=>b.onclick=()=>{const k=b.dataset.opt;sel[k]=b.dataset.val;V.querySelectorAll(`[data-opt="${k}"]`).forEach(x=>x.classList.toggle('on',x===b));V.querySelector(`[data-optlbl="${k}"]`).textContent=b.dataset.val});
  V.querySelectorAll('[data-shade]').forEach(b=>b.onclick=()=>{V.querySelectorAll('[data-shade]').forEach(x=>x.classList.toggle('on',x===b));V.querySelector('#mainArt .art').style.setProperty('--h',b.dataset.shade)});
  V.querySelector('[data-scroll]').onclick=e=>{e.preventDefault();V.querySelector('#reviews').scrollIntoView({behavior:'smooth'})};
  V.querySelector('[data-brand]').onclick=e=>{e.preventDefault();S.q=p.b;qEl.value=p.b;S.cat='';resetFilters();go('results')};
  V.querySelectorAll('[data-helpful]').forEach(b=>b.onclick=()=>{b.textContent='Thanks for your feedback';b.disabled=true});
  V.querySelector('#writeRev').onclick=()=>toast('Reviews open once your order is delivered');
}

function cart(){
  const lines=S.cart.map(l=>({...l,p:byId(l.id)})).filter(l=>l.p);
  const sub=lines.reduce((a,l)=>a+l.p.price*l.qty,0),items=lines.reduce((a,l)=>a+l.qty,0);
  const left=Math.max(0,FREE-sub);
  const saved=S.saved.map(byId).filter(Boolean);
  V.innerHTML=`
  <div class="cart">
    <section class="panel cart-list">
      <h1 style="font-size:26px">Shopping cart</h1>
      ${lines.length?`<div class="muted" style="font-size:13px;text-align:right;border-bottom:1px solid var(--line);padding-bottom:6px">Price</div>`+lines.map((l,i)=>`
        <div class="line">
          <a href="#p-${l.p.id}">${art(l.p)}</a>
          <div style="min-width:0"><a href="#p-${l.p.id}" style="color:var(--ink);font-weight:600">${esc(l.p.t)}</a>
            <div class="instock" style="font-size:13px">In stock</div>
            ${l.p.fast?`<span class="fast">${fastIc}Bazaro Express</span>`:''}
            ${l.opt?`<div style="font-size:13px"><span class="muted">Option:</span> ${esc(l.opt)}</div>`:''}
            <div class="acts">
              <div class="qty"><button data-dec="${i}" aria-label="Decrease">${l.qty===1?'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/></svg>':'−'}</button><span class="num">${l.qty}</span><button data-inc="${i}" aria-label="Increase">+</button></div>
              <button class="linkbtn" data-del="${i}">Delete</button>
              <button class="linkbtn" data-later="${i}">Save for later</button>
            </div>
          </div>
          <div class="lp" style="text-align:right">${money(l.p.price*l.qty)}${l.qty>1?`<div class="muted num" style="font-size:12px">${fmt(l.p.price)} each</div>`:''}</div>
        </div>`).join('')+`<div style="text-align:right;font-size:18px;padding-top:10px">Subtotal (${items} item${items>1?'s':''}): <b>${fmt(sub)} FCFA</b></div>`:
      `<div class="empty"><h2 style="font-size:20px">Your cart is empty</h2><p class="muted">Items you add will show up here.</p><button class="btn" data-nav="deals">Browse today's deals</button></div>`}
    </section>
    <aside class="panel summary">
      ${lines.length?`
      <div class="meter" aria-label="Progress to free delivery"><i style="width:${Math.min(100,sub/FREE*100)}%"></i></div>
      <div style="font-size:13px">${left?`Add <b>${fmt(left)} FCFA</b> more for <b>free delivery</b>.`:'<span class="instock">Your order qualifies for free delivery.</span>'}</div>
      <div class="sumrow"><span>Items (${items})</span><span class="num">${fmt(sub)} FCFA</span></div>
      <div class="sumrow"><span>Delivery</span><span class="num">${left?'1 500 FCFA':'Free'}</span></div>
      <div class="sumrow total"><span>Total</span><span class="num">${fmt(sub+(left?1500:0))} FCFA</span></div>
      <button class="btn block" id="toCheckout">Proceed to checkout</button>`:
      `<h3 style="font-size:16px">Free delivery over ${fmt(FREE)} FCFA</h3><p class="muted" style="margin:0;font-size:13px">On Express items across Buea, Douala and Yaoundé.</p>`}
    </aside>
  </div>
  ${saved.length?`<section class="sec"><div class="sec-h"><h2>Saved for later (${saved.length})</h2></div><div class="grid">${saved.map(p=>card(p).replace('data-add=','data-move=').replace('Add to cart','Move to cart')).join('')}</div></section>`:''}
  <section class="sec"><div class="sec-h"><h2>Frequently bought together</h2></div><div class="row">${P.filter(p=>!S.cart.some(l=>l.id===p.id)).sort((a,b)=>b.n-a.n).slice(0,8).map(p=>card(p)).join('')}</div></section>`;
  const rr=()=>{save();updateCount();cart()};
  V.querySelectorAll('[data-inc]').forEach(b=>b.onclick=()=>{const l=S.cart[b.dataset.inc];l.qty=Math.min(10,l.qty+1);rr()});
  V.querySelectorAll('[data-dec]').forEach(b=>b.onclick=()=>{const i=+b.dataset.dec;S.cart[i].qty--;if(!S.cart[i].qty){const it=S.cart.splice(i,1)[0];undoToast(it,i)}rr()});
  V.querySelectorAll('[data-del]').forEach(b=>b.onclick=()=>{const i=+b.dataset.del;const it=S.cart.splice(i,1)[0];rr();undoToast(it,i)});
  V.querySelectorAll('[data-later]').forEach(b=>b.onclick=()=>{const it=S.cart.splice(+b.dataset.later,1)[0];if(!S.saved.includes(it.id))S.saved.push(it.id);rr();toast('Saved for later')});
  V.querySelectorAll('[data-move]').forEach(b=>b.onclick=()=>{const id=+b.dataset.move;S.saved=S.saved.filter(x=>x!==id);addToCart(id);cart()});
  const tc=V.querySelector('#toCheckout');if(tc)tc.onclick=()=>{S.step=1;go('checkout')};
}
function undoToast(it,i){toast(`Removed from cart <a href="#cart" id="undo">Undo</a>`);setTimeout(()=>{const u=document.getElementById('undo');if(u)u.onclick=e=>{e.preventDefault();S.cart.splice(i,0,it);save();updateCount();cart();document.getElementById('toast').classList.remove('show')}},0)}

const ADDR={name:'Laura Takem',phone:'6 79 64 76 59',city:'Buea',area:'Molyko',street:'Behind Malingo junction, Molyko',notes:''};
function checkout(){
  const lines=S.cart.map(l=>({...l,p:byId(l.id)})).filter(l=>l.p);
  if(!lines.length){go('cart');return}
  const sub=lines.reduce((a,l)=>a+l.p.price*l.qty,0);
  const shipCost={standard:sub>=FREE?0:1500,express:2500,pickup:0}[S.ship];
  const shipLbl={standard:'Standard delivery',express:'Express, next day',pickup:'Pickup point'}[S.ship];
  const allFast=lines.every(l=>l.p.fast);const maxD=Math.max(...lines.map(l=>dd(l.p)));
  const st=['Delivery address','Delivery option','Payment','Review'];
  V.innerHTML=`
  <h1 style="font-size:26px;margin-bottom:12px">Checkout</h1>
  <div class="steps">${st.map((s,i)=>`<div class="step ${S.step===i+1?'on':''} ${S.step>i+1?'done':''}"><b>${S.step>i+1?'✓':i+1}</b>${s}</div>`).join('')}</div>
  <div class="cart">
    <section class="panel cart-list" id="stepBody"></section>
    <aside class="panel summary">
      <div class="sumrow"><span>Items (${lines.reduce((a,l)=>a+l.qty,0)})</span><span class="num">${fmt(sub)} FCFA</span></div>
      <div class="sumrow"><span>${shipLbl}</span><span class="num">${shipCost?fmt(shipCost)+' FCFA':'Free'}</span></div>
      <div class="sumrow total"><span>Order total</span><span class="num">${fmt(sub+shipCost)} FCFA</span></div>
      <p class="muted" style="font-size:12px;margin:0">This is a demo checkout. No payment is taken.</p>
    </aside>
  </div>`;
  const B=V.querySelector('#stepBody');
  const nav=(back)=>`<div style="display:flex;gap:10px;justify-content:space-between;margin-top:18px;flex-wrap:wrap">${back?'<button class="btn ghost" id="back">Back</button>':'<a href="#cart" class="btn ghost" style="text-decoration:none">Back to cart</a>'}<button class="btn" id="next">${S.step===4?'Place your order':'Continue'}</button></div>`;
  if(S.step===1){
    B.innerHTML=`<h2 style="font-size:20px;margin-bottom:14px">Where should we deliver?</h2>
    <form class="form" id="addrForm">
      <label>Full name<input id="aName" required value="${esc(ADDR.name)}" placeholder="Full name"></label>
      <label>Phone number<input id="aPhone" required inputmode="tel" pattern="[0-9 +]{9,16}" value="${esc(ADDR.phone)}" placeholder="6 XX XX XX XX"></label>
      <label>City<select id="aCity">${['Buea','Douala','Yaoundé','Bamenda','Limbe','Kumba'].map(c=>`<option ${c===ADDR.city?'selected':''}>${c}</option>`).join('')}</select></label>
      <label>Neighbourhood<input id="aArea" required value="${esc(ADDR.area)}" placeholder="e.g. Molyko"></label>
      <label class="full">Landmark or street<input id="aStreet" required value="${esc(ADDR.street)}" placeholder="Nearest landmark helps the rider find you"></label>
      <label class="full">Delivery notes (optional)<input id="aNotes" value="${esc(ADDR.notes)}" placeholder="Gate colour, best time to call…"></label>
    </form>${nav(false)}`;
    B.querySelector('#next').onclick=()=>{const f=B.querySelector('#addrForm');if(!f.reportValidity())return;
      Object.assign(ADDR,{name:aName.value,phone:aPhone.value,city:aCity.value,area:aArea.value,street:aStreet.value,notes:aNotes.value});S.step=2;checkout()};
  }else if(S.step===2){
    B.innerHTML=`<h2 style="font-size:20px;margin-bottom:14px">Choose a delivery option</h2><div class="stack">
      ${[['standard','Standard delivery',`Arrives ${day(maxD)} – ${day(maxD+1)}`,sub>=FREE?'Free':'1 500 FCFA'],
         ['express','Express, next day',allFast?`Arrives tomorrow, ${day(1)}`:`Express items tomorrow, others ${day(maxD)}`,'2 500 FCFA'],
         ['pickup','Pickup point',`Collect from Bazaro point, Molyko, from ${day(2)}`,'Free']].map(([k,t,d,c])=>
        `<label class="radio"><input type="radio" name="ship" value="${k}" ${S.ship===k?'checked':''}><span style="flex:1"><b>${t}</b><br><span class="muted" style="font-size:13px">${d}</span></span><b class="num">${c}</b></label>`).join('')}
    </div>${nav(true)}`;
    B.querySelectorAll('[name=ship]').forEach(r=>r.onchange=()=>{S.ship=r.value;checkout()});
    B.querySelector('#back').onclick=()=>{S.step=1;checkout()};
    B.querySelector('#next').onclick=()=>{S.step=3;checkout()};
  }else if(S.step===3){
    B.innerHTML=`<h2 style="font-size:20px;margin-bottom:14px">How would you like to pay?</h2><div class="stack">
      ${[['momo','Mobile Money','You will confirm the payment on your phone after placing the order.'],
         ['cod','Cash on delivery','Pay the rider in cash or by Mobile Money when your order arrives.'],
         ['card','Bank card','Visa or Mastercard. Card entry is turned off in this demo.']].map(([k,t,d])=>
        `<label class="radio"><input type="radio" name="pay" value="${k}" ${S.pay===k?'checked':''}><span><b>${t}</b><br><span class="muted" style="font-size:13px">${d}</span></span></label>`).join('')}
    </div>${nav(true)}`;
    B.querySelectorAll('[name=pay]').forEach(r=>r.onchange=()=>{S.pay=r.value});
    B.querySelector('#back').onclick=()=>{S.step=2;checkout()};
    B.querySelector('#next').onclick=()=>{S.step=4;checkout()};
  }else{
    const payLbl={momo:'Mobile Money',cod:'Cash on delivery',card:'Bank card'}[S.pay];
    B.innerHTML=`<h2 style="font-size:20px;margin-bottom:14px">Review your order</h2>
      <div class="kv" style="font-size:14px;gap:8px 16px"><dt>Deliver to</dt><dd><b>${esc(ADDR.name)}</b>, ${esc(ADDR.phone)}<br>${esc(ADDR.street)}, ${esc(ADDR.area)}, ${esc(ADDR.city)} <button class="linkbtn" data-goto="1">Change</button></dd>
      <dt>Delivery</dt><dd>${shipLbl} <button class="linkbtn" data-goto="2">Change</button></dd>
      <dt>Payment</dt><dd>${payLbl} <button class="linkbtn" data-goto="3">Change</button></dd></div>
      <hr style="border:0;border-top:1px solid var(--line);margin:14px 0">
      ${lines.map(l=>`<div style="display:grid;grid-template-columns:56px minmax(0,1fr) auto;gap:12px;align-items:center;padding:6px 0"><div>${art(l.p)}</div><div style="min-width:0;font-size:14px">${esc(l.p.t)}<div class="muted" style="font-size:12px">Qty ${l.qty}${l.opt?' · '+esc(l.opt):''}</div></div><b class="num" style="white-space:nowrap">${fmt(l.p.price*l.qty)} FCFA</b></div>`).join('')}
      ${nav(true)}`;
    B.querySelectorAll('[data-goto]').forEach(b=>b.onclick=()=>{S.step=+b.dataset.goto;checkout()});
    B.querySelector('#back').onclick=()=>{S.step=3;checkout()};
    B.querySelector('#next').onclick=()=>{
      const no='BZ-'+(Date.now()%1e8).toString().padStart(8,'0');
      S.lastOrder={no,total:sub+shipCost,items:lines.map(l=>({id:l.id,qty:l.qty})),eta:S.ship==='express'?day(1):S.ship==='pickup'?day(Math.max(2,maxD)):day(maxD),pay:payLbl,date:day(0)};
      lines.forEach(l=>{l.p.stock=Math.max(0,l.p.stock-l.qty);setEdit(l.p)});
      S.orders.unshift(S.lastOrder);S.cart=[];save();updateCount();go('done')};
  }
}
function done(){
  const o=S.lastOrder;if(!o){go('home');return}
  V.innerHTML=`<div class="panel done-box">
    <div class="check"><svg viewBox="0 0 24 24"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg></div>
    <h1 style="font-size:26px">Order placed, thank you</h1>
    <p style="margin:0">Order <b class="num">${o.no}</b> · Total <b class="num">${fmt(o.total)} FCFA</b> · ${o.pay}</p>
    <p class="muted" style="margin:0">Estimated arrival <b style="color:var(--ink)">${o.eta}</b>. We will text you when the rider is on the way.</p>
    <div class="track"><div class="on">Ordered</div><div>Packed</div><div>On the way</div><div>Delivered</div></div>
    <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;margin-top:8px"><a class="btn" href="#orders" style="text-decoration:none">View your orders</a><a class="btn ghost" href="#home" style="text-decoration:none">Continue shopping</a></div>
  </div>`;
}
function orders(){
  V.innerHTML=`<h1 style="font-size:26px;margin-bottom:14px">Your orders</h1>`+(S.orders.length?S.orders.map(o=>`
    <section class="panel" style="margin-bottom:14px;overflow:hidden">
      <div style="display:flex;gap:24px;flex-wrap:wrap;padding:12px 18px;background:var(--chip);font-size:13px">
        <div><span class="muted">Order placed</span><br><b>${o.date}</b></div><div><span class="muted">Total</span><br><b class="num">${fmt(o.total)} FCFA</b></div><div><span class="muted">Payment</span><br><b>${o.pay}</b></div><div style="margin-left:auto"><span class="muted">Order</span><br><b class="num">${o.no}</b></div>
      </div>
      <div style="padding:14px 18px"><b style="color:var(--good)">Arriving ${o.eta}</b>
      ${o.items.map(it=>{const p=byId(it.id);return p?`<div style="display:grid;grid-template-columns:64px minmax(0,1fr) auto;gap:12px;align-items:center;margin-top:10px"><a href="#p-${p.id}">${art(p)}</a><div style="min-width:0"><a href="#p-${p.id}">${esc(p.t)}</a><div class="muted" style="font-size:12px">Qty ${it.qty}</div></div><button class="btn sm alt" data-add="${p.id}">Buy again</button></div>`:''}).join('')}</div>
    </section>`).join(''):`<div class="panel empty"><h2 style="font-size:20px">No orders yet</h2><p class="muted">When you place an order it will appear here with tracking.</p><a class="btn" href="#home" style="text-decoration:none">Start shopping</a></div>`);
}
function wishlist(){
  const list=[...S.wish].map(byId).filter(Boolean);
  V.innerHTML=`<h1 style="font-size:26px;margin-bottom:14px">Your saved list</h1>`+(list.length?`<div class="grid">${list.map(p=>card(p)).join('')}</div>`:
    `<div class="panel empty"><h2 style="font-size:20px">Nothing saved yet</h2><p class="muted">Tap the heart on any product to save it here.</p><a class="btn" href="#home" style="text-decoration:none">Find something you like</a></div>`);
}
const SALES=[182,95,240,130,310,205,150,275,198,330,260,145,390,288];
const SAMPLE_ORDERS=[
 {no:'BZ-20418831',buyer:'Brice T.',city:'Limbe',items:[{id:9,qty:2}],date:-1},
 {no:'BZ-20418507',buyer:'Mireille E.',city:'Buea',items:[{id:22,qty:1}],date:-1},
 {no:'BZ-20417962',buyer:'Samuel N.',city:'Douala',items:[{id:20,qty:1},{id:11,qty:1}],date:-2},
 {no:'BZ-20416120',buyer:'Aïcha M.',city:'Kumba',items:[{id:23,qty:3}],date:-4}
];
const OSTEPS=['New','Packed','Shipped','Delivered'];
const pill=st=>`<span class="pill ${st==='Out of stock'?'bad':st==='Low stock'?'warn':st==='Delivered'?'ok':''}">${st}</span>`;
const stockState=p=>p.stock<=0?'Out of stock':p.stock<=5?'Low stock':'Active';
let draft={t:'',c:'computers',price:'',was:'',stock:10,cond:'New',fast:true,i:'router',img:'',desc:'',m:false};
function sellerOrders(){
  const real=S.orders.map(o=>({no:o.no,buyer:'You (test order)',city:document.getElementById('locTxt').textContent,items:o.items.filter(it=>(byId(it.id)||{}).s===SELLER),date:0,dateLbl:o.date}))
    .filter(o=>o.items.length);
  return real.concat(SAMPLE_ORDERS).map(o=>({...o,total:o.items.reduce((a,it)=>a+(byId(it.id)?.price||0)*it.qty,0),status:S.ostatus[o.no]||(o.date===0?'New':o.date<-3?'Delivered':o.date<-1?'Shipped':'New')}));
}
function seller(){
  const tabs=[['overview','Overview'],['products','Products'],['add','Add product'],['orders','Orders']];
  const ords=sellerOrders();const newCount=ords.filter(o=>o.status==='New').length;
  V.innerHTML=`<div class="seller-head">
    <div><div class="eyebrow-s">Seller Central</div><h1 style="font-size:28px">${SELLER}</h1>
    <div class="muted" style="font-size:13px">Verified seller · Molyko, Buea · <button class="linkbtn" id="viewShop">View your shop</button></div></div>
    <button class="btn" data-stab="add">Add a product</button></div>
  <div class="tabs" role="tablist">${tabs.map(([k,l])=>`<button role="tab" aria-selected="${S.stab===k}" data-stab="${k}">${l}${k==='orders'&&newCount?` <span class="badge">${newCount}</span>`:''}</button>`).join('')}</div>
  <div id="sbody"></div>`;
  V.querySelectorAll('[data-stab]').forEach(b=>b.onclick=()=>{S.stab=b.dataset.stab;seller()});
  V.querySelector('#viewShop').onclick=()=>{S.q='';qEl.value='';S.cat='';resetFilters();S.shop=true;go('results')};
  const B=V.querySelector('#sbody');const mine=P.filter(p=>p.s===SELLER);
  if(S.stab==='overview'){
    const real=ords.filter(o=>o.date===0).reduce((a,o)=>a+o.total,0);
    const days=SALES.map((v,i)=>i===SALES.length-1?v+Math.round(real/1000):v);
    const total=days.reduce((a,b)=>a+b,0)*1000,max=Math.max(...days);
    const low=mine.filter(p=>p.stock<=5);
    B.innerHTML=`<div class="kpis">
      <div class="panel kpi"><span>Sales, last 14 days</span><b class="num">${fmt(total)} <small>FCFA</small></b><em class="up">+18% vs previous 14 days</em></div>
      <div class="panel kpi"><span>Orders to ship</span><b class="num">${newCount}</b><em>${ords.length} orders in total</em></div>
      <div class="panel kpi"><span>Active listings</span><b class="num">${mine.filter(p=>p.stock>0).length}</b><em>${low.length} low on stock</em></div>
      <div class="panel kpi"><span>Seller rating</span><b class="num">4.8 <small>/ 5</small></b><em>98% positive feedback</em></div>
    </div>
    <div class="ov">
      <section class="panel" style="padding:18px;min-width:0">
        <div class="sec-h" style="margin-bottom:6px"><h2 style="font-size:18px">Daily sales</h2><span class="muted" style="font-size:12px">Thousand FCFA · sample data plus your test orders</span></div>
        <div class="chart" role="img" aria-label="Daily sales for the last 14 days, peak ${max} thousand FCFA">
          <div class="yax"><span>${max}</span><span>${Math.round(max/2)}</span><span>0</span></div>
          <div class="bars">${days.map((v,i)=>{const d=new Date();d.setDate(d.getDate()-(days.length-1-i));const last=i===days.length-1;
            return `<div class="bcol" title="${d.toLocaleDateString('en-GB',{day:'numeric',month:'short'})}: ${v} 000 FCFA"><i class="${last?'last':''}" style="height:${v/max*100}%">${last?`<b>${v}</b>`:''}</i><span>${d.toLocaleDateString('en-GB',{weekday:'narrow'})}</span></div>`}).join('')}</div>
        </div>
      </section>
      <section class="panel" style="padding:18px">
        <h2 style="font-size:18px;margin-bottom:10px">Needs attention</h2>
        ${newCount?`<div class="attn"><span>${pill('New')} ${newCount} order${newCount>1?'s':''} waiting to be packed</span><button class="linkbtn" data-stab2="orders">Open</button></div>`:''}
        ${low.map(p=>`<div class="attn"><span style="min-width:0">${pill(stockState(p))} ${esc(p.t.split(',')[0])} <span class="muted num">(${p.stock} left)</span></span><button class="btn sm alt" data-restock="${p.id}">Restock +10</button></div>`).join('')||'<p class="muted">All listings have enough stock.</p>'}
        <h2 style="font-size:18px;margin:18px 0 10px">Best sellers</h2>
        ${mine.slice().sort((a,b)=>b.n-a.n).slice(0,3).map(p=>`<div class="attn"><a href="#p-${p.id}" style="min-width:0">${esc(p.t.split(',')[0])}</a><span class="num muted">${fmt(p.n)} sold</span></div>`).join('')}
      </section>
    </div>`;
    B.querySelectorAll('[data-stab2]').forEach(b=>b.onclick=()=>{S.stab='orders';seller()});
    B.querySelectorAll('[data-restock]').forEach(b=>b.onclick=()=>{const p=byId(b.dataset.restock);p.stock+=10;setEdit(p);toast('Stock updated');seller()});
  }else if(S.stab==='products'){
    B.innerHTML=`<section class="panel" style="padding:6px 0">
      <div class="tscroll"><table class="ptable"><thead><tr><th>Product</th><th>Price (FCFA)</th><th>Stock</th><th>Express</th><th>Status</th><th></th></tr></thead><tbody>
      ${mine.map(p=>`<tr>
        <td><div style="display:flex;gap:10px;align-items:center;min-width:240px"><span style="width:44px;flex:none">${art(p)}</span><span><a href="#p-${p.id}" style="color:var(--ink);font-weight:600">${esc(p.t.split(',')[0])}</a><br><span class="muted" style="font-size:12px">${catName(p.c)}${p.isNew?' · added by you':''}</span></span></div></td>
        <td><input class="pin num" data-price="${p.id}" inputmode="numeric" value="${p.price}" aria-label="Price for ${esc(p.t)}"></td>
        <td><div class="qty"><button data-st="${p.id}" data-d="-1" aria-label="Less stock">−</button><span class="num">${p.stock}</span><button data-st="${p.id}" data-d="1" aria-label="More stock">+</button></div></td>
        <td><input type="checkbox" data-fast="${p.id}" ${p.fast?'checked':''} aria-label="Express delivery"></td>
        <td>${pill(stockState(p))}</td>
        <td style="white-space:nowrap"><a href="#p-${p.id}" style="font-size:13px">View</a>${p.isNew?` · <button class="linkbtn" data-rm="${p.id}">Remove</button>`:''}</td>
      </tr>`).join('')}
      </tbody></table></div></section>
      <p class="muted" style="font-size:12px">Price and stock changes show in the store right away.</p>`;
    B.querySelectorAll('[data-price]').forEach(i=>i.onchange=()=>{const p=byId(i.dataset.price);const v=+i.value.replace(/\D/g,'');if(v>0){p.price=v;if(p.was&&p.was<=v)p.was=0;setEdit(p);toast('Price updated')}seller()});
    B.querySelectorAll('[data-st]').forEach(b=>b.onclick=()=>{const p=byId(b.dataset.st);p.stock=Math.max(0,p.stock+ +b.dataset.d);setEdit(p);seller()});
    B.querySelectorAll('[data-fast]').forEach(c=>c.onchange=()=>{const p=byId(c.dataset.fast);p.fast=c.checked;setEdit(p);toast(c.checked?'Express delivery on':'Express delivery off')});
    B.querySelectorAll('[data-rm]').forEach(b=>b.onclick=()=>{const id=+b.dataset.rm;P.splice(P.findIndex(x=>x.id===id),1);S.mine=S.mine.filter(x=>x.id!==id);S.cart=S.cart.filter(l=>l.id!==id);save();updateCount();toast('Listing removed');seller()});
  }else if(S.stab==='add'){
    const icons=['phone','tablet','laptop','keyboard','printer','drive','router','server','cable','headphones','speaker','tv','gamepad','cctv','camera','solar','battery','plug','watch','bag','wrench'];
    B.innerHTML=`<div class="addp">
      <form class="panel form" id="npForm" style="padding:18px" novalidate>
        <label class="full">Product title<input id="npTitle" required minlength="8" placeholder="e.g. TP-Link 8-port Gigabit Switch, desktop" value="${esc(draft.t)}"></label>
        <label>Department<select id="npCat">${CATS.map(c=>`<option value="${c.id}" ${draft.c===c.id?'selected':''}>${c.name}</option>`).join('')}</select></label>
        <label>Condition<select id="npCond">${['New','Refurbished'].map(c=>`<option ${draft.cond===c?'selected':''}>${c}</option>`).join('')}</select></label>
        <label>Price (FCFA)<input id="npPrice" required inputmode="numeric" placeholder="25000" value="${draft.price}"></label>
        <label>List price before discount (optional)<input id="npWas" inputmode="numeric" placeholder="30000" value="${draft.was}"></label>
        <label>Units in stock<input id="npStock" type="number" min="0" max="9999" value="${draft.stock}"></label>
        <label style="justify-content:flex-end"><span style="display:flex;gap:8px;align-items:center;font-weight:500;padding:10px 0"><input type="checkbox" id="npFast" ${draft.fast?'checked':''}> Stock in Bazaro warehouse (Express)</span></label>
        <label class="full"><span style="display:flex;gap:8px;align-items:center;font-weight:500"><input type="checkbox" id="npMade" ${draft.m?'checked':''}> Made in Cameroon (produced or handmade locally). Local products are listed first.</span></label>
        <label class="full">Key feature (optional)<input id="npDesc" placeholder="e.g. Plug-and-play, no setup needed" value="${esc(draft.desc)}"></label>
        <div class="full"><div style="font-size:13px;font-weight:600;margin-bottom:6px">Photo</div>
          <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap"><label class="upload" for="npImg">${draft.img?'Change photo':'Upload a photo'}<input type="file" id="npImg" accept="image/*" hidden></label>
          ${draft.img?'<button type="button" class="linkbtn" id="npNoImg">Remove photo</button>':'<span class="muted" style="font-size:12px">or pick an icon below</span>'}</div>
          <div class="icopick" role="radiogroup" aria-label="Icon">${icons.map(k=>`<button type="button" role="radio" aria-checked="${draft.i===k}" data-ico="${k}" aria-label="${k}">${svg(k)}</button>`).join('')}</div>
        </div>
        <div class="full" id="npErr" style="color:var(--deal);font-size:13px" hidden></div>
        <div class="full" style="display:flex;gap:10px;flex-wrap:wrap"><button class="btn" type="submit">Publish listing</button><button class="btn ghost" type="button" id="npReset">Clear form</button></div>
      </form>
      <aside><div style="font-size:13px;font-weight:700;margin-bottom:8px" class="muted">Preview in the store</div><div id="npPrev"></div></aside>
    </div>`;
    const read=()=>{draft.t=npTitle.value;draft.c=npCat.value;draft.cond=npCond.value;draft.price=npPrice.value.replace(/\D/g,'');draft.was=npWas.value.replace(/\D/g,'');draft.stock=Math.max(0,+npStock.value||0);draft.fast=npFast.checked;draft.desc=npDesc.value;draft.m=npMade.checked};
    const toP=()=>({id:0,t:draft.t||'Your product title',b:SELLER,s:SELLER,c:draft.c,price:+draft.price||0,was:(+draft.was>+draft.price)?+draft.was:0,r:0,n:0,fast:draft.fast,i:draft.i,h:(CATS.find(c=>c.id===draft.c)||{}).h||200,opts:null,stock:draft.stock,img:draft.img,desc:draft.desc,cond:draft.cond,o:'CM',m:draft.m,isNew:true});
    const prev=()=>{read();B.querySelector('#npPrev').innerHTML=card(toP()).replace(/data-(add|wish)="0"/g,'disabled')};
    prev();
    B.querySelector('#npForm').addEventListener('input',prev);
    B.querySelectorAll('[data-ico]').forEach(b=>b.onclick=()=>{draft.i=b.dataset.ico;B.querySelectorAll('[data-ico]').forEach(x=>x.setAttribute('aria-checked',x===b));prev()});
    B.querySelector('#npImg').onchange=e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{const im=new Image();im.onload=()=>{const c=document.createElement('canvas');const sc=Math.min(1,500/Math.max(im.width,im.height));c.width=im.width*sc;c.height=im.height*sc;c.getContext('2d').drawImage(im,0,0,c.width,c.height);read();draft.img=c.toDataURL('image/jpeg',.8);seller()};im.src=r.result};r.readAsDataURL(f)};
    const ni=B.querySelector('#npNoImg');if(ni)ni.onclick=()=>{read();draft.img='';seller()};
    B.querySelector('#npReset').onclick=()=>{draft={t:'',c:'computers',price:'',was:'',stock:10,cond:'New',fast:true,i:'router',img:'',desc:'',m:false};seller()};
    B.querySelector('#npForm').onsubmit=e=>{e.preventDefault();read();const err=B.querySelector('#npErr');
      const msg=draft.t.trim().length<8?'Give the product a title of at least 8 characters, including brand and model.':!(+draft.price>0)?'Enter a price in FCFA, for example 25000.':'';
      if(msg){err.textContent=msg;err.hidden=false;return}
      const p=toP();p.id=1000+Math.floor(Math.random()*9e5);p.t=draft.t.trim();
      P.push(p);S.mine.push(p);save();
      draft={t:'',c:'computers',price:'',was:'',stock:10,cond:'New',fast:true,i:'router',img:'',desc:'',m:false};
      S.stab='products';seller();toast(`Listing published <a href="#p-${p.id}">View it</a>`)};
  }else{
    B.innerHTML=ords.length?ords.map(o=>`<section class="panel" style="margin-bottom:12px;padding:14px 18px">
      <div style="display:flex;gap:14px;flex-wrap:wrap;align-items:center;justify-content:space-between">
        <div><b class="num">${o.no}</b> <span class="muted" style="font-size:13px">· ${esc(o.buyer)}, ${esc(o.city)} · ${o.dateLbl||day(o.date)}</span></div>
        <div style="display:flex;gap:8px;align-items:center">${pill(o.status)}
          <label class="sr" for="os-${o.no}">Status</label><select id="os-${o.no}" data-os="${o.no}" class="pin" style="width:auto">${OSTEPS.map(s=>`<option ${s===o.status?'selected':''}>${s}</option>`).join('')}</select></div>
      </div>
      ${o.items.map(it=>{const p=byId(it.id);return p?`<div style="display:grid;grid-template-columns:44px minmax(0,1fr) auto;gap:12px;align-items:center;margin-top:10px"><span>${art(p)}</span><span style="min-width:0;font-size:14px">${esc(p.t.split(',')[0])} <span class="muted">× ${it.qty}</span></span><b class="num">${fmt(p.price*it.qty)}</b></div>`:''}).join('')}
      <div class="ostep">${OSTEPS.map((s,i)=>`<div class="${OSTEPS.indexOf(o.status)>=i?'on':''}">${s}</div>`).join('')}</div>
    </section>`).join(''):'<div class="panel empty"><h2 style="font-size:20px">No orders yet</h2><p class="muted">Orders for your products will appear here.</p></div>';
    B.querySelectorAll('[data-os]').forEach(s=>s.onchange=()=>{S.ostatus[s.dataset.os]=s.value;save();toast('Order marked '+s.value);seller()});
  }
}
function storesIndex(){
  const keys=Object.keys(C);
  V.innerHTML=`<div class="crumbs"><a href="#home">Home</a> › Country stores</div>
  <div class="sec-h"><h1 style="font-size:28px">Country stores</h1><span class="muted" style="font-size:13px">Each country has its own store with all ${CATS.length} sectors</span></div>
  <div class="stores">${keys.map(o=>{const items=P.filter(p=>p.o===o);const secs=CATS.filter(c=>items.some(p=>p.c===c.id)).length;
    return `<button class="storecard ${o==='CM'?'cm':''}" data-country="${o}">
      <div style="display:flex;gap:10px;align-items:center">${cc(o)}<b style="font-size:17px;font-family:var(--f-display)">${C[o]}</b>${o==='CM'?'<span class="origin cm" style="position:static;margin-left:auto">Home store</span>':''}</div>
      <p class="muted" style="margin:0;font-size:13px">${INTRO[o]}</p>
      <div class="mini-arts">${items.filter(p=>p.m).slice(0,4).map(p=>art(p)).join('')}</div>
      <div style="font-size:13px"><b class="num">${items.length}</b> products · <b>${secs}</b> of ${CATS.length} sectors · ${new Set(items.map(p=>p.s)).size} sellers</div>
    </button>`}).join('')}</div>`;
}
function store(code){
  const o=code.toUpperCase();if(!C[o]){home();return}
  const items=P.filter(p=>p.o===o);const dep=S.storeDept||'all';
  const sellers=new Set(items.map(p=>p.s)).size;
  const inDep=items.filter(p=>p.c===dep);
  const sorts={feat:cmFirst,low:(a,b)=>a.price-b.price,high:(a,b)=>b.price-a.price,rating:(a,b)=>b.r-a.r};
  V.innerHTML=`<div class="crumbs"><a href="#home">Home</a> › <a href="#stores">Country stores</a> › ${C[o]}${dep!=='all'?` › ${catName(dep)}`:''}</div>
  <section class="store-hero ${o==='CM'?'cm':''}">
    <div class="store-code">${o}</div>
    <div style="min-width:0">
      <div class="eyebrow">${o==='CM'?'Home store · listed first across Bazaro':'Country store'}</div>
      <h1>${C[o]}</h1>
      <p>${INTRO[o]}</p>
      <div class="store-stats"><span><b class="num">${items.length}</b> products</span><span><b class="num">${sellers}</b> sellers</span><span><b>${CATS.filter(c=>items.some(p=>p.c===c.id)).length}</b> sectors open</span><span>Arrives in <b>${o==='CM'?'1 to 4':'7 to 12'} days</b></span></div>
    </div>
    <div class="store-switch"><label for="storeSel">Switch store</label><select id="storeSel">${Object.keys(C).map(k=>`<option value="${k}" ${k===o?'selected':''}>${C[k]}</option>`).join('')}</select></div>
  </section>
  <nav class="sector-tabs" aria-label="Sectors in ${C[o]}">
    <button data-sector="all" aria-current="${dep==='all'}">All sectors</button>
    ${CATS.map(c=>{const n=items.filter(p=>p.c===c.id).length;return `<button data-sector="${c.id}" aria-current="${dep===c.id}" ${n?'':'class="empty-tab"'}>${c.name} <span class="num">${n}</span></button>`}).join('')}
  </nav>
  ${dep==='all'?`
    <div class="sectors">${CATS.map(c=>{const list=items.filter(p=>p.c===c.id).sort(cmFirst);
      return list.length?`<button class="sector" data-sector="${c.id}">
        <div class="sector-h"><b>${c.name}</b><span class="muted num">${list.length}</span></div>
        <div class="mini-arts">${list.slice(0,3).map(p=>art(p)).join('')}</div>
        <div class="muted" style="font-size:12px">From <b style="color:var(--ink)" class="num">${fmt(Math.min(...list.map(p=>p.price)))} FCFA</b> · ${new Set(list.map(p=>p.s)).size} seller${new Set(list.map(p=>p.s)).size>1?'s':''}</div>
      </button>`:`<div class="sector vacant"><div class="sector-h"><b>${c.name}</b><span class="muted">0</span></div>
        <p class="muted" style="font-size:13px;margin:0">No sellers in ${C[o]} have opened this sector yet.</p><a href="#seller" style="font-size:13px;font-weight:600">Open a shop here</a></div>`}).join('')}</div>
    <section class="sec"><div class="sec-h"><h2>Made in ${C[o]}</h2></div><div class="row">${items.filter(p=>p.m).sort(cmFirst).map(p=>card(p)).join('')}</div></section>
    <section class="sec"><div class="sec-h"><h2>Popular in ${C[o]}</h2></div><div class="grid">${items.slice().sort((a,b)=>b.n-a.n).slice(0,10).map(p=>card(p)).join('')}</div></section>`
  :`<div class="panel res-top"><div><b class="num">${inDep.length}</b> products in <b>${catName(dep)}</b> from ${C[o]}</div>
      <div style="display:flex;gap:8px;align-items:center"><label for="ssort" class="muted" style="font-size:13px">Sort by</label><select id="ssort">${[['feat','Featured'],['low','Price: low to high'],['high','Price: high to low'],['rating','Avg. customer review']].map(([k,l])=>`<option value="${k}" ${S.storeSort===k?'selected':''}>${l}</option>`).join('')}</select></div></div>
    ${inDep.length?`<div class="grid">${inDep.sort(sorts[S.storeSort]||cmFirst).map(p=>card(p)).join('')}</div>`:
      `<div class="panel empty"><h2 style="font-size:20px">No ${catName(dep)} sellers in ${C[o]} yet</h2><p class="muted">Be the first to open this sector.</p><a class="btn" href="#seller" style="text-decoration:none">Open a shop</a></div>`}
    <section class="sec"><div class="sec-h"><h2>${catName(dep)} in other countries</h2></div><div class="row">${P.filter(p=>p.c===dep&&p.o!==o).sort(cmFirst).slice(0,10).map(p=>card(p)).join('')}</div></section>`}`;
  V.querySelectorAll('[data-sector]').forEach(b=>b.onclick=()=>{S.storeDept=b.dataset.sector;store(o);V.querySelector('.sector-tabs').scrollIntoView({block:'nearest'})});
  V.querySelector('#storeSel').onchange=e=>{S.storeDept='all';go('store-'+e.target.value.toLowerCase())};
  const ss=V.querySelector('#ssort');if(ss)ss.onchange=e=>{S.storeSort=e.target.value;store(o)};
  const t=V.querySelector('[data-sector][aria-current="true"]');if(t)t.scrollIntoView({block:'nearest',inline:'center'});
}

function render(){
  clearInterval(heroTimer);
  const h=location.hash.slice(1)||'home';
  if(h.startsWith('p-'))product(h.slice(2));
  else if(h.startsWith('store-'))store(h.slice(6));
  else ({stores:storesIndex,results,cart,checkout,done,orders,wishlist,seller,sell:seller}[h]||home)();
  window.scrollTo(0,0);
}

/* global delegation */
document.addEventListener('click',e=>{
  const t=e.target.closest('[data-add],[data-wish],[data-cat],[data-nav],[data-go],[data-hero],[data-clear-recent],[data-country],[data-setdept]');if(!t)return;
  if(t.dataset.setdept){S.storeDept=t.dataset.setdept;return}
  if(t.dataset.add){addToCart(+t.dataset.add)}
  else if(t.dataset.wish){e.preventDefault();const id=+t.dataset.wish;S.wish.has(id)?S.wish.delete(id):S.wish.add(id);save();
    document.querySelectorAll(`[data-wish="${id}"]`).forEach(b=>{b.classList.toggle('on',S.wish.has(id));b.setAttribute('aria-pressed',S.wish.has(id));if(b.classList.contains('ghost'))b.textContent=S.wish.has(id)?'Saved to your list':'Add to list'});
    toast(S.wish.has(id)?'Saved to your list <a href="#wishlist">View list</a>':'Removed from your list')}
  else if(t.dataset.cat){S.q='';qEl.value='';S.cat=t.dataset.cat;catSel.value=S.cat;resetFilters();go('results')}
  else if(t.dataset.go){sug.hidden=true;qEl.value='';go('p-'+t.dataset.go)}
  else if(t.dataset.hero){applyNav(t.dataset.hero)}
  else if(t.dataset.country){S.storeDept='all';go('store-'+t.dataset.country.toLowerCase())}
  else if('clearRecent' in t.dataset){S.recent=[];save();home()}
  else applyNav(t.dataset.nav);
});
function applyNav(n){S.q='';qEl.value='';S.cat='';catSel.value='';S.sort='feat';resetFilters();const f=S.f;
  if(n==='sell')return go('seller');
  if(n==='stores')return go('stores');
  if(n==='deals'){f.deal=true;S.sort='deal'}else if(n==='express')f.fast=true;
  else if(n==='cm'){f.countries.add('CM');f.made=true}
  else if(n==='africa'){f.made=true;Object.keys(C).filter(o=>o!=='CM').forEach(o=>f.countries.add(o))}
  else if(n.startsWith('o:'))f.countries.add(n.slice(2));
  go('results')}
addEventListener('hashchange',render);
document.getElementById('toTop').onclick=()=>scrollTo({top:0,behavior:'smooth'});
updateCount();render();
})();
