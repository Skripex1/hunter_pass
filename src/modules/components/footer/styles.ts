import styled from '../../../theme';

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.darkerBlue};
  margin-top: -80px;
`;

export const FooterLine = styled.div`
  background-color: ${props => props.theme.colors.lineBlue};
  width: 100%;
  border: 1px solid ${props => props.theme.colors.lineBlue};
`;

export const FooterWrapper = styled.div`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export const FooterLeftSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  z-index: 10;
`;
export const FooterLogo = styled.img`
  height: 70px;
  width: 70px;
  margin-left: 10px;
  margin-top: 10px;
`;

export const FooterLogoTextSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  gap: 3px;
`;

export const FooterLogoTitle = styled.p`
  font-size: ${props => props.theme.fontSize.small};
  font-family: ${props => props.theme.fonts.interBold};
  color: ${props => props.theme.colors.white};
  text-transform: uppercase;
  @media (max-width: 730px) {
    display: none;
  }
`;

export const FooterLogoDescription = styled.p`
  font-size: ${props => props.theme.fontSize.mSmall};
  font-family: ${props => props.theme.fonts.inter};
  color: ${props => props.theme.colors.white};
  @media (max-width: 730px) {
    display: none;
  }
`;

export const FooterCopyRight = styled.p`
  text-align: center;
  color: ${props => props.theme.colors.lighterBlue};
  font-size: ${props => props.theme.fontSize.xSmall};
  font-family: ${props => props.theme.fonts.inter};
  flex: 1;
  @media (max-width: 1000px) {
    text-align: right;
    padding-right: 20px;
  }
`;

export const FooterBegging = styled.p`
  text-align: center;
  color: ${props => props.theme.colors.lighterBlue};
  font-size: ${props => props.theme.fontSize.mxSmall};
  font-family: ${props => props.theme.fonts.inter};
  padding-right: 20px;
  @media (max-width: 1000px) {
    display: none;
    padding: 0;
  }
`;
