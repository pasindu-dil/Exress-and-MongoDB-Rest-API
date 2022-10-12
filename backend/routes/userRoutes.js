const express = require("express")
const router = express.Router()
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userController")

const { protect } = require('../middleware/authMiddleware')

router.route('/users').post(registerUser)
router.route('/users/login').post(loginUser)
router.route('/users/me').get(protect,getMe)

module.exports = router
