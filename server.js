
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const indexRoutes = require('./routes/routes');
const { engine } = require('express-handlebars');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

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

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "Public")))
app.use(indexRoutes)

app.use('/routes/authRoutes.js', authRoutes);
app.use('/routes/userRoutes.js', userRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});





