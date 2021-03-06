import styled from 'styled-components';

const ButtonStyled = styled.button`
  border: 0;
  border-radius: 4px;
  padding: 12px 16px;
  width: 100%;
  color: var(--cl-grey-10);
  box-shadow: var(--box-shadow-primary);
  outline: none;
  text-transform: uppercase;
  line-height: 1;
  cursor: pointer;
  transition: all ease-in-out 200ms;

  ${({ model }) => model === 'primary' && `
    background: var(--cl-primary);

    &:hover {
      background: var(--cl-primary-100);
    }
  `};

  ${({ model }) => model === 'secondary' && `
    background: var(--cl-secondary);

    &:hover {
      background: var(--cl-secondary-100);
    }
  `};
  
  ${({ model }) => model === 'tertiary' && `
    background: var(--cl-red-60);

    &:hover {
      background: var(--cl-red-100);
    }
  `};

  ${({ model }) => model === 'quaternary' && `
    background-color: transparent;
    color: var(--cl-grey-60);
    box-shadow: none;
    display: inline;

    &:hover {
      text-decoration: underline;
    }
  `};
`;

export { ButtonStyled };
