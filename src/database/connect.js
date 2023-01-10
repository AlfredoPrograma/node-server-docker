const client = require('./client')

const connectDB = async () => {
  try {
    await client.authenticate()
    console.log('Database connected!')
  } catch (error) {
    console.error('Error connecting to the database: ', error)
  }
}

module.exports = connectDB