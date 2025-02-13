// PedidosController.js
exports.Pedidos = async (req, res) => {    
    try {
        // Supondo que você tenha uma função para pegar os pedidos
        const pedidos = await getPedidos(); // Substitua isso por uma função real que busque os dados de pedidos, como do banco

        // Passando os pedidos para a view
        res.render("Pedidos", { layout: "ppedidos", pedidos });
    } catch (err) {
        console.log(err);
        res.status(500).send("Erro ao carregar os pedidos.");
    }   
};
