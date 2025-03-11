// counter.js

// Función para actualizar el contador y el total/subtotal
function updateCounter(counterElement, increment) {
    const currentCount = parseInt(counterElement.innerText);
    const newCount = currentCount + increment;
    if (newCount >= 0) { // Asegurarse de que el contador no sea negativo
        counterElement.innerText = newCount;
        updateTotalAndSubtotal();
    }
}

// Función para calcular y actualizar el total y el subtotal
function updateTotalAndSubtotal() {
    let totalItems = 0;
    let totalAmount = 0;

    document.querySelectorAll(".card-container .card1, .card-container .card2").forEach((card) => {
        const price = parseFloat(card.getAttribute("data-price"));
        const counter = parseInt(card.querySelector(".counter").innerText);

        totalItems += counter;
        totalAmount += price * counter;
    });

    document.getElementById("item-count").innerText = totalItems;
    document.getElementById("total-amount").innerText = `$${totalAmount.toFixed(2)}`;
    document.getElementById("subtotal-amount").innerText = `$${totalAmount.toFixed(2)}`;
}

// Añadir listeners a los iconos de + y -
document.addEventListener('DOMContentLoaded', (event) => {
    const incrementButtons = document.querySelectorAll(".summary img[alt='Plus Icon']");
    const decrementButtons = document.querySelectorAll(".summary img[alt='Minus Icon']");
    
    incrementButtons.forEach((button) => {
        button.addEventListener("click", function() {
            const counter = this.previousElementSibling;
            updateCounter(counter, 1);
        });
    });

    decrementButtons.forEach((button) => {
        button.addEventListener("click", function() {
            const counter = this.nextElementSibling;
            updateCounter(counter, -1);
        });
    });

    // Actualizar el total y subtotal al cargar la página
    updateTotalAndSubtotal();
});
