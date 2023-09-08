const express = require('express')
const dotenv = require('dotenv')
const connectDb = require('./config/dbConnection')
const { createCategory } = require('./controllers/categories')
const { createProduct } = require('./controllers/products')
const { createBill } = require('./controllers/bill')
const { register } = require('./controllers/auth')
const cors = require('cors')
const PORT = 5000
const categoryRoute = require('./routes/categoryRoute')
const productRoute = require('./routes/productRoute')
const billRoute = require('./routes/billRoute')
const authRoute = require('./routes/authRoute')

dotenv.config()
connectDb()

const app = express()
app.use(express.json())
app.use(cors())

app.post('/category', createCategory)
app.post('/product', createProduct)
app.post('/bill', createBill)
app.post('/auth/register', register)

app.use('/categories', categoryRoute)
app.use('/products', productRoute)
app.use('/bills', billRoute)
app.use('/auth', authRoute)

app.listen(PORT, () => {
  console.log(`${PORT} listening...`)
})

app.get('/', (req, res) => res.send('Hello World'))
