import React from 'react';
import Logo from '../../assets/images/logos/Frame.png';
import {
  FooterContainer,
  TitleCon,
  NavCon,
  EndPointCon,
  Title,
  InputCon,
  Input,
  Subcribe,
  NavTitleCon,
  Span,
  SocMediaCon,
  SocSpan,
  Reserved,
  LogoImg,
  Service,
  ServiceSpan,
  Reserved2,
} from './footerStyles';

const Footer = () => {
  return (
    <FooterContainer>
      <TitleCon>
        <Title>
          Register now so you don't miss
          <br /> our programs
        </Title>
        <InputCon>
          <Input placeholder='Enter your Email'></Input>
          <Subcribe>Subcribe Now</Subcribe>
        </InputCon>
      </TitleCon>
      <NavCon>
        <NavTitleCon>
          <Span> Home </Span>
          <Span> Category </Span>
          <Span> About </Span>
          <Span> Contact </Span>
        </NavTitleCon>

        <SocMediaCon>
          <SocSpan>
            <i class='fa-brands fa-facebook'></i>
          </SocSpan>
          <SocSpan>
            <i class='fa-brands fa-twitter'></i>
          </SocSpan>
          <SocSpan>
            <i class='fa-brands fa-instagram'></i>
          </SocSpan>
          <SocSpan>
            <i class='fa-brands fa-youtube'></i>
          </SocSpan>
        </SocMediaCon>
      </NavCon>

      <EndPointCon>
        <Reserved>© 2022 Monito. All rights reserved.</Reserved>
        <LogoImg src={Logo} alt='' />
        <Service>
          <ServiceSpan>Terms of Service </ServiceSpan>
          <ServiceSpan>Privacy Policy</ServiceSpan>
        </Service>
        <Reserved2>© 2022 Monito. All rights reserved.</Reserved2>
      </EndPointCon>
    </FooterContainer>
  );
};

export default Footer;
