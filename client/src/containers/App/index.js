import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import ErrorBoundary from '../../components/ErrorBoundary';
import Layout from '../../components/Layout';
import Spinner from '../../components/Spinner';
import Routes from '../../routes';

const TITLE = 'ORNS';

const App = () => {
  return (
    <>
    <Helmet>
          <title>{ TITLE }</title>
      </Helmet>
    <ErrorBoundary>
      <Layout>
        <Suspense fallback={<Spinner />}>
          <Routes />
        </Suspense>
      </Layout>
    </ErrorBoundary>
    </>
  );
};

export default App;
