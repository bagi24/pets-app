import React, { useState } from 'react';
import Logo from '../../assets/images/logos/Frame.png';
import georgianFlag from '../../assets/images/logos/geFlag.jpg';
import englishFlag from '../../assets/images/logos/EnglishFlag.jpg';
import { useNavigate } from 'react-router-dom';
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
  ArrowDown,
} from './secondaryHeaderStyles';

const SecondaryHeder = () => {
  const navigate = useNavigate();
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

  const handleJoin = () => {
    navigate('/login');
  };

  const handleHome = () => {
    navigate('/');
  };
  const handleCategory = () => {
    navigate('/category');
  };
  const handleContact = () => {
    navigate('/loginDone');
  };

  return (
    <HeaderContainer>
      <NavCon>
        <StyledLogo src={Logo} alt='logo' />
        <Span onClick={handleHome}>Home</Span>
        <Span onClick={handleCategory}>Category</Span>
        <Span onClick={handleContact}>Contact</Span>
      </NavCon>

      <AuthorizationCon>
        <Button onClick={handleJoin}>Join the community</Button>
        <LanguageCon>
          <LanguageSelector onClick={toggleDropdown}>
            <FlagImage src={language.flag} alt={`${language.abbreviation} Flag`} />
            <Abbreviation>{language.abbreviation}</Abbreviation>
            <ArrowDown>
              <i class='fa-solid fa-angle-down'></i>
            </ArrowDown>
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

export default SecondaryHeder;
