import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { setAppIsNavOpenAction } from '../../store/actions/app-actions';
import { appIsNavOpen, appWidthSelector } from '../../store/selectors/app-selectors';
import {
  HeaderContainer,
  HeaderLeftSection,
  HeaderLogo,
  HeaderLogoContainer,
  HeaderLogoDescription,
  HeaderLogoMobile,
  HeaderLogoNavMenuMobile,
  HeaderLogoTextSection,
  HeaderMobileMenu,
  HeaderNavContainer,
  InsideLink,
  NavLink,
  HeaderLogoTitle,
  JoinLink,
  HeaderMobileMenuSocialsContainer,
  HeaderMobileMenuSocialImg,
} from './styles';
import './styles.css';
import discord from './discord.png';
import twitter from './twitter.png';

const Header = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const width = useAppSelector(appWidthSelector);
  const isOpen = useAppSelector(appIsNavOpen);
  const handleOpenLinktree = () => {
    dispatch(setAppIsNavOpenAction(false));
    window.open('https://linktr.ee/anunnakivision');
  };

  const handleOpenDiscord = () => {
    dispatch(setAppIsNavOpenAction(false));
    window.open(' https://discord.gg/3t9C3pbBeD');
  };

  const handleOpenTwitter = () => {
    dispatch(setAppIsNavOpenAction(false));
    window.open(' https://twitter.com/OrdinalHunters');
  };

  const buildButton = (): JSX.Element => {
    return (
      <button style={{ zIndex: 50 }} type="button" onClick={() => dispatch(setAppIsNavOpenAction(!isOpen))} className={`${isOpen ? 'active' : ''} burger`}>
        <div className={`${isOpen ? 'active' : ''} strip burger-strip-4`}>
          <div />
          <div />
          <div />
        </div>
      </button>
    );
  };
  if (width < 1000) {
    return (
      <HeaderContainer>
        <HeaderLeftSection>
          <HeaderLogo src="assets/header-logo.png" />
          <HeaderLogoTextSection>
            <HeaderLogoTitle>Alpha Ordinal</HeaderLogoTitle>
            <HeaderLogoDescription>Secret to profitable trades</HeaderLogoDescription>
          </HeaderLogoTextSection>
        </HeaderLeftSection>
        {!isOpen && buildButton()}
        <HeaderMobileMenu isOpen={isOpen}>
          <div style={{ position: 'absolute', top: '20px', right: '30px' }}>{buildButton()}</div>
          <HeaderLogoMobile isOpen={isOpen} src="assets/header-logo.png" />
          <InsideLink isOpen={isOpen} onClick={() => dispatch(setAppIsNavOpenAction(false))} to="banner">
            Home
          </InsideLink>
          <InsideLink isOpen={isOpen} onClick={() => dispatch(setAppIsNavOpenAction(false))} to="overview">
            Overview
          </InsideLink>
          <InsideLink isOpen={isOpen} onClick={() => dispatch(setAppIsNavOpenAction(false))} to="roadmap">
            RoadMap
          </InsideLink>
          <InsideLink isOpen={isOpen} onClick={() => dispatch(setAppIsNavOpenAction(false))} to="team">
            Team
          </InsideLink>
          <InsideLink isOpen={isOpen} onClick={() => dispatch(setAppIsNavOpenAction(false))} to="faq">
            Faq
          </InsideLink>
          <HeaderMobileMenuSocialsContainer>
            <HeaderMobileMenuSocialImg src={discord} onClick={() => handleOpenDiscord()} />
            <HeaderMobileMenuSocialImg src={twitter} onClick={() => handleOpenTwitter()} />
          </HeaderMobileMenuSocialsContainer>
        </HeaderMobileMenu>
      </HeaderContainer>
    );
  }
  return (
    <HeaderContainer>
      <HeaderLeftSection>
        <HeaderLogo src="assets/header-logo.png" />
        <HeaderLogoTextSection>
          <HeaderLogoTitle>Alpha Ordinal</HeaderLogoTitle>
          <HeaderLogoDescription>Secret to profitable trades</HeaderLogoDescription>
        </HeaderLogoTextSection>
      </HeaderLeftSection>
      <HeaderNavContainer>
        <NavLink to="banner">Home</NavLink>
        <NavLink to="overview">Overview</NavLink>
        <NavLink to="roadmap">Roadmap</NavLink>
        <NavLink to="team">Team</NavLink>
        <NavLink to="faq">Faq</NavLink>
      </HeaderNavContainer>
      <JoinLink to="mint">Join</JoinLink>
    </HeaderContainer>
  );
};

export default Header;
