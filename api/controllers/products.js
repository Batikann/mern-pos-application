const Product = require('../models/Product')

//Get All Product
const getProducts = async (req, res) => {
  try {
    const products = await Product.find()
    res.status(200).json(products)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

//Create Product
const createProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body)
    await newProduct.save()
    res.status(200).json('Product Successfull added!')
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

//Update Product
const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    if (!product) {
      res.status(404)
      throw new Error('Product Not Found')
    }
    const updateProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    res.status(200).json(updateProduct)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

//Delete Product
const deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (!product) {
    res.status(404)
    throw new Error('Product Not Found')
  }
  await Product.deleteOne({ _id: req.params.id })
  res.status(200).json(product)
}

module.exports = {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
}
