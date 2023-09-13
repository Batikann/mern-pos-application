const express = require('express')
const {
  getProducts,
  updateProduct,
  deleteProduct,
  getProduct,
} = require('../controllers/products')

const router = express.Router()

router.get('/get-all', getProducts)
router.route('/:id').put(updateProduct).delete(deleteProduct).get(getProduct)

module.exports = router
