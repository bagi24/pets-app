import React, { useState, useEffect } from 'react';
import SecondaryHeder from '../../components/secondaryHeder/SecondaryHeder';
import Footer from '../../components/footer/Footer';
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
  Label,
  InputSpace,
} from './loginStyles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
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

  // Password validation
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

  const handleSingUp = () => {
    navigate('/singup');
  };

  const handleForgotPassword = () => {
    navigate('/RecoveryPassword');
  };

  const handleLogin = () => {
    if (!emailError && !passwordError && email && password) {
      navigate('/');
    }
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
              OR
              <LineSpan />
            </LineCon>
          </GoogleSing>

          <InputCon>
            <InputSpace>
              <Label> Email</Label>
              <EmailInput value={email} onChange={handleEmailChange} />
              {emailError && <span style={{ color: 'red' }}>{emailError}</span>}
            </InputSpace>
            <InputSpace>
              <Label> Password</Label>
              <PasswordInput value={password} onChange={handlePasswordChange} />
              {passwordError && <span style={{ color: 'red' }}>{passwordError}</span>}
            </InputSpace>
            <ForgotPassSpan onClick={handleForgotPassword}> Forgot Password?</ForgotPassSpan>
          </InputCon>

          <LoginButtonCon>
            {/* Button is disabled if there are validation errors or inputs are empty */}
            <LoginButton
              disabled={!!emailError || !!passwordError || email === '' || password === ''}
              onClick={handleLogin}>
              Login
            </LoginButton>
            <SignUpTitleSpan>
              Don't have an account? <SingUpLink onClick={handleSingUp}>Sing Up</SingUpLink>
            </SignUpTitleSpan>
          </LoginButtonCon>
        </GoogleSingCon>
      </SignCon>
      <Footer />
    </LoginCon>
  );
};

export default Login;
