const asyncHandler = require('express-async-handler')

const Interest = require('../model/interestmodel')
const User = require('../model/usermodel')

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getInterest = asyncHandler(async (req, res) => {
  const interests = await Interest.find({ user: req.user.id })

  res.status(200).json(interests)
})


  
// @desc    Get all goals
// @route   GET /api/goals
// @access  Private
const allInterest = asyncHandler(async (req, res) => {
    const interests = await Interest.find({ goal: req.goal })
    res.status(200).json(interests)
})




// @desc    Set goal
// @route   POST /api/goals
// @access  Private
const setInterest = asyncHandler(async (req, res) => {
  if (!req.body.interests || !req.body.preferences) {
    res.status(400)
    throw new Error('Please add a text field')
  }

  const interest = await Interest.create({
    interests: req.body.interests,
    preferences: req.body.preferences,
    user: req.user.id,
  })

  res.status(200).json(interest)
})



// @desc    Update goal
// @route   PUT /api/goals/:id
// @access  Private
const updateInterest = asyncHandler(async (req, res) => {
  const interest = await Interest.findById(req.params.id)

  if (!interest) {
    res.status(400)
    throw new Error('Interest not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the goal user
  if (interest.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const updatedinterests = await Interest.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedinterests)
})






// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteInterest = asyncHandler(async (req, res) => {
  const interest = await Interest.findById(req.params.id)

  if (!interest) {
    res.status(400)
    throw new Error('Interest not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the goal user
  if (interest.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  await interest.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getInterest,
  setInterest,
  updateInterest,
  deleteInterest,
  allInterest,
}