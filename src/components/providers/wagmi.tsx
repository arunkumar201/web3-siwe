'use client';

import type { ReactNode } from 'react';

import { createWeb3Modal } from '@web3modal/wagmi/react';
import { type State,WagmiProvider } from 'wagmi';

import { config,projectId } from '@/lib/wagmi';

// Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  themeVariables: {
    '--w3m-z-index': 1,
    '--w3m-accent': '#28cbb7',
  },
});

function ContextProvider({
  children,
  initialState,
}: {
  children: ReactNode;
  initialState?: State;
}) {
  return (
    <WagmiProvider config={config} initialState={initialState}>
      {children}
    </WagmiProvider>
  );
}

export { ContextProvider as WagmiProvider };
