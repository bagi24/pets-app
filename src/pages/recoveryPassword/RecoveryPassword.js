import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Container,
  DescriptionText,
  InputLabel,
  EmailInput,
  SendButton,
  InputSpace,
} from './recoveryPasswordStyles';

const RecoveryPassword = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const navigate = useNavigate();

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
      <InputSpace>
        <InputLabel htmlFor='email'>Email</InputLabel>
        <EmailInput
          type='email'
          id='email'
          placeholder='Enter your email'
          value={email}
          onChange={handleChange}
          isValid={isValid}
        />
      </InputSpace>
      <SendButton disabled={!isValid || email === ''} onClick={handleResetPassword}>
        Send reset link
      </SendButton>
    </Container>
  );
};

export default RecoveryPassword;
