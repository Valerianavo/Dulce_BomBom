document.addEventListener('DOMContentLoaded', () => {

    const logo = document.querySelector('.logo');
    
    if (logo) {
        let startTime = null; 
        const duration = 2000; 
        const scaleFactor = 1.07; 

        function animate(timestamp) {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;

            const progress = (Math.sin(elapsed / duration * Math.PI * 2) + 1) / 2;
            
            const currentScale = 1 + (scaleFactor - 1) * progress;
            logo.style.transform = `scale(${currentScale})`;

            requestAnimationFrame(animate);
        }
        requestAnimationFrame(animate);
    }
});