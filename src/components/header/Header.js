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
  LogoutSpace,
  HamburgerIcon,
  SpanSpace,
  MenuOpenCon,
  Content,
  SpanMob,
  AuthorizationConMob,
} from './headerStyles';

const Header = ({ name, setName, setLanguageTranslate }) => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState({
    flag: englishFlag,
    abbreviation: 'EN',
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLogOutOpen, setIsLogOutOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    setIsMenuOpen(false); // მენიუს დახურვა
  };

  const handleCategoryClick = () => {
    navigate('/category');
    setIsMenuOpen(false); // მენიუს დახურვა
  };

  const handleContactClick = () => {
    navigate('/loginDone');
    setIsMenuOpen(false); // მენიუს დახურვა
  };

  const toggleLanguage = (flag, abbreviation, langCode) => {
    console.log(setLanguageTranslate); // კონსოლზე გამოყვანა
    setLanguage({ flag, abbreviation });
    setLanguageTranslate(langCode); // ენის კოდის ჩასმა
    setIsDropdownOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <NavCon>
        <StyledLogo src={Logo} alt='logo' />
        <HamburgerIcon onClick={toggleMenu}>
          <i class='fa-solid fa-bars'></i>
        </HamburgerIcon>
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
              <DropdownItem onClick={() => toggleLanguage(englishFlag, 'EN', 'EN')}>
                <FlagImage src={englishFlag} alt='EN Flag' />
                <Abbreviation>EN</Abbreviation>
              </DropdownItem>
              <DropdownItem onClick={() => toggleLanguage(georgianFlag, 'GE', 'GE')}>
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
          <LogoutSpace>
            <LogOutSpan>
              <i class='fa-regular fa-user'></i> Profile
            </LogOutSpan>
            <LogOutSpan onClick={handleLogOut}>
              <i class='fa-solid fa-right-from-bracket'></i> Log Out
            </LogOutSpan>
          </LogoutSpace>
        </LogOutContainer>
      )}

      {isMenuOpen && (
        <MenuOpenCon>
          <span
            onClick={handleClose}
            style={{
              position: 'absolute',
              top: '21px',
              left: '13px',
              color: '#00171F',
              width: '32px',
              height: '32px',
              cursor: 'pointer',
            }}>
            X
          </span>
          <Content>
            <SpanSpace>
              <SpanMob onClick={handleHomeClick}>Home</SpanMob>
              <SpanMob onClick={handleCategoryClick}>Category</SpanMob>
              <SpanMob onClick={handleContactClick}>Contact</SpanMob>
            </SpanSpace>
            <AuthorizationConMob>
              <Button onClick={handleJoin}>{name}</Button>
              <LanguageCon>
                <LanguageSelector onClick={toggleDropdown}>
                  <FlagImage src={language.flag} alt='' />
                  <Abbreviation>{language.abbreviation}</Abbreviation>
                  <i className='fa-solid fa-angle-down'></i>
                </LanguageSelector>

                {isDropdownOpen && (
                  <LanguageDropdown>
                    <DropdownItem onClick={() => toggleLanguage(englishFlag, 'EN', 'EN')}>
                      <FlagImage src={englishFlag} alt='EN Flag' />
                      <Abbreviation>EN</Abbreviation>
                    </DropdownItem>
                    <DropdownItem onClick={() => toggleLanguage(georgianFlag, 'GE', 'GE')}>
                      <FlagImage src={georgianFlag} alt='GE Flag' />
                      <Abbreviation>GE</Abbreviation>
                    </DropdownItem>
                  </LanguageDropdown>
                )}
              </LanguageCon>
            </AuthorizationConMob>
          </Content>
          <StyledLogo src={Logo} alt='logo' />
        </MenuOpenCon>
      )}
    </HeaderContainer>
  );
};

export default Header;
