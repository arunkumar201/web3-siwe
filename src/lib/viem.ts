import type { Chain } from 'viem';
import { fallback, http } from 'viem';
import { mainnet } from 'viem/chains';

import { env } from '@/env.mjs';

export const transports = {
  [mainnet.id]: fallback([http()]),
} as const;

export type SupportedChain = Chain & {
  id: keyof typeof transports;
};
