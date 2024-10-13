import React from 'react';
import Header from '../../components/header/Header';
import HeroBanner from '../../components/heroBanner/HeroBanner';
import PetsList from '../../components/petsList/PetsList';
import { HomePageConStructure } from './homePageStyles';

const HomePage = () => {
  return (
    <HomePageConStructure>
      <Header />
      <HeroBanner />
      <PetsList />
    </HomePageConStructure>
  );
};

export default HomePage;
