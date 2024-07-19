'use client';

import React, { PropsWithChildren, useEffect } from 'react';

import { useAccount } from 'wagmi';

import { updateDisconnectCookiesAction } from '@/actions/updateCookiesAction';

export const WalletUtilsProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { isConnected } = useAccount();

  useEffect(() => {
    if (isConnected) {
      // Disconnect wallet on session end
      updateDisconnectCookiesAction()
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  }, [isConnected]);

  return <div>{children}</div>;
};
