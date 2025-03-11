document.addEventListener('DOMContentLoaded', function() {
    const productList = [
        { id: "card1", name: "Blazer Dress Urbano Chic", category: "Moda Urbana", price: "$149.99" },
        { id: "card2", name: "raje Elegante Black Royal", category: "Moda Formal", price: "$199.99" },
        { id: "card3", name: "Estilo Urbano Black Shadow", category: "Moda Casual", price: "$89.99" },
        { id: "card4", name: "Elegancia Beige Royal", category: "Moda Clásica", price: "$129.99" },
        { id: "card5", name: "Blusa Beige Volumen Chic", category: "Moda de Alta Costura", price: "$149.99" },
        { id: "card6", name: "Traje Imperial Místico", category: "Moda Fantasía y Épica", price: "$229.99" }
    ];

    const formBusqueda = document.querySelector(".form__busqueda");
    const resultBox = document.querySelector(".results");
    const inputBox = document.querySelector(".search-bar");

    inputBox.addEventListener('keyup', () => {
        let result = [];
        let input = inputBox.value;
        if (input.length) {
            result = productList.filter((product) => {
                return product.name.toLowerCase().includes(input.toLowerCase()) ||
                       product.category.toLowerCase().includes(input.toLowerCase());
            });
        }
        displayResults(result);
    });

    function displayResults(result) {
        if (!result.length) {
            resultBox.innerHTML = "";
            return;
        }

        const content = result.map((product) => {
            return `<li class="py-2 px-4 cursor-pointer hover:bg-gray-100 rounded-lg" onclick="showCard('${product.id}')">${product.name} - ${product.category} - ${product.price}</li>`;
        }).join('');

        resultBox.innerHTML = `<ul class="bg-white shadow-lg rounded-lg overflow-hidden">${content}</ul>`;
    }

    function showCard(cardId) {
        const allCards = document.querySelectorAll('.card-container > div');
        allCards.forEach(card => card.style.display = 'none');

        const selectedCard = document.getElementById(cardId);
        if (selectedCard) {
            selectedCard.style.display = 'block';
        }
    }
});
