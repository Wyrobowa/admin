import React from 'react';
import PropTypes from 'prop-types';
import ReactCssModules from 'react-css-modules';

// SVG icons
import Close from './close.svg';
import Cog from './cog.svg';
import Error from './error.svg';
import Plus from './plus.svg';
import Search from './search.svg';
import Checked from './checked.svg';

import styles from './icon.scss';

const Icon = ({
  className, inheritColor, type, ...rest
}) => {
  switch (type) {
    case 'close':
      return (
        <Close
          className={className}
          styleName={inheritColor ? 'inherit-color' : ''}
          {...rest}
        />
      );
    case 'search':
      return (
        <Search
          className={className}
          styleName={inheritColor ? 'inherit-color' : ''}
          {...rest}
        />
      );
    case 'plus':
      return (
        <Plus
          className={className}
          styleName={inheritColor ? 'inherit-color' : ''}
          {...rest}
        />
      );
    case 'cog':
      return (
        <Cog
          className={className}
          styleName={inheritColor ? 'inherit-color' : ''}
          {...rest}
        />
      );
    case 'error':
      return (
        <Error
          className={className}
          styleName={inheritColor ? 'inherit-color' : ''}
          {...rest}
        />
      );
    case 'checked':
      return (
        <Checked
          className={className}
          styleName={inheritColor ? 'inherit-color' : ''}
          {...rest}
        />
      );
    default:
      return false;
  }
};

Icon.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string.isRequired,
  inheritColor: PropTypes.bool.isRequired,
};

Icon.defaultProps = {
  className: null,
};

export default ReactCssModules(Icon, styles);
