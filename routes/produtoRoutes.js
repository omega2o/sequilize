const express = require('express');
const router = express.Router();
const db = require('../models');
const Produto = db.Produto;

// Listar todos produtos
router.get('/', async (req, res) => {
  const produtos = await Produto.findAll();
  res.render('index', { produtos });
});

// Mostrar formulário criar produto
router.get('/create', (req, res) => {
  res.render('create');
});

// Criar produto
router.post('/create', async (req, res) => {
  const { nome, preco } = req.body;
  await Produto.create({ nome, preco });
  res.redirect('/produtos');
});

// Mostrar formulário edição
router.get('/edit/:id', async (req, res) => {
  const produto = await Produto.findByPk(req.params.id);
  if (!produto) return res.status(404).send('Produto não encontrado');
  res.render('edit', { produto });
});

// Atualizar produto
router.post('/edit/:id', async (req, res) => {
  const { nome, preco } = req.body;
  await Produto.update({ nome, preco }, { where: { id: req.params.id } });
  res.redirect('/produtos');
});

// Deletar produto
router.post('/delete/:id', async (req, res) => {
  await Produto.destroy({ where: { id: req.params.id } });
  res.redirect('/produtos');
});

module.exports = router;
