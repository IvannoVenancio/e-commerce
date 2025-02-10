const jwt = require('jsonwebtoken');
const { permission } = require('process');

function gerarToken(User) {
    const chaveSecreta = 'sua_chave_secreta'; // Substitua por uma chave secreta adequada
    const token = jwt.sign({
        id: User.id,
        nome: User.nome,
        email: User.email,
        permission: User.permissions
    }, chaveSecreta, {
        expiresIn: '1h' // Token válido por 1 hora
    });

    return token;

}