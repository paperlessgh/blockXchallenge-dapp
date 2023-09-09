"use client";

// react
import { Dispatch, SetStateAction, createContext } from "react";

// types
import { AppData } from "@/common/types";
type GlobalContextType = {
  appData: AppData,
  setAppData :Dispatch<SetStateAction<AppData>>
};
// context
const GlobalAppContext = createContext<GlobalContextType>({
  appData: {
    joinChallengeModalOpen: false,
    createChallengeModalOpen: false,
  },
  setAppData: (value: SetStateAction<AppData>) => {}
});

// provider
const GlobalAppProvider = GlobalAppContext.Provider;
const GlobalAppConsumer = GlobalAppContext.Consumer;

export { GlobalAppProvider, GlobalAppConsumer };
export default GlobalAppContext;