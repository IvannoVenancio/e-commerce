
+//let cart = []; // Inicializa um array vazio chamado "cart" (carrinho).
//function modelsInfo(productName, productPrice) {} // Define uma função chamada "addToCart" que recebe dois parâmetros: "productName" (nome do produto) e "productPrice" (preço do produto).
cart // Aqui, o código parece estar incompleto. Normalmente, nesta parte, você adicionaria o produto ao carrinho, utilizando os parâmetros fornecidos.
let modalQt = 0;
let key = 0;

const c = (el)=>document.querySelector(el); 
const cs = (el)=>document.querySelectorAll(el);
     
c('.modelsBig img').src = modelsJson[key].img;
c('.modelsInfo h1').innerHTML = modelsJson[key].name;
c('.modelsInfo--desc').innerHTML = modelsJson[key].description;
c('.modelsInfo--size.selected').classList.remove('selected');

cs('.modelsInfo--size').forEach((size, sizeIndex)=>{
    if(sizeIndex == 2) {
        size.classList.add('selected');
        c('.modelsInfo--actualPrice').innerHTML = `Kz ${modelsJson[key].price[sizeIndex].toFixed(2)}`;
    }
});
//banner
document.addEventListener('DOMContentLoaded', function() {
    const advertisements = document.querySelectorAll('.advertisement');

    advertisements.forEach((ad, index) => {
        setTimeout(() => {
            ad.classList.add('animate__fadeIn');
        }, index * 500); // Delay each animation by 500ms
    });
});