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
  @media (max-width: 414px) {
    align-items: flex-start;
    justify-content: start;
    width: 382px;
    height: 640px;
    flex-direction: column;
    border-radius: 20px;
    padding: 30px;
    margin-top: 20px;
    margin-bottom: 0px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding-right: 130px;
  width: 100%;
  z-index: 1001;
  @media (max-width: 414px) {
    align-items: center;
    justify-content: center;
    padding: 0px;
  }
`;

export const Title = styled.h1`
  font-family: 'SVN-Gilroy';
  font-size: 52px;
  font-weight: 800;
  line-height: 68px;
  margin: 0px;
  position: relative;
  color: #003459;
  @media (max-width: 414px) {
    font-family: 'SVN-Gilroy';
    font-size: 36px;
    font-weight: 800;
    line-height: 54px;
  }
`;

export const Subtitle = styled.h2`
  font-family: 'SF Pro Display';
  font-size: 36px;
  font-weight: 700;
  line-height: 60px;
  margin: 0px;
  margin-bottom: 4px;
  color: #003459;
  @media (max-width: 414px) {
    font-family: ' SF Pro Display';
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
  }
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
  @media (max-width: 414px) {
    font-family: 'SF Pro Display';
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    text-align: center;
    width: 342px;
  }
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
  @media (max-width: 414px) {
    top: 360px;
  }
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
  @media (max-width: 414px) {
    width: 605px;
    height: 635px;
    top: -260px;
    left: 0px;
    transform: rotate(-160deg);
  }
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
  @media (max-width: 414px) {
    width: 605px;
    height: 635px;
    top: 570px;
    left: -100px;
  }
`;
