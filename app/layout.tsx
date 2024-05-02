"use client";
import React from "react";

import { Rubik } from "next/font/google";
import "./globals.css";
import cn from "@/lib/utils";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import { createConfig, WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { http } from 'viem';
import { mainnet, optimism, base } from 'viem/chains';

const config = createConfig({
  chains: [mainnet, optimism, base],
  multiInjectedProviderDiscovery: false,
  transports: {
    [mainnet.id]: http(),
    [optimism.id]: http(),
    [base.id]: http(),
  },
});

const queryClient = new QueryClient();

const rubikTitle = Rubik({ subsets: ["latin"], variable: "--title-font" });
const rubikBody = Rubik({ subsets: ["latin"], variable: "--body-font" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          rubikTitle.variable,
          rubikBody.className,
          rubikBody.variable
        )}
      >
        <DynamicContextProvider
          settings={{
            // Find your environment id at https://app.dynamic.xyz/dashboard/developer
            environmentId: "a4a84b78-5ff6-4e32-8d05-db84f058b808",
            walletConnectors: [EthereumWalletConnectors],
          }}
        >
          <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
              <DynamicWagmiConnector>
                <Header />
                {children}
                <Footer />
              </DynamicWagmiConnector>
            </QueryClientProvider>
          </WagmiProvider>
        </DynamicContextProvider>
      </body>
    </html>
  );
}
