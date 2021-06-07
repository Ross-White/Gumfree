const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Categories extends Model {
    // check pw function
}

Categories.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        img_path: {
            type: DataTypes.STRING,
        }
    },

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'category',        
    }
)

module.exports = Categories;