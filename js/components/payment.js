// dialog.js

// Función para mostrar el cuadro de diálogo
function showDialog() {
    Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`
    }).then((result) => {
        // Verificar la elección del usuario
        if (result.isConfirmed) {
            Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
            Swal.fire("Changes are not saved", "", "info");
        }
    });
}

// Añadir un listener al botón "Pay"
document.getElementById("pay-button").addEventListener("click", function(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
    showDialog(); // Llamar a la función para mostrar el cuadro de diálogo
});

// Exportar la función para usarla en otros archivos si es necesario
export { showDialog };
