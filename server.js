
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bodyParser = require('body-parser');
const cors = require('cors');

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Listar Clientes
app.get('/clientes', async (req, res) => {
  const clientes = await prisma.cliente.findMany();
  res.json(clientes);
});

// Cadastrar Produto
app.post('/produtos', async (req, res) => {
  const { nome, estoque, preco } = req.body;
  const produto = await prisma.produto.create({ data: { nome, estoque, preco } });
  res.json(produto);
});

// Listar Produtos em Estoque
app.get('/produtos', async (req, res) => {
  const produtos = await prisma.produto.findMany();
  res.json(produtos);
});

// Atualizar Estoque
app.put('/produtos/:id', async (req, res) => {
  const { id } = req.params;
  const { estoque } = req.body;
  const produto = await prisma.produto.update({
    where: { id: parseInt(id) },
    data: { estoque }
  });
  res.json(produto);
});

// Cadastrar Pedido
app.post('/pedidos', async (req, res) => {
  const { clienteId, produtoId, quantidade } = req.body;
  const pedido = await prisma.pedido.create({
    data: {
      clienteId,
      produtoId,
      quantidade
    }
  });
  res.json(pedido);
});

// Listar Pedidos com Detalhes
app.get('/pedidos', async (req, res) => {
  const pedidos = await prisma.pedido.findMany({
    include: { cliente: true, produto: true }
  });
  res.json(pedidos);
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
