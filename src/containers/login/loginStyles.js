import styled from 'styled-components';

const LoginStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;

  &__footer {
    font-size: 14px;
    margin: 30px 0;
    color: var(--cl-grey-40);
  }
`;

const LoginForm = styled.form`
  width: 400px;
  text-align: center;
`;

const LoginTitle = styled.div`
  margin-bottom: 35px;
`;

const LoginItem = styled.div`
  margin-bottom: 25px;
`;

const LoginFooter = styled.div`
  font-size: 14px;
  margin: 30px 0;
  color: var(--cl-grey-40);
`;

export {
  LoginStyled, LoginForm, LoginTitle, LoginItem, LoginFooter,
};
