const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Challenge {
    _id: ID
    ChallengeText: String
    ChallengeAuthor: String
    createdAt: String
    image: String
    category: Category
    comments: [Comment]
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

  type User {
    _id: ID
    username: String
    email: String
    password: String
    challenges: [Challenge]
  }
  
  type Auth {
    user: User
    token: ID!
  }

  type Query {
    Challenges: [Challenge]!
    User: User
    Challenge(challengeId: ID!): Challenge
    ChallengesbyCategory(category: String, name: String ): [Challenge]!
    categories: [Category]!
  }

  type Mutation {
    addChallenge(ChallengeText: String!, ChallengeAuthor: String!, image: String): Challenge
    addComment(challengeId: ID!, commentText: String!): Challenge
    removeChallenge(challengeId: ID!): Challenge
    removeComment(challengeId: ID!, commentId: ID!): Challenge
    addUser(username: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
