import styled from 'styled-components';

const MessageStyled = styled.div`
  font-size: 13px;
  border: 1px solid var(--cl-red-60);
  border-radius: 4px;
  padding: 15px 0;

  ${({ type }) => type === 'error' && `
    color: var(--cl-red-60);
    background: var(--cl-red-20);
  `}
`;

export { MessageStyled };
