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
`;

export const TitleCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #003459;
  width: 1180px;
  height: 136px;
  padding: 32px;
  gap: 20px;
  border-radius: 16px;
  margin-top: 80px;
`;

export const Title = styled.h2`
  font-family: 'SF Pro Display';
  font-size: 24px;
  line-height: 36px;
  color: #fdfdfd;
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
`;

export const Input = styled.input`
  width: 508px;
  height: 48px;

  gap: 10px;
  border-radius: 8px;
  border: 1px solid #99a2a5;
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
`;

export const NavCon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  max-width: 1200px;
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const NavTitleCon = styled.div`
  display: flex;
  gap: 40px;
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
  width: 100%;
  max-width: 1200px;

  border-top: 1px solid #ffffff33;
  padding: 40px 130px 40px;
`;

export const Reserved = styled.span`
  font-family: 'SF Pro Display';
  font-size: 14px;
  line-height: 20px;
  color: #667479;
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
