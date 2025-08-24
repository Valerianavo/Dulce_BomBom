// ModOscuro.js
document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const toggle = document.getElementById('modoToggle');

  // Aplica modo oscuro si está en localStorage
  if (localStorage.getItem('modoOscuro') === 'true') {
    body.classList.add('modo-oscuro');
    if (toggle) toggle.checked = true;
  }

  // Evento para activar/desactivar el modo
  if (toggle) {
    toggle.addEventListener('change', () => {
      body.classList.toggle('modo-oscuro');
      localStorage.setItem('modoOscuro', body.classList.contains('modo-oscuro'));
    });
  }
});
