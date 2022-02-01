import { gql } from '@apollo/client';

export const ADD_CHALLENGE = gql`
  mutation addChallenge($ChallengeText: String!, $ChallengeAuthor: String!) {
    addChallenge(ChallengeText: $ChallengeText, ChallengeAuthor: $ChallengeAuthor) {
      _id
      ChallengeText
      ChallengeAuthor
      createdAt
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
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;


export const ADD_COMMENT = gql`
  mutation addComment($ChallengeId: ID!, $commentText: String!) {
    addComment(ChallengeId: $ChallengeId, commentText: $commentText) {
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
