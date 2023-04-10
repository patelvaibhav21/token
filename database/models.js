const { sequelize } = require('./database')
const { DataTypes } = require('sequelize');
//User model


const User = sequelize.define('User', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    }

}, {
    timestamps: false,
    tableName:'new2_user'
})
// console.log(User instanceof (Promise))
// User.sync()

module.exports = { User }


