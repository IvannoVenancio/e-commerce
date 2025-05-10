const products = [
    { nome: "Produto 1", descricao: "Descrição do Produto 1", preco: "R$ 10,00" },
    { nome: "Produto 2", descricao: "Descrição do Produto 2", preco: "R$ 20,00" },
  ];
  
  function renderProducts() {
    const productList = document.getElementById("productList");
    productList.innerHTML = ""; // Limpa a lista antes de renderizar
  
    products.forEach(product => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${product.nome}</td>
        <td>${product.descricao}</td>
        <td>${product.preco}</td>
      `;
      productList.appendChild(row);
    });
  }
  
  function addProduct() {
    const newProduct = {
      nome: "Novo Produto",
      descricao: "Descrição do novo produto",
      preco: "AOA 00,00"
    };
    products.push(newProduct);
    renderProducts();
  }
  
  // Renderiza os produtos iniciais na tela
  renderProducts();
  