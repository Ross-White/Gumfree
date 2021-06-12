const { Model, DataTypes, STRING } = require('sequelize');
const sequelize = require('../config/connection.js');
const bcrypt = require('bcrypt');
const getLocation = require('../utils/postcodes.js')

class User extends Model {
    checkPassword(pw) {
        return bcrypt.compare(pw, this.password)
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },

        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [6]
            },
        },

        postcode: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            },
        },

        location: {
            type: DataTypes.STRING,
            allowNull: true
        },

    },

    {

        hooks: {
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                newUserData.location = await getLocation(newUserData.postcode);
                return newUserData;
            },
        },

        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',        
    }
)

module.exports = User;