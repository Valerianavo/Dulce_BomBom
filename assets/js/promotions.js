function startCountdown() {
    const countdownElement = document.getElementById("countdown");
    const year = new Date().getFullYear();
    const offerDeadline = new Date(year, 7, 28, 23, 59, 59); // Febrero es el mes 1 en JavaScript (0-based index)

    function updateCountdown() {
        const now = new Date();
        const timeLeft = offerDeadline - now;
        
        if (timeLeft <= 0) {
            countdownElement.innerHTML = "¡Oferta Finalizada!";
            return;
        }
        
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        countdownElement.innerHTML = `Quedan ${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos.`;
    }
    
    updateCountdown();

    // Actualizamos el temporizador cada segundo
    setInterval(updateCountdown, 1000);
}

// Llamamos a la función para iniciar la cuenta regresiva
startCountdown();



