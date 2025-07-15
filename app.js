const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const produtoRoutes = require('./routes/produtoRoutes');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.redirect('/produtos');
});

app.use('/produtos', produtoRoutes);

db.sequelize.sync() // cria tabelas se não existirem
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch(err => console.error('Erro ao sincronizar banco', err));

  app.use(express.static('public'));
