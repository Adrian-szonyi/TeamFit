import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';

import { ADD_CHALLENGE } from '../../utils/mutations';
import { QUERY_CHALLENGES } from '../../utils/queries';
import Auth from '../../utils/auth';

const ChallengeForm = () => {
  const [formState, setFormState] = useState({
    ChallengeText: '',
    ChallengeAuthor: '',
    category: '',
    image: '',
  });
  const [characterCount, setCharacterCount] = useState(0);

  const [addChallenge, { error }] = useMutation(ADD_CHALLENGE, {
    update(cache, { data: { addChallenge } }) {
      try {
        const { Challenges } = cache.readQuery({ query: QUERY_CHALLENGES });

        cache.writeQuery({
          query: QUERY_CHALLENGES,
          data: { Challenges: [addChallenge, ...Challenges] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addChallenge({
        variables: { ...formState },
      });

      setFormState({
        ChallengeText: '',
        ChallengeAuthor: '',
        category: '',
        image: '',
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'ChallengeText' && value.length <= 280) {
      setFormState({ ...formState, [name]: value });
      setCharacterCount(value.length);
    } else if (name !== 'ChallengeText') {
      setFormState({ ...formState, [name]: value });
    }
  };

  return (
    <div>
    {Auth.loggedIn() ? (
      <>  
      <h3>What Challenge would you like to create?</h3>

      <p
        className={`m-0 ${
          characterCount === 280 || error ? 'text-danger' : ''
        }`}
      >
        Character Count: {characterCount}/280
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <form
        className="challengeForm"
        onSubmit={handleFormSubmit}
      >
        <div className="newchallenge">
          <textarea
            name="ChallengeText"
            placeholder="Here's a new Challenge..."
            value={formState.ChallengeText}
            className="form-input"
            style={{ lineHeight: '1.5' }}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="col-12">
          <input
            name="ChallengeAuthor"
            placeholder="Add your name to your Challenge..."
            value={formState.ChallengeAuthor}
            className="form-input"
            onChange={handleChange}
          />
          </div>
        <div className="col-12">
          <input
            name="image"
            placeholder="studying.png, dumbbell.png, budget.png"
            value={formState.image}
            className="form-input"
            onChange={handleChange}
          />
        </div>

        <div className="col-12">
          <button className="btn btn-primary btn-block py-3" type="submit">
            Add Challenge
          </button>
        </div>
        {error && (
          <div className="warning">
            Something went wrong...
          </div>
        )}
      </form>
    </>
    ): (
      <p>
      </p>
    )}
  </div>
  );
};

export default ChallengeForm;
