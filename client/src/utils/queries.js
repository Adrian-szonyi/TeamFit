import { gql } from '@apollo/client';

export const QUERY_CHALLENGES = gql`
  query getChallenges {
    Challenges {
      _id
      ChallengeText
      ChallengeAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_CHALLENGE = gql`
  query getSingleChallenge {
    Challenge(ChallengeId: $ChallengeId) {
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
