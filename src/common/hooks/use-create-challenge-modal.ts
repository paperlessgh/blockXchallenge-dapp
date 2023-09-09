// react
import { useContext } from "react";

// context
import GlobalAppContext from "../contexts/global-context";

// types
import type { AppData } from "@/common/types";

// hooks
const useCreateChallengeModal = () => {
  const { appData, setAppData } = useContext(GlobalAppContext);

  const openModal = () => {
    setAppData((prev: AppData) => ({ ...prev, createChallengeModalOpen: true }));
  };

  const closeModal = () => {
    setAppData((prev: AppData) => ({ ...prev, createChallengeModalOpen: false }));
  };

  const setOpen = (isOpen: boolean) => {
    setAppData((prev: AppData) => ({ ...prev, createChallengeModalOpen: isOpen }));
  };

  return {
    isOpen: appData.createChallengeModalOpen,
    open: openModal,
    close: closeModal,
    setOpen,
  };
};

export default useCreateChallengeModal;
