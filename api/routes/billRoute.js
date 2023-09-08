const express = require('express')
const { getBills, updateBill, deleteBill } = require('../controllers/bill')

const router = express.Router()

router.get('/get-all', getBills)
router.route('/:id').put(updateBill).delete(deleteBill)

module.exports = router
