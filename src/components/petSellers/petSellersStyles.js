import styled from 'styled-components';

export const HeaderCon = styled.div`
  display: flex;
  width: 100%;

  align-items: center;
  justify-content: space-between;

  margin-bottom: 20px;
`;

export const HeaderTitleCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 0px 28px 100px;
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
  padding: 30px 100px 0px 0px;
`;

export const ViewMoreButton = styled.button`
  width: 209px;
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

export const PetSellersDataCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-bottom: 40px;
`;

export const ImageCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 151.43px;
  height: 112px;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 28px -2px #00000014;
  }
`;

export const Image = styled.img`
  width: 88px;
  height: 64px;

  padding: 10px;
`;
