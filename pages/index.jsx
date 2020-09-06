import React from 'react';
import Head from 'next/head';

import { Hero } from '@/components';

import { PrimaryLayout } from '@/layouts';

const Home = () => (
  <div>
    <Head>
      <title> Gem Finder </title> <link rel="icon" href="/favicon.ico" />
    </Head>{' '}
    <PrimaryLayout>
      <div> Hello im a body </div> <Hero />
    </PrimaryLayout>{' '}
  </div>
);

export default Home;
