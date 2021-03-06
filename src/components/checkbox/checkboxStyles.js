import styled from 'styled-components';

const CheckboxStyled = styled.div`
  display: block;

  ${({ isSwitch }) => isSwitch && `
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  `}
`;

const CheckboxLabel = styled.label`
  width: 100%;
  height: 100%;
`;

const CheckboxIndicator = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--cl-grey-40);
  transition: all 0.4s;
  border-radius: 34px;

  &::before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: all 0.4s;
    border-radius: 50%;
  }  
`;

const CheckboxInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${CheckboxIndicator} {
    background-color: var(--cl-primary);

    &::before {
      transform: translateX(26px);
    }
  }
`;

export {
  CheckboxStyled, CheckboxLabel, CheckboxInput, CheckboxIndicator,
};
