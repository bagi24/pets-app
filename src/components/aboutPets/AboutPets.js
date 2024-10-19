import React, { useState } from 'react';
import {
  AboutPetsCon,
  HeaderContainer,
  HeaderTitleCon,
  HeaderTitle,
  HeaderSubtitle,
  ButtonCon,
  ArrowButton,
  Card,
  PetImage,
  InfoCon,
  Title,
  Subtitle,
  Description,
  CardContainer,
} from './aboutPetsStyles';
import AboutPetsData from '../../data/petknowledgeData/petknowledgeData.json';

const AboutPets = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = window.innerWidth <= 414 ? 1 : 3;

  const handlePrevClick = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? AboutPetsData.length - visibleCards : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNextClick = () => {
    const isLastSlide = currentIndex === AboutPetsData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <AboutPetsCon>
      <HeaderContainer>
        <HeaderTitleCon>
          <HeaderTitle>You already know ?</HeaderTitle>
          <HeaderSubtitle>Useful pet knowledge</HeaderSubtitle>
        </HeaderTitleCon>
        <ButtonCon>
          <ArrowButton onClick={handlePrevClick}>
            <i className='fa-solid fa-angle-left'></i>
          </ArrowButton>
          <ArrowButton onClick={handleNextClick}>
            <i className='fa-solid fa-angle-right'></i>
          </ArrowButton>
        </ButtonCon>
      </HeaderContainer>

      <CardContainer>
        {AboutPetsData.slice(currentIndex, currentIndex + visibleCards).map(pet => (
          <Card key={pet.id}>
            <PetImage src={pet.photo} alt={pet.name} />
            <InfoCon>
              <Title>{pet.title}</Title>
              <Subtitle>{pet.subtitle}</Subtitle>
              <Description>{pet.description}</Description>
            </InfoCon>
          </Card>
        ))}
      </CardContainer>
    </AboutPetsCon>
  );
};

export default AboutPets;
