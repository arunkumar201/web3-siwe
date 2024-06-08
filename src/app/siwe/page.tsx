import { NextPage } from 'next';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const SIWEPage: NextPage = async () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>SIWE</CardTitle>
        <CardDescription>
          Sign in with ethereum is the sign method used to identify users using their unique
          ethereum based wallets.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          You are currently <strong>signed in</strong>.
          <br />
          <br />
          You are registered as a <strong></strong>.
        </p>

        <p>
          You are currently <strong>not signed in</strong>.
        </p>
      </CardContent>
    </Card>
  );
};

export default SIWEPage;
