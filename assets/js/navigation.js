(() => {
  const nav = document.querySelector('.nav');
  const toggle = nav?.querySelector('.nav-toggle');
  const menu = nav?.querySelector('.nav-menu');
  if (!nav || !toggle || !menu) return;

  const setOpen = (open, returnFocus = false) => {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
    if (returnFocus) toggle.focus();
  };

  toggle.addEventListener('click', () => setOpen(!nav.classList.contains('open')));
  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('open')) setOpen(false, true);
  });
  document.addEventListener('click', (event) => {
    if (!nav.contains(event.target)) setOpen(false);
  });
  const desktop = window.matchMedia('(min-width: 901px)');
  desktop.addEventListener('change', () => setOpen(false));
})();
