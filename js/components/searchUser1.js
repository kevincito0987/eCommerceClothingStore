document.addEventListener('DOMContentLoaded', function() {
    const productList = [
        { id: "card1", name: "Modern Light Clothes", category: "T-Shirt", price: "$212.99" },
        { id: "card2", name: "Light Dress Bless", category: "Dress", price: "$162.99" },
        { id: "card3", name: "Maroon Dark Top", category: "Dress", price: "$194.99" },
        { id: "card4", name: "Light Dress Yellow", category: "Dress Modern", price: "$122.99" },
        { id: "card5", name: "Casual Streetwear", category: "Outfit", price: "$89.99" },
        { id: "card6", name: "Elegant Chic Suit", category: "Formal Wear", price: "$189.99" }
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
