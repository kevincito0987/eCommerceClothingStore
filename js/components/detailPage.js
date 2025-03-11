// detailPage.js

// Función para actualizar el contador
function updateCounter(increment) {
    const quantityElement = document.getElementById("quantity");
    let currentQuantity = parseInt(quantityElement.innerText);
    let newQuantity = currentQuantity + increment;
    if (newQuantity >= 1) { // Asegurarse de que la cantidad no sea menor que 1
        quantityElement.innerText = newQuantity;
        updateTotalPrice(newQuantity);
    }
}

// Función para actualizar el precio total
function updateTotalPrice(quantity) {
    const unitPrice = 100.99; // Precio unitario del producto
    const totalPriceElement = document.querySelector(".context h3");
    const totalPrice = unitPrice * quantity;
    totalPriceElement.innerText = `Add to Cart | $${totalPrice.toFixed(2)}`;
}

// Añadir listeners a los iconos de + y -
document.addEventListener('DOMContentLoaded', (event) => {
    const incrementButton = document.getElementById("increment");
    const decrementButton = document.getElementById("decrement");

    incrementButton.addEventListener("click", function() {
        updateCounter(1);
    });

    decrementButton.addEventListener("click", function() {
        updateCounter(-1);
    });
});
