import React from 'react';
import petsData from '../../data/petsData/petsData.json';
import {
  ListContainer,
  Card,
  PetImage,
  PetName,
  PetInfo,
  Price,
  CardContainer,
  InfoCon,
  HeaderContainer,
  HeaderTitleCon,
  HeaderTitle,
  HeaderSubtitle,
  Gene,
  Dot,
  Age,
  ButtonCon,
  ViewMoreButton,
} from './PetsListStyles';

const PetsList = () => {
  return (
    <ListContainer>
      <HeaderContainer>
        <HeaderTitleCon>
          <HeaderTitle>What's New?</HeaderTitle>
          <HeaderSubtitle>Take a look at some of our pets</HeaderSubtitle>
        </HeaderTitleCon>
        <ButtonCon>
          <ViewMoreButton>
            View more
            <i class='fa-solid fa-angle-right'></i>
          </ViewMoreButton>
        </ButtonCon>
      </HeaderContainer>
      <CardContainer>
        {petsData.map(pet => (
          <Card key={pet.id}>
            <PetImage src={pet.image} alt={pet.name} />
            <InfoCon>
              <PetName>{pet.name}</PetName>
              <PetInfo>
                <Gene> Gene: {pet.gene} </Gene>
                <Dot>
                  <i class='fa-solid fa-circle'></i>
                </Dot>
                <Age> Age: {pet.age} </Age>
              </PetInfo>

              <Price>{pet.price}</Price>
            </InfoCon>
          </Card>
        ))}
      </CardContainer>
    </ListContainer>
  );
};

export default PetsList;
