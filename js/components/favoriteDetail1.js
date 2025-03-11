document.addEventListener('DOMContentLoaded', function() {
    const heartIcons = document.querySelectorAll('img[alt="starIcon"]');

    heartIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            // Obtener el estado actual del icono
            const isFilled = this.src.includes('heartFilledIcon.svg');
            
            if (isFilled) {
                // Cambiar el color del icono a original
                this.src = '../storage/icons/heartIconPageDetail.svg';
            } else {
                // Cambiar el color del icono a relleno
                this.src = '../storage/icons/heartFilledIcon.svg';
            }
        });
    });
});
