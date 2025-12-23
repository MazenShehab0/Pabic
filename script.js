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
