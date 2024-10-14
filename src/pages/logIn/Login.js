import React, { useState, useEffect } from 'react';
import SecondaryHeder from '../../components/secondaryHeder/SecondaryHeder';
import Footer from '../../components/footer/Footer';
import GoogleLogo from '../../assets/images/logos/Google.png';
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
} from './loginStyles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Email validation
  useEffect(() => {
    if (email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  }, [email]);

  // Password validation (at least 6 characters)
  useEffect(() => {
    if (password && password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
    } else {
      setPasswordError('');
    }
  }, [password]);

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  return (
    <LoginCon>
      <SecondaryHeder />
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
            <EmailInput value={email} onChange={handleEmailChange} placeholder='Email' />
            {emailError && <span style={{ color: 'red' }}>{emailError}</span>}
            <PasswordInput
              value={password}
              onChange={handlePasswordChange}
              placeholder='Password'
            />
            {passwordError && <span style={{ color: 'red' }}>{passwordError}</span>}
            <ForgotPassSpan> Forgot Password?</ForgotPassSpan>
          </InputCon>

          <LoginButtonCon>
            <LoginButton disabled={emailError || passwordError}>Login</LoginButton>
            <SignUpTitleSpan>Don't have an account? Sign up</SignUpTitleSpan>
          </LoginButtonCon>
        </GoogleSingCon>
      </SignCon>
      <Footer />
    </LoginCon>
  );
};

export default Login;
