// Custom cursor
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  setTimeout(() => {
    ring.style.left = e.clientX + 'px';
    ring.style.top = e.clientY + 'px';
  }, 80);
});
document.querySelectorAll('a,button,.blog-card,.testi-card,.risk-card,.faq-q').forEach(el => {
  el.addEventListener('mouseenter', () => { cursor.style.width='20px'; cursor.style.height='20px'; ring.style.width='60px'; ring.style.height='60px'; });
  el.addEventListener('mouseleave', () => { cursor.style.width='12px'; cursor.style.height='12px'; ring.style.width='40px'; ring.style.height='40px'; });
});

// Page navigation
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  window.scrollTo({top:0, behavior:'smooth'});
  setTimeout(initReveal, 100);
}

// Scroll to section
function scrollTo(selector) {
  const el = document.querySelector(selector);
  if (el) el.scrollIntoView({behavior:'smooth', block:'start'});
}

// Mobile menu
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
}

// FAQ
function toggleFaq(btn) {
  const item = btn.parentElement;
  const wasOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!wasOpen) item.classList.add('open');
}

// Scroll reveal
function initReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, {threshold:0.1});
  reveals.forEach(el => observer.observe(el));
}
initReveal();

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  nav.style.background = window.scrollY > 50 ? 'rgba(8,8,8,0.98)' : 'rgba(8,8,8,0.92)';
});

// Form submit
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target;
  btn.textContent = '✓ Message Sent! We'll be in touch.';
  btn.style.background = 'linear-gradient(135deg,var(--teal),#00a876)';
  setTimeout(() => {
    btn.textContent = 'Submit — Join the Academy';
    btn.style.background = '';
  }, 4000);
}