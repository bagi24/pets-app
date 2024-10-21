import React, { useState, useEffect } from 'react';
import {
  FilterSpace,
  LeftSide,
  RightSide,
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
  Circle,
  Circle1,
  Circle2,
  Circle3,
  Circle4,
  Circle5,
  TitleCon,
  Title,
  SortButton,
  FilterSearchArea,
  TitleConteiner,
  SubTitle,
  ArrowButtons2,
  PaginationContainer,
  PageButton,
  FilterButtonMob,
} from './filteredContainerStyles';
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
  const [filteredPets, setFilteredPets] = useState(PetsData); // დასაწყისში ყველა მონაცემი
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const petsPerPage = 15;

  const totalPages = Math.ceil(filteredPets.length / petsPerPage);
  useEffect(() => {
    let updatedPets = PetsData;

    console.log('Initial Pets Data:', PetsData);

    // 1. ფილტრაცია Gender-ის მიხედვით
    if (filters.gender.length > 0) {
      updatedPets = updatedPets.filter(pet => filters.gender.includes(pet.gene));
      console.log('Filtered by Gender:', updatedPets);
    }

    // 2. ფილტრაცია Color-ის მიხედვით
    if (filters.color.length > 0) {
      updatedPets = updatedPets.filter(pet => filters.color.includes(pet.Color));
      console.log('Filtered by Color:', updatedPets);
    }

    // 3. ფილტრაცია Breed-ის მიხედვით
    if (filters.breed.length > 0) {
      updatedPets = updatedPets.filter(pet => filters.breed.includes(pet.Size));
      console.log('Filtered by Breed:', updatedPets);
    }

    // 4. ფილტრაცია Price-ის მიხედვით
    if (minPrice !== null) {
      updatedPets = updatedPets.filter(pet => pet.price >= minPrice);
      console.log('Filtered by Min Price:', updatedPets);
    }
    if (maxPrice !== null) {
      updatedPets = updatedPets.filter(pet => pet.price <= maxPrice);
      console.log('Filtered by Max Price:', updatedPets); // მაქსიმალური ფასით ფილტრაცია
    }

    // გაფილტრული მონაცემების განახლება
    setFilteredPets(updatedPets);
    setCurrentPage(1);
    console.log('Final Filtered Pets:', updatedPets); // საბოლოო მონაცემები
  }, [filters, minPrice, maxPrice]);

  // ჩექბოქსების მართვის ფუნქცია
  const handleCheckboxChange = (e, category) => {
    const { value, checked } = e.target;
    console.log('Checkbox change:', value, checked, category);

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

  // Get pets for the current page
  const indexOfLastPet = currentPage * petsPerPage;
  const indexOfFirstPet = indexOfLastPet - petsPerPage;
  const currentPets = filteredPets.slice(indexOfFirstPet, indexOfLastPet);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <FilterSpace>
      <LeftSide>
        <Title>Filter</Title>
        <FilterSearchArea>
          {/* Gender Filter */}
          <CheckboxGroup style={{ borderBottom: '1px solid #ebeeef' }}>
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
          <CheckboxGroup style={{ borderBottom: '1px solid #ebeeef' }}>
            <Label>Color</Label>
            <CheckboxLabel>
              <Checkbox
                type='checkbox'
                value='Red'
                onChange={e => handleCheckboxChange(e, 'color')}
              />
              <Circle>
                <i className='fa-solid fa-circle'></i>
              </Circle>
              Red
            </CheckboxLabel>
            <CheckboxLabel>
              <Checkbox
                type='checkbox'
                value='Apricot'
                onChange={e => handleCheckboxChange(e, 'color')}
              />
              <Circle1>
                <i className='fa-solid fa-circle'></i>
              </Circle1>
              Apricot
            </CheckboxLabel>
            <CheckboxLabel>
              <Checkbox
                type='checkbox'
                value='Black'
                onChange={e => handleCheckboxChange(e, 'color')}
              />
              <Circle2>
                <i className='fa-solid fa-circle'></i>
              </Circle2>
              Black
            </CheckboxLabel>
            <CheckboxLabel>
              <Checkbox
                type='checkbox'
                value='Black & White'
                onChange={e => handleCheckboxChange(e, 'color')}
              />
              <Circle3>
                <i className='fa-solid fa-circle'></i>
              </Circle3>
              Black & White
            </CheckboxLabel>
            <CheckboxLabel>
              <Checkbox
                type='checkbox'
                value='Silver'
                onChange={e => handleCheckboxChange(e, 'color')}
              />
              <Circle4>
                <i className='fa-solid fa-circle'></i>
              </Circle4>
              Silver
            </CheckboxLabel>
            <CheckboxLabel>
              <Checkbox
                type='checkbox'
                value='Tan'
                onChange={e => handleCheckboxChange(e, 'color')}
              />
              <Circle5>
                <i className='fa-solid fa-circle'></i>
              </Circle5>
              Tan
            </CheckboxLabel>
          </CheckboxGroup>

          {/* Price Filter */}
          <PriceContainer>
            <div>
              <InputWrapper>
                <PriceInput
                  type='number'
                  value={minPrice || ''}
                  onChange={e => setMinPrice(Number(e.target.value))}
                  placeholder='Min'
                />
                <ArrowButtons>
                  <ArrowButton onClick={() => increment(setMinPrice, minPrice)}>
                    <i className='fa-solid fa-angle-up'></i>
                  </ArrowButton>
                  <ArrowButton onClick={() => decrement(setMinPrice, minPrice)}>
                    <i className='fa-solid fa-angle-down'></i>
                  </ArrowButton>
                </ArrowButtons>
              </InputWrapper>
            </div>

            <div>
              <InputWrapper>
                <PriceInput
                  type='number'
                  value={maxPrice || ''}
                  onChange={e => setMaxPrice(Number(e.target.value))}
                  placeholder='Max'
                />
                <ArrowButtons2>
                  <ArrowButton onClick={() => increment(setMaxPrice, maxPrice)}>
                    <i className='fa-solid fa-angle-up'></i>
                  </ArrowButton>
                  <ArrowButton onClick={() => decrement(setMaxPrice, maxPrice)}>
                    <i className='fa-solid fa-angle-down'></i>
                  </ArrowButton>
                </ArrowButtons2>
              </InputWrapper>
            </div>
          </PriceContainer>

          {/* Breed Filter */}
          <CheckboxGroup style={{ borderBottom: '1px solid #ebeeef' }}>
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
        </FilterSearchArea>
      </LeftSide>

      <RightSide>
        <TitleCon>
          <TitleConteiner>
            <Title>Small Dog</Title>
            <SubTitle>{filteredPets.length} puppies</SubTitle>
          </TitleConteiner>
          <SortButton>
            Sort by: Popular <i className='fa-solid fa-angle-down'></i>
          </SortButton>
          <FilterButtonMob>
            <i class='fa-solid fa-filter'></i>
            Filter
          </FilterButtonMob>
        </TitleCon>
        <CardContainer>
          {currentPets.slice(0, 15).map(pet => (
            <Card key={pet.id} onClick={() => handlePetClick(pet.id)}>
              <PetImage src={pet.image} alt={pet.name} />
              <InfoCon>
                <PetName>{pet.name}</PetName>
                <PetInfo>
                  <Gene>Gene: {pet.gene}</Gene>
                  <Dot>
                    <i className='fa-solid fa-circle'></i>
                  </Dot>
                  <Age>{pet.age} months</Age>
                </PetInfo>
                <Price>${pet.price}</Price>
              </InfoCon>
            </Card>
          ))}
        </CardContainer>
        {/* Pagination */}
        <PaginationContainer>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNumber => (
            <PageButton
              key={pageNumber}
              onClick={() => paginate(pageNumber)}
              isActive={currentPage === pageNumber}>
              {pageNumber}
            </PageButton>
          ))}
        </PaginationContainer>
      </RightSide>
    </FilterSpace>
  );
};

export default FilteredContainer;
