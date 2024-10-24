import styled from 'styled-components';

export const SecondaryBannerCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 378px;
  background: linear-gradient(102.87deg, #fceed5 6.43%, #fceed5 78.33%, #ffe7ba 104.24%);
  border-radius: 20px;
  margin-top: 40px;
  position: relative;
  overflow: hidden;
  @media (max-width: 414px) {
    width: 382px;
    height: 441px;
    margin: 0px;
    padding: 0px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding-right: 84px;
  width: 100%;
  z-index: 1005;
  @media (max-width: 414px) {
    justify-content: start;
    align-items: flex-start;
    padding: 0px;
    height: 100%;
  }
`;

export const Title = styled.h1`
  font-family: 'SVN-Gilroy';
  font-size: 52px;
  font-weight: 800;
  line-height: 68px;
  margin: 0px;
  position: relative;
  color: #fdfdfd;
  @media (max-width: 414px) {
    font-family: 'SVN-Gilroy';
    font-size: 42px;
    font-weight: 800;
    line-height: 60px;
    color: #002a48;
  }
`;

export const Subtitle = styled.h2`
  font-family: 'SF Pro Display';
  font-size: 36px;
  font-weight: 700;
  line-height: 54px;
  margin: 0px;
  margin-bottom: 4px;
  color: #fdfdfd;

  @media (max-width: 414px) {
    font-family: 'SF Pro Display';
    font-size: 26px;
    font-weight: 700;
    line-height: 38px;
    color: #002a48;
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
  color: #ccd1d2;

  width: 394px;
  height: 54px;
  @media (max-width: 414px) {
    font-family: 'SF Pro Display';
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    color: #242b33;
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
  border: 1.5px solid #fdfdfd;
  background-color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 11px;
  cursor: pointer;
  font-family: 'SF Pro Display';
  font-size: 16px;
  line-height: 24px;
  color: #fdfdfd;

  &:hover {
    background-color: lightblue;
  }

  @media (max-width: 414px) {
    color: #003459;
    border: 1.5px solid #003459;
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
  color: #00171f;
  background-color: #fdfdfd;

  &:hover {
    background-color: lightblue;
  }

  @media (max-width: 414px) {
    background-color: #003459;
    color: white;
  }
`;

export const LogoImage = styled.img`
  width: 650px;
  height: 301px;

  position: absolute;
  top: 78px;
  left: 51px;
  z-index: 1001;

  @media (max-width: 414px) {
    width: 460px;
    height: 213px;
    top: 230px;
    left: 0px;
    margin: 0px;
    padding: 0px;
  }
`;

export const Rectangle = styled.div`
  width: 816.4px;
  height: 799.52px;
  position: absolute;
  top: -50px;
  left: 490px;
  border-radius: 99px;
  opacity: 1;
  background-color: #002a48;
  transform: rotate(-115deg);
  z-index: 999;
  @media (max-width: 414px) {
    width: 12.44px;
    height: 12.44px;
    top: 70px;
    left: 260px;
  }
`;
