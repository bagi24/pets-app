import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Container,
  DescriptionText,
  InputLabel,
  EmailInput,
  SendButton,
  ErrorText,
} from './recoveryPasswordStyles';

const RecoveryPassword = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const navigate = useNavigate();
  // Regular expression for validating email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    if (email === '') {
      setIsValid(true);
    } else {
      setIsValid(emailRegex.test(email));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email]);

  const handleChange = e => {
    setEmail(e.target.value);
  };

  const handleResetPassword = () => {
    navigate('/confirmPassword');
  };

  return (
    <Container>
      <DescriptionText>
        Please enter the email address associated with your account. We'll promptly send you a link
        to reset your password.
      </DescriptionText>
      <InputLabel htmlFor='email'>Email</InputLabel>
      <EmailInput
        type='email'
        id='email'
        placeholder='Enter your email'
        value={email}
        onChange={handleChange}
        isValid={isValid}
      />
      {!isValid && <ErrorText>Invalid email format</ErrorText>}
      <SendButton disabled={!isValid || email === ''} onClick={handleResetPassword}>
        Send reset link
      </SendButton>
    </Container>
  );
};

export default RecoveryPassword;
