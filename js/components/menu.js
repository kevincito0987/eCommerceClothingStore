document.getElementById("menu-button").addEventListener("click", function () {
    const menu = document.getElementById("menu");
    menu.classList.toggle("hidden"); // Alternar entre ocultar/mostrar
    menu.classList.toggle("block");  // Asegurar visibilidad cuando se despliega
  });
  