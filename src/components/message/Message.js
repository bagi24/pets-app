import React from 'react';
import {
  MessageContainer,
  AuthorMessage,
  AuthorProfile,
  SpanMessage,
  TimeSpan,
  ProfileCon,
} from './messageStyles';
import Image from '../../assets/images/logos/image 2 (1).png';

const Message = ({ text, sender, time }) => {
  return (
    <MessageContainer sender={sender}>
      <SpanMessage>{text}</SpanMessage>

      {sender === 'bot' && (
        <AuthorMessage>
          <ProfileCon>
            <AuthorProfile src={Image} alt='bot' />
          </ProfileCon>
          <TimeSpan>{time}</TimeSpan>
        </AuthorMessage>
      )}
    </MessageContainer>
  );
};

export default Message;
