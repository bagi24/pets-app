import styled from 'styled-components';

export const ProductDetailInfoCon = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 17px;
  padding-left: 20px;
  padding-top: 22px;
`;

export const ProfileImg = styled.img`
  width: 560px;
  height: 476px;
  object-fit: cover;
  border-radius: 10px;
`;

export const StatusInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(102.87deg, #fceed5 6.43%, #fceed5 78.33%, #ffe7ba 104.24%);
  width: 100%;
  gap: 27px;
`;

export const HealthSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'SF Pro Display';
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
`;

export const IdentificationSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'SF Pro Display';
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
`;

export const DogImg = styled.img``;

export const SocmediaShareCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 21px;
`;

export const Share = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: 'SF Pro Display';
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  color: #002a48;
`;

export const SocMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 17.97px;
  color: #99a2a5;
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 18px;
  padding-right: 49px;

  padding-top: 22px;
`;

export const NavCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;
`;

export const Nav = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-family: 'SF Pro Display';
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #667479;
`;

export const NavNameSpan = styled.span`
  font-family: 'SF Pro Display';
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #667479;
`;

export const BaseInfo = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  gap: 6px;
`;
export const SkuTiTle = styled.span`
  font-family: 'SF Pro Display';
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #99a2a5;
`;
export const NameTitle = styled.span`
  font-family: SF Pro Display;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  color: #00171f;
`;
export const PriceTitle = styled.span`
  font-family: SF Pro Display;
  font-size: 20px;
  font-weight: 700;
  line-height: 32px;
  color: #00171f;
`;

export const ButtonsCon = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 18px;
`;
export const ContactButton = styled.button`
  width: 141px;
  height: 44px;
  padding: 14px 28px 10px 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 57px;
  background-color: #003459;
  color: #ffffff;
  cursor: pointer;
  &:hover {
    background-color: lightblue;
  }
`;
export const ChatButton = styled.div`
  width: 212px;
  height: 44px;
  color: #002a48;
  border-radius: 57px;
  border: 2px solid #002a48;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background-color: #ffffff;
  cursor: pointer;
  &:hover {
    background-color: lightblue;
  }
`;

export const AdvanceData = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 18px;
  margin: 0;
  padding: 0;
`;
export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 517px;
  height: 42px;
  padding: 8px 0px 8px 0px;
  border-bottom: 1px solid #ebeeef;
`;
export const InfoKey = styled.span`
  width: 194px;
  height: 26px;
  padding: 4px 11px 2px 11px;
`;
export const InfoValue = styled.span`
  width: 323px;
  height: 26px;
  padding: 4px 11px 2px 11px;
`;

export const ProductContent = styled.div`
  width: 100%;
  border-radius: 20px;
  display: flex;
  align-items: start;
  justify-content: flex-start;
  gap: 34px;
  border: 1px solid #ebeeef;
`;

// Styled Components
export const LovelyCustomerCon = styled.div`
  width: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const CustomerTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const CustomerImgSlider = styled.div`
  display: flex;
  overflow-x: scroll;
  width: 100%;
  max-width: 1200px;
  position: relative;
`;

export const CustomerImg = styled.img`
  width: 20%;
  height: auto;
  flex-shrink: 0;
  border-radius: 10px;
  margin-right: 10px;
  object-fit: cover;
`;

export const MorePuppies = styled.div`
  width: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  gap: 28px;
`;

export const CardContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
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

export const HeaderTitleCon = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2px;
`;
export const HeaderTitle = styled.span`
  font-family: 'SF Pro Display';
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #000000;
`;
export const HeaderSubtitle = styled.span`
  font-family: 'SF Pro Display';
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;

  color: #003459;
`;
