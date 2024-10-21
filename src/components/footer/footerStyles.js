import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(102.87deg, #fceed5 6.43%, #fceed5 78.33%, #ffe7ba 104.24%);

  width: 1440px;
  height: 440px;

  border-radius: 40px 40px 0px 0px;
  @media (max-width: 414px) {
    /* width: 382px;
    align-items: start;
    justify-content: start;
    padding: 0px 16px 40px 0px;

    border-radius: 16px; */

    width: 414px;
    height: 598px;
    border-radius: 20px 20px 0px 0px;
  }
`;

export const TitleCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #003459;
  width: 1180px;
  height: 136px;
  gap: 20px;
  margin-top: 80px;
  border-radius: 16px;
  @media (max-width: 414px) {
    width: 382px;
    height: 244px;
    padding: 16px;
    margin: 0px;
    border-radius: 16px;
    align-items: start;
    justify-content: center;
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  font-family: 'SF Pro Display';
  font-size: 24px;
  line-height: 36px;
  color: #fdfdfd;
  @media (max-width: 414px) {
    font-family: 'SF Pro Display';
    font-size: 20px;
    font-weight: 700;
    line-height: 32px;
  }
`;

export const InputCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 707px;
  height: 72px;
  padding: 12px;
  gap: 12px;
  border-radius: 14px;
  background-color: #ffffff;
  @media (max-width: 414px) {
    width: 350px;
    height: 132px;
    padding: 12px;
    flex-direction: column;
    border-radius: 14px;
  }
`;

export const Input = styled.input`
  width: 508px;
  height: 48px;

  gap: 10px;
  border-radius: 8px;
  border: 1px solid #99a2a5;

  @media (max-width: 414px) {
    width: 326px;
    height: 48px;

    border-radius: 8px;
  }
`;

export const Subcribe = styled.button`
  width: 163px;
  height: 48px;
  padding: 14px 28px 10px 28px;
  background-color: #003459;
  border-radius: 8px;
  color: #fdfdfd;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #007ba1;
  }

  @media (max-width: 414px) {
    width: 100%;
  }
`;

export const NavCon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 1180px;
  padding-top: 40px;
  padding-bottom: 40px;

  @media (max-width: 414px) {
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    padding-top: 10px;
    gap: 20px;
  }
`;

export const NavTitleCon = styled.div`
  display: flex;
  gap: 40px;

  @media (max-width: 414px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
  }
`;

export const Span = styled.span`
  font-family: 'SF Pro Display';
  font-size: 16px;
  line-height: 24px;
  color: #00171f;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #00a7e7;
  }
`;

export const SocMediaCon = styled.div`
  display: flex;
  gap: 40px;
  @media (max-width: 414px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 20px;
  }
`;

export const SocSpan = styled.span`
  font-size: 24px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #00a7e7;
  }
`;

export const EndPointCon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1180px;

  border-top: 1px solid #ffffff33;
  padding: 40px 130px 40px;
  @media (max-width: 414px) {
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    padding: 0px;
    width: 100%;
  }
`;

export const Reserved = styled.span`
  font-family: 'SF Pro Display';
  font-size: 14px;
  line-height: 20px;
  color: #667479;
  @media (max-width: 414px) {
    display: none;
  }
`;

export const LogoImg = styled.img`
  width: 115px;
  height: 40px;
  padding: 0px 0.53px 0.53px 0px;
`;

export const Service = styled.div`
  display: flex;
  gap: 40px;
`;

export const ServiceSpan = styled.span`
  font-family: 'SF Pro Display';
  font-size: 14px;
  line-height: 20px;
  color: #667479;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #00a7e7;
  }
`;

export const Reserved2 = styled.span``;
