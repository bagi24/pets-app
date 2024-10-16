import React from 'react';
import { useState } from 'react';
import Header from '../../components/header/Header';
import HeroBanner from '../../components/heroBanner/HeroBanner';
import PetsList from '../../components/petsList/PetsList';
import SecondaryBanner from '../../components/secondaryBanner/SecondaryBanner';
import ProductsList from '../../components/productsList/ProductsList';
import PetSellers from '../../components/petSellers/PetSellers';
import ThirdBanner from '../../components/thirdBanner/ThirdBanner';
import AboutPets from '../../components/aboutPets/AboutPets';
import Timer from '../../components/timer/Timer';
import Footer from '../../components/footer/Footer';
import { HomePageConStructure } from './homePageStyles';
import { useLocation } from 'react-router-dom';

const HomePage = () => {
  const location = useLocation();
  const initialName = location.state?.name || 'Join the community';
  const [name, setName] = useState(initialName);

  return (
    <HomePageConStructure>
      <Header name={name} setName={setName} />
      <HeroBanner />
      <PetsList />
      <SecondaryBanner />
      <ProductsList />
      <PetSellers />
      <ThirdBanner />
      <AboutPets />
      <Timer />
      <Footer />
    </HomePageConStructure>
  );
};

export default HomePage;
