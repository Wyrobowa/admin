import styled from 'styled-components';

const FormGeneratorStyled = styled.form`
  display: block;
`;

const FormGeneratorItem = styled.div`
  display: flex;
  margin-bottom: 25px;
  align-items: center;
`;

const FormGeneratorField = styled.div`
  width: 50%;
  max-width: 300px;
  margin-right: 25px;

  ${({ stretched }) => stretched && `
    width: 100%;
    max-width: unset;
  `}
`;

export { FormGeneratorStyled, FormGeneratorItem, FormGeneratorField };
