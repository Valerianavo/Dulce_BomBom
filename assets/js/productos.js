document.querySelectorAll('.producto').forEach(producto => {
    producto.style.position = 'relative';
    producto.style.overflow = 'hidden';
    producto.style.display = 'inline-block';
    producto.style.borderRadius = '10px';

    const img = producto.querySelector('img');
    img.style.transition = 'transform 0.3s ease';
    img.style.borderRadius = '10px';

    producto.addEventListener('mouseenter', () => {
        // Efecto de zoom en la imagen
        img.style.transform = 'scale(1.05)';

        // Crear overlay
        const overlay = document.createElement('div');
        overlay.classList.add('overlay'); //
        overlay.textContent = producto.dataset.precio;
        
        overlay.style.position = 'absolute';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.background = 'rgba(160, 90, 70, 0.8)';
        overlay.style.color = '#fff';
        overlay.style.fontSize = '18px';
        overlay.style.fontWeight = 'bold';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.style.borderRadius = '10px';
        overlay.style.opacity = '0';
        overlay.style.transition = 'opacity 0.3s ease';
        overlay.style.cursor = 'pointer'; 

        // Evento click para redirigir
        overlay.addEventListener('click', () => {
            const link = producto.querySelector('a');
            if (link) {
                window.location.href = link.getAttribute('href');
            }
        });

        // Guardar ID para eliminarlo después
        producto.dataset.overlayId = Math.random().toString(36).substr(2, 9);
        overlay.id = producto.dataset.overlayId;

        producto.appendChild(overlay);

        // Mostrar overlay después de añadirlo
        requestAnimationFrame(() => {
            overlay.style.opacity = '1';
        });
    });

    

    producto.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
        
        // Eliminar overlay
        const overlay = document.getElementById(producto.dataset.overlayId);
        if (overlay) {
            overlay.style.opacity = '0';
            setTimeout(() => overlay.remove(), 300);
        }
    });
});





