import * as Router from 'react-router-dom';
import * as Scroll from 'react-scroll';
import styled, { css } from '../../theme';

export const HeaderContainer = styled.header<{ isScrolled?: boolean }>`
  position: absolute;
  top: 0;
  display: flex;
  padding: 10px 24px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  z-index: 20;
`;
export const HeaderLeftSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  z-index: 10;
`;
export const HeaderLogo = styled.img`
  height: 70px;
  width: 70px;
  margin-left: 10px;
  margin-top: 10px;
  align-self: center;
  @media (max-width: 1200px) {
    margin-left: -10px;
  }
`;

export const HeaderLogoTextSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  gap: 3px;
`;

export const HeaderLogoTitle = styled.p`
  font-size: ${props => props.theme.fontSize.small};
  font-family: ${props => props.theme.fonts.interBold};
  color: ${props => props.theme.colors.white};
  text-transform: uppercase;
  @media (max-width: 380px) {
    display: none;
  }
`;

export const HeaderLogoDescription = styled.p`
  font-size: ${props => props.theme.fontSize.mSmall};
  font-family: ${props => props.theme.fonts.inter};
  color: ${props => props.theme.colors.white};
  @media (max-width: 380px) {
    display: none;
  }
`;

export const HeaderNavContainer = styled.nav`
  display: flex;
  gap: 60px;
  align-self: center;
  z-index: 100;
  align-items: center;
  padding: 15px 30px;
  position: relative;
  background: transparent;
  -webkit-backdrop-filter: blur(7px);
  backdrop-filter: blur(7px);
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 30px;
  @media (max-width: 1250px) {
    gap: 30px;
  }
`;
export const HeaderNavItem = styled(Scroll.Link)`
  outline: 0;
  border: 0;
  background-color: transparent;
  text-transform: uppercase;
  font-family: ${props => props.theme.fonts.regular};
  font-size: ${props => props.theme.fontSize.small};
  color: ${props => props.theme.colors.white};
  z-index: 10;

  &:hover {
    outline: 0;
    border: 0;
    cursor: pointer;
  }
  &:focus {
    outline: 0;
    border: 0;
  }
`;
export const HeaderNavIconDiscord = styled.img`
  width: 25px;
  height: 25px;
  align-self: center;
`;
export const HeaderNavIconTwitter = styled.img`
  width: 25px;
  height: 20px;
  align-self: center;
`;
export const InsideLink = styled(Scroll.Link).attrs(props => ({
  spy: true,
  activeClass: `color:${props.theme.colors.primary}`,
  offset: -50,
  smooth: 'easeInOutQuint',
  duratioon: 500,
}))<{ isOpen?: boolean }>`
  transition: visibility 0.2s ease;
  ${props =>
    !props.isOpen &&
    css`
      visibility: hidden;
    `};
  text-transform: uppercase;
  background-color: transparent;
  font-size: ${props => props.theme.fontSize.small};
  font-family: ${props => props.theme.fonts.interBold};
  color: ${props => props.theme.colors.white};
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.darkBlue};
  }
`;
export const InsideLinkWhitePaper = styled(Router.Link)<{ isOpen?: boolean }>`
  transition: visibility 0.2s ease;
  ${props =>
    !props.isOpen &&
    css`
      visibility: hidden;
    `};
  text-transform: uppercase;
  background-color: transparent;
  font-size: ${props => props.theme.fontSize.small};
  font-family: ${props => props.theme.fonts.interBold};
  color: ${props => props.theme.colors.white};
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.darkBlue};
  }
  text-decoration: none;
`;
export const NavLink = styled(Scroll.Link).attrs(props => ({
  spy: true,
  activeClass: `${props.theme.colors.primary}`,
  offset: -50,
  smooth: 'easeInOutQuint',
  duratioon: 500,
}))`
  text-transform: uppercase;
  background-color: transparent;
  font-size: ${props => props.theme.fontSize.small};
  font-family: ${props => props.theme.fonts.interBold};
  color: ${props => props.theme.colors.white};
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.darkBlue};
  }
  @media (max-width: 1350px) {
    font-size: ${props => props.theme.fontSize.mSmall};
  }
`;
export const NavLinkWhitePaper = styled(Router.Link)`
  text-transform: uppercase;
  background-color: transparent;
  text-decoration: none;
  font-size: ${props => props.theme.fontSize.small};
  font-family: ${props => props.theme.fonts.interBold};
  color: ${props => props.theme.colors.white};
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.darkBlue};
  }
  @media (max-width: 1350px) {
    font-size: ${props => props.theme.fontSize.mSmall};
  }
`;
export const HeaderMobileMenu = styled.nav<{ isOpen?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 0;
  display: flex;
  height: 100%;
  overflow: hidden;
  background-color: black;
  flex-grow: 1;
  flex-direction: column;
  gap: 30px;
  padding: 0;
  align-items: center;
  z-index: 50;
  transition: width 0.7s ease;
  ${props =>
    props.isOpen &&
    css`
      padding: 20px 10px;
      width: 100vw;
    `}
`;
export const HeaderLogoMobile = styled.img<{ isOpen: boolean }>`
  width: 0;
  height: 70px;
  ${props =>
    props.isOpen &&
    css`
      width: 70px;
      transition: width 1s ease-out;
    `}
  margin-bottom: 50px;
`;
export const HeaderLogoContainer = styled.div`
  display: flex;
  z-index: 22;
  flex-direction: column;
  align-items: center;
  padding: 4px 0;
`;
export const HeaderLogoNavMenuMobile = styled.img`
  height: 60px;
  width: 60px;
  align-self: center;
`;

export const JoinLink = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 35px;
  border-radius: 8px;
  border-style: none;
  margin-right: 20px;
  text-transform: uppercase;
  text-align: center;
  background-color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSize.small};
  font-family: ${props => props.theme.fonts.interBold};
  color: ${props => props.theme.colors.darkBlue};
  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.colors.darkBlue};
    color: ${props => props.theme.colors.white};
  }
`;

export const HeaderMobileMenuSocialsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
`;

export const HeaderMobileMenuSocialImg = styled.img`
  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.colors.darkBlue};
    color: ${props => props.theme.colors.white};
  }
`;
