import React, { useState } from 'react';

import Message from '../../components/message/Message';
import Image from '../../assets/images/logos/image 2 (1).png';

import {
  ChatContainer,
  Messages,
  InputArea,
  Input,
  ChatSpace,
  CoverImage,
  ImageCon,
  FaqSpace,
  Span,
  FaqSpan,
  Gpt,
} from './chatStyles';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      const currentTime = new Date().toLocaleTimeString();
      const newMessage = { text: input, sender: 'user', time: currentTime };
      setMessages(prev => [...prev, newMessage]);
      setInput('');

      const autoReply = {
        text: 'გამარჯობათ, რით შემიძლიათ დაგეხმაროთ?',
        sender: 'bot',
        time: new Date().toLocaleTimeString(),
      };
      setTimeout(() => {
        setMessages(prev => [...prev, autoReply]);
      }, 1000);
    }
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <ChatSpace>
      <ImageCon>
        <CoverImage src={Image} alt='' />
      </ImageCon>
      <ChatContainer>
        <Messages>
          {messages.map((msg, index) => (
            <Message key={index} text={msg.text} sender={msg.sender} time={msg.time} />
          ))}
        </Messages>
        <InputArea>
          <FaqSpace>
            <Gpt>🤔 What is WappGPT?</Gpt>
            <FaqSpan>
              <Span>💰Pricing</Span>
              <Span>🙋‍♂️ FAQs</Span>
            </FaqSpan>
          </FaqSpace>
          <Input
            type='text'
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder='Type your message here...'
          />
        </InputArea>
      </ChatContainer>
    </ChatSpace>
  );
};

export default Chat;
