document.addEventListener('DOMContentLoaded', function() {
  console.log('flor')
  const buscador = document.getElementById('buscador');
  const contenedorCards = document.getElementById('contenedor-cards').getElementsByClassName('Producto');

  buscador.addEventListener('input', function() {
      const textoBusqueda = buscador.value.trim().toLowerCase(); 

      for (let i = 0; i < contenedorCards.length; i++) {
          const nombrePostre = contenedorCards[i].getAttribute('data-nombre').toLowerCase();

          if (nombrePostre.toLowerCase().includes(textoBusqueda)) {
              contenedorCards[i].style.display = 'block'; 
          } else {
              contenedorCards[i].style.display = 'none'; 
          }
      }
  });
});