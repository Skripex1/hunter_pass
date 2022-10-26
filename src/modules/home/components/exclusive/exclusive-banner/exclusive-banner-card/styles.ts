import styled, { css } from '../../../../../../theme';

export const EbCardContainer = styled.article`
  border-radius: 30px;
  flex: 1;
  background-color: ${props => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  max-width: 500px;
  align-items: center;
  padding: 20px;
  padding-top: 70px;
  justify-content: flex-end;
  gap: 8px;
  position: relative;
  @media screen and (max-width: 768px) {
    gap: 15px;
    padding: 25px;
    padding-top: 50px;
    min-height: 140px;
    gap: 4px;
    flex: 0;
  }
`;
export const EbcTitle = styled.h5`
  color: ${props => props.theme.colors.accent};
  font-size: ${props => props.theme.fontSize.medium};
  text-transform: uppercase;
  text-align: center;
  font-family: ${props => props.theme.fonts.bold};
  @media screen and (max-width: 1100px) {
    font-size: ${props => props.theme.fontSize.small};
  }
  @media screen and (max-width: 768px) {
    font-size: ${props => props.theme.fontSize.small};
  }
`;
export const EbcText = styled.h5`
  color: ${props => props.theme.colors.accent};
  font-size: ${props => props.theme.fontSize.small};
  text-align: center;
  font-family: ${props => props.theme.fonts.roboto};
  font-weight: normal;
  @media screen and (max-width: 1000px) {
    font-size: ${props => props.theme.fontSize.mSmall};
  }
`;
export const EbcImage = styled.img<{ isBigger?: boolean }>`
  object-fit: cover;
  height: 150px;
  position: absolute;
  top: -120px;
  left: 50%;
  transform: translateX(-50%);
  ${props =>
    props.isBigger &&
    css`
      height: 170px;
    `}
  @media screen and (max-width: 1950px) {
    top: -160px;
    height: 200px;
    ${props =>
      props.isBigger &&
      css`
        height: 220px;
      `}
  }
  @media screen and (max-width: 1150px) {
    top: -120px;
    height: 150px;
    ${props =>
      props.isBigger &&
      css`
        height: 170px;
        top: -135px;
      `}
  }
  @media screen and (max-width: 312px) {
    top: -80px;
    height: 100px;
    ${props =>
      props.isBigger &&
      css`
        height: 120px;
      `}
  }
`;
