// Pabić website script
(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const hamb = document.getElementById('hamb');
  const mobile = document.getElementById('mobile');

  const closeMobile = () => {
    if (!mobile) return;
    mobile.classList.remove('show');
    mobile.setAttribute('aria-hidden', 'true');
    if (hamb) hamb.setAttribute('aria-expanded', 'false');
  };

  if (hamb && mobile) {
    hamb.addEventListener('click', () => {
      const open = mobile.classList.toggle('show');
      mobile.setAttribute('aria-hidden', open ? 'false' : 'true');
      hamb.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    mobile.addEventListener('click', (e) => {
      const t = e.target;
      if (t && t.tagName === 'A') closeMobile();
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMobile();
    });
  }
})();

/**
 * i18n (SR/EN) — design stays the same; only text changes.
 * - Use data-i18n="key" for textContent replacements
 * - Use data-i18n-attr="attrName" for attribute translation (aria-label, title, alt, placeholder...)
 */
const dict = {
  sr: {
    meta_title: "Pabić — kafić u Mladenovcu",
    meta_desc: "Počnite dan uz dobru kafu i upotpunite ga pivom. Subotom svirka uživo.",

    aria_brand_home: "Pabić početna",
    aria_call: "Pozovi Pabić",
    aria_lang_switch: "Izbor jezika",
    aria_open_menu: "Otvori meni",
    aria_hero_bg: "Atmosfera u Pabiću",

    nav_home: "Početna",
    nav_menu: "Meni",
    nav_gallery: "Galerija",
    nav_reviews: "Utisci",
    nav_location: "Lokacija",
    nav_contact: "Kontakt",

    btn_call: "Pozovi",
    mobile_call: "Pozovi: 061 6217070",

    rating_title: "Ocena",
    rating_count: "(76 utisaka)",

    hero_title_1: "Počnite dan uz dobru kafu i upotpunite ga",
    hero_title_gold: "pivom",
    hero_sub: "Kafić danju, pub noću. Opuštena atmosfera, super usluga i najbolja bašta u Mladenovcu.",
    hero_note: "Subotom: svirka uživo (svake nedelje druga ekipa).",
    btn_location: "Prikaži lokaciju",
    open_hours: "Otvoreno svaki dan 07:00–01:00",
    alt_hero_card: "Enterijer Pabić",
    hero_card_title: "Topla atmosfera",
    hero_card_text: "Idealno za jutarnju kafu ili večernje piće.",
    scroll: "Skroluj",

    q_hours_title: "Radno vreme",
    q_hours_value: "07:00–01:00",
    q_hours_note: "Svaki dan",

    q_address_title: "Adresa",
    q_address_line1: "Kralja Petra Prvog 136",
    q_address_line2: "Mladenovac",

    q_garden_title: "Bašta",
    q_garden_line1: "Bašta na otvorenom",
    q_garden_line2: "Uživajte napolju",

    q_spend_title: "Prosečna potrošnja",
    q_spend_value: "500–1.000 RSD",
    q_spend_note: "Po osobi",

    why_title: "Zašto Pabić?",
    why_sub: "Opuštena atmosfera, super usluga i najbolje piće u gradu",

    feat1_title: "Opuštena atmosfera",
    feat1_text: "Osećaj kao kod kuće, bilo da dolazite na jutarnju kafu ili večernje piće.",
    feat2_title: "Super usluga",
    feat2_text: "Ljubazno osoblje koje uvek ima osmeh i preporuku za vas.",
    feat3_title: "Prelepa bašta",
    feat3_text: "Odmorite u našoj prostranoj bašti i uživajte u lepom ambijentu.",
    feat4_title: "Kafa & piće",
    feat4_text: "Širok izbor vrhunske kafe i pića za svaki ukus i svaku priliku.",

    menu_title: "Meni",
    menu_sub: "Topli i hladni napici — cenovni rang 500–1.000 RSD",
    menu_instagram: "Pogledaj na Instagramu",

    cat_coffee: "Kafa",
    cat_soft: "Bezalkoholno",
    cat_beer: "Pivo",
    cat_spirits: "Žestina & kokteli",

    item_espresso: "Espresso",
    item_macchiato: "Macchiato",
    item_cappuccino: "Cappuccino",
    item_latte: "Latte",
    item_soda: "Gazirani sokovi",
    item_lemonade: "Limunade",
    item_fresh: "Sveže ceđeni sokovi",
    item_water: "Voda",
    item_local_beer: "Domaće pivo",
    item_imported_beer: "Uvozno pivo",
    item_draft_beer: "Točeno",
    item_special_beer: "Specijalno",
    item_whiskey: "Whiskey",
    item_gin: "Gin",
    item_vodka: "Vodka",
    item_cocktails: "Kokteli",

    note_title: "Korisne informacije",
    note_row1: "Oko 22:00 zna biti malo gužve",
    note_row2: "Prosečna poseta: 30 min – 2.5 h",

    gallery_title: "Atmosfera danju i noću",
    gallery_sub: "Od jutarnje kafe do večernjeg pića — uživajte u toploj atmosferi našeg kafića",
    cap_garden: "Bašta",
    cap_interior: "Enterijer",
    cap_coffee: "Kafa",
    cap_sports: "Sportske večeri",
    cap_modern: "Moderan enterijer",
    gallery_full_title: "Pogledaj punu galeriju",
    gallery_full_sub: "Na Instagram profilu",
    alt_g1: "Bašta",
    alt_g2: "Enterijer",
    alt_g3: "Kafa",
    alt_g4: "Sportske večeri",
    alt_g5: "Moderan enterijer",

    reviews_title: "Utisci",
    reviews_sub: "Šta gosti kažu o Pabiću",
    quote_text: "Opšteno mesto, super usluga!",
    review_source_guest: "Gost",
    review1: "“Odlična kafa i prijatna bašta. Vraćamo se opet!”",
    review2: "“Subotnje svirke su top — atmosfera je uvek dobra.”",
    review3: "“Ljubazno osoblje i super izbor pića.”",

    visit_title: "Posetite nas",
    visit_sub: "Nalazimo se u centru Mladenovca. Dođite i uživajte!",
    map_title: "Pabić mapa",
    btn_directions: "Navigacija",

    info_address_title: "Adresa",
    info_address_line1: "Kralja Petra Prvog 136",
    info_address_line2: "Mladenovac, Srbija",
    info_hours_title: "Radno vreme",
    info_hours_line1: "07:00 – 01:00",
    info_hours_line2: "Svaki dan (Pon–Ned)",
    info_phone_title: "Telefon",
    info_res_title: "Rezervacije",
    info_res_text_1: "Rođendani i proslave — kontaktirajte nas preko",
    instagram: "Instagrama",
    info_res_text_2: "ili telefona.",

    footer_about: "Kafić danju, pub noću. Mesto za kafu, priču i dobro pivo u srcu Mladenovca.",
    footer_links_title: "Brzi linkovi",
    footer_contact_title: "Kontakt",
    footer_follow_title: "Pratite nas",
    footer_follow_text: "Podelite svoja iskustva i obeležite nas u svojim objavama!",
    footer_rights: "Sva prava zadržana.",
nav_events: "Svirka",

  
  },

  en: {
    meta_title: "Pabić — Café & Bar in Mladenovac",
    meta_desc: "Start your day with great coffee and finish it with a good beer. Live music on Saturdays.",

    aria_brand_home: "Pabić home",
    aria_call: "Call Pabić",
    aria_lang_switch: "Language switch",
    aria_open_menu: "Open menu",
    aria_hero_bg: "Pabić atmosphere",

    nav_home: "Home",
    nav_menu: "Menu",
    nav_gallery: "Gallery",
    nav_reviews: "Reviews",
    nav_location: "Location",
    nav_contact: "Contact",

    btn_call: "Call",
    mobile_call: "Call: 061 6217070",

    rating_title: "Rating",
    rating_count: "(76 reviews)",

    hero_title_1: "Start your day with great coffee and finish it with",
    hero_title_gold: "beer",
    hero_sub: "Cafe by day, pub by night. Relaxed vibe, great service, and one of the best gardens in Mladenovac.",
    hero_note: "Saturday: live music (a different band every week).",
    btn_location: "Show location",
    open_hours: "Open daily 07:00–01:00",
    alt_hero_card: "Pabić interior",
    hero_card_title: "Warm atmosphere",
    hero_card_text: "Perfect for a morning coffee or an evening drink.",
    scroll: "Scroll",

    q_hours_title: "Hours",
    q_hours_value: "07:00–01:00",
    q_hours_note: "Every day",

    q_address_title: "Address",
    q_address_line1: "Kralja Petra Prvog 136",
    q_address_line2: "Mladenovac",

    q_garden_title: "Garden",
    q_garden_line1: "Outdoor seating",
    q_garden_line2: "Enjoy outside",

    q_spend_title: "Average spend",
    q_spend_value: "500–1,000 RSD",
    q_spend_note: "Per person",

    why_title: "Why Pabić?",
    why_sub: "Relaxed vibe, great service, and the best drinks in town",

    feat1_title: "Relaxed atmosphere",
    feat1_text: "Feel at home — whether you come for a morning coffee or an evening drink.",
    feat2_title: "Great service",
    feat2_text: "Friendly staff always ready with a smile and a recommendation.",
    feat3_title: "Beautiful garden",
    feat3_text: "Unwind in our spacious garden and enjoy the ambiance.",
    feat4_title: "Coffee & drinks",
    feat4_text: "A wide selection of premium coffee and drinks for every taste and occasion.",

    menu_title: "Menu",
    menu_sub: "Hot and cold drinks — price range 500–1,000 RSD",
    menu_instagram: "View on Instagram",

    cat_coffee: "Coffee",
    cat_soft: "Soft drinks",
    cat_beer: "Beer",
    cat_spirits: "Spirits & cocktails",

    item_espresso: "Espresso",
    item_macchiato: "Macchiato",
    item_cappuccino: "Cappuccino",
    item_latte: "Latte",
    item_soda: "Carbonated drinks",
    item_lemonade: "Lemonades",
    item_fresh: "Fresh juices",
    item_water: "Water",
    item_local_beer: "Local beer",
    item_imported_beer: "Imported beer",
    item_draft_beer: "Draft",
    item_special_beer: "Special",
    item_whiskey: "Whiskey",
    item_gin: "Gin",
    item_vodka: "Vodka",
    item_cocktails: "Cocktails",

    note_title: "Good to know",
    note_row1: "It can get a bit busy around 22:00",
    note_row2: "Typical visit: 30 min – 2.5 h",

    gallery_title: "Day & night atmosphere",
    gallery_sub: "From morning coffee to evening drinks — enjoy the warm vibe of our café",
    cap_garden: "Garden",
    cap_interior: "Interior",
    cap_coffee: "Coffee",
    cap_sports: "Sports nights",
    cap_modern: "Modern interior",
    gallery_full_title: "View the full gallery",
    gallery_full_sub: "On Instagram",
    alt_g1: "Garden",
    alt_g2: "Interior",
    alt_g3: "Coffee",
    alt_g4: "Sports nights",
    alt_g5: "Modern interior",

    reviews_title: "Reviews",
    reviews_sub: "What guests say about Pabić",
    quote_text: "Great place, great service!",
    review_source_guest: "Guest",
    review1: "“Excellent coffee and a pleasant garden. We’ll be back!”",
    review2: "“Saturday live music is awesome — the atmosphere is always great.”",
    review3: "“Friendly staff and a great selection of drinks.”",

    visit_title: "Visit us",
    visit_sub: "We’re in the center of Mladenovac. Come by and enjoy!",
    map_title: "Pabić map",
    btn_directions: "Directions",

    info_address_title: "Address",
    info_address_line1: "Kralja Petra Prvog 136",
    info_address_line2: "Mladenovac, Serbia",
    info_hours_title: "Hours",
    info_hours_line1: "07:00 – 01:00",
    info_hours_line2: "Daily (Mon–Sun)",
    info_phone_title: "Phone",
    info_res_title: "Reservations",
    info_res_text_1: "Birthdays and celebrations — contact us via",
    instagram: "Instagram",
    info_res_text_2: "or by phone.",

    footer_about: "Cafe by day, pub by night. A place for coffee, good talks, and great beer in the heart of Mladenovac.",
    footer_links_title: "Quick links",
    footer_contact_title: "Contact",
    footer_follow_title: "Follow us",
    footer_follow_text: "Share your experience and tag us in your posts!",
    footer_rights: "All rights reserved.",
nav_events: "Live music",
  
  }
};

function setLang(lang){
  const chosen = (lang === "en") ? "en" : "sr";
  document.documentElement.lang = chosen;

  // Text + attribute translations
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = dict?.[chosen]?.[key];
    if(!val) return;

    const attr = el.getAttribute("data-i18n-attr");
    if(attr){
      el.setAttribute(attr, val);
    }else{
      el.textContent = val;
    }
  });

  // Update meta / OG for sharing
  if(dict?.[chosen]?.meta_title) document.title = dict[chosen].meta_title;

  const desc = document.querySelector('meta[name="description"]');
  if(desc && dict?.[chosen]?.meta_desc) desc.setAttribute("content", dict[chosen].meta_desc);

  const ogt = document.querySelector('meta[property="og:title"]');
  if(ogt && dict?.[chosen]?.meta_title) ogt.setAttribute("content", dict[chosen].meta_title);

  const ogd = document.querySelector('meta[property="og:description"]');
  if(ogd && dict?.[chosen]?.meta_desc) ogd.setAttribute("content", dict[chosen].meta_desc);

  // Toggle active button
  document.querySelectorAll(".lang-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.lang === chosen);
  });

  localStorage.setItem("lang", chosen);
}

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".lang-btn");
  if(!btn) return;
  setLang(btn.dataset.lang);
});

// Init
setLang(localStorage.getItem("lang") || "sr");
(() => {
  const btn = document.getElementById("themeBtn");
  if(!btn) return;

  const apply = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    btn.textContent = (theme === "dark") ? "☀️" : "🌙";
    localStorage.setItem("pabic_theme", theme);
  };

  const saved = localStorage.getItem("pabic_theme");
  apply(saved || "light");

  btn.addEventListener("click", () => {
    const cur = document.documentElement.getAttribute("data-theme") || "light";
    apply(cur === "dark" ? "light" : "dark");
  });
})();
const gigData = {
  band: "DUO CAP",
  day: "Subota",
  time: "oko 21:00"
};
(async () => {
  const bandEl = document.getElementById("bandName");
  const dayEl  = document.getElementById("gigDay");
  const timeEl = document.getElementById("gigTime");
  const noteEl = document.getElementById("gigNote");
  if (!bandEl && !dayEl && !timeEl && !noteEl) return;

  const lang = (localStorage.getItem("lang") || document.documentElement.lang || "sr").startsWith("en")
    ? "en" : "sr";

  try {
    const res = await fetch("events.json", { cache: "no-store" });
    if (!res.ok) throw new Error("events.json not found");
    const data = await res.json();
    const next = data.next;

    if (bandEl) bandEl.textContent = (lang === "en" ? next.band_en : next.band_sr) || "TBA";
    if (dayEl)  dayEl.textContent  = (lang === "en" ? next.day_en  : next.day_sr)  || "Subota";
    if (timeEl) timeEl.textContent = next.time || "21:30";
    if (noteEl) noteEl.textContent = (lang === "en" ? next.note_en : next.note_sr) || "";
  } catch (e) {
    // إذا ما لقى الملف، خلي الموجود بالـ HTML متل ما هو
  }
})();
