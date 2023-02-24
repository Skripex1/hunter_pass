import styled from '../../../theme';

export const OverViewContainer = styled.div`
  min-height: 100vh;
  display: flex;
  padding-top: 170px;
  flex-direction: column;
  background-color: ${props => props.theme.colors.darkerBlue};
  align-items: center;
  gap: 150px;
  padding-bottom: 20px;
`;

export const OverViewInformationContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  align-items: center;
  @media (max-width: 750px) {
    flex-direction: column;
    gap: 50px;
  }
`;
export const OverViewInformationContainerReverse = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  align-items: center;
  @media (max-width: 750px) {
    flex-direction: column-reverse;
    gap: 50px;
  }
`;

export const OverViewDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  padding-left: 20px;
  padding-right: 20px;
  @media (max-width: 900px) {
    padding: 0 25px 0 25px;
  }
`;

export const OverViewDescriptionTitle = styled.p`
  text-align: left;
  font-size: ${props => props.theme.fontSize.large};
  font-family: ${props => props.theme.fonts.interBold};
  color: ${props => props.theme.colors.white};
  margin-bottom: 10px;
  @media (max-width: 850px) {
    font-size: ${props => props.theme.fontSize.medium};
    margin: 0;
  }
  @media (max-width: 350px) {
    font-size: ${props => props.theme.fontSize.small};
  }
`;

export const OverViewDescriptionText = styled.p`
  text-align: left;
  font-size: ${props => props.theme.fontSize.mxSmall};
  font-family: ${props => props.theme.fonts.interReg};
  color: ${props => props.theme.colors.white};
  margin-top: 10px;
  @media (max-width: 1100px) {
    font-size: ${props => props.theme.fontSize.mSmall};
  }
  @media (max-width: 900px) {
    font-size: ${props => props.theme.fontSize.xSmall};
  }
`;
export const OverViewDescriptionTextSecond = styled.p`
  text-align: left;
  font-size: ${props => props.theme.fontSize.mxSmall};
  font-family: ${props => props.theme.fonts.interReg};
  color: ${props => props.theme.colors.white};
  margin-top: 10px;
  @media (max-width: 1100px) {
    font-size: ${props => props.theme.fontSize.mSmall};
  }
  @media (max-width: 900px) {
    font-size: ${props => props.theme.fontSize.xSmall};
    margin-top: 20px;
  }
`;

export const OverViewDescriptionImg = styled.img`
  @media (max-width: 450px) {
    width: 280px;
    height: 280px;
  }
`;
export const OverViewDescriptionImg1 = styled.img`
  @media (max-width: 450px) {
    width: 280px;
    height: 175px;
  }
`;
