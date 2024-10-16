import React, { useState } from 'react';

import Message from '../../components/message/Message';

import { ChatContainer, Messages, InputArea, Input, Button } from './chatStyles';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      const newMessage = { text: input, sender: 'user' };
      setMessages(prev => [...prev, newMessage]);
      setInput('');

      const autoReply = { text: `თქვენი შეტყობინება: "${input}"`, sender: 'bot' };
      setTimeout(() => {
        setMessages(prev => [...prev, autoReply]);
      }, 1000);
    }
  };

  return (
    <ChatContainer>
      <Messages>
        {messages.map((msg, index) => (
          <Message key={index} text={msg.text} sender={msg.sender} />
        ))}
      </Messages>
      <InputArea>
        <Input
          type='text'
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder='გთხოვთ, შეიყვანეთ თქვენი შეტყობინება'
        />
        <Button onClick={handleSend}>გაგზავნა</Button>
      </InputArea>
    </ChatContainer>
  );
};

export default Chat;
