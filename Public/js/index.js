// Simulando dados de produtos
const produtos = [
  { id: 1, nome: "Produto 1", preço: 10.00, imagem: "produto1.jpg" },
  { id: 2, nome: "Produto 2", preço: 15.00, imagem: "produto2.jpg" },
  // ... mais produtos
];

// Função para criar um elemento de produto
function criarProduto(produto) {
  const produtoElement = document.createElement('div');
  produtoElement.classList.add('produto');

  produtoElement.innerHTML = `
    <img src="${produto.imagem}" alt="${produto.nome}">
    <h2>${produto.nome}</h2>
    <p>R$ ${produto.preço.toFixed(2)}</p>
    <button>Adicionar ao Carrinho</button>
  `;

  return produtoElement;
}

const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Funcionalidade da barra de pesquisa (exemplo básico)
const searchForm = document.querySelector('.search-form');
searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const searchTerm = searchForm.querySelector('input').value;
  console.log('Você pesquisou por:', searchTerm);
  // Implementar a lógica de busca aqui
});