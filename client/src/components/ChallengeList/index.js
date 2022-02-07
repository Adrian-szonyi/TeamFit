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

  <h1 className='Homepage'>Join a new challenge today!</h1>

    {Auth.loggedIn() ? (
      <>
       <div className="grid">
      {challenges &&
        challenges.map((challenge) => (
          <div key={challenge._id} className="card my-2">
            <h4>
              {challenge.ChallengeAuthor} <br />
              <span style={{ fontSize: "1rem" }}>
                created at {challenge.createdAt}
              </span>        
              <img 
          src={`/images/${challenge.image}`}
        />
            </h4>
            <div>
              <h2>{challenge.ChallengeText}</h2>
              
            </div>
            {/* Create a link to this Challenge's page to view its comments using `<Link>` component */}
            <Link
                        to={`/Challenges/${challenge._id}`}
            >
              <button>Join This Challenge</button>
            </Link>
          </div>
        ))}

    
    </div>
    </>
  ): (
    <p>
      You need to be logged in to create a new Challenge. Please{' '}
      <Link to="/login"><button>login</button></Link> or <Link to="/signup"><button>signup</button></Link>
    </p>
  )}
</div>
  )

};

export default ChallengeList;