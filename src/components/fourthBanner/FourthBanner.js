import React from 'react';
import BannerImg from '../../assets/images/logos/group-portrait-adorable-puppies 1.png';

import {
  SecondaryBannerCon,
  ContentContainer,
  Title,
  Subtitle,
  Description,
  ButtonContainer,
  Button,
  ButtonSec,
  LogoImage,
  Rectangle,
} from './fourthBannerStyles';

const FourthBanner = () => {
  return (
    <SecondaryBannerCon>
      <ContentContainer>
        <Title>One More Friend</Title>
        <Subtitle>Thousands More Fun!</Subtitle>
        <Description>
          Having a pet means you have more joy, a new friend, a happy person who will always be with
          you to have fun. We have 200+ different pets that can meet your needs!
        </Description>
        <ButtonContainer>
          <Button>
            View Intro
            <i class='fa-regular fa-circle-play'></i>
          </Button>
          <ButtonSec>Explore Now</ButtonSec>
        </ButtonContainer>
      </ContentContainer>
      <LogoImage src={BannerImg} alt='Logo' />

      <Rectangle> </Rectangle>
    </SecondaryBannerCon>
  );
};

export default FourthBanner;
