const express = require('express')
const dotenv = require('dotenv')
const connectDb = require('./config/dbConnection')

dotenv.config()
connectDb()
const app = express()

const PORT = 5000
app.listen(PORT, () => {
  console.log(`${PORT} listening...`)
})

app.get('/', (req, res) => res.send('Hello World'))
