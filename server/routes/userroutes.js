const express = require('express')
const router = express.Router()
const {
  registerUser,
  loginUser,
  getMe,
  getUsers,
  sendEmail
} = require('../controller/usercontroller')
const { protect } = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)
router.get('/all', getUsers)
router.post('/sendemail', sendEmail)


module.exports = router