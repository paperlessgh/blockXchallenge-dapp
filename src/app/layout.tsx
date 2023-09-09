"use client";

// react
import { useState } from "react";
// imports
import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { optimismGoerli } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

// styles
import "./globals.css"; // app
import "@rainbow-me/rainbowkit/styles.css"; // rainbow kit

// layout component
import MainLayout from "@/components/layout";

// shared components
import { CreateChallengeModal } from "@/components/shared";

// ui components
import { Toaster } from "@/components/ui/toaster";

// providers
import { GlobalAppProvider } from "@/common/contexts/global-context";

// types
import { AppData } from "@/common/types";

// configuring rainbow kit
const { chains, publicClient } = configureChains(
  [optimismGoerli],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID! }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: process.env.APP_NAME!,
  projectId: process.env.WEB3_PROJECT_ID!,
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [appData, setAppData] = useState<AppData>({
    challengeModalOpen: false,
  });

  return (
    <html lang="en">
      <body className="bg-skin-bg font-sans text-base text-skin-text antialiased">
        {/* wagmi confog */}
        <WagmiConfig config={wagmiConfig}>
          {/* rainbow kit provider */}
          <RainbowKitProvider
            chains={chains}
            theme={darkTheme({
              accentColorForeground: "#1c1b20",
              borderRadius: "small",
              fontStack: "system",
              overlayBlur: "small",
            })}
          >
            {/* global context */}
            <GlobalAppProvider value={{ appData, setAppData }}>
              {/* layout */}
              <MainLayout>{children}</MainLayout>
              {/* modals */}
              <CreateChallengeModal />
              {/* toast */}
              <Toaster />
            </GlobalAppProvider>
          </RainbowKitProvider>
        </WagmiConfig>
      </body>
    </html>
  );
}
