const { Sequelize } = require('sequelize');

// Usando SQLite pra facilitar setup local
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

// Importar models
const Produto = require('./produto')(sequelize);

const db = {
  sequelize,
  Sequelize,
  Produto
};

module.exports = db;
