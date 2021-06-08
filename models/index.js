const User = require('./User');
const Categories = require('./Categories');
const Item = require('./Item');



User.hasMany(Item, {
    foreignKey: 'user_id',
})

Item.belongsTo(User, {
    foreignKey: 'user_id',
})

Item.belongsTo(Categories, {
    foreignKey: 'category_id',
})

Categories.hasMany(Item, {
    foreignKey: 'category_id',
})



module.exports = { User, Categories, Item };