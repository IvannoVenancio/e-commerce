const product = {
    nome: "Produto Exemplo",
    descricao: "Este é um exemplo de descrição para o produto. Ele é de alta qualidade e muito útil.",
    preco: "R$ 100,00",
    imagem: "https://via.placeholder.com/300"
  };
  
  // Função para exibir os detalhes do produto na página
  function renderProductDetails() {
    document.getElementById("productName").textContent = product.nome;
    document.getElementById("productDescription").textContent = product.descricao;
    document.getElementById("productPrice").textContent = `Preço: ${product.preco}`;
    document.getElementById("productImage").src = product.imagem;
  }
  
  // Função para voltar à lista de produtos
  function goBack() {
    window.location.href = "lista_produtos.html"; // Redireciona para a lista de produtos
  }
  
  // Chama a função para renderizar os detalhes do produto
  renderProductDetails();
  