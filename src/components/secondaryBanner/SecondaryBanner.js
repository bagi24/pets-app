import React from 'react';
import SecBanner from '../../assets/images/logos/secBanner.png';

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
  Rectangle2,
} from './SecondaryBannerStyles';

const SecondaryBanner = () => {
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
      <LogoImage src={SecBanner} alt='Logo' />

      <Rectangle> </Rectangle>
      <Rectangle2> </Rectangle2>
    </SecondaryBannerCon>
  );
};

export default SecondaryBanner;
