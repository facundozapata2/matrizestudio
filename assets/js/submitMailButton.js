function handleSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('submit-btn');
  btn.textContent = 'Enviando...';
  btn.style.opacity = '0.6';
  setTimeout(() => {
    btn.textContent = '✓ Mensaje enviado';
    btn.style.background = '#1a1a24';
    btn.style.color = '#00ff8c';
    btn.style.clipPath = 'none';
    btn.style.border = '1px solid rgba(0,255,140,0.3)';
  }, 1200);
}

// Intersection observer for fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'none';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card, .process-step, .why-item, .info-block').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(16px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});