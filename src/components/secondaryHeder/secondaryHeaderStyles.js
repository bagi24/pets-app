import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 404px;
  background: inherit;
  @media (max-width: 414px) {
    display: flex;

    align-items: start;
    justify-content: space-between;
    width: 100%;
  }
`;

export const NavCon = styled.div`
  display: flex;
  position: relative;
  z-index: 1001;
  align-items: center;
  justify-content: flex-start;
  gap: 48px;
  width: 100%;
  @media (max-width: 414px) {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding: 30px;
  }
`;

export const HamburgerIcon = styled.div`
  width: 35px;
  height: 35px;
  cursor: pointer;

  @media (min-width: 414px) {
    display: none;
  }
`;

export const AuthorizationCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  width: 100%;
  @media (max-width: 414px) {
    display: none;
  }
`;

export const StyledLogo = styled.img`
  width: 115px;
  height: 40px;
  @media (max-width: 414px) {
    width: 100px;
  }
`;

export const Span = styled.span`
  cursor: pointer;
  color: #003459;
  text-decoration: none;
  font-family: 'SF Pro Display';
  font-size: 16px;
  line-height: 24px;
  text-align: left;
  &:hover {
    color: black;
  }
  @media (max-width: 414px) {
    display: none;
  }
`;

export const LanguageSelector = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 105px;
  height: 44px;
  gap: 8px;

  cursor: pointer;
  @media (max-width: 414px) {
    display: none;
  }
`;

export const LanguageSelectorMob = styled.div`
  @media (max-width: 414px) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 105px;
    height: 44px;
    gap: 8px;

    cursor: pointer;
  }
`;

export const FlagImage = styled.img`
  width: 21px;
  height: 21px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Abbreviation = styled.span`
  font-family: 'SF Pro Display';
  font-size: 16px;
  line-height: 23px;
  color: #002a48;
`;

export const ArrowDown = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;

export const LanguageDropdown = styled.div`
  background-color: white;
  border-radius: 5px;
  width: 100px;
  height: 44px;
  position: absolute;
  top: 74px;
  right: 145px;
  z-index: 1005;
  @media (max-width: 414px) {
    display: none;
  }
`;

export const LanguageDropdownMob = styled.div`
  @media (max-width: 414px) {
    background-color: white;
    border-radius: 5px;
    width: 100px;
    height: 30px;
    position: absolute;
    top: 250px;
    right: 140px;
    z-index: 1005;
  }
`;

export const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  background-color: #f5f5f5;
  &:hover {
    background-color: gold;
  }
`;

export const Button = styled.button`
  width: 214px;
  height: 44px;
  padding: 14px 28px 10px 28px;
  background-color: #003459;
  border-radius: 57px;
  border: none;
  font-family: 'SF Pro Display';
  font-size: 16px;
  line-height: 24px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media (max-width: 414px) {
    display: none;
  }
`;
export const ButtonMob = styled.div`
  @media (max-width: 414px) {
    width: 214px;
    height: 44px;

    background-color: #003459;
    border-radius: 57px;
    border: none;
    font-family: 'SF Pro Display';
    font-size: 16px;
    line-height: 24px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;

export const LanguageCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LogOutContainer = styled.div`
  position: absolute;
  top: 80px;
  right: 220px;

  padding: 16px;
  background-color: #ffffff;
  box-shadow: 0px 4px 12px rgba(92, 115, 160, 0.25);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1009;

  width: 272px;
  height: auto;

  border: 1px solid #ffffff;
`;

export const LogOutSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: ' Noto Sans Georgian';
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  color: #003459;

  gap: 15px;
  cursor: pointer;

  &:hover {
    color: lightblue;
  }
`;

export const LogOutTitle = styled.h1`
  font-family: 'Noto Sans Georgian';
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #003459;

  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  border-bottom: 1px solid rgba(0, 52, 89, 1);
  padding-bottom: 15px;
`;

export const LogoutSpace = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  gap: 18.48px;
  width: 100%;
`;

export const MenuOpenCon = styled.div`
  @media (max-width: 414px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    gap: 49px;
    background-color: #ffffff;
    color: black;
    width: 100%;
    height: 300px;
    position: absolute;
    top: 100px;
    left: 0px;
    z-index: 1011;
    padding: 53px 82.5px 38px 0px;
    margin: 0px;
  }
`;

export const Content = styled.div`
  @media (max-width: 414px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 24px;
  }
`;

export const SpanMob = styled.div`
  font-family: 'SVN-Gilroy';
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #003459;
`;

export const AuthorizationConMob = styled.div`
  @media (max-width: 414px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    gap: 24px;
    width: 100%;
  }
`;

export const SpanSpace = styled.div`
  @media (max-width: 414px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 24px;
  }
`;
