import styled from 'styled-components';

export const AboutPetsCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 60px;
  @media (max-width: 414px) {
    margin: 0px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  background-color: inherit;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderTitleCon = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 0px 28px 0px;
  gap: 2px;
  @media (max-width: 414px) {
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
  padding: 78px 0px 28px 0px;
  @media (max-width: 414px) {
    display: none;
  }
`;

export const ArrowButton = styled.button`
  width: 76px;
  height: 44px;
  margin-left: 22px;
  padding: 12px 28px 12px 28px;
  gap: 8px;
  border-radius: 57px;
  border: 1.5px solid #003459;
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
  @media (max-width: 414px) {
    /* მობილურისთვის მხოლოდ ერთი ქარდი */
    flex-direction: column;
    gap: 0; /* მანძილი ქარდებს შორის შემცირდება */
    justify-content: center;
    align-items: center;
    overflow: hidden;
    flex-wrap: nowrap;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 380px;
  height: 424px;
  padding: 8px;
  border-radius: 12px;
  background-color: #fff;
  margin: 0px;
  gap: 8px;
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

export const Description = styled.span`
  font-family: 'SF Pro Display';
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #242b33;
  margin: 0px;
`;

export const PetImage = styled.img`
  width: 364px;
  height: 243px;

  object-fit: cover;
  border-radius: 10px;
  padding: 8px;
`;

export const Subtitle = styled.h2`
  font-family: ' SF Pro Display';
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #00171f;
  margin: 0px;
`;

export const Title = styled.p`
  font-family: 'SF Pro Display';
  font-size: 10px;
  font-weight: 700;
  line-height: 16px;
  margin: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 88px;
  height: 20px;
  padding: 2px 10px 2px 10px;
  color: white;
  border-radius: 28px;
  background-color: #00a7e7;
`;
