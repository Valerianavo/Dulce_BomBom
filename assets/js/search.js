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


// EFECTOS PRODUCTOS 
document.addEventListener("mouseover", function (e) {
  // Detectamos si el cursor está sobre una card de producto
  const producto = e.target.closest(".Producto");
  if (!producto) return;

  const img = producto.querySelector("img");
  if (!img) return;

  // Configuramos estilo base del contenedor
  producto.style.position = "relative";
  producto.style.overflow = "visible"; // Permitimos que la imagen se agrande sin cortar
  img.style.transition = "transform 0.3s ease";

  // Evitar duplicar overlays si se pasa el mouse varias veces
  if (producto.querySelector(".overlay")) return;

  // Efecto de para que se achique la imagen
  img.style.transform = "scale(0.95)";

  // Crear overlay 
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");

  // Mostrar el precio o texto por defecto
  overlay.textContent = producto.dataset.precio || "Precio no disponible";

  // --- Estilos del overlay ---
  overlay.style.position = "absolute";
  overlay.style.top = img.offsetTop + "px"; 
  overlay.style.left = img.offsetLeft + "px";
  overlay.style.width = img.offsetWidth + "px";
  overlay.style.height = img.offsetHeight + "px";
  overlay.style.background = "rgba(160, 89, 70, 0.5)";
  overlay.style.color = "#fff";
  overlay.style.fontSize = "18px";
  overlay.style.fontWeight = "bold";
  overlay.style.display = "flex";
  overlay.style.alignItems = "center";
  overlay.style.justifyContent = "center";
  overlay.style.borderRadius = "15px";
  overlay.style.opacity = "0";
  overlay.style.transition = "opacity 0.3s ease";
  overlay.style.cursor = "pointer";
  overlay.style.pointerEvents = "auto"; // permite hacer clic
  overlay.style.zIndex = "10"; // asegurar que quede encima de la imagen

  // Al hacer clic en el overlay, ir al detalle del producto
  overlay.addEventListener("click", () => {
    const link = producto.querySelector("a");
    if (link) window.location.href = link.href;
  });

  // Agregar el overlay dentro del contenedor del producto
  producto.appendChild(overlay);

  //  Animar la aparición suave
  requestAnimationFrame(() => {
    overlay.style.opacity = "1";
  });

  // Cuando el mouse sale, quitar el efecto
  producto.addEventListener(
    "mouseleave",
    () => {
      img.style.transform = "scale(1)";
      overlay.style.opacity = "0";
      setTimeout(() => overlay.remove(), 300);
    },
    { once: true }
  );
});
