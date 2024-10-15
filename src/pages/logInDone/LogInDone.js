import React, { useState } from 'react';
import {
  PageContainer,
  ContactContainer,
  Title,
  Description,
  InputField,
  Dropdown,
  Option,
  SubmitButton,
  MapContainer,
} from './logInDoneStyles';

const LogInDone = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [source, setSource] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    console.log({ name, email, phone, source });
  };

  return (
    <PageContainer>
      <ContactContainer>
        <Title>Get in Touch</Title>
        <Description>
          Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare
          non id blandit netus.
        </Description>
        <form onSubmit={handleSubmit}>
          <InputField
            type='text'
            placeholder='Name'
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <InputField
            type='email'
            placeholder='Email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <InputField
            type='text'
            placeholder='Phone number'
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
          <Dropdown value={source} onChange={e => setSource(e.target.value)}>
            <Option value=''>How did you find us?</Option>
            <Option value='social_media'>Social Media</Option>
            <Option value='facebook'>Facebook</Option>
            <Option value='instagram'>Instagram</Option>
            <Option value='twitter'>Twitter</Option>
          </Dropdown>
          <SubmitButton type='submit'>Send</SubmitButton>
        </form>
      </ContactContainer>

      <MapContainer>
        <iframe
          title='Google Maps'
          src='https://www.google.com/maps/embed?pb=...'
          width='100%'
          height='100%'
          style={{ border: 0 }}
          allowFullScreen=''
          loading='lazy'></iframe>
      </MapContainer>
    </PageContainer>
  );
};

export default LogInDone;
