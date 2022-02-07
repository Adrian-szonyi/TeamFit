import React from 'react';

// Import the `useParams()` hook from React Router
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

import { QUERY_SINGLE_CHALLENGE } from '../utils/queries';

const SingleChallenge = () => {
  
  const { challengeId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_CHALLENGE, {
    variables: { challengeId: challengeId },
  });

  const Challenge = data?.challenge || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3">
      <h3 className="card-header bg-dark text-light p-2 m-0">
        {Challenge.ChallengeAuthor} <br />
        <span style={{ fontSize: '1rem' }}>
          had this Challenge on {Challenge.createdAt}
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
          {Challenge.ChallengeText}
        </blockquote>
      </div>

      <div className="my-5">
        <CommentList comments={Challenge.comments} />
      </div>
      <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <CommentForm challengeId={Challenge._id} />
      </div>
    </div>
  );
};

export default SingleChallenge;
