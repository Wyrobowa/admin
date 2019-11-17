import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Components
import Button from '../../components/button/Button';
import Table from '../../components/table/Table';

export const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 15px;
`;

export const Cell = styled(Table.Cell)`
  display: flex;
  align-items: center;
`;

export const EditButton = styled(Link)`
  color: var(--cl-tertiary-80);
`;

export const DeleteButton = styled(Button)`
  color: var(--cl-red-60);
`;
