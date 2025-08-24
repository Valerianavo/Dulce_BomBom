// Variables del modal
let countdownTimer;

// Mostrar modal al cargar la página si no se ha mostrado antes
window.addEventListener('load', function () {
    const modalShown = localStorage.getItem('modalShown');
    if (!modalShown) {
        setTimeout(() => {
            showModal();
        }, 1500);
    }
});

// Función para mostrar el modal
function showModal() {
    const modal = document.getElementById('welcomeModal');
    modal.classList.add('show');
    startCountdown();
    document.body.style.overflow = 'hidden';
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById('welcomeModal');
    modal.classList.remove('show');

    // Restaurar scroll
    document.body.style.overflow = 'auto';

    // Detener el countdown
    if (countdownTimer) {
        clearInterval(countdownTimer);
    }
}

// Guardar en localStorage cuando el usuario acepte suscribirse
document.getElementById('btnSuscribirse').addEventListener('click', function () {
    localStorage.setItem('modalShown', 'true'); // Guardar preferencia
    closeModal(); // Cerrar modal
});

// Cerrar modal al hacer clic fuera de él
document.getElementById('welcomeModal').addEventListener('click', function (e) {
    if (e.target === this) {
        closeModal();
    }
});

// Cerrar modal con tecla ESC
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Mostrar modal después de cierto tiempo de inactividad
let inactivityTimer;

function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(() => {
        if (!document.getElementById('welcomeModal').classList.contains('show')) {
            const modalShown = localStorage.getItem('modalShown');
            if (!modalShown) {
                showModal();
            }
        }
    }, 60000); // 1 minuto
}

// Eventos para detectar actividad del usuario
['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'].forEach(event => {
    document.addEventListener(event, resetInactivityTimer, true);
});

// Inicializar el timer de inactividad
resetInactivityTimer();
