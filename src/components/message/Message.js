import React from 'react';
import { MessageContainer } from './messageStyles';

const Message = ({ text, sender }) => {
  return (
    <MessageContainer sender={sender}>
      <span>ძაღლი</span>
      <p>{text}</p>
    </MessageContainer>
  );
};

export default Message;
