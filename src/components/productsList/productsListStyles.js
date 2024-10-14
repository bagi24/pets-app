import styled from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: white;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderTitleCon = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 0px 28px 130px;
  gap: 2px;
`;

export const HeaderTitle = styled.div`
  font-family: 'SF Pro Display';
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

export const HeaderSubtitle = styled.div`
  font-family: 'SF Pro Display';
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  color: #003459;
`;

export const ButtonCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 78px 126px 28px 0px;
`;

export const ViewMoreButton = styled.button`
  width: 155px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 57px;
  border: 1.5px solid #003459;
  font-family: 'SF Pro Display';
  font-size: 14px;
  line-height: 20px;
  color: #003459;
  background: inherit;
  cursor: pointer;

  &:hover {
    background-color: lightblue;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  width: 100%;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 280px;
  height: 446px;
  padding: 8px 8px 0px 8px;
  border-radius: 12px;
  background-color: #fff;
  margin: 0px;
  box-shadow: 0px 4px 28px -2px #00000014;

  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 28px -2px #00000024;
  }
`;

export const InfoCon = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 8px 8px 20px 8px;
  margin: 0px;
  gap: 4px;
`;

export const ProductType = styled.span`
  font-family: 'SF Pro Display';
  font-size: 12px;
  line-height: 18px;
`;

export const Dot = styled.i`
  display: flex;
  align-items: center;

  font-size: 4px;
  color: #667479;
`;

export const Size = styled.span`
  font-family: 'SF Pro Display';
  font-size: 12px;
  line-height: 18px;
`;

export const ProductImage = styled.img`
  width: 264px;
  height: 264px;
  object-fit: cover;
  border-radius: 10px;
  padding: 8px;
`;

export const ProductName = styled.h2`
  font-family: 'SF Pro Display';
  font-size: 16px;
  line-height: 24px;
  color: #00171f;
  margin: 0px;
`;

export const ProductInfo = styled.p`
  font-family: 'SF Pro Display';
  font-size: 12px;
  line-height: 18px;
  color: #667479;
  display: flex;
  gap: 4px;
  margin: 0px;
`;

export const Price = styled.p`
  font-family: 'SF Pro Display';
  font-size: 14px;
  line-height: 20px;
  color: #00171f;
  font-weight: bold;
  margin: 0px;
`;

export const GiftCard = styled.div`
  width: 248px;
  height: 34px;
  padding: 6px 10px 4px 10px;
  gap: 4px;
  border-radius: 8px;
  background-color: #fceed5;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Gift = styled.img`
  width: 20px;
  height: 20px;
  padding: 0px 1.27px 0px 1.27px;
`;

export const Point = styled.i`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5px;

  border-radius: 10px;
  color: #003459;
`;
