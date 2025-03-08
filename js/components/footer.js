// footer.js

document.addEventListener('DOMContentLoaded', () => {
    const icons = [
        { id: "home-icon", content: "Home Content" },
        { id: "bag-icon", content: "Bag Content" },
        { id: "heart-icon", content: "Favorites Content" },
        { id: "profile-icon", content: "Profile Content" }
    ];

    icons.forEach(icon => {
        const iconElement = document.getElementById(icon.id);
        if (iconElement) {
            iconElement.addEventListener('click', (event) => {
                event.preventDefault();
                const footerDetails = document.getElementById("footer-details");
                footerDetails.innerHTML = `<p>${icon.content}</p>`;
                // Estilo del contenido que aparece
                footerDetails.style.display = 'block'; 
                footerDetails.style.position = 'absolute';
                footerDetails.style.bottom = '60px';
                footerDetails.style.width = '100%';
                footerDetails.style.textAlign = 'center';
                footerDetails.style.backgroundColor = '#fff';
                footerDetails.style.borderTop = '1px solid #ccc';
                footerDetails.style.padding = '10px 0';
            });
        }
    });
});
