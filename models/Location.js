const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Location extends Model {
    // check pw function
}

Location.init(
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
    },

    {
        sequelize,
        timestamps: false,
        freezeTableName: false,
        underscored: true,
        modelName: 'location',        
    }
)

module.exports = Location;