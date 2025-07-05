const { Sequelize } = require('sequelize');

const dotenv = require('dotenv');
dotenv.config();	

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	database: process.env.DB_NAME,
	username: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	dialect: 'mysql',
	pool: {
		max: 5,
		min: 0,
		idle: 10000
	}
});


const init = async () => {
	try {
		await db.authenticate();
		console.log('Database connection established successfully.');
		await db.sync(); // Sync all defined models to the DB
		console.log('Database models synchronized successfully.');
	} catch (error) {
		console.error('Unable to connect or sync to the database:', error);
	}
};

module.exports = {
	db,
	init
};

// This code initializes a connection to a MySQL database using Sequelize.
// It reads database configuration from environment variables and exports the Sequelize instance and an initialization function.


