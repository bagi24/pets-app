import React, { useState } from 'react';
import { Container, InputLabel, TextInput, ResetButton } from './confirmPasswordStyles';

const ConfirmPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <Container>
      <InputLabel htmlFor='new-password'>New Password</InputLabel>
      <TextInput
        type='password'
        id='new-password'
        placeholder='Enter new password'
        value={newPassword}
        onChange={e => setNewPassword(e.target.value)}
      />

      <InputLabel htmlFor='confirm-password'>Confirm Password</InputLabel>
      <TextInput
        type='password'
        id='confirm-password'
        placeholder='Confirm new password'
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
      />

      <ResetButton>Reset password</ResetButton>
    </Container>
  );
};

export default ConfirmPassword;
