import styled from 'styled-components';

const TitleStyled = styled.h3`
  margin: 0;
  color: var(--cl-grey-80);
  
  ${({ type }) => type === 'primary' && `
    font-size: 30px;
    font-weight: 400;
  `};
  
  ${({ type }) => type === 'secondary' && `
    font-size: 25px;
    font-weight: 700;
  `};
  
  ${({ type }) => type === 'tertiary' && `
    font-size: 18px;
    color: var(--cl-grey-80);
    font-weight: 400;
  `};
`;

export { TitleStyled };
