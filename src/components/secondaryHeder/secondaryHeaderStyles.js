import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 404px;
  background: inherit;
`;

export const NavCon = styled.div`
  display: flex;
  position: relative;
  z-index: 1001;
  align-items: center;
  justify-content: flex-start;
  gap: 48px;
  width: 100%;
`;

export const AuthorizationCon = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
  gap: 24px;
  width: 100%;
`;

export const StyledLogo = styled.img`
  width: 115px;
  height: 40px;
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
`;

export const LanguageSelector = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 105px;
  height: 44px;
  gap: 8px;

  cursor: pointer;
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
`;

export const LanguageCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
