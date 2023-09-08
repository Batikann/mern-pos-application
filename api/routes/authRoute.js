const express = require('express')
const { login, getAllUser, getUser } = require('../controllers/auth')

const router = express.Router()

router.post('/login', login)
router.get('/users', getAllUser)
router.get('/user/:id', getUser)

module.exports = router
