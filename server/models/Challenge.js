const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ChallengeSchema = new Schema({
  ChallengeText: {
    type: String,
    required: 'Create your next Challenge!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  ChallengeAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Challenge = model('Challenge', ChallengeSchema);

module.exports = Challenge;
