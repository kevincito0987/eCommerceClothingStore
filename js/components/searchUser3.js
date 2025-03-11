document.addEventListener('DOMContentLoaded', function() {
    const productList = [
        { id: "card1", name: "Biker Leather Jacket", category: "Outerwear", price: "$129.99" },
        { id: "card2", name: "Urban Street Style", category: "Streetwear", price: "$99.99" },
        { id: "card3", name: "Elegant Black Gown", category: "Evening Wear", price: "$249.99" },
        { id: "card4", name: "Floral Summer Dress", category: "Casual Wear", price: "$139.99" },
        { id: "card5", name: "Elegant Black Jumpsuit", category: "Evening Wear", price: "$159.99" },
        { id: "card6", name: "Trendy Nightwear Set", category: "Fashion Wear", price: "$189.99" }
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
