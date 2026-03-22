document.addEventListener('DOMContentLoaded', () => {

/* =============================
   MENÚ HAMBURGUESA
============================= */
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('main-nav');

if (hamburger && mainNav) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mainNav.classList.toggle('open');
  });

  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mainNav.classList.remove('open');
    });
  });
}

/* =============================
   SCROLL REVEAL
============================= */
const sections = document.querySelectorAll('[data-section]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.05, rootMargin: '0px 0px -50px 0px' });

sections.forEach(s => observer.observe(s));

/* =============================
   NAV ACTIVO AL HACER SCROLL
============================= */
const navLinks = document.querySelectorAll('nav a[href^="#"]');
const navSections = document.querySelectorAll('section[id]');

function updateActiveNav() {
  let current = '';
  navSections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveNav);
updateActiveNav();

/* =============================
   CANVAS BACKGROUND PARTICLES
============================= */
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

window.addEventListener('mousemove', e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

const PARTICLE_COUNT = 90;
const particles = [];

class Particle {
  constructor() { this.reset(true); }

  reset(random = false) {
    this.x = Math.random() * window.innerWidth;
    this.y = random ? Math.random() * window.innerHeight : window.innerHeight + 10;
    this.size = Math.random() * 1.5 + 0.3;
    this.speedX = (Math.random() - 0.5) * 0.3;
    this.speedY = -(Math.random() * 0.4 + 0.1);
    this.opacity = Math.random() * 0.5 + 0.1;
    this.hue = 210 + Math.random() * 30;
  }

  update() {
    const dx = mouse.x - this.x;
    const dy = mouse.y - this.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 200) {
      this.x += dx * 0.0015;
      this.y += dy * 0.0015;
    }
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.y < -5) this.reset();
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `hsla(${this.hue}, 90%, 70%, ${this.opacity})`;
    ctx.fill();
  }
}

for (let i = 0; i < PARTICLE_COUNT; i++) {
  particles.push(new Particle());
}

let t = 0;

function drawOrbs() {
  const ox1 = mouse.x * 0.3 + window.innerWidth * 0.15;
  const oy1 = mouse.y * 0.2 + window.innerHeight * 0.1;
  const g1 = ctx.createRadialGradient(ox1, oy1, 0, ox1, oy1, 380);
  g1.addColorStop(0, 'rgba(79,140,255,0.07)');
  g1.addColorStop(1, 'transparent');
  ctx.fillStyle = g1;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const ox2 = window.innerWidth * 0.75 + Math.sin(t * 0.4) * 80;
  const oy2 = window.innerHeight * 0.6 + Math.cos(t * 0.3) * 60;
  const g2 = ctx.createRadialGradient(ox2, oy2, 0, ox2, oy2, 300);
  g2.addColorStop(0, 'rgba(100,60,255,0.05)');
  g2.addColorStop(1, 'transparent');
  ctx.fillStyle = g2;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  t += 0.01;
  drawOrbs();
  particles.forEach(p => { p.update(); p.draw(); });
  requestAnimationFrame(animate);
}
animate();

/* =============================
   HERO PARALLAX ON MOUSE
============================= */
const heroName = document.querySelector('.hero-name');
const heroRole = document.querySelector('.hero-role');
const heroDesc = document.querySelector('.hero-description');

window.addEventListener('mousemove', e => {
  const cx = window.innerWidth / 2;
  const cy = window.innerHeight / 2;
  const dx = (e.clientX - cx) / cx;
  const dy = (e.clientY - cy) / cy;

  if (heroName) heroName.style.transform = `translate(${dx * -8}px, ${dy * -5}px)`;
  if (heroRole) heroRole.style.transform = `translate(${dx * -4}px, ${dy * -3}px)`;
  if (heroDesc) heroDesc.style.transform = `translate(${dx * -2}px, ${dy * -1.5}px)`;
});

}); // fin DOMContentLoaded
