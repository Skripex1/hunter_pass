import styled from '../../../../theme';
import bgImage from './team-bg.png';

export const TeamContainer = styled.section`
  display: flex;
  background-image: ${`url(${bgImage})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 70px;
  @media screen and(max-width: 512px) {
    gap: 25px;
  }
`;

export const TeamTitle = styled.h1`
  text-align: center;
  padding: 0 20px;
  ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSize.gigant};
  font-family: ${props => props.theme.fonts.bold};
  text-transform: uppercase;
  letter-spacing: 1.4px;
  position: relative;
  width: 100%;
  @media screen and (max-width: 768px) {
    font-size: ${props => props.theme.fontSize.xLarge};
    padding: 0 12px;
  }
  @media screen and (max-width: 312px) {
    font-size: ${props => props.theme.fontSize.large};
    padding: 0 12px;
    margin-top: 50px;
  }
`;

export const TeamContainerCards = styled.div`
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr 1fr;
  gap: 40px 10px;
  padding: 0 10px;
  @media screen and (max-width: 768px) {
    grid-template: 1fr 1fr 1fr/ 1fr 1fr;
  }
  @media screen and (max-width: 300px) {
    grid-template: 1fr 1fr 1fr/ 1fr;
  }
`;

export const TeamMafiaRoomContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 900px;
  margin-top: 60px;
  justify-content: center;
  gap: 15px;
  padding: 0 40px;
  margin-right: 60px;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    gap: 20px;
    align-items: center;
    margin-right: 0;
  }
`;
export const TmrText = styled.h3`
  text-align: right;
  align-self: center;
  color: ${props => props.theme.colors.lightBlue};
  font-size: ${props => props.theme.fontSize.xLarge};
  font-family: ${props => props.theme.fonts.bold};
  text-transform: uppercase;
  letter-spacing: 1.4px;
  position: relative;
  @media screen and (max-width: 900px) {
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    font-size: ${props => props.theme.fontSize.large};
  }
  @media screen and (max-width: 512px) {
    font-size: ${props => props.theme.fontSize.medium};
  }
`;
export const TmrImage = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  align-self: center;
  @media screen and (max-width: 512px) {
    width: 60px;
    height: 60px;
  }
`;
