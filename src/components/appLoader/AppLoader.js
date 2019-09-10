import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import Loader from '../loader/Loader';

// Styles
const LoaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--cl-tp-white-60);
`;

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
