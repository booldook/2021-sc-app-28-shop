const _ = require('lodash');
const { dateFormat, relPath } = require('../modules/util');

module.exports = (sequelize, { DataTypes, Op }) => {
  const Cate = sequelize.define(
    'Cate',
    {
      id: {
        type: DataTypes.STRING(50),
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    },
    {
      charset: 'utf8',
      collate: 'utf8_general_ci',
      tableName: 'cate',
      paranoid: true,
    }
  );

  Cate.associate = (models) => {
    Cate.belongsToMany(models.Product, {
      foreignKey: {
        name: 'cate_id',
        allowNull: false,
      },
      through: 'cate_product',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  };

  return Cate;
};
