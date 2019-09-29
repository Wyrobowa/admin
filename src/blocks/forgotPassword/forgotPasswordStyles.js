import styled from 'styled-components';

const ForgotPasswordStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  width: 400px;
  text-align: center;
  margin-bottom: 50px;
`;

const Item = styled.div`
  margin-bottom: 25px;
`;

const Text = styled.p`
  font-size: 16px;
  color: var(--cl-grey-60);
`;

export {
  ForgotPasswordStyled, Form, Item, Text,
};
