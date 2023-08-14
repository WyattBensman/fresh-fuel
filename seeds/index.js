const sequelize = require("../config/connection");
const seedFood = require("./foodData");

const { User } = require("../model");

const userData = require("./userData.json");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedFood();

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedAll();
