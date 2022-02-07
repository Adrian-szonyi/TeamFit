import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const ChallengeList = ({ challenges, title }) => {
  if (!challenges?.length) {
  //   return <h3>No Challenges Yet</h3>;
  // }
  }

  return (
<div>
    <h3>Create your next Challenge!</h3>
    {Auth.loggedIn() ? (
      <>
       <div className="grid">
      {challenges &&
        challenges.map((challenge) => (
          <div key={challenge._id} className="card my-2">
            <h4>
              {challenge.ChallengeAuthor} <br />
              <span style={{ fontSize: "1rem" }}>
                created this Challenge on {challenge.createdAt}
              </span>        
              <img 
          src={`/images/${challenge.image}`}
        />
            </h4>
            <div>
              <p>{challenge.ChallengeText}</p>
              
            </div>
            {/* Create a link to this Challenge's page to view its comments using `<Link>` component */}
            <Link
                        to={`/Challenges/${challenge._id}`}
            >
              Request to join this Challenge
            </Link>
          </div>
        ))}

    
    </div>
    </>
  ): (
    <p>
      You need to be logged in to create a new Challenge. Please{' '}
      <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
    </p>
  )}
</div>
  )

};

export default ChallengeList;