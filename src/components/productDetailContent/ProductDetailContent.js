import React from 'react';
import { useParams } from 'react-router-dom';
import petsData from '../../data/petsData/petsData.json';
import DogIcon1 from '../../assets/images/logos/Frame (2).png';
import DogIcon2 from '../../assets/images/logos/Frame 110.png';
import { useNavigate } from 'react-router-dom';
import {
  ProductDetailInfoCon,
  LeftSide,
  RightSide,
  ProfileImg,
  StatusInfo,
  HealthSpan,
  IdentificationSpan,
  DogImg,
  SocmediaShareCon,
  Share,
  SocMedia,
  NavCon,
  Nav,
  NavNameSpan,
  BaseInfo,
  SkuTiTle,
  NameTitle,
  PriceTitle,
  ButtonsCon,
  ContactButton,
  ChatButton,
  AdvanceData,
  Info,
  InfoKey,
  InfoValue,
  LovelyCustomerCon,
  ProductContent,
  CustomerImg,
  CustomerTitle,
  CustomerImgSlider,
  MorePuppies,
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
  HeaderTitleCon,
  HeaderTitle,
  HeaderSubtitle,
} from './productDetailContentStyles';

const ProductDetailContent = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const pet = petsData.find(pet => pet.id === Number(id));

  if (!pet) {
    return <div>Pet not found!</div>;
  }

  const handlePetClick = petId => {
    navigate(`/productdetail/${petId}`);
  };

  const handleChat = () => {
    navigate('/chat');
  };

  return (
    <ProductDetailInfoCon>
      <ProductContent>
        <LeftSide>
          <ProfileImg src={pet.image} alt={pet.name} />
          <StatusInfo>
            <HealthSpan>
              <DogImg src={DogIcon1} alt='' /> 100% health guarantee for pets
            </HealthSpan>
            <IdentificationSpan>
              <DogImg src={DogIcon2} alt='' />
              100% guarantee of pet identification
            </IdentificationSpan>
          </StatusInfo>

          <SocmediaShareCon>
            <Share>
              <i className='fa-solid fa-share-nodes'></i> Share:
            </Share>

            <SocMedia>
              <i className='fa-brands fa-facebook'></i>
              <i className='fa-brands fa-twitter'></i>
              <i className='fa-brands fa-instagram'></i>
              <i className='fa-brands fa-youtube'></i>
            </SocMedia>
          </SocmediaShareCon>
        </LeftSide>

        <RightSide>
          <NavCon>
            <Nav>
              Home <i className='fa-solid fa-angle-right'></i>
            </Nav>
            <Nav>
              Dog <i className='fa-solid fa-angle-right'></i>
            </Nav>
            <Nav>
              Large Dog <i className='fa-solid fa-angle-right'></i>
            </Nav>
            <NavNameSpan>{pet.name}</NavNameSpan>
          </NavCon>

          <BaseInfo>
            <SkuTiTle>SKU {pet.SKU}</SkuTiTle>
            <NameTitle>{pet.name}</NameTitle>
            <PriceTitle>{pet.price}</PriceTitle>
          </BaseInfo>

          <ButtonsCon>
            <ContactButton>Contact us</ContactButton>
            <ChatButton onClick={handleChat}>
              <i className='fa-regular fa-comment-dots'></i> Chat with Monito
            </ChatButton>
          </ButtonsCon>

          <AdvanceData>
            <Info>
              <InfoKey>SKU</InfoKey> <InfoValue>:{pet.SKU}</InfoValue>
            </Info>
            <Info>
              <InfoKey>Gender</InfoKey> <InfoValue>:{pet.gene}</InfoValue>
            </Info>
            <Info>
              <InfoKey>Age</InfoKey> <InfoValue>:{pet.age}</InfoValue>
            </Info>
            <Info>
              <InfoKey>Size</InfoKey> <InfoValue>:{pet.Size}</InfoValue>
            </Info>
            <Info>
              <InfoKey>Color</InfoKey> <InfoValue>:{pet.Color}</InfoValue>
            </Info>
            <Info>
              <InfoKey>Vaccinated</InfoKey> <InfoValue>:{pet.Vaccinated}</InfoValue>
            </Info>
            <Info>
              <InfoKey>Dewormed</InfoKey> <InfoValue>:{pet.Dewormed}</InfoValue>
            </Info>
            <Info>
              <InfoKey>Cert</InfoKey> <InfoValue>:{pet.Cert}</InfoValue>
            </Info>
            <Info>
              <InfoKey>Microchip</InfoKey> <InfoValue>:{pet.Microchip}</InfoValue>
            </Info>
            <Info>
              <InfoKey>Location</InfoKey> <InfoValue>:{pet.Location}</InfoValue>
            </Info>
            <Info>
              <InfoKey>Published Date</InfoKey> <InfoValue>:{pet['Published Date']}</InfoValue>
            </Info>
            <Info>
              <InfoKey>Additional Information</InfoKey>
              <InfoValue>:{pet['Additional Information']}</InfoValue>
            </Info>
          </AdvanceData>
        </RightSide>
      </ProductContent>
      <LovelyCustomerCon>
        <CustomerTitle>Our lovely customer</CustomerTitle>
        <CustomerImgSlider>
          {pet['lovely customer']?.map((customer, index) => (
            <CustomerImg key={customer.id || index} src={customer} alt='' />
          ))}
        </CustomerImgSlider>
      </LovelyCustomerCon>

      <MorePuppies>
        <HeaderTitleCon>
          <HeaderTitle>What's New?</HeaderTitle>
          <HeaderSubtitle>See more puppies</HeaderSubtitle>
        </HeaderTitleCon>
        <CardContainer>
          {petsData.slice(0, 4).map(pet => (
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
      </MorePuppies>
    </ProductDetailInfoCon>
  );
};

export default ProductDetailContent;
