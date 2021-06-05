const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Item extends Model {
}

Item.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        offered: {
            type: DataTypes.BOOLEAN,
        },
        available: {
            type: DataTypes.BOOLEAN,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'category',
                key: 'id',
            },
        },
        location_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'location',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'item',        
    }
);

module.exports = Item;