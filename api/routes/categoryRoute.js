const express = require('express')
const {
  getCategories,
  updateCategory,
  deleteCategory,
} = require('../controllers/categories')

const router = express.Router()

router.get('/get-all', getCategories)
router.route('/:id').put(updateCategory).delete(deleteCategory)

module.exports = router
