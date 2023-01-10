require('dotenv').config()
require("./database/connect")()

const fs = require('fs')
const express = require('express')
const client = require('./database/client')
const Person = require('./models/person')
const app = express()


app.get('/people', async (req, res) => {
  const people = await Person.findAll()

  res.json(people)
})

app.get('/people/:id', async (req, res) => {
  const { id } = req.params
  const person = await Person.findByPk(id)

  res.json(person)
})

app.get('/health', (req, res) => {
  res.send('Working well')
})

app.get('/seed-db', async (req, res) => {
  const seedQuery = fs.readFileSync('PEOPLE_MOCK_DATA.sql', 'utf-8')

  await client.query(seedQuery)

  res.send('Database seeded!')
})


app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})