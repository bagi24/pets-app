import React from 'react';
import {
  HeaderCon,
  HeaderTitleCon,
  HeaderTitle,
  HeaderSubtitle,
  ButtonCon,
  ViewMoreButton,
  PetSellersDataCon,
  ImageCon,
  Image,
} from './petSellersStyles';

import PetSellersData from '../../data/PetSellersData/PetSellersData.json';

const PetSellers = () => {
  return (
    <>
      <HeaderCon>
        <HeaderTitleCon>
          <HeaderTitle>Proud to be part of</HeaderTitle>
          <HeaderSubtitle>Pet Sellers</HeaderSubtitle>
        </HeaderTitleCon>
        <ButtonCon>
          <ViewMoreButton>
            View more
            <i class='fa-solid fa-angle-right'></i>
          </ViewMoreButton>
        </ButtonCon>
      </HeaderCon>

      <PetSellersDataCon>
        {PetSellersData.map(seller => {
          return (
            <ImageCon key={seller.id}>
              <Image src={seller.url} alt='' />
            </ImageCon>
          );
        })}
      </PetSellersDataCon>
    </>
  );
};

export default PetSellers;
