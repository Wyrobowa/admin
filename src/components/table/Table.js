import React, { Component, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import ReactCssModules from 'react-cssmodules';

// Styles
import styles from './table.scss';


const Item = ({ type: TypeTag, children }) => <TypeTag>{children}</TypeTag>;
Item.propTypes = {
  type: PropTypes.oneOf(['thead', 'tbody', 'th', 'tr', 'td']).isRequired,
  children: PropTypes.node,
};

Item.defaultProps = {
  children: '',
};

class Table extends Component {
  static Item = Item;

  render() {
    const { children, props, ...rest } = this.props;

    const childrenWithProps = Children.map(children, child => cloneElement(child, { rest }));

    return <table styleName="table">{childrenWithProps}</table>;
  }
}

Table.propTypes = {
  children: PropTypes.node.isRequired,
  props: PropTypes.node,
};

Table.defaultProps = {
  props: undefined,
};

export default ReactCssModules(Table, styles);
