const express = require('express')
const router = express.Router()
const {
  getInterest,
  setInterest,
  updateInterest,
  deleteInterest,
  allInterest,
} = require('../controller/interestcontroller')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getInterest).post(protect, setInterest)
router.route('/:id').delete(protect, deleteInterest).put(protect, updateInterest)
router.route('/all').get(allInterest)

module.exports = router