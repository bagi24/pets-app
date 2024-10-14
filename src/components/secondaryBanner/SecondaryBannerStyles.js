import styled from 'styled-components';

export const SecondaryBannerCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1240px;
  height: 378px;
  background-color: #003459;
  border-radius: 20px;

  margin: 36px 130px 60px 130px;
  position: relative;

  overflow: hidden;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding-right: 130px;
  width: 100%;
  z-index: 1001;
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
  max-width: 480px;
  font-family: 'SF Pro Display';
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
  margin: 0px;
  margin-bottom: 34px;
  color: #242b33;

  width: 394px;
  height: 54px;
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
  width: 513px;
  height: 342px;

  position: absolute;
  top: 38px;
  left: 0px;
  z-index: 1001;
`;

export const Rectangle = styled.div`
  width: 782.29px;
  height: 635px;
  position: absolute;
  top: -180px;
  left: 630px;
  border-radius: 99px;
  opacity: 1;
  background-color: #fceed5;
  transform: rotate(-150deg);
  z-index: 1000;
`;

export const Rectangle2 = styled.div`
  width: 787.54px;
  height: 787.54px;
  position: absolute;
  top: 190px;
  left: -180px;
  border-radius: 99px;
  opacity: 1;
  background-color: #002a48;
  transform: rotate(-60deg);
  z-index: 1000;
`;
