"use client";

// imports
import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, base, zora } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

// styles
import "./globals.css"; // app
import "@rainbow-me/rainbowkit/styles.css"; // rainbow kit

// layout component
import MainLayout from "@/components/layout";

// ui components
import { Toaster } from "@/components/ui/toaster";

// configuring rainbow kit
const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, base, zora],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID! }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
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
            {/* layout */}
            <MainLayout>{children}</MainLayout>
            {/* toast */}
            <Toaster />
          </RainbowKitProvider>
        </WagmiConfig>
      </body>
    </html>
  );
}
