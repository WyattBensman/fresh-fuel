const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection"); // Make sure to import your Sequelize instance here

class Food extends Model {}

Food.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    food_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingredients: {
      type: DataTypes.JSON, // Use JSONB for storing an array of ingredients
      allowNull: false,
    },
    instructions: {
      type: DataTypes.JSON, // Use JSONB for storing an array of instructions
      allowNull: false,
    },
},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "food",
  }
);

module.exports = Food;