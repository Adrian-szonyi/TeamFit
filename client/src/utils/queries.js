import { gql } from '@apollo/client';

export const QUERY_CHALLENGES = gql`
  query getChallenges($category: ID) {
    Challenges(category: $category) {
      _id
      ChallengeText
      ChallengeAuthor
      createdAt
      category
      image
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      challenges {
        _id
        ChallengeText
        ChallengeAuthor
        createdAt
        category
        image
        comments {
          _id
          commentText
          createdAt
        }
        }
      }
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
