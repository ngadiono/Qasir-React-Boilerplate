// Vendor packages
import React from 'react';
import Head from 'next/head';

import Error from 'components/errors';

const Error500 = () => (
  <>
    <Head>
      <title>Error 500 - Internal Server Error</title>
    </Head>
    <Error>
      <img src="/img/errors/500.svg" alt="internal server error" />
      <p>Internal Server Error</p>
    </Error>
  </>
);

export default Error500;
