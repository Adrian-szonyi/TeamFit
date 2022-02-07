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
    <div className="congrats">
      <h1 className="Congratulations">
         You have joined a new challenge!
         </h1>
<img className='confetti' src="/images/confetti.png" alt="confetti"></img>
  <img className='confetti' src="/images/confetti.png" alt="confetti"></img><img className='confetti' src="/images/confetti.png" alt="confetti"></img>
    </div>
  );
};

export default SingleChallenge;
