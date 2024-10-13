import styled from 'styled-components';

export const HeroContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 595px;
  border-radius: 0px 0px 40px 40px;

  position: relative;
  overflow: hidden;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  padding: 80px 0px 0px 130px;
  width: 100%;
`;

export const Title = styled.h1`
  font-family: 'SVN-Gilroy';
  font-size: 60px;
  font-weight: 800;
  line-height: 68px;
  margin: 0px;
  position: relative;
`;

export const Subtitle = styled.h2`
  font-family: 'SF Pro Display';
  font-size: 46px;
  font-weight: 700;
  line-height: 60px;
  margin: 0px;
  margin-bottom: 4px;
`;

export const Description = styled.p`
  max-width: 480px;
  font-family: 'SF Pro Display';
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  margin: 0px;
  margin-bottom: 34px;
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
  width: 944px;
  height: 650px;
  position: absolute;
  top: -15px;
  left: 500px;
  z-index: 1001;
`;

export const Rectangle1 = styled.div`
  width: 635px;
  height: 635px;
  position: absolute;
  top: 195px;
  left: 675px;
  border-radius: 0px 99px 99px 0px;
  opacity: 1;
  background-color: #f7dba7;
  transform: rotate(-63deg);
  z-index: 1000;
`;

export const Rectangle2 = styled.div`
  width: 635px;
  height: 635px;
  position: absolute;
  top: 220px;
  left: 600px;
  border-radius: 99px;
  opacity: 1;
  background-color: #003459;
  transform: rotate(-78deg);
`;

export const Rectangle4 = styled.div`
  width: 67px;
  height: 67px;
  position: absolute;
  top: 80px;
  left: 120px;
  border-radius: 20px;
  opacity: 1;
  background-color: #f7dba7;
  transform: rotate(-58deg);
`;

export const Rectangle5 = styled.div`
  width: 535px;
  height: 635px;
  position: absolute;
  top: 530px;
  left: 100px;
  border-radius: 99px;
  opacity: 1;
  background-color: #f7dba7;
  transform: rotate(-35deg);
  opacity: 40%;
`;

export const Rectangle6 = styled.div`
  width: 22px;
  height: 22px;
  position: absolute;
  top: 110px;
  left: 700px;
  border-radius: 6px;
  opacity: 1;
  background-color: #003459;
  transform: rotate(-45deg);
  z-index: 1000;
`;

export const Rectangle7 = styled.div`
  width: 28px;
  height: 28px;
  position: absolute;
  top: 100px;
  left: 700px;
  border-radius: 9px;
  opacity: 1;
  background-color: #f7dba7;
  transform: rotate(-25deg);
  z-index: 999;
`;

export const Rectangle8 = styled.div`
  width: 15px;
  height: 15px;
  position: absolute;
  top: 55px;
  left: 730px;
  border-radius: 4px;
  opacity: 1;
  background-color: #f7dba7;
  transform: rotate(-50deg);
`;
