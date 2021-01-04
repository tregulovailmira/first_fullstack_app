'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Superhero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Superhero.init(
    {
      nickName: {
        type: DataTypes.STRING,
        required: true,
        unique: true,
      },
      realName: {
        type: DataTypes.STRING,
        required: true,
      },
      originDescription: DataTypes.STRING,
      superPowers: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: [],
      },
      catchPhrase: {
        type: DataTypes.STRING,
        required: true,
      },
      images: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: [],
      },
    },
    {
      sequelize,
      modelName: 'Superhero',
      underscored: true,
      tableName: 'superheroes',
    }
  );
  return Superhero;
};
