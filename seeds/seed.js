const sequelize = require('../config/connection');
const { User, Location, Categories, Item } = require('../models');

const userData = require('./userSeeds.json');
const locationData = require('./locationSeeds.json');
const categoryData = require('./categorySeeds.json');
const itemData = require('./itemSeeds.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  await Item.bulkCreate(itemData);
  await Categories.bulkCreate(categoryData);
  await Location.bulkCreate(locationData);
  process.exit(0);
};

seedDatabase();