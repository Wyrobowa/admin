import styled from 'styled-components';

const SkeletonStyled = styled.div`
  background: var(--cl-grey-10);
  padding: 10px;
  box-shadow: 0 0 5px var(--cl-grey-40);
  margin-bottom: 30px;
  border-radius: 4px;
`;

const SkeletonItem = styled.div`
  ${({ type }) => type === 'row-top' && `
    border-bottom: 1px solid var(--cl-grey-40);
    margin-bottom: 15px;
    padding-bottom: 15px;
  `}

  ${({ type }) => type === 'content' && `
    display: block;
  `}
`;

export { SkeletonStyled, SkeletonItem };
