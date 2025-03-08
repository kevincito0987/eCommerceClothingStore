// footer.js

document.addEventListener('DOMContentLoaded', () => {
    const icons = [
        { id: "home-icon", position: 0 },
        { id: "bag-icon", position: 1 },
        { id: "heart-icon", position: 2 },
        { id: "profile-icon", position: 3 }
    ];

    const movingBar = document.getElementById("moving-bar");

    icons.forEach(icon => {
        const iconElement = document.getElementById(icon.id);
        if (iconElement) {
            iconElement.addEventListener('click', (event) => {
                event.preventDefault();
                const barPosition = iconElement.offsetLeft + (iconElement.offsetWidth / 2) - (movingBar.offsetWidth / 2);
                movingBar.style.transform = `translateX(${barPosition}px)`;
                movingBar.style.top = `${iconElement.offsetTop + iconElement.offsetHeight}px`; // Ajustar top para colocarlo debajo de los íconos
            });
        }
    });
});
