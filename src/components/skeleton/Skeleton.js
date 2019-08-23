import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
import ReactCssModules from 'react-cssmodules';

import styles from './skeleton.scss';

const Item = ({ children, type }) => (
  <div styleName={`skeleton__${type}`}>
    {children}
  </div>
);

Item.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['row-top', 'row-bottom', 'content']).isRequired,
};

class Skeleton extends Component {
  static Item = ReactCssModules(Item, styles);

  render() {
    const {
      children,
      position,
      ...rest
    } = this.props;

    const childrenWithProps = React.Children
      .map(children, child => cloneElement(child, { rest }));

    return (
      <div
        styleName={`skeleton${position ? ` skeleton--${position}` : ''} `}
        {...rest}
      >
        {childrenWithProps}
      </div>
    );
  }
}

Skeleton.propTypes = {
  children: PropTypes.node.isRequired,
  position: PropTypes.string,
};

Skeleton.defaultProps = {
  position: '',
};

export default ReactCssModules(Skeleton, styles);
