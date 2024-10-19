import styled from 'styled-components';

export const CountdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 71px;

  width: 100%;
  @media (max-width: 414px) {
    margin: 0px;
    display: none;
  }
`;

export const Title = styled.h1`
  font-family: 'Noto Sans Georgian';
  font-size: 48px;
  font-weight: 900;
  line-height: 65.28px;
  color: #003459;
  padding-left: 110px;
`;

export const TimeBoxCon = styled.div`
  display: flex;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  padding-left: 110px;
  gap: 45px;
`;

export const TimeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: #003459;
  color: white;
  width: 270px;
  height: 199px;
  border-radius: 22px;
`;

export const TimeNumber = styled.div`
  font-family: 'Poppins';
  font-size: 64px;
  font-weight: 900;
  line-height: 96px;
  color: white;
`;

export const TimeLabel = styled.div`
  font-family: 'Poppins';
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  color: white;
`;
