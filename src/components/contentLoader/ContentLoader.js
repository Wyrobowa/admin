import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Components
import Loader from '../loader/Loader';

// Reducers
import { getLoaderStatus } from '../../reducers/appStatusReducer';

// Styles
import { LoaderWrapper } from './contentLoaderStyles';

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
