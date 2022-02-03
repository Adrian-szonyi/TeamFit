const { Challenge, User, Category } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    Challenges: async () => {
      return Challenge.find().sort({ createdAt: -1 });
    },

    Challenge: async (parent, { ChallengeId }) => {
      return Challenge.findOne({ _id: ChallengeId });
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
    addChallenge: async (parent, { ChallengeText, ChallengeAuthor }) => {
      return Challenge.create({ ChallengeText, ChallengeAuthor });
    },
    addComment: async (parent, { ChallengeId, commentText }) => {
      return Challenge.findOneAndUpdate(
        { _id: ChallengeId },
        {
          $addToSet: { comments: { commentText } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    removeChallenge: async (parent, { ChallengeId }) => {
      return Challenge.findOneAndDelete({ _id: ChallengeId });
    },
    removeComment: async (parent, { ChallengeId, commentId }) => {
      return Challenge.findOneAndUpdate(
        { _id: ChallengeId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
