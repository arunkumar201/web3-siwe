'use server';

import { cookies } from 'next/headers';

export const updateDisconnectCookiesAction = async () => {
  return new Promise((resolve, reject) => {
    try {
      cookies().delete('wagmi.io.metamask.disconnected');
      resolve(true);
    } catch (error) {
      reject(error);
    }
  });
};
