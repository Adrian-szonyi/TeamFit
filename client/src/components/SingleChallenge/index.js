import React from "react";
import { Link } from "react-router-dom";

function SingleChallenge(item) {
  const {
    image,
    Challengetext,
    _id,
    price,
    quantity
  } = item;

  return (
    <div className="card px-1 py-1">
      <Link to={`/challenges/${_id}`}>
        <img
          alt={name}
          src={`/images/${image}`}
        />
        <p>{name}</p>
      </Link>
      <button>Request to join</button>
    </div>
  );
}

export default SingleChallenge;