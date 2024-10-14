import React from 'react';
import Header from '../../components/header/Header';
import HeroBanner from '../../components/heroBanner/HeroBanner';
import PetsList from '../../components/petsList/PetsList';
import SecondaryBanner from '../../components/secondaryBanner/SecondaryBanner';
import ProductsList from '../../components/productsList/ProductsList';
import PetSellers from '../../components/petSellers/PetSellers';
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
    </HomePageConStructure>
  );
};

export default HomePage;
