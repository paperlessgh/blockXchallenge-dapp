// react
import { useContext } from "react";

// context
import GlobalAppContext from "../contexts/global-context";

// types
import type { AppData } from "@/common/types";

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

  return {
    isOpen: appData.joinChallengeModalOpen,
    open: openModal,
    close: closeModal,
    setOpen,
  };
};

export default useJoinChallengeModal;
