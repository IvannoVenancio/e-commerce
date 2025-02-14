const { registrarCompra } = require("../services/CompraService");

exports.home = async (req, res) => {
    try {
        res.render("index")
    } catch (err) {
        console.log(err)
    }
}
exports.cadastro = async (req, res) => {
    try {
        res.render("cadastro", { layout: "ccadastro" })
    } catch (err) {
        console.log(err)
    }
}
exports.Listproduto = async (req, res) => {
    try {
        res.render("Listproduto")
    } catch (err) {
        console.log(err)
    }
}
exports.carrinho = async (req, res) => {
    try {
        res.render("carrinho", { layout: "cdmanin" })
    } catch (err) {
        console.log(err)
    }
}
exports.feedback = async (req, res) => {
    try {
        res.render("feedback", { layout: "feedmain.handlebars" });
    } catch (err) {
        console.log(err);
    }
}

exports.login = async (req, res) => {
    try {
        res.render("login", { layout: "clogin" })
    } catch (err) {
        console.log(err)
    }
}
exports.Pedidos = async (req, res) => {
    try {
        res.render("Pedidos", { layout: "cdmanin.handlebars" })
    } catch (err) {
        console.log(err)
    }
}
exports.Pedidos = async (req, res) => {
    try {
        res.render("Pedidos")
    } catch (err) {
        console.log(err)
    }

}


exports.pagamento = async (req, res) => {
    try {
        res.render("pagamento", { layout: "ppagamento" })
    } catch (err) {
        console.log(err)
    }
}

exports.finalizarPagamento = async (req, res) => {
    try {
        const data = req.body
        console.log("Body::::", req.body)
        console.log("total", total, cart)
        // const criarOrdem = await criarOrdem()
        const pagamento = await registrarCompra(data)
        console.log("pagamento:::", pagamento)
        res.render("pagamentoconfirmado", { layout: "ppagamento", pagamento })
    } catch (err) {
        console.log(err)
    }
}

