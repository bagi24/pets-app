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
  Rectangle3,
  LogOutContainer,
  LogOutSpan,
  LogOutTitle,
} from './headerStyles';

const Header = ({ name, setName }) => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState({
    flag: georgianFlag,
    abbreviation: 'GE',
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLogOutOpen, setIsLogOutOpen] = useState(false);

  const toggleLanguage = (flag, abbreviation) => {
    setLanguage({ flag, abbreviation });
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleJoin = () => {
    if (name === 'Join the community') {
      navigate('/login');
    } else {
      setIsLogOutOpen(true);
    }
  };

  const handleLogOut = () => {
    setName('Join the community');
    setIsLogOutOpen(false);
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleCategoryClick = () => {
    navigate('/category');
  };

  const handleContactClick = () => {
    navigate('/loginDone');
  };

  return (
    <HeaderContainer>
      <NavCon>
        <StyledLogo src={Logo} alt='logo' />
        <Span onClick={handleHomeClick}>Home</Span>
        <Span onClick={handleCategoryClick}>Category</Span>
        <Span onClick={handleContactClick}>Contact</Span>
      </NavCon>
      <Rectangle3></Rectangle3>
      <AuthorizationCon>
        <Button onClick={handleJoin}>{name}</Button>
        <LanguageCon>
          <LanguageSelector onClick={toggleDropdown}>
            <FlagImage src={language.flag} alt='' />
            <Abbreviation>{language.abbreviation}</Abbreviation>
            <i className='fa-solid fa-angle-down'></i>
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

      {isLogOutOpen && (
        <LogOutContainer>
          <LogOutTitle>{name}</LogOutTitle>
          <LogOutSpan>Profile</LogOutSpan>
          <LogOutSpan onClick={handleLogOut}>Log Out</LogOutSpan>
        </LogOutContainer>
      )}
    </HeaderContainer>
  );
};

export default Header;
