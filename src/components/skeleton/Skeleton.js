import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';

// Styles
import { SkeletonStyled, SkeletonItem } from './skeletonStyles';

const Item = ({ children, type }) => (
  <SkeletonItem type={type}>
    {children}
  </SkeletonItem>
);

Item.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['row-top', 'row-bottom', 'content']).isRequired,
};

class Skeleton extends Component {
  static Item = Item;

  render() {
    const {
      children,
      position,
      ...rest
    } = this.props;

    const childrenWithProps = React.Children
      .map(children, child => cloneElement(child, { rest }));

    return (
      <SkeletonStyled position={position} {...rest}>
        {childrenWithProps}
      </SkeletonStyled>
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

export default Skeleton;
