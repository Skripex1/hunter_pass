import styled from '../../../../theme';
import esports from './esports_background.png';

export const EsportsContainer = styled.section`
  min-height: 100vh;
  background-image: url(${esports});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  padding-left: 100px;
  padding-right: 20px;
  gap: 35px;
  text-transform: uppercase;
  @media screen and (max-width: 1200px) {
    gap: 60px;
  }
  @media screen and (max-width: 768px) {
    padding-left: 50px;
    gap: 85px;
  }
  @media screen and (max-width: 492px) {
    padding-left: 25px;
  }
`;
export const EsportsTitle = styled.h1`
  font-size: ${props => props.theme.fontSize.xGigant};
  ${props => props.theme.colors.primary};
  font-style: ${props => props.theme.fonts.normal};
  @media screen and (max-width: 768px) {
    font-size: ${props => props.theme.fontSize.xLarge};
  }
  @media screen and (max-width: 320px) {
    font-size: ${props => props.theme.fontSize.large};
  }
`;
export const EsportsQuestion = styled.div`
  font-size: ${props => props.theme.fontSize.large};
  ${props => props.theme.colors.primary}
  max-width: 580px;
  @media screen and (max-width: 768px) {
    font-size: ${props => props.theme.fontSize.medium};
  }
`;
export const EsportsDescription = styled.div`
  font-size: ${props => props.theme.fontSize.medium};
  color: ${props => props.theme.colors.white};
  display: flex;
  max-width: 630px;
  @media screen and (max-width: 1200px) {
    font-size: ${props => props.theme.fontSize.small};
  }
  @media screen and (max-width: 492px) {
    font-size: ${props => props.theme.fontSize.xSmall};
  }
`;
export const EsportsCards = styled.div`
  font-size: ${props => props.theme.fontSize.large};
  flex-direction: row;
  margin-top: 20px;
  display: flex;
  gap: 60px;
  @media screen and (max-width: 550px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 20px;
  }
`;
export const LeftEsportsCards = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: white;
  gap: 20px;
  padding-left: 10px;
  font-size: ${props => props.theme.fontSize.medium};
  @media screen and (max-width: 920px) {
    font-size: ${props => props.theme.fontSize.small};
  }
  @media screen and (max-width: 750px) {
    font-size: ${props => props.theme.fontSize.xSmall};
  }
  @media screen and (max-width: 550px) {
    padding: 0;
    width: 100%;
    font-size: ${props => props.theme.fontSize.medium};
  }
`;
export const RightEsportsCards = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: white;
  gap: 20px;
  padding-left: 10px;
  font-size: ${props => props.theme.fontSize.medium};
  @media screen and (max-width: 920px) {
    font-size: ${props => props.theme.fontSize.small};
  }
  @media screen and (max-width: 750px) {
    font-size: ${props => props.theme.fontSize.xSmall};
  }
  @media screen and (max-width: 550px) {
    padding: 0;
    width: 100%;
    font-size: ${props => props.theme.fontSize.medium};
  }
`;
