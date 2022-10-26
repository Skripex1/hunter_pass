import styled from '../../../../theme';

export const AffiliateTitle = styled.h1`
  text-align: center;
  padding: 0 20px;
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSize.xxLarge};
  font-family: ${props => props.theme.fonts.bold};
  text-transform: uppercase;
  letter-spacing: 1.4px;
  max-width: 1000px;
  position: relative;
  width: 100%;
  @media screen and (max-width: 768px) {
    font-size: ${props => props.theme.fontSize.large};
    padding: 0 20px;
  }
  @media screen and (max-width: 312px) {
    font-size: ${props => props.theme.fontSize.large};
    padding: 0 12px;
  }
`;

export const AffiliateContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin: 30px 0;
`;

export const AffiliateText = styled.p`
  max-width: 700px;
  font-size: ${props => props.theme.fontSize.small};
  font-family: ${props => props.theme.fonts.light};
  text-transform: uppercase;
  width: 70%;
  text-align: center;
  color: ${props => props.theme.colors.white};
  @media screen and (max-width: 550px) {
    font-size: ${props => props.theme.fontSize.mSmall};
  }
`;

export const AffiliateStepContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 50px;
  width: 100%;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
export const AffiliateStepWrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
`;
export const AffiliateStepText = styled.p`
  font-size: ${props => props.theme.fontSize.small};
  font-family: ${props => props.theme.fonts.light};
  text-transform: uppercase;
  text-align: center;
  color: ${props => props.theme.colors.white};
  @media screen and (max-width: 550px) {
    font-size: ${props => props.theme.fontSize.mSmall};
  }
`;
export const AffiliateStepButton = styled.button<{ isLink?: boolean; isDisabled?: boolean }>`
  color: ${props => (props.isDisabled ? props.theme.colors.lightGray : props.theme.colors.white)};
  background-color: ${props => (props.isDisabled ? props.theme.colors.darkGray : props.theme.colors.primary)};
  text-transform: uppercase;
  border-radius: 10px;
  padding: ${props => (props.isLink ? '12px 20px' : '12px 50px')};
  font-family: ${props => props.theme.fonts.bold};
  outline: 0;
  border: 0;
  cursor: ${props => props.isDisabled && 'not-allowed'};
  &:focus {
    outline: 0;
    border: 0;
  }
  &:hover {
    outline: 0;
    border: 0;
    cursor: pointer;
    cursor: ${props => props.isDisabled && 'not-allowed'};
  }
  font-size: ${props => props.theme.fontSize.small};
  @media screen and (max-width: 768px) {
    padding: ${props => (props.isLink ? '14px 10px' : '14px 34px')};
    font-size: ${props => props.theme.fontSize.small};

    border-radius: 8px;
  }
  @media screen and (max-width: 334px) {
    font-size: ${props => props.theme.fontSize.small};
  }
`;

export const AffiliateInputWrapper = styled.section`
  display: flex;
  width: 70%;
  align-self: center;
  max-width: 600px;
  justify-content: center;
  border-radius: 15px;
  @media screen and (max-width: 570px) {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
`;
export const AffiliateInputText = styled.input`
  min-width: 400px;
  outline: 0;
  border: 0;
  padding-left: 10px;
  padding-right: 3px;
  border-radius: 15px;
  font-family: ${props => props.theme.fonts.light};
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  &:focus {
    outline: 0;
    border: 0;
  }
  &:hover {
    outline: 0;
    border: 0;
    cursor: pointer;
  }
  @media screen and (max-width: 570px) {
    width: 100%;
    border-radius: 10px;
    min-height: 50px;
    min-width: 200px;
  }
  background-color: ${props => props.theme.colors.white};
`;
export const AffiliateInputButton = styled.button`
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.primary};
  text-transform: uppercase;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  padding: 12px 20px;
  font-family: ${props => props.theme.fonts.bold};
  outline: 0;
  border: 0;
  &:focus {
    outline: 0;
    border: 0;
  }
  &:hover {
    outline: 0;
    border: 0;
    cursor: pointer;
  }
  font-size: ${props => props.theme.fontSize.small};
  @media screen and (max-width: 768px) {
    padding: 14px 10px;
    font-size: ${props => props.theme.fontSize.small};
  }
  @media screen and (max-width: 570px) {
    width: 90%;
    border-radius: 10px;
    margin: 0 20px;
  }
  @media screen and (max-width: 334px) {
    font-size: ${props => props.theme.fontSize.small};
  }
`;
