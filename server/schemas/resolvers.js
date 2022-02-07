const { Challenge, User, Category } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    Challenges: async () => {
      return Challenge.find().sort({ createdAt: -1 });
    },

    Challenge: async (parent, { challengeId }) => {
      return Challenge.findOne({ _id: challengeId });
    },
    categories: async () => Category.find(),
    ChallengesbyCategory: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name,
        };
      }

      return Challenge.find(params).populate('category');
    },
  },

  Mutation: {
    addChallenge: async (parent, { ChallengeText, ChallengeAuthor, image }) => {
      return Challenge.create({ ChallengeText, ChallengeAuthor, image });
    },
    addComment: async (parent, { challengeId, commentText }) => {
      return Challenge.findOneAndUpdate(
        { _id: challengeId },
        {
          $addToSet: { comments: { commentText } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    removeChallenge: async (parent, { challengeId }) => {
      return Challenge.findOneAndDelete({ _id: challengeId });
    },
    removeComment: async (parent, { challengeId, commentId }) => {
      return Challenge.findOneAndUpdate(
        { _id: challengeId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
