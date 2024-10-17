import React, { useState } from 'react';
import SecondaryHeder from '../../components/secondaryHeder/SecondaryHeder';
import Footer from '../../components/footer/Footer';
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
  ErrorMessage,
  MainContent,
  TitleSpace,
  FormCon,
} from './logInDoneStyles';

const LogInDone = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [source, setSource] = useState('');
  const [errors, setErrors] = useState({});

  const validateField = (field, value) => {
    let errorMessage = '';
    switch (field) {
      case 'name':
        if (!value) {
          errorMessage = 'Name is required';
        } else if (value.length < 4) {
          errorMessage = 'Name must be at least 4 characters';
        }
        break;
      case 'email':
        if (!value) {
          errorMessage = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          errorMessage = 'Email address is invalid';
        }
        break;
      case 'phone':
        if (!value) {
          errorMessage = 'Phone number is required';
        } else if (!/^\d{10}$/.test(value)) {
          errorMessage = 'Phone number must be 10 digits';
        }
        break;
      default:
        break;
    }
    return errorMessage;
  };

  const handleChange = (field, setter) => e => {
    const { value } = e.target;
    setter(value);

    const errorMessage = validateField(field, value);
    setErrors(prevErrors => ({
      ...prevErrors,
      [field]: errorMessage,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newErrors = {
      name: validateField('name', name),
      email: validateField('email', email),
      phone: validateField('phone', phone),
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).some(error => error)) {
      console.log({ name, email, phone, source });
    }
  };

  return (
    <PageContainer>
      <SecondaryHeder />
      <MainContent>
        <ContactContainer>
          <TitleSpace>
            <Title>
              Get in <strong style={{ color: '#003459' }}> Touch</strong>{' '}
            </Title>
            <Description>
              Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo <br /> molestie
              vel, ornare non id blandit netus.
            </Description>
          </TitleSpace>
          <FormCon onSubmit={handleSubmit}>
            <InputField
              type='text'
              placeholder='Name *'
              value={name}
              onChange={handleChange('name', setName)} // Correctly handle name change
            />
            {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}

            <InputField
              type='email'
              placeholder='Email'
              value={email}
              onChange={handleChange('email', setEmail)} // Correctly handle email change
            />
            {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}

            <InputField
              type='text'
              placeholder='Phone number *'
              value={phone}
              onChange={handleChange('phone', setPhone)} // Correctly handle phone change
            />
            {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}

            <Dropdown value={source} onChange={e => setSource(e.target.value)}>
              <Option value=''>How did you find us?</Option>
              <Option value='social_media'>Social Media</Option>
              <Option value='facebook'>Facebook</Option>
              <Option value='instagram'>Instagram</Option>
              <Option value='twitter'>Twitter</Option>
            </Dropdown>
            <SubmitButton type='submit'>Send</SubmitButton>
          </FormCon>
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
      </MainContent>
      <Footer />
    </PageContainer>
  );
};

export default LogInDone;
