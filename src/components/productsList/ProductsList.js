import React from 'react';
import petProductData from '../../data/petProductData/petProductData.json';
import GiftIcon from '../../assets/images/products/Frame (1).png';
import {
  ListContainer,
  Card,
  ProductImage,
  ProductName,
  ProductInfo,
  Price,
  CardContainer,
  InfoCon,
  HeaderContainer,
  HeaderTitleCon,
  HeaderTitle,
  HeaderSubtitle,
  ProductType,
  Dot,
  Size,
  ButtonCon,
  ViewMoreButton,
  GiftCard,
  Gift,
  Point,
} from './productsListStyles';

const ProductsList = () => {
  return (
    <ListContainer>
      <HeaderContainer>
        <HeaderTitleCon>
          <HeaderTitle>Hard to choose right products for your pets?</HeaderTitle>
          <HeaderSubtitle>Our Products</HeaderSubtitle>
        </HeaderTitleCon>
        <ButtonCon>
          <ViewMoreButton>
            View more
            <i class='fa-solid fa-angle-right'></i>
          </ViewMoreButton>
        </ButtonCon>
      </HeaderContainer>
      <CardContainer>
        {petProductData.map(pet => (
          <Card key={pet.id}>
            <ProductImage src={pet.image} alt={pet.name} />
            <InfoCon>
              <ProductName>{pet.name}</ProductName>
              <ProductInfo>
                <ProductType> Product: {pet.type} </ProductType>
                <Dot>
                  <i class='fa-solid fa-circle'></i>
                </Dot>
                <Size> Size: {pet.size} </Size>
              </ProductInfo>

              <Price>{pet.price}</Price>
              <GiftCard>
                <Gift src={GiftIcon} alt='' />
                <Point>
                  <i class='fa-solid fa-circle'></i>
                </Point>
                {pet.gift}
              </GiftCard>
            </InfoCon>
          </Card>
        ))}
      </CardContainer>
    </ListContainer>
  );
};

export default ProductsList;
