
const i18n = {
  sr: {
    brand_sub: "Kafić • Mladenovac",
    nav_home: "Početna",
    nav_menu: "Meni",
    nav_live: "Svirka",
    nav_gallery: "Galerija",
    nav_contact: "Kontakt",
    call: "Pozovi",
    pill_sat: "Subotom: svirka uživo 🎶",
    hero_title: "Počnite dan uz dobru kafu i upotpunite ga pivom.",
    hero_sub: "Pabić je mesto za kafu, pića i dobro društvo — a svake subote vas čeka nova svirka (uživo, različiti bendovi).",
    btn_menu: "Pogledaj meni",
    btn_res: "Rezervacije",
    hours_lbl: "Radno vreme",
    hours_val: "Pon–Ned: 07:00 – 01:00",
    hours_val2: "Svaki dan: 07:00 – 01:00",
    addr_lbl: "Adresa",
    quick_contact: "Brzi kontakt",
    open_map: "Otvori mapu",
    highlights: "Izdvajamo",
    hl_1: "Kafa i pića (toplo/hladno)",
    hl_2: "Cene okvirno: 500–1000 RSD",
    hl_3: "Subotom svirka uživo (različiti bendovi)",
    menu_title: "Meni",
    menu_sub: "U ponudi su topli i hladni napici. Cene su okvirno 500–1000 RSD.",
    menu_hot: "Topli napici",
    menu_hot_sub: "Espresso, produžena, cappuccino, čajevi…",
    menu_cold: "Hladni napici",
    menu_cold_sub: "Sokovi, voda, ledena kafa, energetska pića…",
    menu_beer: "Pivo & ostalo",
    menu_beer_sub: "Domaće i strano pivo, kokteli (po ponudi)…",
    live_title: "Svirka svake subote",
    live_sub: "Svake subote druga ekipa — pratite Instagram za najave.",
    book_title: "Rezervacije za rođendane i događaje",
    book_sub: "Pišite nam na Instagram ili pozovite. Rado pomažemo oko organizacije.",
    btn_instagram: "Instagram",
    btn_call: "Pozovi",
    gallery_title: "Galerija",
    gallery_sub: "Atmosfera danju i noću — kafa, društvo i dobra muzika.",
    g1: "Prijatno ćaskanje",
    g2: "Moderan enterijer",
    g3: "Jutarnja kafa",
    g4: "Bašta",
    g5: "Noćna atmosfera",
    gallery_btn: "Pogledaj punu galeriju",
    visit_title: "Posetite nas",
    visit_sub: "Nalazimo se u Mladenovcu. Dođite i uživajte!",
    nav_btn: "Navigacija",
    phone_lbl: "Telefon",
    useful: "Korisne informacije",
    use_1: "• Oko 22:00 zna biti malo gužve",
    use_2: "• Prosečna poseta: 30 min – 2.5 h",
    foot_desc: "Kafić danju, pub noću. Mesto za kafu, priču i dobro pivo u srcu Mladenovca.",
    foot_links: "Brzi linkovi",
    foot_contact: "Kontakt",
    foot_follow: "Pratite nas",
    foot_social: "Podelite svoja iskustva i obeležite nas u svojim objavama!",
    rights: "Sva prava zadržana."
  },
  en: {
    brand_sub: "Cafe • Mladenovac",
    nav_home: "Home",
    nav_menu: "Menu",
    nav_live: "Live music",
    nav_gallery: "Gallery",
    nav_contact: "Contact",
    call: "Call",
    pill_sat: "Saturday: live music 🎶",
    hero_title: "Start your day with great coffee and finish it with a good beer.",
    hero_sub: "Pabić is the place for coffee, drinks and good company — and every Saturday there’s a new live band.",
    btn_menu: "View menu",
    btn_res: "Reservations",
    hours_lbl: "Hours",
    hours_val: "Mon–Sun: 07:00 – 01:00",
    hours_val2: "Daily: 07:00 – 01:00",
    addr_lbl: "Address",
    quick_contact: "Quick contact",
    open_map: "Open map",
    highlights: "Highlights",
    hl_1: "Coffee & drinks (hot/cold)",
    hl_2: "Typical prices: 500–1000 RSD",
    hl_3: "Saturday live music (different bands)",
    menu_title: "Menu",
    menu_sub: "Hot and cold drinks available. Prices typically 500–1000 RSD.",
    menu_hot: "Hot drinks",
    menu_hot_sub: "Espresso, lungo, cappuccino, teas…",
    menu_cold: "Cold drinks",
    menu_cold_sub: "Juices, water, iced coffee, energy drinks…",
    menu_beer: "Beer & more",
    menu_beer_sub: "Local & imported beer, cocktails (depending on offer)…",
    live_title: "Live music every Saturday",
    live_sub: "A different lineup each week — follow Instagram for announcements.",
    book_title: "Bookings for birthdays & events",
    book_sub: "Message us on Instagram or call. We’ll gladly help you organize.",
    btn_instagram: "Instagram",
    btn_call: "Call",
    gallery_title: "Gallery",
    gallery_sub: "Day & night vibes — coffee, friends and good music.",
    g1: "Good chats",
    g2: "Modern interior",
    g3: "Morning coffee",
    g4: "Outdoor seating",
    g5: "Night atmosphere",
    gallery_btn: "See full gallery",
    visit_title: "Visit us",
    visit_sub: "We’re in Mladenovac. Come and enjoy!",
    nav_btn: "Directions",
    phone_lbl: "Phone",
    useful: "Useful info",
    use_1: "• It can get a bit busy around 22:00",
    use_2: "• Typical visit: 30 min – 2.5 h",
    foot_desc: "Cafe by day, pub by night. Coffee, stories and great beer in the heart of Mladenovac.",
    foot_links: "Quick links",
    foot_contact: "Contact",
    foot_follow: "Follow us",
    foot_social: "Share your experience and tag us in your posts!",
    rights: "All rights reserved."
  }
};

function setLang(lang){
  const dict = i18n[lang] || i18n.sr;
  document.documentElement.lang = lang === "en" ? "en" : "sr";

  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll(".lang-btn").forEach(btn=>{
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  localStorage.setItem("lang", lang);
}

document.addEventListener("click", (e)=>{
  const btn = e.target.closest(".lang-btn");
  if(!btn) return;
  setLang(btn.dataset.lang);
});

document.getElementById("year").textContent = new Date().getFullYear();
setLang(localStorage.getItem("lang") || "sr");
