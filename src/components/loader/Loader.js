import React from 'react';

// Styles
import { LoaderSpinner, Spinner } from './loaderStyles';

const Loader = () => (
  <LoaderSpinner>
    <Spinner />
    <Spinner />
  </LoaderSpinner>
);

export default Loader;
