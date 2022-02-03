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
    email: String
    password: String
    firstname: String
    lastName: String
    challenges: [Challenge]
  }
  
  type Auth {
    user: User
    token: String
  }

  type Query {
    Challenges: [Challenge]!
    User: User
    Challenge(ChallengeId: ID!): Challenge
    ChallengesbyCategory(category: String, name: String ): [Challenge]!
    categories: [Category]!
  }

  type Mutation {
    addChallenge(ChallengeText: String!, ChallengeAuthor: String!): Challenge
    addComment(ChallengeId: ID!, commentText: String!): Challenge
    removeChallenge(ChallengeId: ID!): Challenge
    removeComment(ChallengeId: ID!, commentId: ID!): Challenge
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
