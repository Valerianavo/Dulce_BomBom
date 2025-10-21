document.addEventListener('mouseover', function(e) {
    const producto = e.target.closest('.producto');
    if (!producto) return;
    const img = producto.querySelector('img');
    if (!img) return;

    producto.style.position = 'relative';
    producto.style.overflow = 'visible';
    img.style.transition = 'transform 0.3s ease';

    if (producto.querySelector('.overlay')) return;

    img.style.transform = 'scale(0.95)';

    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    overlay.textContent = producto.dataset.precio || 'Precio no disponible';
    overlay.style.position = 'absolute';
    overlay.style.top = img.offsetTop + 'px';
    overlay.style.left = img.offsetLeft + 'px';
    overlay.style.width = img.offsetWidth + 'px';
    overlay.style.height = img.offsetHeight + 'px';
    overlay.style.background = 'rgba(160, 89, 70, 0.5)';
    overlay.style.color = '#fff';
    overlay.style.fontSize = '18px';
    overlay.style.fontWeight = 'bold';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.borderRadius = '15px';
    overlay.style.opacity = '0';
    overlay.style.transition = 'opacity 0.3s ease';
    overlay.style.cursor = 'pointer';
    overlay.style.pointerEvents = 'auto';
    overlay.style.zIndex = '10';

    overlay.addEventListener('click', () => {
        const link = producto.querySelector('a');
        if (link) window.location.href = link.href;
    });

    producto.appendChild(overlay);
    requestAnimationFrame(() => {
        overlay.style.opacity = '1';
    });

    producto.addEventListener(
        'mouseleave',
         () => {
        img.style.transform = 'scale(1)';
        overlay.style.opacity = '0';
        setTimeout(() => {overlay.remove();}, 300);
    }, { once: true}
    );

});


