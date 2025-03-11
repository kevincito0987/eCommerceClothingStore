# **Diseño de App de Ecommerce de Ropa**

El proyecto consiste en la creación de una página web de ecommerce dedicada exclusivamente a la venta de ropa, utilizando solo HTML y CSS para la maquetación. El objetivo es diseñar una interfaz atractiva, fácil de usar, que permita a los usuarios explorar y comprar productos de ropa de manera intuitiva. La web contará con tres vistas principales: una página de inicio, una página de detalle de producto y una página de carrito de compras, todas diseñadas para ofrecer una experiencia de usuario fluida y atractiva.



## **Problemática**

En la actualidad, muchos sitios web de ecommerce de ropa tienen diseños complejos o poco intuitivos, lo que dificulta la navegación y reduce la satisfacción del usuario. Los usuarios buscan una experiencia de compra en línea simple y agradable, con información clara y accesible sobre los productos. La problemática radica en mejorar la usabilidad y apariencia del sitio web, optimizando la navegación y presentación de la información para facilitar la búsqueda y compra de productos.



## Funcionalidades Principales

### 1. Página de Inicio

- Saludo de bienvenida personalizado, mostrando el nombre del usuario y su foto de perfil.
- Barra de búsqueda para encontrar productos específicos.
- Categorías disponibles: Vestidos, Camisetas, Vaqueros, etc.
- Tarjetas de productos que incluyen: imagen del producto, botón para añadir a favoritos, título, categoría, precio y calificación.
- Menú móvil con opciones como inicio, carrito de compras, lista de favoritos y perfil.

### 2. Página de Detalle del Producto

- Tarjeta con dos botones: "Atrás" y "Añadir a favoritos" si el producto ya está en la lista, junto con la imagen del producto.
- Sección de información que muestra el título del producto, la calificación, el número de personas que lo han visto, y botones para ajustar la cantidad a comprar (por defecto, 1). También incluye un botón "Ver más" que despliega un cuadro de diálogo con la información completa del producto.
- Sección de personalización con opciones de tamaño y color del producto.
- Botón de compra que muestra el precio total según la cantidad seleccionada.

### 3. Página del Carrito de Compras

- Sección de navegación con dos botones: "Atrás" y el menú móvil en forma de hamburguesa, con el título "Checkout".
- Detalle de los productos seleccionados, presentados en tarjetas que incluyen la imagen, título, categoría, precio, cantidad seleccionada y botones para modificar la cantidad.
- Sección de información de envío, que muestra opciones de pago (tarjeta de crédito o débito), el total de productos seleccionados, precio total de productos seleccionados, costo de envío adicional (si aplica), descuentos, subtotal y un botón "Pagar" que muestra un cuadro modal confirmando la compra realizada.

# Tecnologías Recomendadas

Front-end: 

- Figma: [https://www.figma.com/community/file/1169625825293818878/mobile-ecommerce-clothing-store-app-desig](https://www.figma.com/community/file/1169625825293818878/mobile-ecommerce-clothing-store-app-design)

Recursos:

- Barra de búsqueda (Página de Inicio) : https://www.facebook.com/story.php?story_fbid=122161474094048970&id=61551469102959&mibextid=WC7FNe&rdid=ARxpghKfxeRvWZ3p
- Botón "Ver más" (Página de Detalle del Producto) : https://codepen.io/ckozalla/pen/LYLaVZW
- Menú móvil en forma de hamburguesa (Página del Carrito de Compras) : https://codepen.io/sanketbodke/pen/LYyzzYb
- Botón "Pagar" (Página del Carrito de Compras) :  https://codepen.io/ckozalla/pen/LYLaVZW
- Botón "Pagar" (Página del Carrito de Compras - Opcional) : https://sweetalert2.github.io/#examples
- Opción 1 (Opcional) : React o Vue.js para construir una interfaz de usuario interactiva y dinámica.
- Opción 2: Desarrollo puro utilizando HTML, CSS y JavaScript para una implementación más sencilla.



Nota: El uso de los recursos es obligatorio, excepto aquellos marcados como opcionales. Si no se utilizan los recursos obligatorios, se deberán buscar alternativas similares que no afecten el diseño del Figma. Cabe mencionar que algunas interacciones no están representadas en el Figma, por lo que se compartieron los recursos que deberán modificarse para que el diseño sea coherente.



Arquitectura del Proyecto: 

- El árbol de archivos si el desarrollo es puro será el siguiente:

```less
app_de_ecommerce_de_ropa/
├── css/
│ ├── style.css
│ ├── detail.css
│ ├── checkout.css
│ └── variables.css
├── js/
│ ├── Components/
│ │ └── modal.js # Archivos según los componentes que crees (Opcional)
│ ├── main.js
│ ├── detail.js
│ └── checkout.js
├── storage/
│ ├── font/
│ │ └── encode_sans/
│ └── img/
├── views/
│ ├── detail.html
│ └── checkout.html
└── index.html
```



- GitHub: Se utilizará para la gestión de versiones del código durante el desarrollo, aplicando conventional commits.

- La rama principal main se usará para la presentación del proyecto; en caso de no utilizarla, la calificación será automáticamente 0.

- La página web se desplegará en GitHub Pages para su visualización; si no se realiza, la calificación será automáticamente 0.

Se debe entregar el enlace a un repositorios GitHub privado (compartido con las cuentas que el trainer indique) que contenga el proyecto donde se debe tener en cuenta:

- La página web deberá ser desarrollada con código nativo HTML/CSS, sin la posibilidad de usar librerías externas.
- Se deben desarrollar las propuestas de los módulos faltantes previo al desarrollo del código HTML/CSS, el cual se puede realizar en Adobe XD o Figma (Hacer caso omiso si dichas propuestas de módulos se entregan).
- Debe ser *responsive (*`*@media query*`*)* y manejar UI/UX a lo largo de todo el proyecto basado en el wireframe propuesto por el equipo de diseño.

## ⚠️ **¡Aviso Importante!** 🚀

Para sacar el **máximo provecho** del proyecto y mejorar la experiencia visual e interactiva, se recomienda instalar:

✅ **Tailwind CSS CLI** 🎨

> Para estilos rápidos y eficientes, instala Tailwind CSS ejecutando:

```
sh
CopiarEditar

npm install tailwindcss @tailwindcss/cli
npx tailwindcss -i ./css/input.css -o ./css/output.css --watch
```

✅ **SweetAlert2** 💬

> Para mejorar las alertas y modales interactivos, instala SweetAlert2 con:

```
sh
CopiarEditar

npm install sweetalert2
```

> O usa el CDN en el `<head>` de tu HTML:

```
html


CopiarEditar
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
```

⚡ **Con estas herramientas, el diseño será más atractivo y la interacción con el usuario será más fluida. ¡No olvides instalarlas!** 🚀