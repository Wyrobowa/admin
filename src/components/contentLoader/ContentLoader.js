import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import Loader from '../loader/Loader';

// Reducers
import { getLoaderStatus } from '../../reducers/appStatusReducer';

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

const ContentLoader = ({ loaderStatus }) => (
  <Fragment>
    {loaderStatus
      && (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )
    }
  </Fragment>
);

ContentLoader.propTypes = {
  loaderStatus: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  loaderStatus: getLoaderStatus(state),
});

export default connect(
  mapStateToProps,
)(ContentLoader);
