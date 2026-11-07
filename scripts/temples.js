const yearEl = document.getElementById('currentyear');
const modEl = document.getElementById('lastModified');
if (yearEl) yearEl.textContent = new Date().getFullYear();
if (modEl) modEl.textContent = 'Last Modification: ' + document.lastModified;

const menuBtn = document.getElementById('menu');
const nav = document.getElementById('nav');
menuBtn.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuBtn.textContent = isOpen ? '✕' : '☰';
  menuBtn.setAttribute('aria-expanded', String(isOpen));
});