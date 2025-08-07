// create a new file src/modules/models/Users.js
const { db}= require('../../config/database');
const { DataTypes } = require('sequelize');

const User = db.define('User', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	firstName: {
		type: DataTypes.STRING,
		allowNull: false
	},
	lastName: {
		type: DataTypes.STRING,
		allowNull: false
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false
	}
}, {
    // Additional options
    tableName: 'users', 
	timestamps: true
});

module.exports = User;
