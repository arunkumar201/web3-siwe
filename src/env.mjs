/* eslint-disable @typescript-eslint/naming-convention */

import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

const env = createEnv({
  server: {
    NODE_ENV: z.enum(['development', 'test', 'production']),
  },
  client: {
    NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID: z.string(),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID,
  },
});

export { env };
