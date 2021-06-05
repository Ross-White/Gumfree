const User = require('./User');
const Location = require('./Location');
const Categories = require('./Categories');
const Item = require('./Item');



User.hasMany(Item, {
    foreignKey: 'user_id',
})


Item.belongsTo(User, {
    foreignKey: 'user_id',
})


// Item.hasOne(Location, {
//     foreignKey: 'location_id',
// })

Item.belongsTo(Categories, {
    foreignKey: 'category_id',
})

Categories.hasMany(Item, {
    foreignKey: 'category_id',
})

// user has one location
User.belongsTo(Location, {
    foreignKey: 'location_id',
})

// locations have many users
Location.hasMany(User, {
    foreignKey: 'location_id',
})

module.exports = { User, Location, Categories, Item };