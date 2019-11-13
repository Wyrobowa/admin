import styled from 'styled-components';
import { InputStyled, LabelStyled } from '../textField/textFieldStyles';

export const Label = styled.label`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  max-width: 100%;
  z-index: 1;
  transform: translate(14px, 20px) scale(1);
  pointer-events: none;
  transition: all 0.2s ease;
  color: var(--cl-grey-40);
`;

export const SelectInput = styled.select`
  position: relative;
  outline: 0;
  box-sizing: border-box;
  height: 56px;
  display: block;
  background: transparent;
  width: 100%;
  font-weight: 500;
  border: 1px solid var(--cl-grey-40);
  border-radius: 4px;
  //box-shadow: 0 0 0 30px var(--cl-grey-10) inset !important;

  &:-webkit-autofill + label,
  &:not([value=""]) + label {
    top: -26px;
    left: -5px;
    font-size: 12px;
    color: var(--cl-primary);
    padding: 0 10px;
    background: var(--cl-grey-10);
  }
`;

export const SelectStyled = styled.div`
  display: block;
  position: relative;
  width: 100%;
  border: 0;

  &:focus-within {
    transition: 500ms;

    ${InputStyled} {
      border-color: var(--cl-primary);
    }

    ${LabelStyled} {
      top: -26px;
      left: -5px;
      font-size: 12px;
      background: var(--cl-grey-10);
      color: var(--cl-primary);
      padding: 0 10px;
    }
  }
`;
