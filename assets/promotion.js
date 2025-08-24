(function(){
  const LS_KEY = 'modo'; // compartido con todas las páginas
  const body = document.body;
  const toggle = document.getElementById('mode-toggle');
  const iconSpan = document.getElementById('icon-toggle');
  const whatsappBtn = document.getElementById('whatsapp-button');

  // 1) Estado guardado
  const saved = localStorage.getItem(LS_KEY);
  if (saved === 'oscuro') {
    body.classList.add('modo-oscuro');
    if (toggle) toggle.checked = true;
    if (iconSpan) iconSpan.textContent = '🌙';
  }

  // 2) Cambiar con el switch
  if (toggle) {
    toggle.addEventListener('change', () => {
      body.classList.toggle('modo-oscuro', toggle.checked);
      localStorage.setItem(LS_KEY, toggle.checked ? 'oscuro' : 'claro');
      if (iconSpan) iconSpan.textContent = toggle.checked ? '🌙' : '☀️';
    });
  }

  // 3) WhatsApp visible al hacer scroll
  function handleScroll(){
    if (!whatsappBtn) return;
    whatsappBtn.classList.toggle('show', window.scrollY > 200);
  }
  window.addEventListener('scroll', handleScroll);
  handleScroll();
})();
