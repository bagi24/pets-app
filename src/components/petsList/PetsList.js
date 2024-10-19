import React from 'react';
import petsData from '../../data/petsData/petsData.json';
import { useNavigate } from 'react-router-dom';
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
  ButtonCon2,
} from './PetsListStyles';

const PetsList = () => {
  const navigate = useNavigate();
  const handleCategory = () => {
    navigate('/category');
  };

  const handlePetClick = petId => {
    navigate(`/productdetail/${petId}`);
  };

  return (
    <ListContainer>
      <HeaderContainer>
        <HeaderTitleCon>
          <HeaderTitle>What's New?</HeaderTitle>
          <HeaderSubtitle>Take a look at some of our pets</HeaderSubtitle>
        </HeaderTitleCon>
        <ButtonCon>
          <ViewMoreButton onClick={handleCategory}>
            View more
            <i className='fa-solid fa-angle-right'></i>
          </ViewMoreButton>
        </ButtonCon>
      </HeaderContainer>
      <CardContainer>
        {petsData.slice(0, 8).map(pet => (
          <Card key={pet.id} onClick={() => handlePetClick(pet.id)}>
            <PetImage src={pet.image} alt={pet.name} />
            <InfoCon>
              <PetName>{pet.name}</PetName>
              <PetInfo>
                <Gene>Gene: {pet.gene}</Gene>
                <Dot>
                  <i className='fa-solid fa-circle'></i>
                </Dot>
                <Age>Age: {pet.age}</Age>
              </PetInfo>
              <Price>{pet.price}USD</Price>
            </InfoCon>
          </Card>
        ))}
      </CardContainer>
      <ButtonCon2>
        <ViewMoreButton onClick={handleCategory}>
          View more
          <i className='fa-solid fa-angle-right'></i>
        </ViewMoreButton>
      </ButtonCon2>
    </ListContainer>
  );
};

export default PetsList;
