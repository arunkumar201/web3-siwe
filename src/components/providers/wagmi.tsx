'use client';

import { useEffect, useState, type ReactNode } from 'react';

import { createWeb3Modal } from '@web3modal/wagmi/react';
import { type State, WagmiProvider } from 'wagmi';

import { getConfig, projectId } from '@/lib/wagmi';

// Create modal

function ContextProvider({
  children,
  initialState,
}: {
  children: ReactNode;
  initialState?: State;
}) {
  const [config] = useState(() => getConfig());

  useEffect(() => {
    const modal = createWeb3Modal({
      wagmiConfig: config,
      projectId,
      themeVariables: {
        '--w3m-z-index': 1,
        '--w3m-accent': '#28cbb7',
      },
    });

    return () => {
      modal.close();
    };
  }, [config]);
  return (
    <WagmiProvider config={config} initialState={initialState}>
      {children}
    </WagmiProvider>
  );
}

export { ContextProvider as WagmiProvider };
