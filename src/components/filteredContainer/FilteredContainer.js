import React from 'react';

import {
  FilterSpace,
  LeftSide,
  RightSide,
  Title,
  CheckboxGroup,
  Label,
  CheckboxLabel,
  Checkbox,
  PriceContainer,
  InputWrapper,
  PriceInput,
  ArrowButtons,
  ArrowButton,
  CardContainer,
  Card,
  PetImage,
  InfoCon,
  PetName,
  PetInfo,
  Gene,
  Dot,
  Age,
  Price,
} from './filteredContainerStyles';
import { useState } from 'react';
import PetsData from '../../data/petsData/petsData.json';
import { useNavigate } from 'react-router-dom';

const FilteredContainer = () => {
  const [filters, setFilters] = useState({
    gender: [],
    color: [],
    breed: [],
  });

  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);

  const navigate = useNavigate();

  const handleCheckboxChange = (e, category) => {
    const { value, checked } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [category]: checked
        ? [...prevFilters[category], value]
        : prevFilters[category].filter(item => item !== value),
    }));
  };

  const increment = (setter, value) => {
    setter(value + 1);
  };

  const decrement = (setter, value) => {
    if (value > 0) setter(value - 1);
  };

  const handlePetClick = petId => {
    navigate(`/productdetail/${petId}`);
  };

  return (
    <FilterSpace>
      <LeftSide>
        <Title> Filter</Title>
        <CheckboxGroup>
          <Label>Gender</Label>
          <CheckboxLabel>
            <Checkbox
              type='checkbox'
              value='Male'
              onChange={e => handleCheckboxChange(e, 'gender')}
            />
            Male
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              type='checkbox'
              value='Female'
              onChange={e => handleCheckboxChange(e, 'gender')}
            />
            Female
          </CheckboxLabel>
        </CheckboxGroup>

        {/* Color Filter */}
        <CheckboxGroup>
          <Label>Color</Label>
          <CheckboxLabel>
            <Checkbox
              type='checkbox'
              value='Red'
              onChange={e => handleCheckboxChange(e, 'color')}
            />
            Red
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              type='checkbox'
              value='Apricot'
              onChange={e => handleCheckboxChange(e, 'color')}
            />
            Apricot
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              type='checkbox'
              value='Black'
              onChange={e => handleCheckboxChange(e, 'color')}
            />
            Black
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              type='checkbox'
              value='Black & White'
              onChange={e => handleCheckboxChange(e, 'color')}
            />
            Black & White
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              type='checkbox'
              value='Silver'
              onChange={e => handleCheckboxChange(e, 'color')}
            />
            Silver
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              type='checkbox'
              value='Tan'
              onChange={e => handleCheckboxChange(e, 'color')}
            />
            Tan
          </CheckboxLabel>
        </CheckboxGroup>

        <PriceContainer>
          {/* Min Price */}
          <div>
            <InputWrapper>
              <PriceInput
                type='number'
                value={minPrice}
                onChange={e => setMinPrice(Number(e.target.value))}
                placeholder='Min'
              />
              <ArrowButtons>
                <ArrowButton onClick={() => increment(setMinPrice, minPrice)}>▲</ArrowButton>
                <ArrowButton onClick={() => decrement(setMinPrice, minPrice)}>▼</ArrowButton>
              </ArrowButtons>
            </InputWrapper>
          </div>

          {/* Max Price */}
          <div>
            <InputWrapper>
              <PriceInput
                type='number'
                value={maxPrice}
                onChange={e => setMaxPrice(Number(e.target.value))}
                placeholder='Max'
              />
              <ArrowButtons>
                <ArrowButton onClick={() => increment(setMaxPrice, maxPrice)}>▲</ArrowButton>
                <ArrowButton onClick={() => decrement(setMaxPrice, maxPrice)}>▼</ArrowButton>
              </ArrowButtons>
            </InputWrapper>
          </div>
        </PriceContainer>

        {/* Breed Filter */}
        <CheckboxGroup>
          <Label>Breed</Label>
          <CheckboxLabel>
            <Checkbox
              type='checkbox'
              value='Small'
              onChange={e => handleCheckboxChange(e, 'breed')}
            />
            Small
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              type='checkbox'
              value='Medium'
              onChange={e => handleCheckboxChange(e, 'breed')}
            />
            Medium
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              type='checkbox'
              value='Large'
              onChange={e => handleCheckboxChange(e, 'breed')}
            />
            Large
          </CheckboxLabel>
        </CheckboxGroup>
      </LeftSide>

      <RightSide>
        <CardContainer>
          {PetsData.slice(0, 15).map(pet => (
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
                <Price>{pet.price}</Price>
              </InfoCon>
            </Card>
          ))}
        </CardContainer>
      </RightSide>
    </FilterSpace>
  );
};

export default FilteredContainer;
