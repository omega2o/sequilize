const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Produto = sequelize.define('Produto', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    preco: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    }
  }, {
    tableName: 'produtos',
    timestamps: false
  });

  return Produto;
};
