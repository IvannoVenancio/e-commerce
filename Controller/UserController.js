const { createUser, findAllUsers } = require("../services/userService")

exports.view = async (req, res) => {
    try {
        res.render("login", { layout: "clogin" }); // Defina o layout corretamente aqui
    } catch (error) {
        console.log("Erro ao renderizar a página de login:", error);
        res.status(500).send("Erro interno do servidor");
    }
}
exports.create = async(req, res) =>{
    try {
        const data = req.body
        console.log("data::::", data)
        await createUser(data)
        res.redirect('/cadastro')
        
    } catch (error) {
        console.log("error:::", error)
    }
}