import styled, { css } from '../../../../../theme';

export const McContainer = styled.article`
  border-radius: 20px;
  background-color: ${props => props.theme.colors.primary};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 890px) {
    flex-direction: column-reverse;
  }
`;
export const McInformationContainer = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media screen and (max-width: 512px) {
    gap: 8px;
    padding: 16px;
  }
`;
export const McTitle = styled.h1`
  text-transform: uppercase;
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${props => props.theme.fontSize.large};
  @media screen and (max-width: 512px) {
    font-size: ${props => props.theme.fontSize.medium};
  }
`;
export const McText = styled.p`
  color: ${props => props.theme.colors.textWhite};
  font-family: ${props => props.theme.fonts.roboto};
  font-size: ${props => props.theme.fontSize.medium};
  width: 95%;
  @media screen and (max-width: 830px) {
    font-size: ${props => props.theme.fontSize.small};
  }
  @media screen and (max-width: 340px) {
    font-size: ${props => props.theme.fontSize.mSmall};
  }
`;
export const McImage = styled.img`
  object-fit: cover;
  border-radius: 20px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  height: 380px;
  @media screen and (max-width: 890px) {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    width: 100%;
    height: 100%;
  }
`;
export const McMintDetails = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 512px) {
    margin-top: 5px;
  }
`;
export const McMintDetailsQuantity = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const McmdqLabel = styled.h3`
  text-transform: uppercase;
  font-size: ${props => props.theme.fontSize.small};
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.bold};
  @media screen and (max-width: 512px) {
    font-size: ${props => props.theme.fontSize.mSmall};
  }
`;
export const MCmdqValue = styled.h5`
  text-transform: uppercase;
  display: flex;
  white-space: nowrap;
  font-size: ${props => props.theme.fontSize.large};
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.regular};
  @media screen and (max-width: 512px) {
    font-size: ${props => props.theme.fontSize.small};
  }
`;
export const McButton = styled.button<{ isMint?: boolean }>`
  outline: 0;
  border: 0;
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.darkRed};
  text-transform: uppercase;
  font-family: ${props => props.theme.fonts.extraBold};
  font-size: ${props => props.theme.fontSize.medium};
  padding: 10px 20px;
  ${props =>
    props.isMint &&
    css`
      padding: 14px 50px;
    `}
  border-radius: 6px;
  &:hover {
    outline: 0;
    border: 0;
    cursor: pointer;
  }
  &:focus {
    outline: 0;
    border: 0;
  }
  @media screen and (max-width: 512px) {
    flex: 1;
    margin-top: 10px;
  }
`;
export const McButtonsSection = styled.section<{ isConnect?: boolean }>`
  display: flex;
  justify-content: space-between;
  ${props =>
    props.isConnect &&
    css`
      justify-content: center;
    `}
  @media screen and (max-width: 890px) {
    flex-direction: column-reverse;
    align-self: center;
    min-width: 250px;
    padding-top: 10px;
    gap: 15px;
  }
  @media screen and (max-width: 830px) {
    padding: 0 10px;
    margin-top: 10px;
  }
  @media screen and (max-width: 368px) {
    min-width: 170px;
  }
`;
export const McmdpLabel = styled.h3`
  text-align: right;
  text-transform: uppercase;
  font-size: ${props => props.theme.fontSize.small};
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.bold};
  @media screen and (max-width: 512px) {
    font-size: ${props => props.theme.fontSize.mSmall};
  }
`;
export const McmdpEthereumImage = styled.img`
  height: ${props => props.theme.fontSize.medium};
  @media screen and (max-width: 512px) {
    height: ${props => props.theme.fontSize.mSmall};
  }
`;
export const McmdpPrice = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
export const McValue = styled.div`
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.darkRed};
  text-transform: uppercase;
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${props => props.theme.fontSize.large};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  @media screen and (max-width: 890px) {
    flex: 1;
  }
`;
export const McSub = styled.button`
  outline: 0;
  border: 0;
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.darkRed};
  text-transform: uppercase;
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${props => props.theme.fontSize.xLarge};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  padding-bottom: 10px;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  &:hover {
    outline: 0;
    border: 0;
    cursor: pointer;
  }
  &:focus {
    outline: 0;
    border: 0;
  }
`;
export const McAdd = styled.button`
  outline: 0;
  border: 0;
  background-color: ${props => props.theme.colors.white};
  text-transform: uppercase;
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${props => props.theme.fontSize.xLarge};
  color: ${props => props.theme.colors.darkRed};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  &:hover {
    outline: 0;
    border: 0;
    cursor: pointer;
  }
  &:focus {
    outline: 0;
    border: 0;
  }
`;

export const McSection = styled.div`
  display: flex;
`;
