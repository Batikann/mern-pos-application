const Bill = require('../models/Bill')

//Get All Bill
const getBills = async (req, res) => {
  try {
    const bills = await Bill.find()
    res.status(200).json(bills)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

//Create Bill
const createBill = async (req, res) => {
  try {
    const newBill = new Bill(req.body)
    await newBill.save()
    res.status(200).json('Bill Successfull added!')
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

//Update Bill
const updateBill = async (req, res) => {
  try {
    const bill = await Bill.findById(req.params.id)
    if (!bill) {
      res.status(404)
      throw new Error('Bill Not Found')
    }
    const updateBill = await Bill.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    res.status(200).json(updateBill)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

//Delete Bill
const deleteBill = async (req, res) => {
  const bill = await Bill.findById(req.params.id)
  if (!bill) {
    res.status(404)
    throw new Error('Bill Not Found')
  }
  await Bill.deleteOne({ _id: req.params.id })
  res.status(200).json(Bill)
}

module.exports = {
  createBill,
  getBills,
  updateBill,
  deleteBill,
}
