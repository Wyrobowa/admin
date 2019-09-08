import React, { Component, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styles
const TableStyled = styled.table`
  width: 100%;
  text-align: left;
  border: 0;
  border-collapse: collapse;
`;

class Table extends Component {
  static Header = styled.thead`
    text-transform: uppercase;
    border-bottom: 1px solid var(--cl-grey-20);
  `;

  static Cell = styled.td`
    padding: 15px;
    
    ${({ textAlign }) => textAlign && `
      text-align: right;
    `}
  `;

  static Row = styled.tr`
    border-bottom: 1px solid var(--cl-grey-20);
    
    &:last-child {
      border: 0;
    }
  `;

  static Body = styled.tbody`
    
  `;

  static HeaderCell = styled.th`
    padding: 15px;
    
    ${({ textAlign }) => textAlign && `
      text-align: right;
    `}
  `;

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
