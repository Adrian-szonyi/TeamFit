import { gql } from '@apollo/client';

export const ADD_CHALLENGE = gql`
  mutation addChallenge($ChallengeText: String!, $ChallengeAuthor: String!, $image: String!,) {
    addChallenge(ChallengeText: $ChallengeText, ChallengeAuthor: $ChallengeAuthor, image: $image) {
      _id
      ChallengeText
      ChallengeAuthor
      createdAt
      image
      category {
        name
      }
      comments {
        _id
        commentText
      }
    }
  }
`;
export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;
export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;


export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const ADD_COMMENT = gql`
  mutation addComment($challengeId: ID!, $commentText: String!) {
    addComment(challengeId: $challengeId, commentText: $commentText) {
      _id
      ChallengeText
      ChallengeAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;
