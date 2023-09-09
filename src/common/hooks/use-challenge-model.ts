// react
import { useContext } from "react";

// context
import GlobalAppContext from "../contexts/global-context";

// types
import type { AppData } from "@/common/types";

// hooks
const useChallengeModal = () => {
  const { appData, setAppData } = useContext(GlobalAppContext);

  const openModal = () => {
    setAppData((prev: AppData) => ({ ...prev, challengeModalOpen: true }));
  };

  const closeModal = () => {
    setAppData((prev: AppData) => ({ ...prev, challengeModalOpen: false }));
  };

  const setOpen = (isOpen: boolean) => {
    setAppData((prev: AppData) => ({ ...prev, challengeModalOpen: isOpen }));
  };

  return {
    isOpen: appData.challengeModalOpen,
    open: openModal,
    close: closeModal,
    setOpen,
  };
};

export default useChallengeModal;
