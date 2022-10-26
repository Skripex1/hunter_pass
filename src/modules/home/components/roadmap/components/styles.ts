import styled, { css } from '../../../../../theme';

export const RiContainer = styled.article<{ isRight?: boolean }>`
  display: flex;
  width: 100vw;
  flex-direction: column;
  gap: 30px;
  position: relative;
  ${props =>
    props.isRight &&
    css`
      text-align: right;
      align-items: flex-end;
    `}
  @media screen and (max-width: 768px) {
    ${props =>
      props.isRight &&
      css`
        padding-left: 30px;
      `}
    ${props =>
      !props.isRight &&
      css`
        padding-right: 30px;
      `}
    gap: 24px;
  }
  @media screen and (max-width: 400px) {
    ${props =>
      props.isRight &&
      css`
        padding-left: 16px;
      `}
    ${props =>
      !props.isRight &&
      css`
        padding-right: 16px;
      `}
  }
  @media screen and (max-width: 380px) {
    align-items: center;
    text-align: center;
    padding: 0 15px;
  }
`;
export const RiTitle = styled.h2`
  font-size: ${props => props.theme.fontSize.xLarge};
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.bold};
  text-transform: uppercase;
  @media screen and (max-width: 924px) {
    font-size: ${props => props.theme.fontSize.medium};
  }
  @media screen and (max-width: 512px) {
    font-size: ${props => props.theme.fontSize.small};
  }
`;
export const RiText = styled.p`
  max-width: 800px;
  font-size: ${props => props.theme.fontSize.small};
  font-family: ${props => props.theme.fonts.light};
  text-transform: uppercase;
  color: ${props => props.theme.colors.white};
  @media screen and (max-width: 550px) {
    font-size: ${props => props.theme.fontSize.mSmall};
  }
`;
