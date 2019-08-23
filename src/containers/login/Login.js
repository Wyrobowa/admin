import React, { useEffect, useState } from 'react';
import ReactCssModules from 'react-cssmodules';
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

// Services
import { getBearerToken } from '../../services/authService';

// Styles
import styles from './login.scss';

const Login = ({ requestLoginAction, loginStatus, history }) => {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (loginStatus.loggedIn || getBearerToken()) {
      history.push('/admin/dashboard');
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
    <section styleName="login">
      <form styleName="login__form">
        <div styleName="login__title">
          <Title heading="h1" type="primary">Sign in</Title>
        </div>
        {loginStatus.errorMsg
          && (
            <div styleName="login__item">
              <Message msg={loginStatus.errorMsg} type="error" />
            </div>
          )
        }

        <div styleName="login__item">
          <TextField id="email" labelText="Email" onChange={handleChange} type="text" value={login.email} name="email" />
        </div>
        <div styleName="login__item">
          <TextField id="password" labelText="Password" onChange={handleChange} type="password" value={login.password} name="password" />
        </div>

        <Button onClick={handleSubmit} model="primary" type="submit">
          Sign in
        </Button>
      </form>

      <div styleName="login__footer">
        <Button onClick={toggleModalVisibility} model="quaternary" type="button">
          Forgot password?
        </Button>
      </div>

      {isModalVisible
        && (
          <Modal onToggleModalVisibility={toggleModalVisibility} shade>
            <ForgotPassword />
          </Modal>
        )
      }
    </section>
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
)(ReactCssModules(Login, styles));
