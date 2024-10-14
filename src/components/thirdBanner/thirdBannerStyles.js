import styled from 'styled-components';

export const ThirdBannerCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1240px;
  height: 378px;
  background-color: #ffb775;
  border-radius: 20px;

  margin: 36px 130px 60px 130px;
  position: relative;

  overflow: hidden;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0;
  width: 100%;
  z-index: 1001;
  padding-left: 64px;
`;

export const Title = styled.h1`
  font-family: 'SVN-Gilroy';
  font-size: 52px;
  font-weight: 800;
  line-height: 68px;
  margin: 0px;
  position: relative;
  color: #003459;
`;

export const Subtitle = styled.h2`
  font-family: 'SF Pro Display';
  font-size: 36px;
  font-weight: 700;
  line-height: 60px;
  margin: 0px;
  margin-bottom: 4px;
  color: #003459;
`;

export const Description = styled.p`
  font-family: 'SF Pro Display';
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
  margin: 0px;
  margin-bottom: 34px;
  color: #242b33;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const Button = styled.button`
  width: 167px;
  height: 48px;
  padding: 14px 28px 10px 28px;
  border-radius: 57px;
  border: 1.5px solid #003459;
  background-color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 11px;
  cursor: pointer;
  font-family: 'SF Pro Display';
  font-size: 16px;
  line-height: 24px;
  color: #003459;

  &:hover {
    background-color: lightblue;
  }
`;

export const ButtonSec = styled.button`
  width: 167px;
  height: 48px;
  padding: 14px 28px 10px 28px;
  border-radius: 57px;
  border: 1.5px solid #003459;
  background-color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 11px;
  cursor: pointer;
  font-family: 'SF Pro Display';
  font-size: 16px;
  line-height: 24px;
  color: white;
  background-color: #003459;

  &:hover {
    background-color: lightblue;
  }
`;

export const LogoImage = styled.img`
  width: 538.53px;
  height: 378px;

  position: absolute;
  top: 0px;
  left: 650px;
  transform: rotate(0deg);
  z-index: 1001;
`;

export const TatiImg = styled.img`
  width: 42px;
  height: 38px;
`;

export const Rectangle = styled.div`
  width: 782.29px;
  height: 635px;
  position: absolute;
  top: -200px;
  left: -190px;
  border-radius: 99px;
  opacity: 1;
  background-color: #fceed5;
  transform: rotate(-130deg);
  z-index: 1000;
`;

export const Rectangle2 = styled.div`
  width: 787.54px;
  height: 787.54px;
  position: absolute;
  top: 170px;
  left: 670px;
  border-radius: 99px;
  opacity: 30%;
  background: linear-gradient(102.87deg, #fceed5 6.43%, #fceed5 78.33%, #ffe7ba 104.24%);

  transform: rotate(-580deg);
  z-index: 1000;
`;
