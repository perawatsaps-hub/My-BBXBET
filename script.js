// Basic interactivity
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const show = nav.style.display === 'flex';
    nav.style.display = show ? 'none' : 'flex';
  });
}
