const { Sequelize, DataTypes } = require('sequelize');
const mysql = require('mysql2')

//---------------------------------------------------------------------------------------------------------------

//Database connection 
const sequelize = new Sequelize('all_userdata', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },

});
(async function () {
  try {
    await sequelize.authenticate()

  } catch (err) {
    console.log(err)
  }
})()

module.exports = { sequelize }