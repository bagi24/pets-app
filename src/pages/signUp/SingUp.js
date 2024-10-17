import React, { useState, useEffect } from 'react';

import GoogleLogo from '../../assets/images/logos/Google.png';
import { useNavigate } from 'react-router-dom';
import {
  SingUpCon,
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
  Label,
  InputSpace,
} from './singUpStyles';

const SingUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    if (name && name.length < 3) {
      setNameError('Name must be at least 6 characters');
    } else {
      setNameError('');
    }
  }, [name]);

  useEffect(() => {
    if (email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  }, [email]);

  useEffect(() => {
    if (password && password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
    } else {
      setPasswordError('');
    }
  }, [password]);

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleSingUp = () => {
    navigate('/login');
  };

  const handleForgotPassword = () => {
    navigate('/RecoveryPassword');
  };

  const handleCreateAccount = () => {
    if (!emailError && !passwordError && !nameError && email && password && name) {
      navigate('/', { state: { name } });
    } else {
      console.log('Fill all the fields correctly');
    }
  };

  return (
    <SingUpCon>
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
              <Label> Name</Label>
              <EmailInput value={name} onChange={handleNameChange} />
              {nameError && <span style={{ color: 'red' }}>{nameError}</span>}
            </InputSpace>
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
            <ForgotPassSpan onClick={handleForgotPassword}>
              By creating an account you agree with our Terms of Service, Privacy Policy,
            </ForgotPassSpan>
          </InputCon>

          <LoginButtonCon>
            <LoginButton
              disabled={emailError && passwordError && name}
              onClick={handleCreateAccount}>
              Create account
            </LoginButton>
            <SignUpTitleSpan onClick={handleSingUp}>
              Already have an account? Log in
            </SignUpTitleSpan>
          </LoginButtonCon>
        </GoogleSingCon>
      </SignCon>
    </SingUpCon>
  );
};

export default SingUp;
