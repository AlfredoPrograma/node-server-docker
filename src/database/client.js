const { Sequelize } = require('sequelize')

const client = new Sequelize({
  dialect: 'postgres',
  database: process.env.POSTGRES_DB,
  port: process.env.POSTGRES_PORT,
  host: process.env.POSTGRES_HOST ?? 'localhost',
  password: process.env.POSTGRES_PASSWORD,
  username: process.env.POSTGRES_USER,
})

module.exports = client