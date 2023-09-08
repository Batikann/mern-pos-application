const User = require('../models/User')
const bcrypt = require('bcrypt')

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    })
    await newUser.save()
    res.status(200).json(newUser)
  } catch (error) {
    res.status(500).json(error)
  }
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email: email })
    if (!user) res.status(400).json({ msg: 'User does not exist.' })
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials.' })
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

const getAllUser = async (req, res) => {
  try {
    const users = await User.find()
    res.status(200).json(users)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    if (!user) {
      res.status(404).json('User Not Found')
    }
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

module.exports = { register, login, getAllUser, getUser }
