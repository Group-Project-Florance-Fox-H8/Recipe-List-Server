'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Recipe.belongsTo(models.User, {foreignKey: 'UserId'})
    }
  };
  Recipe.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty:{
          args: true,
          msg: `Name is required!`
        }
      }
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty:{
          args: true,
          msg: `Type is required!`
        }
      }
    },
    ingredients: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty:{
          args: true,
          msg: `Ingredients is required!`
        }
      }
    },
    steps: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty:{
          args: true,
          msg: `Steps is required!`
        }
      }
    },
    portion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty:{
          args: true,
          msg: `portion is required!`
        }
      }
    },
    cooking_time: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty:{
          args: true,
          msg: `Cooking Time is required!`
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};