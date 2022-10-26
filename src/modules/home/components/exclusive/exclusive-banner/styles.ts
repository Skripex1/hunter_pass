import styled from '../../../../../theme';

export const EbContainer = styled.div`
  margin-top: 60px;
  background: linear-gradient(180deg, #df4d4d 0%, #8c2323 100%);
  border-radius: 30px;
  display: flex;
  position: relative;
  gap: 180px;
  align-self: center;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;

  align-items: center;
  padding: 30px 20px;
  @media screen and (max-width: 900px) {
    width: 80%;
  }
  @media screen and (max-width: 512px) {
    width: 100%;
  }
  @media screen and (max-width: 312px) {
    gap: 120px;
  }
`;

export const EbTextSection = styled.div`
  margin-top: 20px;
  display: flex;
  text-transform: uppercase;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 80%;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
  @media screen and (max-width: 312px) {
    margin: 0;
  }
`;

export const EbText = styled.h5`
  color: ${props => props.theme.colors.textWhite};
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${props => props.theme.fontSize.small};
  @media screen and (max-width: 512px) {
    font-size: ${props => props.theme.fontSize.xSmall};
    text-align: center;
  }
`;

export const EbTitle = styled.h1`
  color: ${props => props.theme.colors.textWhite};
  font-family: ${props => props.theme.fonts.extraBold};
  letter-spacing: 4px;
  text-align: center;
  font-size: ${props => props.theme.fontSize.gigant};
  @media screen and (max-width: 768px) {
    font-size: ${props => props.theme.fontSize.xLarge};
  }
  @media screen and (max-width: 512px) {
    font-size: ${props => props.theme.fontSize.large};
    letter-spacing: 2px;
    text-align: center;
  }
  @media screen and (max-width: 312px) {
    font-size: ${props => props.theme.fontSize.medium};
    text-align: center;
  }
`;

export const EbCardsContainer = styled.div`
  display: flex;
  gap: 32px;
  padding-top: 30px;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    gap: 140px;
  }
  @media screen and (max-width: 512px) {
    padding-top: 0;
  }
  @media screen and (max-width: 312px) {
    gap: 100px;
  }
`;
