const express = require('express')
const router = express.Router()
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
  allGoals,
  goalbyid
} = require('../controller/interestcontroller')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getGoals).post(protect, setGoal)
router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoal)
router.route('/all').get(allGoals)
router.route('/:id').get(goalbyid)

module.exports = router