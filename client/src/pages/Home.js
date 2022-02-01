import React from 'react';
import { useQuery } from '@apollo/client';

import ChallengeList from '../components/ChallengeList';
import ChallengeForm from '../components/ChallengeForm';

import { QUERY_CHALLENGES } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_CHALLENGES);
  const Challenges = data?.Challenges || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <ChallengeForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ChallengeList
              Challenges={Challenges}
              title="Some Feed for Challenge(s)..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
