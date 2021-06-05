const User = require('./User');
const Location = require('./Location');
const Categories = require('./Categories');
const Ad = require('./Ad');

// user can have multiple ads
User.hasMany(Ad, {
    foreignKey: 'user_id'
})

// an ad belongs to one user
Ad.belongsTo(User, {
    foreignKey: 'user_id'
})

// an ad is located in one location
Ad.hasOne(Location, {
    foreignKey: 'ad_id'
})

// ad has one category
Ad.hasOne(Categories, {
    foreignKey: 'ad_id'
})

Categories.hasMany(Ad, {
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

module.exports = { User, Location, Categories, Ad };