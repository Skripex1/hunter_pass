import styled from '../../theme';

export const FooterContainer = styled.footer`
  position: relative;
  background-color: #020202;
  min-height: 180px;
  display: flex;
  padding: 0 20px;
  padding-top: 40px;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  @media screen and (max-width: 512px) {
    padding-top: 70px;
    min-height: 100px;
  }
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding: 0 10px;
  @media screen and (max-width: 930px) {
    flex-direction: column;
    gap: 20px;
    padding: 0;
    padding-bottom: 20px;
  }
  @media screen and (max-width: 430px) {
    flex-direction: column;
  }
`;
export const FooterWrapperContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  @media screen and (max-width: 930px) {
    gap: 20px;
    padding-bottom: 20px;
  }
  @media screen and (max-width: 430px) {
    flex-direction: column-reverse;
  }
`;
export const FooterLogoImg = styled.img`
  height: ${props => props.theme.fontSize.xGigant};
`;
export const FooterLogo = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  @media screen and (max-width: 512px) {
    flex-direction: column;
  }
`;
export const FooterLogoTitle = styled.h3`
  text-transform: uppercase;
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${props => props.theme.fontSize.medium};
`;
export const FooterCopyRight = styled.p`
  max-width: 200px;
  text-align: center;
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSize.mSmall};
  font-weight: ${props => props.theme.fonts.roboto};
  flex: 1;
  @media screen and (max-width: 512px) {
    text-align: center;
  }
`;

export const FooterIcon = styled.img`
  height: 90px;
  align-self: center;
`;

export const FooterLinktreeButton = styled.p`
  max-width: 200px;
  text-align: center;
  outline: 0;
  border: 0;
  background: transparent;
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSize.small};
  font-weight: ${props => props.theme.fonts.extraBold};
  text-transform: uppercase;
  flex: 1;
  &:hover {
    outline: 0;
    border: 0;
  }
  &:focus {
    outline: 0;
    border: 0;
  }
  @media screen and (max-width: 512px) {
    text-align: center;
  }
`;
