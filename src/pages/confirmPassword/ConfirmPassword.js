import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  InputLabel,
  TextInput,
  ResetButton,
  ErrorMessage,
} from './confirmPasswordStyles';

const ConfirmPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleReset = () => {
    if (newPassword === confirmPassword) {
      navigate('/login'); // გადამისამართება login გვერდზე
    } else {
      setError('Passwords do not match'); // შეცდომის შეტყობინება
    }
  };

  const handlePasswordChange = e => {
    setNewPassword(e.target.value);
    if (error) setError(''); // თუ შეცდომა იყო, შლის შეტყობინებას
  };

  const handleConfirmPasswordChange = e => {
    setConfirmPassword(e.target.value);
    if (error) setError(''); // თუ შეცდომა იყო, შლის შეტყობინებას
  };

  return (
    <Container>
      <InputLabel htmlFor='new-password'>New Password</InputLabel>
      <TextInput
        type='password'
        id='new-password'
        placeholder='Enter new password'
        value={newPassword}
        onChange={handlePasswordChange}
      />
      <InputLabel htmlFor='confirm-password'>Confirm Password</InputLabel>
      <TextInput
        type='password'
        id='confirm-password'
        placeholder='Confirm new password'
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>} {/* თუ პაროლები არ ემთხვევა */}
      <ResetButton
        onClick={handleReset}
        disabled={newPassword === '' || confirmPassword === '' || newPassword !== confirmPassword}>
        Reset password
      </ResetButton>
    </Container>
  );
};

export default ConfirmPassword;
