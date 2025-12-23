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
const i18n = {
  sr: { btn_call: "Pozovi" },
  en: { btn_call: "Call" }
};

function setLang(lang){
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(i18n[lang] && i18n[lang][key]) el.textContent = i18n[lang][key];
  });

  document.querySelectorAll(".lang-btn").forEach(b=>{
    b.classList.toggle("active", b.dataset.lang === lang);
  });

  localStorage.setItem("lang", lang);

  // (اختياري) aria-label تبع زر الاتصال
  const call = document.querySelector(".call-btn");
  if(call){
    call.setAttribute("aria-label", lang === "en" ? "Call Pabić" : "Pozovi Pabić");
  }
}

document.addEventListener("click", (e)=>{
  const btn = e.target.closest(".lang-btn");
  if(!btn) return;
  setLang(btn.dataset.lang);
});

setLang(localStorage.getItem("lang") || "sr");
