import React, { useState, useEffect } from 'react';

import GoogleLogo from '../../assets/images/logos/Google.png';
import { useNavigate } from 'react-router-dom';
import {
  LoginCon,
  SignCon,
  GoogleSingCon,
  GoogleSing,
  GoogleImg,
  InputCon,
  EmailInput,
  PasswordInput,
  ForgotPassSpan,
  LoginButtonCon,
  LoginButton,
  SignUpTitleSpan,
  LineSpan,
  GoogleSingButton,
  LineCon,
  SingUpLink,
  NameInput,
} from './singUpStyles';

const SingUp = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();
  // Email validation
  useEffect(() => {
    if (email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  }, [email]);

  useEffect(() => {
    if (name && name.length < 4) {
      setNameError('Invalid email address');
    } else {
      setNameError('');
    }
  }, [name]);

  // Password validation (at least 6 characters)
  useEffect(() => {
    if (password && password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
    } else {
      setPasswordError('');
    }
  }, [password]);

  const handleName = e => {
    setName(e.target.value);
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleSingUp = () => {
    navigate('/singup');
  };

  return (
    <LoginCon>
      <SignCon>
        <GoogleSingCon>
          <GoogleSing>
            <GoogleSingButton>
              <GoogleImg src={GoogleLogo} alt='' />
              Continue with Google
            </GoogleSingButton>
            <LineCon>
              <LineSpan />
              or
              <LineSpan />
            </LineCon>
          </GoogleSing>

          <InputCon>
            <NameInput value={name} onChange={handleName} placeholder='Name' />
            {nameError && <span style={{ color: 'red' }}>{nameError}</span>}
            <EmailInput value={email} onChange={handleEmailChange} placeholder='Email' />
            {emailError && <span style={{ color: 'red' }}>{emailError}</span>}
            <PasswordInput
              value={password}
              onChange={handlePasswordChange}
              placeholder='Password'
            />
            {passwordError && <span style={{ color: 'red' }}>{passwordError}</span>}
            <ForgotPassSpan>
              By creating an account you agree with our Terms of Service, Privacy Policy,
            </ForgotPassSpan>
          </InputCon>

          <LoginButtonCon>
            <LoginButton disabled={emailError || passwordError}>Create account</LoginButton>
            <SignUpTitleSpan>
              Already have an account? <SingUpLink onClick={handleSingUp}>Log in</SingUpLink>
            </SignUpTitleSpan>
          </LoginButtonCon>
        </GoogleSingCon>
      </SignCon>
    </LoginCon>
  );
};

export default SingUp;
