import React from 'react';
import {
  DesignByText,
  FooterContainer,
  FooterCopyRight,
  FooterIcon,
  FooterLinktreeButton,
  FooterLogo,
  FooterLogoImg,
  FooterLogoTitle,
  FooterMafiaContainer,
  FooterWrapper,
  FooterWrapperContainer,
} from './styles';

const Footer = (): JSX.Element => {
  const handleOpenLinktree = () => {
    window.open('https://linktr.ee/anunnakivision');
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
          <FooterMafiaContainer>
            <FooterIcon src="assets/mafia-room.png" />
            <DesignByText>Designed by Mafia Room </DesignByText>
          </FooterMafiaContainer>
        </FooterWrapper>
      </FooterWrapperContainer>
    </FooterContainer>
  );
};

export default Footer;
