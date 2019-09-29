import React, { useState } from 'react';

// Components
import TextField from '../../components/textField/TextField';
import Button from '../../components/button/Button';
import Title from '../../components/title/Title';

// Styles
import {
  ForgotPasswordStyled, Form, Item, Text,
} from './forgotPasswordStyles';

const ForgotPassword = () => {
  const [email, setEmail] = useState();

  const handleChange = ({ target }) => setEmail(target.value);

  const handleSubmit = () => {
    // to do after endpoint ready
  };

  return (
    <ForgotPasswordStyled>
      <Form>
        <Title heading="h1" type="primary">Forgot password</Title>
        <Text>Provide your email address and you will be emailed a password reset link.</Text>
        <Item>
          <TextField id="email" labelText="Email" onChange={handleChange} type="text" value={email} name="email" />
        </Item>
        <Button onClick={handleSubmit} model="primary" type="submit">
          Send link
        </Button>
      </Form>
    </ForgotPasswordStyled>
  );
};

export default ForgotPassword;
