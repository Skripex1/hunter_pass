import styled from '../../../../../theme';

export const TeamCardContainer = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

export const TeamCardInfoContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
`;

export const TeamCardInfoTitle = styled.h2`
  font-size: ${props => props.theme.fontSize.large};
  color: ${props => props.theme.colors.lightBlue};
  font-family: ${props => props.theme.fonts.bold};
  text-transform: uppercase;
  @media screen and (max-width: 924px) {
    font-size: ${props => props.theme.fontSize.medium};
  }
  @media screen and (max-width: 512px) {
    font-size: ${props => props.theme.fontSize.small};
  }
`;

export const TeamCardInfoText = styled.p`
  max-width: 800px;
  font-size: ${props => props.theme.fontSize.small};
  font-family: ${props => props.theme.fonts.light};
  text-transform: uppercase;
  text-align: center;
  color: ${props => props.theme.colors.textWhite};
  @media screen and (max-width: 924px) {
    font-size: ${props => props.theme.fontSize.mSmall};
  }
`;
