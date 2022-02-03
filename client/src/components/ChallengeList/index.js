import React from "react";
// Import `<Link>` component from React Router for internal hyperlinks
import { Link } from "react-router-dom";

const ChallengeList = ({ challenges, title }) => {
  if (!challenges?.length) {
    return <h3>No Challenges Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {challenges &&
        challenges.map((challenge) => (
          <div key={challenge._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {challenge.ChallengeAuthor} <br />
              <span style={{ fontSize: "1rem" }}>
                created this Challenge on {challenge.createdAt}
              </span>
            </h4>
            <div className="card-body bg-light p-2">
              <p>{challenge.ChallengeText}</p>
            </div>
            {/* Create a link to this Challenge's page to view its comments using `<Link>` component */}
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/Challenges/${challenge._id}`}
            >
              Request to join this Challenge
            </Link>
          </div>
        ))}
    </div>
  );
};

export default ChallengeList;