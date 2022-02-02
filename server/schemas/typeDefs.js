const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Challenge {
    _id: ID
    ChallengeText: String
    ChallengeAuthor: String
    createdAt: String
    image: String
    category: Category
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    createdAt: String
  }

  type Category {
    _id: ID
    name: String
  }

  type Query {
    Challenges: [Challenge]!
    Challenge(ChallengeId: ID!): Challenge
  }

  type Mutation {
    addChallenge(ChallengeText: String!, ChallengeAuthor: String!): Challenge
    addComment(ChallengeId: ID!, commentText: String!): Challenge
    removeChallenge(ChallengeId: ID!): Challenge
    removeComment(ChallengeId: ID!, commentId: ID!): Challenge
  }
`;

module.exports = typeDefs;
