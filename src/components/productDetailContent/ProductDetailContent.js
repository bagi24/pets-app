import React from 'react';
import { useParams } from 'react-router-dom';
import petsData from '../../data/petsData/petsData.json';
import DogIcon1 from '../../assets/images/logos/Frame (2).png';
import DogIcon2 from '../../assets/images/logos/Frame 110.png';
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
} from './productDetailContentStyles';
const ProductDetailContent = () => {
  const { id } = useParams();

  const pet = petsData.find(pet => pet.id === Number(id));

  console.log(pet);

  if (!pet) {
    return <div>Pet not found!</div>;
  }

  return (
    <ProductDetailInfoCon>
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
            <i class='fa-solid fa-share-nodes'></i> Share:
          </Share>

          <SocMedia>
            <i class='fa-brands fa-facebook'></i>
            <i class='fa-brands fa-twitter'></i>
            <i class='fa-brands fa-instagram'></i>
            <i class='fa-brands fa-youtube'></i>
          </SocMedia>
        </SocmediaShareCon>
      </LeftSide>

      <RightSide>
        <NavCon>
          <Nav>
            Home <i class='fa-solid fa-angle-right'></i>
          </Nav>
          <Nav>
            Dog <i class='fa-solid fa-angle-right'></i>
          </Nav>
          <Nav>
            Large Dog <i class='fa-solid fa-angle-right'></i>
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
          <ChatButton>
            <i class='fa-regular fa-comment-dots'></i> Chat with Monito
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
    </ProductDetailInfoCon>
  );
};

export default ProductDetailContent;
