import React from 'react';
import Header from '../../components/header/Header';
import HeroBanner from '../../components/heroBanner/HeroBanner';
import PetsList from '../../components/petsList/PetsList';
import SecondaryBanner from '../../components/secondaryBanner/SecondaryBanner';

import ProductsList from '../../components/productsList/ProductsList';
import PetSellers from '../../components/petSellers/PetSellers';
import ThirdBanner from '../../components/thirdBanner/ThirdBanner';
import AboutPets from '../../components/aboutPets/AboutPets';
import Timer from '../../components/timer/Timer';
import { HomePageConStructure } from './homePageStyles';

const HomePage = () => {
  return (
    <HomePageConStructure>
      <Header />
      <HeroBanner />
      <PetsList />
      <SecondaryBanner />
      <ProductsList />
      <PetSellers />
      <ThirdBanner />
      <AboutPets />
      <Timer />
    </HomePageConStructure>
  );
};

export default HomePage;
