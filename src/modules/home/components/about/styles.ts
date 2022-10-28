import styled from '../../../../theme';
import firstBg from './about-1.png';
import secondBg from './about-2.png';

export const AboutFirstContainer = styled.section`
  display: flex;
  background-image: ${`url(${firstBg})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  flex: 1;
  flex-direction: column;
  align-items: flex-end;
  min-height: 1000px;
  gap: 80px;
  padding: 80px 0;
  @media screen and(max-width: 512px) {
    gap: 25px;
  }
`;

export const AboutSecondContainer = styled.section`
  display: flex;
  background-image: ${`url(${secondBg})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  flex: 1;
  flex-direction: column;
  align-items: flex-end;
  min-height: 1000px;
  padding: 80px 0;
  gap: 70px;
  @media screen and(max-width: 512px) {
    gap: 25px;
  }
`;

export const AfTitle = styled.h1`
  align-self: flex-start;
  margin-left: 60px;
  ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSize.gigant};
  font-family: ${props => props.theme.fonts.bold};
  text-transform: uppercase;
  letter-spacing: 1.4px;
  width: 80%;
  max-width: 1000px;
  @media screen and (max-width: 1000px) {
    font-size: ${props => props.theme.fontSize.xLarge};
    padding: 0 12px;
  }
  @media screen and (max-width: 768px) {
    font-size: ${props => props.theme.fontSize.xLarge};
    align-self: center;
    text-align: center;
    width: 90%;
    margin: 0;
  }
  @media screen and (max-width: 512px) {
    font-size: ${props => props.theme.fontSize.large};
    padding: 0 12px;
  }
`;

export const AsTitle = styled.h1`
  align-self: flex-end;
  text-align: right;
  margin-right: 60px;
  ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSize.gigant};
  font-family: ${props => props.theme.fonts.bold};
  text-transform: uppercase;
  letter-spacing: 1.4px;
  width: 80%;
  max-width: 800px;
  @media screen and (max-width: 1000px) {
    font-size: ${props => props.theme.fontSize.xLarge};
    padding: 0 12px;
  }
  @media screen and (max-width: 768px) {
    font-size: ${props => props.theme.fontSize.xLarge};
    align-self: center;
    text-align: center;
    width: 90%;
    margin: 0;
  }
  @media screen and (max-width: 512px) {
    font-size: ${props => props.theme.fontSize.large};
    padding: 0 12px;
  }
`;

export const AfCardContainer = styled.article<{ paddingRight: number }>`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-self: flex-end;
  padding-right: ${props => (props.paddingRight === 2 ? '120px' : '60px')};
  align-items: flex-end;
  @media screen and (max-width: 890px) {
    align-self: center;
    align-items: center;
    padding: 0;
    gap: 36px;
  }
`;

export const AfCardTitle = styled.h2`
  background: linear-gradient(180deg, #8bdcff 0%, #e8f6ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: ${props => props.theme.fontSize.xLarge};
  font-family: ${props => props.theme.fonts.bold};
  text-transform: uppercase;
  letter-spacing: 1.4px;
  text-align: right;
  width: 80%;
  max-width: 1100px;
  @media screen and (max-width: 890px) {
    text-align: center;
    padding: 0;
  }
  @media screen and (max-width: 768px) {
    font-size: ${props => props.theme.fontSize.large};
    align-self: center;
    text-align: center;
    width: 90%;
    margin: 0;
  }
  @media screen and (max-width: 512px) {
    font-size: ${props => props.theme.fontSize.medium};
    padding: 0 12px;
  }
`;

export const AfCardText = styled.p`
  font-size: ${props => props.theme.fontSize.small};
  font-family: ${props => props.theme.fonts.regular};
  width: 80%;
  max-width: 800px;
  text-align: right;
  color: ${props => props.theme.colors.textWhite};
  @media screen and (max-width: 890px) {
    text-align: center;
    padding: 0;
  }
`;
