//script.js
  document.addEventListener('DOMContentLoaded', () => { const logo = document.getElementById('siteName'); 
// Adiciona um efeito de piscada 
setInterval(() => { logo.style.opacity = (logo.style.opacity == 0 ? 1 : 0); }, 1000); });

const searchInput = document.getElementById('searchInput');
const productList = document.getElementById('productList');

// Array de produtos (substitua por seus dados reais)
const products = [
    { name: 'Iphone', description: 'Iphone12' },
    { name: 'ihone', description: 'iphone13' },
    // ... mais produtos
];

// Função para criar elementos de lista
function createProductElement(product) {
    const li = document.createElement('li');
    li.textContent = product.name;
    return li;
}

// Função para filtrar e atualizar a lista de produtos
function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    productList.innerHTML = ''; // Limpa a lista antes de adicionar os novos itens

    products.forEach(product => {
        if (product.name.toLowerCase().includes(searchTerm)) {
            productList.appendChild(createProductElement(product));
        }
    });
}

// Adiciona um ouvinte de evento para o campo de pesquisa
searchInput.addEventListener('input', filterProducts);

// Popula a lista inicialmente
products.forEach(product => {
    productList.appendChild(createProductElement(product));
});