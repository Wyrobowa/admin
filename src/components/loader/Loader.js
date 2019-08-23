import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactCssModules from 'react-cssmodules';

import styles from './loader.scss';

const Loader = ({ loading, children }) => (
  <Fragment>
    {loading === 'loading'
      ? <div>Loading...</div>
      : <Fragment>{ children }</Fragment>
    }
  </Fragment>
);

Loader.propTypes = {
  loading: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ReactCssModules(Loader, styles);
