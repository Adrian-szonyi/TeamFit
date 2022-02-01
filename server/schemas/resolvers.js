const { Challenge } = require('../models');

const resolvers = {
  Query: {
    Challenges: async () => {
      return Challenge.find().sort({ createdAt: -1 });
    },

    Challenge: async (parent, { ChallengeId }) => {
      return Challenge.findOne({ _id: ChallengeId });
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
