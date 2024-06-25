import '@/styles/globals.css';

import React from 'react';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { headers } from 'next/headers';
import { cookieToInitialState } from 'wagmi';

import { Header } from '@/components/header';
import { QueryProvider } from '@/components/providers/query';
import { WagmiProvider } from '@/components/providers/wagmi';
import { getConfig } from '@/lib/wagmi';

const inter = Inter({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// ====================

const RootLayout: React.FC<React.PropsWithChildren> = async ({ children }) => {
  const initialState = cookieToInitialState(getConfig(), headers().get('cookie'));

  return (
    <html lang="en" className="dark min-h-screen">
      <body className={`${inter.variable} font-inter`}>
        <QueryProvider>
          <WagmiProvider initialState={initialState}>
            <main>
              <Header />
              <div className="flex h-full w-full items-start justify-center p-5 pt-[15vh]">
                {children}
              </div>
            </main>
          </WagmiProvider>
        </QueryProvider>
      </body>
    </html>
  );
};

// ====================

const metadata: Metadata = {
  title: 'SIWE | NextAuth',
  description: 'Simple example of NextAuth with SIWE',
  icons: {
    icon: './favicon.ico',
  },
};

export { RootLayout as default, metadata };
