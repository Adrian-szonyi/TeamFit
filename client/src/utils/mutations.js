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
