import React, { useState } from 'react';
import ReactCssModules from 'react-cssmodules';

// Components
import TextField from '../../components/textField/TextField';
import Button from '../../components/button/Button';
import Title from '../../components/title/Title';

// Styles
import styles from './forgotPassword.scss';

const ForgotPassword = () => {
  const [email, setEmail] = useState();

  const handleChange = ({ target }) => setEmail(target.value);

  const handleSubmit = () => {
    // to do after endpoint ready
  };

  return (
    <section styleName="forgot-password">
      <form styleName="forgot-password__form">
        <Title heading="h1" type="primary">Forgot password</Title>
        <p styleName="forgot-password__text">Provide your email address and you will be emailed a password reset link.</p>
        <div styleName="forgot-password__item">
          <TextField id="email" labelText="Email" onChange={handleChange} type="text" value={email} name="email" />
        </div>
        <Button onClick={handleSubmit} model="primary" type="submit">
          Send link
        </Button>
      </form>
    </section>
  );
};

export default ReactCssModules(ForgotPassword, styles);
