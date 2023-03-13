import styled from '../../../theme';
import banner from './assets/banner.jpg';
import bannerTelefon from './assets/banner_telefon.jpeg';

export const BannerContainerOverlay = styled.div`
  background-color: black;
  opacity: 0.3;
  z-index: 0;
  position: absolute;
  height: 100vh;
  width: 100%;
  top: 0%;
`;

export const BannerContainer = styled.section`
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${banner});
  position: relative;
  min-height: 100vh;
  display: flex;
  padding-top: 130px;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    background-attachment: initial;
  }
  @media screen and (max-width: 450px) {
    background-image: url(${bannerTelefon});
  }
`;

export const BannerFooter = styled.section`
  display: flex;
  margin-top: auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1000px) {
    justify-content: center;
    margin-top: 20px;
  }
`;

export const BannerLogoContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-left: 50px;
  padding-bottom: 30px;
  @media (max-width: 1000px) {
    display: none;
  }
  @media (max-width: 650px) {
    flex-direction: row;
    justify-content: center;
    padding-top: 30px;
    padding-right: 30px;
    margin: 0;
  }
`;

export const BannerLogo = styled.img`
  &:hover {
    cursor: pointer;
  }
`;

export const BannerTextContainer = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 0px;
  justify-content: center;
  align-items: flex-end;
  padding-top: 10px;
  padding-right: 30px;
  padding-left: 15px;
  padding-bottom: 15px;
  @media (max-width: 1000px) {
    align-items: center;
  }
  @media (max-width: 750px) {
    padding: 0 5px 0 5px;
  }
`;

export const BannerSmallText = styled.section`
  text-align: right;
  font-size: ${props => props.theme.fontSize.medium};
  font-family: ${props => props.theme.fonts.aldrich};
  color: ${props => props.theme.colors.white};
  padding-right: 5px;
  @media (max-width: 1200px) {
    font-size: ${props => props.theme.fontSize.small};
  }
  @media (max-width: 1000px) {
    text-align: center;
  }
  @media (max-width: 750px) {
    font-size: ${props => props.theme.fontSize.mSmall};
  }
`;
export const BannerBigText = styled.section`
  text-align: right;
  text-transform: uppercase;
  font-size: ${props => props.theme.fontSize.xxGigant};
  font-family: ${props => props.theme.fonts.aldrich};
  color: ${props => props.theme.colors.white};
  margin-top: 5px;
  @media (max-width: 1200px) {
    font-size: ${props => props.theme.fontSize.gigant};
  }
  @media (max-width: 1000px) {
    text-align: center;
  }
  @media (max-width: 900px) {
    font-size: ${props => props.theme.fontSize.xxLarge};
  }
  @media (max-width: 750px) {
    font-size: ${props => props.theme.fontSize.xLarge};
  }
  @media (max-width: 380px) {
    font-size: ${props => props.theme.fontSize.large};
  }
`;
export const BannerMediumText = styled.section`
  text-align: right;
  padding-right: 5px;
  font-size: ${props => props.theme.fontSize.large};
  font-family: ${props => props.theme.fonts.aldrich};
  color: ${props => props.theme.colors.white};
  @media (max-width: 1200px) {
    font-size: ${props => props.theme.fontSize.small};
  }
  @media (max-width: 1000px) {
    text-align: center;
  }
  @media (max-width: 450px) {
    max-width: 350px;
  }
`;
