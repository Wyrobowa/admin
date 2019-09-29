import styled from 'styled-components';

const FileInputStyled = styled.div`
  display: block;
`;

const Input = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;

  & + label {
    font-size: 16px;
    padding: 15px;
    border-radius: 4px;
    color: white;
    background: var(--cl-primary);
    display: inline-block;
    cursor: pointer;
    transition: all ease-in-out 200ms;
  }

  &:focus + label,
  & + label:hover {
    background: var(--cl-primary-100);
  }
`;

export { FileInputStyled, Input };
