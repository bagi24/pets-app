import React, { useState } from 'react';
import Logo from '../../assets/images/logos/Frame.png';
import georgianFlag from '../../assets/images/logos/geFlag.jpg';
import englishFlag from '../../assets/images/logos/EnglishFlag.jpg';
import {
  HeaderContainer,
  StyledLogo,
  Span,
  LanguageSelector,
  FlagImage,
  Abbreviation,
  LanguageDropdown,
  DropdownItem,
  Button,
  AuthorizationCon,
  LanguageCon,
  NavCon,
  Rectangle3,
} from './headerStyles';

const Header = () => {
  const [language, setLanguage] = useState({
    flag: georgianFlag,
    abbreviation: 'GE',
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleLanguage = (flag, abbreviation) => {
    setLanguage({ flag, abbreviation });
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <HeaderContainer>
      <NavCon>
        <StyledLogo src={Logo} alt='logo' />
        <Span>Home</Span>
        <Span>Category</Span>
        <Span>Contact</Span>
      </NavCon>
      <Rectangle3></Rectangle3>
      <AuthorizationCon>
        <Button>Join the community</Button>
        <LanguageCon>
          <LanguageSelector onClick={toggleDropdown}>
            <FlagImage src={language.flag} alt={`${language.abbreviation} Flag`} />
            <Abbreviation>{language.abbreviation}</Abbreviation>
            <i class='fa-solid fa-angle-down'></i>
          </LanguageSelector>

          {isDropdownOpen && (
            <LanguageDropdown>
              <DropdownItem onClick={() => toggleLanguage(englishFlag, 'EN')}>
                <FlagImage src={englishFlag} alt='EN Flag' />
                <Abbreviation>EN</Abbreviation>
              </DropdownItem>
              <DropdownItem onClick={() => toggleLanguage(georgianFlag, 'GE')}>
                <FlagImage src={georgianFlag} alt='GE Flag' />
                <Abbreviation>GE</Abbreviation>
              </DropdownItem>
            </LanguageDropdown>
          )}
        </LanguageCon>
      </AuthorizationCon>
    </HeaderContainer>
  );
};

export default Header;
