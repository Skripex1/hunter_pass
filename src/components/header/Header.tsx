import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { setAppIsNavOpenAction } from '../../store/actions/app-actions';
import { appIsNavOpen, appWidthSelector } from '../../store/selectors/app-selectors';
import {
  HeaderContainer,
  HeaderLeftSection,
  HeaderLinkTree,
  HeaderLogo,
  HeaderLogoContainer,
  HeaderLogoMobile,
  HeaderLogoNavMenuMobile,
  HeaderMobileMenu,
  HeaderNavContainer,
  InsideLink,
  NavLink,
} from './styles';
import './styles.css';

const Header = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const width = useAppSelector(appWidthSelector);
  const isOpen = useAppSelector(appIsNavOpen);
  const handleOpenLinktree = () => {
    dispatch(setAppIsNavOpenAction(false));
    window.open('');
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
  if (width < 900) {
    return (
      <HeaderContainer>
        <HeaderLogoContainer>
          <HeaderLogoNavMenuMobile src="assets/header-logo.png" />
        </HeaderLogoContainer>
        {!isOpen && buildButton()}
        <HeaderMobileMenu isOpen={isOpen}>
          <div style={{ position: 'absolute', top: '20px', right: '30px' }}>{buildButton()}</div>
          <HeaderLogoMobile isOpen={isOpen} src="assets/header-logo.png" />
          <InsideLink isOpen={isOpen} onClick={handleOpenLinktree} to="unknown">
            Linktree
          </InsideLink>
          <InsideLink isOpen={isOpen} onClick={() => dispatch(setAppIsNavOpenAction(false))} to="banner">
            Home
          </InsideLink>
          <InsideLink isOpen={isOpen} onClick={() => dispatch(setAppIsNavOpenAction(false))} to="about">
            About
          </InsideLink>
          <InsideLink isOpen={isOpen} onClick={() => dispatch(setAppIsNavOpenAction(false))} to="utility">
            Utility
          </InsideLink>
          <InsideLink isOpen={isOpen} onClick={() => dispatch(setAppIsNavOpenAction(false))} to="roadmap">
            Roadmap
          </InsideLink>
          <InsideLink isOpen={isOpen} onClick={() => dispatch(setAppIsNavOpenAction(false))} to="esports">
            Esports
          </InsideLink>
          <InsideLink isOpen={isOpen} onClick={() => dispatch(setAppIsNavOpenAction(false))} to="team">
            Team
          </InsideLink>
          <InsideLink isOpen={isOpen} onClick={() => dispatch(setAppIsNavOpenAction(false))} to="faq">
            Faq
          </InsideLink>
        </HeaderMobileMenu>
      </HeaderContainer>
    );
  }
  return (
    <HeaderContainer>
      <HeaderLeftSection>
        <HeaderLogo src="assets/header-logo.png" />
      </HeaderLeftSection>
      <HeaderNavContainer>
        <NavLink to="banner">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="utility">Utility</NavLink>
        <NavLink to="roadmap">Roadmap</NavLink>
        <NavLink to="esports">Esports</NavLink>
        <NavLink to="team">Team</NavLink>
        <NavLink to="faq">Faq</NavLink>
      </HeaderNavContainer>
      <HeaderLinkTree onClick={handleOpenLinktree}>linktree</HeaderLinkTree>
    </HeaderContainer>
  );
};

export default Header;
