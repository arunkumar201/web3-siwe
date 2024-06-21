/* eslint-disable import/named */
import { cookieStorage, createConfig, createStorage } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { injected, walletConnect } from 'wagmi/connectors';

import { env } from '@/env.mjs';

import { transports } from './viem';

export const projectId = env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID;

const metadata = {
  name: 'Wagmi + web3 modal',
  description: 'Wagmi + web3modal',
  url: '',
  icons: [''],
};

export const config = createConfig({
  chains: [mainnet],
  cacheTime: 10_000,
  connectors: [
    injected({
      unstable_shimAsyncInject: 60_000,
    }),
    walletConnect({
      projectId,
      metadata,
    }),
  ],
  ssr: false,
  transports,
  storage: createStorage({
    storage: cookieStorage,
  }),
});
