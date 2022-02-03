import { gql } from '@apollo/client';

export const QUERY_CHALLENGES = gql`
  query getChallenges {
    Challenges {
      _id
      ChallengeText
      ChallengeAuthor
      createdAt
      category {
        name
      }
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
 query {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  query {
    user {
      firstName
      lastName
      challenges {
        _id
        ChallengeText
        ChallengeAuthor
        createdAt
        category {
          name
        }
        image
        comments {
          _id
          commentText
          createdAt
        }
        }
    }
  }
`;


export const QUERY_SINGLE_CHALLENGE = gql`
  query getSingleChallenge($ChallengeId: ID!) {
    Challenge(ChallengeId: $ChallengeId) {
      _id
      ChallengeText
      ChallengeAuthor
      createdAt
      category {
        name
      }
      image
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;
