import React from 'react';
import { useEffect, useState } from 'react';
import {
  HeroContainer,
  Title,
  Subtitle,
  Description,
  ButtonContainer,
  Button,
  ButtonSec,
  LogoImage,
  ContentContainer,
  Rectangle1,
  Rectangle2,
  Rectangle4,
  Rectangle5,
  Rectangle6,
  Rectangle7,
  Rectangle8,
} from './heroBannerStyles';
import Logo from '../../assets/images/logos/logo1.png';

const HeroBanner = ({ languageTranslate }) => {
  const translations = {
    GE: {
      title: ' მეგობარი ძაღლი',
      subtitle: 'დამატებითი სიამოვნება!',
      description:
        'ცხოველის ყოლა ნიშნავს მეტ სიხარულს, ახალ მეგობარს, ბედნიერ ადამიანს, რომელიც ყოველთვის თქვენთან იქნება გართობისთვის. ჩვენ გვყავს 200+ სხვადასხვა ცხოველი, რომელიც თქვენს მოთხოვნებს დააკმაყოფილებს!',
    },
    EN: {
      title: 'One More Friend',
      subtitle: 'Thousands More Fun!',
      description:
        'Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!',
    },
  };

  const { title, subtitle, description } = translations[languageTranslate];

  const [shake, setShake] = useState(false);

  useEffect(() => {
    setShake(true); // გააქტიურე ანიმაცია რეფრეშისას
  }, []);

  return (
    <HeroContainer>
      <ContentContainer>
        <Rectangle4></Rectangle4>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Description>{description}</Description>
        <ButtonContainer>
          <Button>
            View Intro
            <i class='fa-regular fa-circle-play'></i>
          </Button>
          <ButtonSec>Explore Now</ButtonSec>
        </ButtonContainer>
      </ContentContainer>
      <LogoImage src={Logo} alt='Logo' />
      <Rectangle1 shake={shake}> </Rectangle1>
      <Rectangle2> </Rectangle2>
      <Rectangle5> </Rectangle5>
      <Rectangle6> </Rectangle6>
      <Rectangle7> </Rectangle7>
      <Rectangle8> </Rectangle8>
    </HeroContainer>
  );
};

export default HeroBanner;
