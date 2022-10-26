import styled, { css } from '../../../../theme';

export const MintSectionContainer = styled.section<{ sliderCard: number; sliderDirection: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  margin: 50px 0;
  ${props =>
    props.sliderDirection
      ? css`
          transition: margin-top 0.9s ease;
        `
      : css`
          transition: margin-top 0.3s ease;
        `};
  ${props =>
    props.sliderCard === 2 &&
    css`
      margin-top: -550px;
    `}
  ${props =>
    props.sliderCard === 1 &&
    css`
      margin-top: -400px;
    `}
  ${props =>
    props.sliderCard === 0 &&
    css`
      margin-top: 30px;
    `}
  padding: 0 40px;
  @media screen and (max-width: 768px) {
    padding: 0 20px;
    gap: 10px;
    margin-bottom: 30px;
    ${props =>
      props.sliderCard === 2 &&
      css`
        margin-top: -420px;
      `}
    ${props =>
      props.sliderCard === 1 &&
      css`
        margin-top: -300px;
      `}
  }
  @media screen and (max-width: 512px) {
    padding: 0 20px;
    gap: 10px;
    margin-bottom: 30px;
    ${props =>
      props.sliderCard === 2 &&
      css`
        margin-top: -380px;
      `}
    ${props =>
      props.sliderCard === 1 &&
      css`
        margin-top: -250px;
      `}
  }
`;

export const MintSectionTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-family: ${props => props.theme.fonts.bold};
  width: 80%;
  flex-wrap: wrap;
  max-width: 1400px;
  gap: 10px;
  justify-content: center;
  text-align: center;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const MintSectionTextTitle = styled.h1<{ isHighlighted?: boolean }>`
  color: ${props => (props.isHighlighted ? props.theme.colors.primary : props.theme.colors.white)};
  font-size: ${props => props.theme.fontSize.xLarge};
  text-transform: uppercase;
  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: ${props => props.theme.fontSize.large};
  }
  @media screen and (max-width: 512px) {
    font-size: ${props => props.theme.fontSize.medium};
  }
  @media screen and (max-width: 312px) {
    font-size: ${props => props.theme.fontSize.small};
  }
`;

export const MintSectionInfo = styled.p`
  font-family: ${props => props.theme.fonts.roboto};
  font-size: ${props => props.theme.fontSize.medium};
  color: ${props => props.theme.colors.textWhite};
  width: 50%;
  text-align: center;
  @media screen and (max-width: 512px) {
    width: 70%;
    font-size: ${props => props.theme.fontSize.small};
  }
`;
export const MintSectionCards = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  gap: 30px;
  margin-top: 30px;
  @media screen and (max-width: 890px) {
    max-width: 350px;
  }
  @media screen and (max-width: 512px) {
    width: 100%;
  }
`;
