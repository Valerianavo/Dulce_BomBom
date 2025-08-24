const texto = document.getElementById("marquesina-texto");

// Clon del texto para simular continuidad
const clon = texto.cloneNode(true);
clon.id = "marquesina-clon"; // para no repetir el mismo id
texto.parentElement.appendChild(clon);

let posX = 0;

function moverTexto() {
  posX -= 1; // velocidad, ajustar a tu gusto

  // Ancho total del texto original
  const width = texto.offsetWidth;

  // Cuando el primer texto sale por completo, reiniciamos sin cortar
  if (Math.abs(posX) >= width) {
    posX = 0;
  }

  // Mover ambos textos
  texto.style.left = posX + "px";
  clon.style.left = (posX + width) + "px";

  requestAnimationFrame(moverTexto);
}

moverTexto();

  moverTexto();