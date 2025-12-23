const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const dict = {
  sr: {
    subtitle: "Kafić • Mladenovac",
    nav_menu: "Meni",
    nav_music: "Svirka",
    nav_gallery: "Galerija",
    nav_contact: "Kontakt",

    pill: "Subotom: svirka uživo",
    hero_title: "Počnite dan uz dobru kafu i upotpunite ga pivom.",
    hero_text: "Pabić je mesto za kafu, pića i dobro društvo — a svake subote vas čeka nova svirka (uživo, različiti bendovi).",

    cta_menu: "Pogledaj meni",
    cta_reserve: "Rezervacije",

    hours_label: "Radno vreme",
    hours_value: "Pon–Ned: 07:00 – 01:00",
    address_label: "Adresa",

    quick_contact: "Brzi kontakt",
    open_maps: "Otvori mapu",

    highlight_title: "Izdvajamo",
    h1: "Topli i hladni napici",
    h2: "Cene okvirno: 500–1000 RSD",
    h3: "Subotom svirka uživo (različiti bendovi)",

    menu_title: "Meni",
    menu_sub: "Pića (toplo/hladno). Cene su okvirno 500–1000 RSD.",
    menu_hot: "Topli napici",
    menu_cold: "Hladni napici",
    menu_beer: "Pivo & ostalo",
    menu_hint: "* Kasnije možete upisati tačne cene.",

    item_espresso: "Espresso",
    item_cap: "Cappuccino",
    item_latte: "Latte",
    item_tea: "Čaj",
    item_lemonade: "Limunada",
    item_icedtea: "Ledeni čaj",
    item_juices: "Sokovi",
    item_water: "Voda",
    item_beer: "Pivo (točeno / flaširano)",
    item_cocktail: "Koktel",
    item_soft: "Bezalkoholna pića",

    music_title: "Subotom — svirka uživo",
    music_sub: "Svake subote organizujemo živu muziku, i svaki put nastupa drugačiji bend. Za stolove i proslave — javite se putem Instagrama ili telefona.",

    events_title: "Proslave & događaji",
    ev1: "Rođendani",
    ev2: "Manje privatne proslave",
    ev3: "Rezervacija stolova za svirku",

    reserve_title: "Rezervacije",
    reserve_sub: "Najbrže: pošaljite poruku na Instagram ili pozovite.",
    msg_insta: "Poruka na Instagram",
    call_now: "Pozovi sada",
    reserve_hint: "* Rezervacije za događaje: Instagram ili telefon.",

    gallery_title: "Galerija",
    gallery_sub: "Atmosfera iz Pabića.",

    contact_title: "Kontakt",
    contact_sub: "Dođite na kafu u Mladenovac — vidimo se!",
    details_title: "Detalji",
    k_address: "Adresa",
    k_hours: "Radno vreme",
    k_phone: "Telefon",
    hours_full: "Monday–Sunday: 07:00 – 01:00",
    open_gmaps: "Otvori u Google Maps",

    footer_sub: "Kralja Petra Prvog 136 • 07:00–01:00"
  },

  en: {
    subtitle: "Café • Mladenovac",
    nav_menu: "Menu",
    nav_music: "Live music",
    nav_gallery: "Gallery",
    nav_contact: "Contact",

    pill: "Saturday: live music",
    hero_title: "Start your day with great coffee — and finish it with a beer.",
    hero_text: "Pabić is the place for coffee, drinks and good company — and every Saturday we host a live gig with a different band.",

    cta_menu: "View menu",
    cta_reserve: "Reservations",

    hours_label: "Hours",
    hours_value: "Mon–Sun: 07:00 – 01:00",
    address_label: "Address",

    quick_contact: "Quick contact",
    open_maps: "Open map",

    highlight_title: "Highlights",
    h1: "Hot & cold drinks",
    h2: "Price range: 500–1000 RSD",
    h3: "Live music every Saturday",

    menu_title: "Menu",
    menu_sub: "Drinks (hot/cold). Typical prices: 500–1000 RSD.",
    menu_hot: "Hot drinks",
    menu_cold: "Cold drinks",
    menu_beer: "Beer & more",
    menu_hint: "* Add exact prices later.",

    item_espresso: "Espresso",
    item_cap: "Cappuccino",
    item_latte: "Latte",
    item_tea: "Tea",
    item_lemonade: "Lemonade",
    item_icedtea: "Iced tea",
    item_juices: "Juices",
    item_water: "Water",
    item_beer: "Beer (draft / bottled)",
    item_cocktail: "Cocktail",
    item_soft: "Soft drinks",

    music_title: "Saturday — live music",
    music_sub: "Every Saturday we host live music, with a different band each time. For tables and celebrations — DM us on Instagram or call us.",

    events_title: "Events & celebrations",
    ev1: "Birthdays",
    ev2: "Small private celebrations",
    ev3: "Table reservations for gigs",

    reserve_title: "Reservations",
    reserve_sub: "Fastest way: Instagram message or phone call.",
    msg_insta: "Message on Instagram",
    call_now: "Call now",
    reserve_hint: "* Reservations for events: Instagram or phone.",

    gallery_title: "Gallery",
    gallery_sub: "A glimpse of the vibe at Pabić.",

    contact_title: "Contact",
    contact_sub: "Come by for a coffee in Mladenovac — see you soon!",
    details_title: "Details",
    k_address: "Address",
    k_hours: "Hours",
    k_phone: "Phone",
    hours_full: "Monday–Sunday: 07:00 – 01:00",
    open_gmaps: "Open in Google Maps",

    footer_sub: "Kralja Petra Prvog 136 • 07:00–01:00"
  }
};

function setLang(lang){
  document.documentElement.lang = lang === "en" ? "en" : "sr";
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    const val = dict[lang]?.[key];
    if (val) el.textContent = val;
  });

  document.querySelectorAll(".lang-btn").forEach(b=>{
    b.classList.toggle("active", b.dataset.lang === lang);
  });

  localStorage.setItem("pabic_lang", lang);
}

document.addEventListener("click", (e)=>{
  const btn = e.target.closest(".lang-btn");
  if(!btn) return;
  setLang(btn.dataset.lang);
});

setLang(localStorage.getItem("pabic_lang") || "sr");
