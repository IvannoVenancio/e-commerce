<<<<<<< HEAD
//script.js
  document.addEventListener('DOMContentLoaded', () => { const logo = document.getElementById('siteName'); 
// Adiciona um efeito de piscada 
setInterval(() => { logo.style.opacity = (logo.style.opacity == 0 ? 1 : 0); }, 1000); });
=======
document.getElementById('promoButton').addEventListener('click', function() {
    alert('Descubra mais sobre o iPhone 16!');
});


const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItems = [];
const cartCount = document.getElementById('cartCount');
const cartModal = document.getElementById('cartModal');
const cartButton = document.getElementById('cartButton');
const closeModal = document.getElementsByClassName('close')[0];
const cartItemsList = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const checkoutButton = document.getElementById('checkoutButton');

addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const product = this.getAttribute('data-product');
        const price = parseFloat(this.getAttribute('data-price'));
        cartItems.push({ product, price });
        updateCart();
        alert('Produto adicionado ao carrinho!');
    });
});

cartButton.addEventListener('click', function() {
    viewCart();
    cartModal.style.display = 'block';
});

closeModal.addEventListener('click', function() {
    cartModal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == cartModal) {
        cartModal.style.display = 'none';
    }
});

checkoutButton.addEventListener('click', function() {
    window.location.href ='/carrinho';
    // Aqui você pode adicionar a lógica para redirecionar para a página de pagamento
})

function updateCart() {
    cartCount.textContent = cartItems.length;
}

function viewCart() {
    cartItemsList.innerHTML = '';
    let total = 0;
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - Kzs ${item.price.toFixed(2)}`;
        cartItemsList.appendChild(li);
        total += item.price;
    });
    cartTotal.textContent = total.toFixed(2);
}
>>>>>>> origin/Margarida_manuel
