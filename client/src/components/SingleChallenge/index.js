import React from "react";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";

function SingleChallenge(item) {
    const [state, dispatch] = useStoreContext();
  const {
    image,
    Challengetext,
    category,
    ChallengeAuthor,
    _id,
  } = item;

  return (
    <div className="card px-1 py-1">
      <Link to={`/challenges/${_id}`}>
        {/* <img
          src={`/images/${image}`}
        /> */}
        <div>{Challengetext}</div>
        <div>{category}</div>
        <div>{ChallengeAuthor}</div>
      </Link>
      <button>Request to join</button>
    </div>
  );
}

export default SingleChallenge;