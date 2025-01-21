const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bodyParser = require('body-parser');

const app = express();
const prisma = new PrismaClient();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/pagamento', async (req, res) => {
  const { nome_completo, email, endereco, cidade, estado, zip_code, nome_no_cartao, numero_cartao, exp_mes, exp_ano, cvv } = req.body;

  const pagamento = await prisma.pagamento.create({
    data: {
      nome_completo,
      email,
      endereco,
      cidade,
      estado,
      zip_code,
      nome_cartao: nome_no_cartao,
      numero_cartao,
      exp_mes: parseInt(exp_mes),
      exp_ano: parseInt(exp_ano),
      cvv
    }
  });

  res.json(pagamento);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
