import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
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
  /* padding: 30px 0px 30px 130px; */
`;

export const AuthorizationCon = styled.div`
  display: flex;
  /* padding: 28px 130px 28px 0px; */
  align-items: center;
  justify-content: center;
  gap: 14px;
  width: 100%;
`;

export const StyledLogo = styled.img`
  width: 120px;
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
  width: 105px;
  height: 44px;
  gap: 8px;
  cursor: pointer;
`;

export const FlagImage = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Abbreviation = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: black;
`;

export const LanguageDropdown = styled.div`
  background-color: white;
  border-radius: 5px;
  width: 100px;
  height: 44px;
  position: absolute;
  top: 64px;
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
