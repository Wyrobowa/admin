import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Components
import Loader from '../loader/Loader';

// Styles
import { LoaderWrapper } from './appLoaderStyles';

const AppLoader = ({ loading, children }) => (
  <Fragment>
    {loading === 'loading'
      ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )
      : <Fragment>{ children }</Fragment>
    }
  </Fragment>
);

AppLoader.propTypes = {
  loading: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default AppLoader;
