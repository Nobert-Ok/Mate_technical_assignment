const mongoose = require('mongoose')

const interestSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    interests: {
      type: String,
      required: [true, 'Please add a text value'],
    },
    preferences: {
      type: String,
      required: [true, 'Please add a text value'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Interest', interestSchema)