import React from 'react';
// Import `<Link>` component from React Router for internal hyperlinks
import { Link } from 'react-router-dom';

const ChallengeList = ({ Challenges, title }) => {
  if (!Challenges.length) {
    return <h3>No Challenges Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {Challenges &&
        Challenges.map((Challenge) => (
          <div key={Challenge._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {Challenge.ChallengeAuthor} <br />
              <span style={{ fontSize: '1rem' }}>
                had this Challenge on {Challenge.createdAt}
              </span>
            </h4>
            <div className="card-body bg-light p-2">
              <p>{Challenge.ChallengeText}</p>
            </div>
            {/* Create a link to this Challenge's page to view its comments using `<Link>` component */}
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/Challenges/${Challenge._id}`}
            >
              Join the discussion on this Challenge.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default ChallengeList;
