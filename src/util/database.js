const Sequelize = require("sequelize");
const dbConfig = require('../config/db.config')
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: 'postgres',
    port: 5432,
    pool: dbConfig.pool
});
module.exports = sequelize