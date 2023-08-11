const sequelize = require("../config/connection");
const seedFood = require("./paintingData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedFood();

  process.exit(0);
};

seedAll();
