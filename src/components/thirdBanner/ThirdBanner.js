import React from 'react';
import ThirdBannerPhoto from '../../assets/images/logos/thirdBanner.png';
import Tati from '../../assets/images/logos/fontisto_paw.png';

import {
  ThirdBannerCon,
  ContentContainer,
  Title,
  Subtitle,
  Description,
  ButtonContainer,
  Button,
  ButtonSec,
  LogoImage,
  TatiImg,
  Rectangle,
  Rectangle2,
} from './thirdBannerStyles';

const ThirdBanner = () => {
  return (
    <ThirdBannerCon>
      <ContentContainer>
        <Title>
          Adoption <TatiImg src={Tati} alt='' />
        </Title>
        <Subtitle>We need help. so do they.</Subtitle>
        <Description>
          Adopt a pet and give it a home,
          <br /> it will be love you back unconditionally.
        </Description>
        <ButtonContainer>
          <ButtonSec>Explore Now</ButtonSec>
          <Button>
            View Intro
            <i class='fa-regular fa-circle-play'></i>
          </Button>
        </ButtonContainer>
      </ContentContainer>
      <LogoImage src={ThirdBannerPhoto} alt='Logo' />

      <Rectangle> </Rectangle>
      <Rectangle2> </Rectangle2>
    </ThirdBannerCon>
  );
};

export default ThirdBanner;
