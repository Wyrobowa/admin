import styled from 'styled-components';

const UmbrellaStyles = styled.div`
  display:none;

  ${({ active }) => active && `
    width: 100%;
    height: 30px;
    background: var(--cl-aplha-100);
    color: var(--cl-beta-80);
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

/**
 * TODO
@include desktop {
  .umbrella {
    background: var(--cl-aplha-100);
    height: 60px;
    font-size: 1.5rem;
  }
} */

export { UmbrellaStyles };
