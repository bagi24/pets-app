import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  InputLabel,
  TextInput,
  ResetButton,
  InputConteiner,
  InputSpace,
} from './confirmPasswordStyles';

const ConfirmPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleReset = () => {
    if (newPassword === confirmPassword) {
      navigate('/login');
    } else {
      setError('Passwords do not match');
    }
  };

  const handlePasswordChange = e => {
    setNewPassword(e.target.value);
    if (error) setError('');
  };

  const handleConfirmPasswordChange = e => {
    setConfirmPassword(e.target.value);
    if (error) setError('');
  };

  return (
    <Container>
      <InputConteiner>
        <InputSpace>
          <InputLabel htmlFor='new-password'>New Password</InputLabel>
          <TextInput
            type='password'
            id='new-password'
            value={newPassword}
            onChange={handlePasswordChange}
          />
        </InputSpace>
        <InputSpace>
          <InputLabel htmlFor='confirm-password'>Confirm Password</InputLabel>
          <TextInput
            type='password'
            id='confirm-password'
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </InputSpace>
      </InputConteiner>
      <ResetButton
        onClick={handleReset}
        disabled={newPassword === '' || confirmPassword === '' || newPassword !== confirmPassword}>
        Reset password
      </ResetButton>
    </Container>
  );
};

export default ConfirmPassword;
