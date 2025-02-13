
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { engine } = require('express-handlebars');
const path = require('path');
const session = require('express-session');

// Importando as rotas
const indexRoutes = require('./routes/routes');
const userRoutes = require('./routes/userRoutes'); // Atualizado

// Criando a instância do express
const app = express();

// Configurando o motor de visualização handlebars
app.engine('handlebars', engine({
  defaultLayout: 'main',
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true
  }
}));

app.set('view engine', 'handlebars');

// Configuração de middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'Public')));

// Usando as rotas
app.use(indexRoutes); // Rota principal
app.use('/user', userRoutes); // Prefixa as rotas de usuário com '/user'

// Configuração da sessão
app.use(session({
  secret: 'seu-segredo-seguro',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Para ambiente de desenvolvimento, o `secure` pode ser falso
}));

// Inicializando o servidor
app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
