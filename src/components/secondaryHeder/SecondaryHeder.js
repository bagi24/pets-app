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
  HamburgerIcon,
  MenuOpenCon,
  Content,
  SpanSpace,
  SpanMob,
  AuthorizationConMob,
  LogOutContainer,
  LogOutTitle,
  LogoutSpace,
  LogOutSpan,
  ButtonMob,
  LanguageSelectorMob,
  LanguageDropdownMob,
} from './secondaryHeaderStyles';

const SecondaryHeder = ({ name, setName }) => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState({
    flag: georgianFlag,
    abbreviation: 'GE',
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLogOutOpen, setIsLogOutOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const handleHome = () => {
    navigate('/');
    setIsMenuOpen(false);
  };
  const handleCategory = () => {
    navigate('/category');
    setIsMenuOpen(false);
  };
  const handleContact = () => {
    navigate('/loginDone');
    setIsMenuOpen(false);
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
              <SpanMob onClick={handleHome}>Home</SpanMob>
              <SpanMob onClick={handleCategory}>Category</SpanMob>
              <SpanMob onClick={handleContact}>Contact</SpanMob>
            </SpanSpace>
            <AuthorizationConMob>
              <ButtonMob onClick={handleJoin}>{name}</ButtonMob>
              <LanguageCon>
                <LanguageSelectorMob onClick={toggleDropdown}>
                  <FlagImage src={language.flag} alt='' />
                  <Abbreviation>{language.abbreviation}</Abbreviation>
                  <i className='fa-solid fa-angle-down'></i>
                </LanguageSelectorMob>

                {isDropdownOpen && (
                  <LanguageDropdownMob>
                    <DropdownItem onClick={() => toggleLanguage(englishFlag, 'EN', 'EN')}>
                      <FlagImage src={englishFlag} alt='EN Flag' />
                      <Abbreviation>EN</Abbreviation>
                    </DropdownItem>
                    <DropdownItem onClick={() => toggleLanguage(georgianFlag, 'GE', 'GE')}>
                      <FlagImage src={georgianFlag} alt='GE Flag' />
                      <Abbreviation>GE</Abbreviation>
                    </DropdownItem>
                  </LanguageDropdownMob>
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

export default SecondaryHeder;
