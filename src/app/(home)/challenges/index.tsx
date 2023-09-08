// components
import ChallengeItem from "./challenge-item";

const Challenges = () => {
  return (
    <div className="px-0 md:px-4 mx-auto max-w-[1012px]">
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
        {new Array(12).fill(0).map((_, index) => (
          <ChallengeItem key={index} />
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
