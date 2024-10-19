import styled from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  padding: 60px 0px 28px 110px;
  gap: 2px;
  @media (max-width: 414px) {
    display: flex;
    align-items: start;
    justify-content: start;
    width: 100%;
    padding: 20px;
  }
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
  @media (max-width: 414px) {
    display: none;
  }
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
  @media (max-width: 414px) {
    width: 100%;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  width: 100%;
  @media (max-width: 414px) {
    margin: 0px;
    padding: 0px;
    gap: 10px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 280px;
  height: 378px;
  padding: 8px 8px 0px 8px;
  border-radius: 12px;
  background-color: #fff;
  margin: 0px;
  box-shadow: 0px 4px 28px -2px #00000014;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 28px -2px #00000024;
  }
  @media (max-width: 414px) {
    width: 185px;
    height: 317px;

    padding: 8px;

    border-radius: 12px;
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

export const Gene = styled.span`
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

export const Age = styled.span`
  font-family: 'SF Pro Display';
  font-size: 12px;
  line-height: 18px;
`;

export const PetImage = styled.img`
  width: 264px;
  height: 264px;
  object-fit: cover;
  border-radius: 10px;
  padding: 8px;
  @media (max-width: 414px) {
    width: 169px;
    height: 169px;
  }
`;

export const PetName = styled.h2`
  font-family: 'SF Pro Display';
  font-size: 16px;
  line-height: 24px;
  color: #00171f;
  margin: 0px;
`;

export const PetInfo = styled.p`
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

export const ButtonCon2 = styled.div`
  display: none;
  @media (max-width: 414px) {
    display: block;
    width: 100%;
    padding-right: 10px;
    cursor: pointer;
  }
`;
