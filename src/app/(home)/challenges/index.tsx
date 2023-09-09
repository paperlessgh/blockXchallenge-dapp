"use client";

// components
import ChallengeItem from "./challenge-item";

// hooks
import { useChallenges } from "@/common/hooks";

const Challenges = () => {
  const { data: challenges, loading } = useChallenges();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="px-0 md:px-4 mx-auto max-w-[1012px]">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {challenges?.map((challenge, index) => (
          <ChallengeItem key={index} challenge={challenge} />
        ))}
      </div>
      <div className="px-3 text-center md:px-0">
        <button
          type="button"
          className="button px-[22px] mt-4 w-full"
        >
          Load more
        </button>
      </div>
    </div>
  );
};

export default Challenges;
