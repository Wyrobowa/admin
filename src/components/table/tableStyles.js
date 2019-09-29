import styled from 'styled-components';

const TableStyled = styled.table`
  width: 100%;
  text-align: left;
  border: 0;
  border-collapse: collapse;
`;

const HeaderStyled = styled.thead`
  text-transform: uppercase;
  border-bottom: 1px solid var(--cl-grey-20);
`;

const CellStyled = styled.td`
  padding: 15px;
  
  ${({ textAlign }) => textAlign && `
    text-align: right;
  `}
`;

const RowStyled = styled.tr`
  border-bottom: 1px solid var(--cl-grey-20);
  
  &:last-child {
    border: 0;
  }
`;

const BodyStyled = styled.tbody`
  
`;

const HeaderCellStyled = styled.th`
  padding: 15px;
  
  ${({ textAlign }) => textAlign && `
    text-align: right;
  `}
`;

export {
  TableStyled, HeaderStyled, CellStyled, RowStyled, BodyStyled, HeaderCellStyled,
};
