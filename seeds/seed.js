const sequelize = require('../config/connection');
const { User, Location, Categories, Item } = require('../models');

const userData = require('./userSeeds.json');
const locationData = require('./locationSeeds.json');
const categoryData = require('./categorySeeds.json');
const itemData = require('./itemSeeds.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await Location.bulkCreate(locationData);
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  await Categories.bulkCreate(categoryData);
  await Item.bulkCreate(itemData);
  process.exit(0);
};

seedDatabase();