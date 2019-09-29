import React, { Component, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';

// Styles
import {
  TableStyled, HeaderStyled, CellStyled, RowStyled, BodyStyled, HeaderCellStyled,
} from './tableStyles';

class Table extends Component {
  static Header = HeaderStyled;

  static Cell = CellStyled;

  static Row = RowStyled;

  static Body = BodyStyled;

  static HeaderCell = HeaderCellStyled;

  render() {
    const { children, ...rest } = this.props;

    const childrenWithProps = Children.map(children, child => cloneElement(child, { rest }));

    return <TableStyled>{childrenWithProps}</TableStyled>;
  }
}

Table.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Table;
