import React from "react";
import { useQuery } from "@apollo/client";

import ChallengeList from "../components/ChallengeList";
import CategoryMenu from "../components/CategoryMenu";
import ChallengeForm from "../components/ChallengeForm";

import { QUERY_CHALLENGES } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_CHALLENGES);
  const challenges = data?.Challenges || [];

  return loading ? (
    <span>Loading</span>
  ) : (
    <main>
      
      <div className="container">
        <CategoryMenu />
        <ChallengeList
          title="Challenge List Title"
          challenges={challenges || []}
        />
      </div>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: "1px dotted #1a1a1a" }}
        >
          <ChallengeForm />
        </div>
      </div>
    </main>
  );
};

export default Home;