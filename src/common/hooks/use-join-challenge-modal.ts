// react
import { useContext } from "react";

// context
import GlobalAppContext from "../contexts/global-context";

// types
import type { AppData } from "@/common/types";
import type { Challenge } from "@/common/types/graphql";

// hooks
const useJoinChallengeModal = () => {
  const { appData, setAppData } = useContext(GlobalAppContext);

  const openModal = () => {
    setAppData((prev: AppData) => ({ ...prev, joinChallengeModalOpen: true }));
  };

  const closeModal = () => {
    setAppData((prev: AppData) => ({ ...prev, joinChallengeModalOpen: false }));
  };

  const setOpen = (isOpen: boolean) => {
    setAppData((prev: AppData) => ({ ...prev, joinChallengeModalOpen: isOpen }));
  };

  const setChallenge = (challenge: Challenge) => {
    setAppData((prev: AppData) => ({ ...prev, selectedJoinChallenge: challenge }));
  };

  return {
    isOpen: appData.joinChallengeModalOpen,
    open: openModal,
    close: closeModal,
    setOpen,
    challenge: appData.selectedJoinChallenge,
    setChallenge,
  };
};

export default useJoinChallengeModal;
