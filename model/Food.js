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
    author_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ingredients: {
      type: DataTypes.JSON, // Use JSON for storing an array of ingredients
      allowNull: false,
    },
    instructions: {
      type: DataTypes.JSON, // Use JSON for storing an array of instructions
      allowNull: false,
    },
    cook_time: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // image: {
    // type: DataTypes.BLOB,
    // allowNull: false
    // }
},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "food",
  }
);

module.exports = Food;
