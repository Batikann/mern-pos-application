const mongoose = require('mongoose')

const BillSchema = mongoose.Schema(
  {
    customerName: { type: String, require: true },
    customerPhoneNumber: { type: String, require: true },
    paymentMethod: { type: String, require: true },
    cartItems: { type: Array, require: true },
    subTotal: { type: Number, require: true },
    tax: { type: Number, require: true },
    totalAmount: { type: Number, require: true },
  },
  { timestamps: true }
)

const Bill = mongoose.model('Bills', BillSchema)
module.exports = Bill
