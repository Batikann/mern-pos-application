const express = require('express')
const {
  getProducts,
  updateProduct,
  deleteProduct,
} = require('../controllers/products')

const router = express.Router()

router.get('/get-all', getProducts)
router.route('/:id').put(updateProduct).delete(deleteProduct)

module.exports = router
