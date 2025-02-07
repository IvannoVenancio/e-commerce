const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session'); // Adicionei o express-session
const indexRoutes = require('./routes/routes');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();

app.engine('handlebars', engine({
  defaultLayout: 'main',
  runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true
  }
}));
app.set('view engine', 'handlebars');

// Configuração do express-session
app.use(session({
  secret: 'seuSegredoAqui', // Defina um segredo aleatório aqui
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Defina secure: true em produção, quando usar HTTPS
}));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "Public")));
app.use(indexRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
