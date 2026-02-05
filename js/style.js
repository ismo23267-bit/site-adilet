// ===== Header shadow on scroll =====
const header = document.getElementById('header');
const year = document.getElementById('year');
year.textContent = new Date().getFullYear();

window.addEventListener('scroll', () => {
  if (window.scrollY > 8) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
});

// ===== Mobile menu =====
const burger = document.getElementById('burger');
const mobile = document.getElementById('mobile');

function closeMobile() {
  mobile.classList.remove('is-open');
  burger.setAttribute('aria-expanded', 'false');
}

burger.addEventListener('click', () => {
  const isOpen = mobile.classList.toggle('is-open');
  burger.setAttribute('aria-expanded', String(isOpen));
});

// Close on click links / backdrop
mobile.addEventListener('click', (e) => {
  if (e.target === mobile) closeMobile();
  if (e.target.tagName === 'A') closeMobile();
});

// Close on ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMobile();
});

// ===== Reveal on scroll =====
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
}, { threshold: 0.12 });

revealEls.forEach(el => io.observe(el));

// ===== Contact form demo (no backend) =====
const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = (data.get('name') || '').toString().trim();

  note.textContent = `Спасибо, ${name || 'друг'}! Сообщение готово — подключи отправку на почту/Telegram.`;
  form.reset();
});

