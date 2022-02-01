import React from 'react';

// Import the `useParams()` hook from React Router
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

import { QUERY_SINGLE_CHALLENGE } from '../utils/queries';

const SingleChallenge = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { ChallengeId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_CHALLENGE, {
    // Pass the `ChallengeId` URL parameter into query to retrieve this Challenge's data
    variables: { challengeId: ChallengeId },
  });

  const challenge = data?.challenge || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3">
      <h3 className="card-header bg-dark text-light p-2 m-0">
        {challenge.ChallengeAuthor} <br />
        <span style={{ fontSize: '1rem' }}>
          had this Challenge on {challenge.createdAt}
        </span>
      </h3>
      <div className="bg-light py-4">
        <blockquote
          className="p-4"
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            border: '2px dotted #1a1a1a',
            lineHeight: '1.5',
          }}
        >
          {challenge.ChallengeText}
        </blockquote>
      </div>

      <div className="my-5">
        <CommentList comments={challenge.comments} />
      </div>
      <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <CommentForm ChallengeId={challenge._id} />
      </div>
    </div>
  );
};

export default SingleChallenge;