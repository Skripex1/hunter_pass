import React from 'react';
import { FooterContainer, FooterCopyRight, FooterIcon, FooterLinktreeButton, FooterLogo, FooterLogoImg, FooterLogoTitle, FooterWrapper, FooterWrapperContainer } from './styles';

const Footer = (): JSX.Element => {
  const handleOpenLinktree = () => {
    window.open('');
  };
  return (
    <FooterContainer>
      <FooterWrapperContainer>
        <FooterWrapper>
          <FooterLogo>
            <FooterLogoImg src="assets/header-logo.png" />
            <FooterLogoTitle>anunnakis</FooterLogoTitle>
          </FooterLogo>
          <FooterCopyRight>Copyright © 2022 Anunnakis All rights reserved.</FooterCopyRight>
        </FooterWrapper>
        <FooterWrapper>
          <FooterLinktreeButton onClick={handleOpenLinktree}>linktree</FooterLinktreeButton>
          <FooterIcon src="assets/mafia-room.png" />
        </FooterWrapper>
      </FooterWrapperContainer>
    </FooterContainer>
  );
};

export default Footer;
