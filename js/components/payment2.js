
// payment.js

// Función para mostrar el cuadro de diálogo
function showAddToCartDialog() {
    Swal.fire({
        title: "Do you want to add this item to your cart?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Add",
        denyButtonText: `Don't add`
    }).then((result) => {
        // Verificar la elección del usuario
        if (result.isConfirmed) {
            Swal.fire("Added!", "The item has been added to your cart.", "success");
        } else if (result.isDenied) {
            Swal.fire("Not Added", "The item was not added to your cart.", "info");
        }
    });
}

// Añadir listener al botón "Add to Cart"
document.addEventListener('DOMContentLoaded', (event) => {
    const addToCartButton = document.getElementById("add-to-cart-button");
    if (addToCartButton) {
        addToCartButton.addEventListener("click", function(event) {
            event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
            showAddToCartDialog(); // Llamar a la función para mostrar el cuadro de diálogo
        });
    }
});