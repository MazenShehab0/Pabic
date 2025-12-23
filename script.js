// Pabić website script (mobile menu + i18n + theme)
document.addEventListener("DOMContentLoaded", () => {
  // Year
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Mobile menu
  const hamb = document.getElementById("hamb");
  const mobile = document.getElementById("mobile");

  const closeMobile = () => {
    if (!mobile) return;
    mobile.classList.remove("show");
    mobile.setAttribute("aria-hidden", "true");
    if (hamb) hamb.setAttribute("aria-expanded", "false");
  };

  if (hamb && mobile) {
    hamb.addEventListener("click", () => {
      const open = mobile.classList.toggle("show");
      mobile.setAttribute("aria-hidden", open ? "false" : "true");
      hamb.setAttribute("aria-expanded", open ? "true" : "false");
    });

    mobile.addEventListener("click", (e) => {
      const t = e.target;
      if (t && t.tagName === "A") closeMobile();
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMobile();
    });
  }

  // i18n dictionary (ضيف مفاتيحك هون)
  const i18n = window.i18n || {
    sr: {
      btn_call: "Pozovi",
      // مثال:
      // nav_home: "Početna",
    },
    en: {
      btn_call: "Call",
      // مثال:
      // nav_home: "Home",
    },
  };

  function setLang(lang) {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (i18n[lang] && i18n[lang][key] != null) {
        el.textContent = i18n[lang][key];
      }
    });

    document.querySelectorAll(".lang-btn").forEach((b) => {
      b.classList.toggle("active", b.dataset.lang === lang);
    });

    localStorage.setItem("lang", lang);
    document.documentElement.setAttribute("lang", lang === "en" ? "en" : "sr");

    // aria-label تبع زر الاتصال (اختياري)
    const call = document.querySelector(".call-btn");
    if (call) call.setAttribute("aria-label", lang === "en" ? "Call Pabić" : "Pozovi Pabić");
  }

  // Language buttons
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".lang-btn");
    if (!btn) return;
    setLang(btn.dataset.lang);
  });

  // Theme toggle
  const themeBtn = document.getElementById("themeToggle");
  function applyTheme(theme) {
    document.body.classList.toggle("theme-dark", theme === "dark");
    localStorage.setItem("theme", theme);

    if (themeBtn) {
      themeBtn.setAttribute("aria-label", theme === "dark" ? "Light mode" : "Dark mode");
      themeBtn.textContent = theme === "dark" ? "☀️" : "🌙";
    }
  }

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const isDark = document.body.classList.contains("theme-dark");
      applyTheme(isDark ? "light" : "dark");
    });
  }

  // Init
  setLang(localStorage.getItem("lang") || "sr");
  applyTheme(localStorage.getItem("theme") || "dark");
});
