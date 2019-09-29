import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import { requestLogin } from '../../actions/appStatusActions';

// Components
import TextField from '../../components/textField/TextField';
import Button from '../../components/button/Button';
import Title from '../../components/title/Title';
import Modal from '../../components/modal/Modal';
import Message from '../../components/message/Message';
import ForgotPassword from '../../blocks/forgotPassword/ForgotPassword';

// Reducers
import { getLoginStatus } from '../../reducers/appStatusReducer';

// Styles
import {
  LoginStyled, LoginForm, LoginTitle, LoginItem, LoginFooter,
} from './loginStyles';

const Login = ({ requestLoginAction, loginStatus, history }) => {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (loginStatus.loggedIn) {
      history.push('/');
    }
  });

  const [isModalVisible, setModalVisibility] = useState(false);

  const handleChange = (event) => {
    setLogin({
      ...login,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    requestLoginAction(login);
  };

  const toggleModalVisibility = () => setModalVisibility(!isModalVisible);

  return (
    <LoginStyled>
      <LoginForm>
        <LoginTitle>
          <Title heading="h1" type="primary">Sign in</Title>
        </LoginTitle>
        {loginStatus.errorMsg
          && (
            <LoginItem>
              <Message msg={loginStatus.errorMsg} type="error" />
            </LoginItem>
          )
        }

        <LoginItem>
          <TextField id="email" labelText="Email" onChange={handleChange} type="text" value={login.email} name="email" />
        </LoginItem>
        <LoginItem>
          <TextField id="password" labelText="Password" onChange={handleChange} type="password" value={login.password} name="password" />
        </LoginItem>

        <Button onClick={handleSubmit} model="primary" type="submit">
          Sign in
        </Button>
      </LoginForm>

      <LoginFooter>
        <Button onClick={toggleModalVisibility} model="quaternary" type="button">
          Forgot password?
        </Button>
      </LoginFooter>

      {isModalVisible
        && (
          <Modal onToggleModalVisibility={toggleModalVisibility} shade>
            <ForgotPassword />
          </Modal>
        )
      }
    </LoginStyled>
  );
};

Login.propTypes = {
  requestLoginAction: PropTypes.func.isRequired,
  loginStatus: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  loginStatus: getLoginStatus(state),
});

export default connect(
  mapStateToProps,
  {
    requestLoginAction: requestLogin,
  },
)(Login);
