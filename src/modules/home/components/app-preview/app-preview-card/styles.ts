import styled from '../../../../../theme';

export const ApCardContainer = styled.div<{ isRight?: boolean }>`
  display: flex;
  flex-direction: ${props => props.isRight && 'row-reverse'};
  text-align: ${props => props.isRight && 'right'};
  gap: 30px;
  padding: 10px 0;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    align-self: center;
    text-align: center;
  }
`;

export const ApCardTitle = styled.h1`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSize.xxLarge};
  font-family: ${props => props.theme.fonts.bold};
  text-transform: uppercase;
  letter-spacing: 1.4px;
  max-width: 1000px;
  position: relative;
  width: 100%;
  @media screen and (max-width: 1200px) {
    width: 80%;
    text-align: center;
    align-self: center;
  }
  @media screen and (max-width: 768px) {
    font-size: ${props => props.theme.fontSize.large};
    padding: 0 20px;
  }
  @media screen and (max-width: 512px) {
    font-size: ${props => props.theme.fontSize.medium};
    width: 100%;
  }
  @media screen and (max-width: 312px) {
    padding: 0 12px;
  }
`;

export const ApCardText = styled.p<{ isRight?: boolean }>`
  max-width: 700px;
  font-size: ${props => props.theme.fontSize.small};
  font-family: ${props => props.theme.fonts.light};
  text-transform: uppercase;
  width: 80%;
  align-self: ${props => (props.isRight ? 'flex-end' : 'flex-start')};
  color: ${props => props.theme.colors.white};
  @media screen and (max-width: 1200px) {
    align-self: center;
    text-align: center;
    padding: 0 30px;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
  }
  @media screen and (max-width: 550px) {
    font-size: ${props => props.theme.fontSize.xSmall};
    width: 100%;
  }
`;

export const ApCardInformation = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

export const ApCardImage = styled.img`
  flex: 1;
  align-self: center;
  object-fit: cover;
  @media screen and (max-width: 768px) {
    width: 400px;
  }
  @media screen and (max-width: 512px) {
    width: 250px;
  }
  @media screen and (max-width: 312px) {
    width: 100%;
  }
`;
