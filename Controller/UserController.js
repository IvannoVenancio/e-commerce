const { createUser, findAllUsers } = require("../services/userService");
const bcrypt = require("bcryptjs");
const {findUserByEmail} = require("../services/userService");

const { createUser, findAllUsers } = require("../services/userService")
const { createUser, findAllUsers, findUserBYEmail } = require("../services/userService")


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
        // const user = await findUserByEmail(email);

        // Verifica se o email foi fornecido
        if (!email || !password) {
            return res.status(400).send("Email e senha são obrigatórios.");
        }

                // Busca o usuário pelo email
                const user = await findUserByEmail(email);
                console.log("erro email:::",user)
        
        // // Verifica a senha usando bcrypt
        // const isPasswordValid = await bcrypt.compare(password, user.password);

        // if (!isPasswordValid) {
        //     // Senha incorreta
        //     return res.status(401).send("Usuário ou senha inválidos.");
        // }

        // if (!user) {
        //     return res.render("login", { error: "Usuário não encontrado!", layout: "clogin" });
        // }

       //const isMatch = await bcrypt.compare(password, user.password);
       //if (!isMatch) {
       //    return res.render("login", { error: "Senha incorreta!", layout: "clogin" });
       //}

        // Criando sessão do usuário
        req.session.user = {
            id: user.id,
            email: user.email,
            name: user.firstname
        };
        console.log(" Sessão Criada:", req.session);

        //Redirecionamento com base no tipo de usuário
        if (user.role === "admin") {
            return res.redirect("/Listprodutos"); // Redireciona admin
        } else {
            return res.redirect("/carrinho"); // Redireciona usuário comum
        }

    } catch (error) {
        console.log("Erro no login:", error);
        res.status(500).send("Erro interno do servidor");
    }
};

