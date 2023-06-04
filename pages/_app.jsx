/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
import { useState } from 'react';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RecoilRoot } from 'recoil';
import PropTypes from 'prop-types';
import Head from 'next/head';

const App = ({ Component, pageProps }) => {
  const [queryClient] = useState(() => { return new QueryClient(); });

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydrateState}>
        <RecoilRoot>
          <Head>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <title>Linkbrary</title>
            <link rel="icon" type="icon" href="/favicon.ico" />
          </Head>
          <Component {...pageProps} />
        </RecoilRoot>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default App;
