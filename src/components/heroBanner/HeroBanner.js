import React from 'react';
import { HeroContainer } from './heroBannerStyles';
import Logo from '../../assets/images/logos/logo1.png';

const HeroBanner = () => {
  return (
    <HeroContainer>
      <h1>One more friend</h1>
      <h2>Thousands more fun!</h2>
      <p>
        Having a pet means you have more joy, a new friend, a happy person who will always be with
        you to have fun. We have 200+ different pets that can meet your needs!
      </p>
      <div className='buttons'>
        <button>View Intro</button>
        <button>Explore Now</button>
      </div>
      <img src={Logo} alt='Logo' />
    </HeroContainer>
  );
};

export default HeroBanner;
