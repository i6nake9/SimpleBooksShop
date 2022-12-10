const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
	'node-complete',
	process.env.DB_LOGIN,
	process.env.DB_PASSWORD,
	{
		host: 'localhost',
		dialect:
			'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
	}
);

module.exports = sequelize;
