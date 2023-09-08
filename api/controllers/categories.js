const Category = require('../models/Category')

//Get All Category
const getCategories = async (req, res) => {
  try {
    const categories = await Category.find()
    res.status(200).json(categories)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

//Create Category
const createCategory = async (req, res) => {
  try {
    const newCategory = new Category(req.body)
    await newCategory.save()
    res.status(200).json('Category Successfull added!')
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

//Update Category
const updateCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id)
    if (!category) {
      res.status(404)
      throw new Error('Category Not Found')
    }
    const updateCategory = await Category.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    res.status(200).json(updateCategory)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

//Delete Category
const deleteCategory = async (req, res) => {
  const category = await Category.findById(req.params.id)
  if (!category) {
    res.status(404)
    throw new Error('Category Not Found')
  }
  await Category.deleteOne({ _id: req.params.id })
  res.status(200).json(category)
}

module.exports = {
  createCategory,
  getCategories,
  updateCategory,
  deleteCategory,
}
