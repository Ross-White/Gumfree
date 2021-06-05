const sequelize = require('../config/connection');
const { User, Location, Categories, Ad } = require('../models');

const userData = require('./userSeeds.json');
const locationData = require('./locationSeeds.json');
const categoryData = require('./categorySeeds.json');
const adData = require('./adSeeds.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  await Ad.bulkCreate(adData);
  await Categories.bulkCreate(categoryData);
  await Location.bulkCreate(locationData);
  process.exit(0);
};

seedDatabase();