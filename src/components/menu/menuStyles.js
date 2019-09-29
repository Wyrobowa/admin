import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MenuStyled = styled.nav`
  display: block;
  margin: 0;
  padding: 0;
`;

const MenuListWrapper = styled.nav`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  ${({ direction }) => direction === 'vertical' && `
    flex-direction: column;
  `}

  ${({ direction }) => direction === 'horizontal' && `
    flex-direction: row;
  `}
`;

const MenuItem = styled.li`
  margin-bottom: 10px;
  border-radius: 4px;
  transition: background-color ease-in-out 200ms;

  &:hover:not(&__item--active) {
    background: #{'hsla(var(--cl-grey-10-hsl), 0.3)'};
  }

  ${({ active }) => active && `
    background: var(--cl-primary);
    box-shadow: 0 12px 20px -10px rgba(0, 172, 193, 0.28), 0 4px 20px 0 rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 172, 193, 0.2);
  `}
`;

const MenuLink = styled(Link)`
  display: flex;
  align-items: center;
  color: var(--cl-grey-10);
  padding: 10px;
  text-decoration: none;
  width: 100%;
`;

export {
  MenuStyled, MenuListWrapper, MenuItem, MenuLink,
};
