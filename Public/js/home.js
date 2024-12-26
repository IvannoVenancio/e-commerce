document.getElementById('promoButton').addEventListener('click', function() {
    alert('Descubra mais sobre o iPhone 16!');
});

const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert('Produto adicionado ao carrinho!');
    });
});
