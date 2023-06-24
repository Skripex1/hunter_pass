import React from 'react';
import {
  FooterLine,
  FooterContainer,
  FooterLogoTextSection,
  FooterLeftSection,
  FooterLogoDescription,
  FooterLogoTitle,
  FooterLogo,
  FooterWrapper,
  FooterCopyRight,
  FooterBegging,
} from './styles';
import logo from './logo.png';

const Footer = (): JSX.Element => {
  return (
    <FooterContainer>
      <FooterLine />
      <FooterWrapper>
        <FooterLeftSection>
          <FooterLogo src={logo} />
          <FooterLogoTextSection>
            <FooterLogoTitle>Ordinal Hunters</FooterLogoTitle>
            <FooterLogoDescription>Secret to profitable trades</FooterLogoDescription>
          </FooterLogoTextSection>
          <FooterCopyRight>2022 © Designed by the Pack. All rights reserved Ordinal Hunters</FooterCopyRight>
          <FooterBegging>This is only the beginning.</FooterBegging>
        </FooterLeftSection>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
