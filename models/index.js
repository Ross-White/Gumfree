const User = require('./User');
const Location = require('./Location');
const Categories = require('./Categories');
const Item = require('./Item');



User.hasMany(Item, {
    foreignKey: 'user_id'
})


Item.belongsTo(User, {
    foreignKey: 'user_id'
})


Item.hasOne(Location, {
    foreignKey: 'item_id'
})


Item.hasOne(Categories, {
    foreignKey: 'item_id'
})

Categories.hasMany(Item, {
    foreignKey: 'category_id'
})

// user has one location
User.hasOne(Location, {
    foreignKey: 'user_id'
})

// locations have many users
Location.hasMany(User, {
    foreignKey: 'user_id'
})

module.exports = { User, Location, Categories, Item };