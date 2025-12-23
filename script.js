const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const dict = {
  sr: {
    subtitle: "Kafić • Mladenovac",
    "nav.menu": "Meni",
    "nav.music": "Svirka",
    "nav.gallery": "Galerija",
    "nav.contact": "Kontakt",

    pill: "Subotom: svirka uživo 🎶",
    heroTitle: "Počnite dan uz dobru kafu i upotpunite ga pivom.",
    heroText: "Pabić je mesto za kafu, pića i dobro društvo — a svake subote vas čeka nova svirka (uživo, različiti bendovi).",

    ctaMenu: "Pogledaj meni",
    ctaReserve: "Rezervacije",

    hoursLabel: "Radno vreme",
    hoursValue: "Pon–Ned: 07:00 – 01:00",
    addressLabel: "Adresa",

    quickContact: "Brzi kontakt",
    openMap: "Otvori mapu",

    highlights: "Izdvajamo",
    h1: "Kafa i pića (toplo/hladno)",
    h2: "Cene okvirno: 500–1000 RSD",
    h3: "Subotom svirka uživo (različiti bendovi)",

    menuTitle: "Meni",
    menuNote: "U ponudi su topli i hladni napici. Cene su okvirno 500–1000 RSD.",
    menuHot: "Topli napici",
    menuCold: "Hladni napici",
    menuBeer: "Pivo & ostalo",
    menuHint: "* Kasnije možete upisati tačne cene.",

    "sample.espresso": "Espresso",
    "sample.cap": "Cappuccino",
    "sample.latte": "Latte",
    "sample.tea": "Čaj",
    "sample.lemonade": "Limunada",
    "sample.icedTea": "Ledeni čaj",
    "sample.juice": "Sokovi",
    "sample.water": "Voda",
    "sample.beer": "Pivo (točeno / flaširano)",
    "sample.cocktail": "Koktel",
    "sample.soft": "Bezalkoholna pića",

    musicTitle: "Subotom — svirka uživo",
    musicText: "Svake subote organizujemo živu muziku, i svaki put nastupa drugačiji bend. Za stolove i proslave — javite se putem Instagrama ili telefona.",

    eventsTitle: "Proslave & događaji",
    ev1: "Rođendani",
    ev2: "Manje privatne proslave",
    ev3: "Rezervacija stolova za svirku",

    reserveTitle: "Rezervacije",
    reserveText: "Najbrže: pošaljite poruku na Instagram ili pozovite.",
    msgInsta: "Poruka na Instagram",
    callNow: "Pozovi sada",
    reserveHint: "* Ako želite i kontakt formu (email), može besplatno (Formspree).",

    galleryTitle: "Galerija",
    galleryText: "Klikni na sliku da se otvori u punoj veličini.",

    contactTitle: "Kontakt",
    contactText: "Dođite na kafu u Mladenovac — vidimo se!",
    detailsTitle: "Detalji",
    kAddress: "Adresa",
    kHours: "Radno vreme",
    kPhone: "Telefon",
    hoursFull: "Monday–Sunday: 07:00 – 01:00",
    openMapsBtn: "Otvori u Google Maps",

    footerNote: "Kralja Petra Prvog 136, Mladenovac • 07:00–01:00",
  },

  en: {
    subtitle: "Café • Mladenovac",
    "nav.menu": "Menu",
    "nav.music": "Live music",
    "nav.gallery": "Gallery",
    "nav.contact": "Contact",

    pill: "Saturday: live music 🎶",
    heroTitle: "Start your day with great coffee — and finish it with a beer.",
    heroText: "Pabić is your place for coffee, drinks, and good vibes — and every Saturday we host a live gig with a different band.",

    ctaMenu: "See menu",
    ctaReserve: "Reservations",

    hoursLabel: "Hours",
    hoursValue: "Mon–Sun: 07:00 – 01:00",
    addressLabel: "Address",

    quickContact: "Quick contact",
    openMap: "Open map",

    highlights: "Highlights",
    h1: "Hot & cold drinks",
    h2: "Price range: 500–1000 RSD",
    h3: "Live music every Saturday",

    menuTitle: "Menu",
    menuNote: "We serve hot and cold drinks. Typical prices: 500–1000 RSD.",
    menuHot: "Hot drinks",
    menuCold: "Cold drinks",
    menuBeer: "Beer & more",
    menuHint: "* Add exact prices later.",

    "sample.espresso": "Espresso",
    "sample.cap": "Cappuccino",
    "sample.latte": "Latte",
    "sample.tea": "Tea",
    "sample.lemonade": "Lemonade",
    "sample.icedTea": "Iced tea",
    "sample.juice": "Juices",
    "sample.water": "Water",
    "sample.beer": "Beer (draft / bottled)",
    "sample.cocktail": "Cocktail",
    "sample.soft": "Soft drinks",

    musicTitle: "Saturday — live music",
    musicText: "Every Saturday we host live music, with a different band each time. For tables and celebrations — DM us on Instagram or call us.",

    eventsTitle: "Events & celebrations",
    ev1: "Birthdays",
    ev2: "Small private celebrations",
    ev3: "Table reservations for gigs",

    reserveTitle: "Reservations",
    reserveText: "Fastest way: Instagram message or phone call.",
    msgInsta: "Message on Instagram",
    callNow: "Call now",
    reserveHint: "* Want a contact form (email) too? Free option available (Formspree).",

    galleryTitle: "Gallery",
    galleryText: "Click a photo to open it full size.",

    contactTitle: "Contact",
    contactText: "Come by for a coffee in Mladenovac — see you soon!",
    detailsTitle: "Details",
    kAddress: "Address",
    kHours: "Hours",
    kPhone: "Phone",
    hoursFull: "Monday–Sunday: 07:00 – 01:00",
    openMapsBtn: "Open in Google Maps",

    footerNote: "Kralja Petra Prvog 136, Mladenovac • 07:00–01:00",
  }
};

function setLang(lang){
  document.documentElement.lang = (lang === "en") ? "en" : "sr";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const normalized = key.startsWith("sr.") ? key.slice(3) : key;
    const val = dict[lang][normalized];
    if (val) el.textContent = val;
  });

  document.getElementById("btn-sr")?.classList.toggle("active", lang === "sr");
  document.getElementById("btn-en")?.classList.toggle("active", lang === "en");

  localStorage.setItem("pabic_lang", lang);
}

document.getElementById("btn-sr")?.addEventListener("click", () => setLang("sr"));
document.getElementById("btn-en")?.addEventListener("click", () => setLang("en"));

const saved = localStorage.getItem("pabic_lang");
setLang(saved === "en" ? "en" : "sr");
