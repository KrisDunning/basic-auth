// Create a Sequelize Model
const {DataTypes } = require('sequelize');
const sequelizeDatabase = require('../../server.js');

const UsersModel = sequelizeDatabase.define('Users', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Attach beforeCreate Hook to the UserModel.
UsersModel.beforeCreate((user) => {
  console.log('our user', user);
});

module.exports = {UsersModel};
