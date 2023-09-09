import { Challenge } from "./graphql";

export type AppData = {
  createChallengeModalOpen: boolean;
  joinChallengeModalOpen: boolean;
  selectedJoinChallenge: Challenge | null;
};