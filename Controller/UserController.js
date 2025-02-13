// UserController.js
const { createUser, findAllUsers, findbyemail } = require('../services/userService'); // Importação única
const bcrypt = require("bcryptjs");

exports.view = async (req, res) => {
    try {
        res.render("login", { layout: "clogin" });
    } catch (error) {
        console.log("Erro ao renderizar a página de login:", error);
        res.status(500).send("Erro interno do servidor");
    }
};

exports.create = async (req, res) => {
    try {
        const data = req.body;
        console.log("data::::", data);
        await createUser(data);
        res.redirect('/cadastro');
    } catch (error) {
        console.log("error:::", error);
    }
};

// Função para processar login do usuário
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log("teste", email, password)

        // Verifica se o email foi fornecido
        if (!email || !password) {
            return res.status(400).send("Email e senha são obrigatórios.");
        }

        // Busca o usuário pelo email
        const user = await findbyemail(email);
        console.log("erro email:::", user);

        if (!user) {
            return res.render("login", { error: "Usuário não encontrado!", layout: "clogin" });
        }

        // Verifica a senha usando bcrypt
        //await bcrypt.compare(password, user.password);
        const isPasswordValid = password == user.password ? true : false
        console.log("teste2", isPasswordValid)


        if (!isPasswordValid) {
            return res.render("login", { error: "Senha incorreta!", layout: "clogin" });
        }

        // Criando sessão do usuário
        // req.session.user = {
        //     id: user.id,
        //     email: user.email,
        //     name: user.firstname
        // };
        // console.log("Sessão Criada:", req.session);

        // Redirecionamento com base no tipo de usuário
        console.log("reat", user.isAdmin)
        if (user.isAdmin === "1" || user.isAdmin === 1 || user.isAdmin === true) {
            return res.redirect("/Listproduto"); // Redireciona admin
        } else {
            return res.redirect("/carrinho"); // Redireciona usuário comum
        }

    } catch (error) {
        console.log("Erro no login:", error);
        res.status(500).send("Erro interno do servidor");
    }
};
