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
          <ChallengeForm />
        <CategoryMenu />
        <ChallengeList
          title="Challenge List Title"
          challenges={challenges || []}
        />
        </div>
    </main>
  );
};

export default Home;