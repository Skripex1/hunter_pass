import styled from '../../../theme';

export const MintDistributionContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.darkerBlue};
  align-items: center;
  justify-content: center;
  padding-top: 100px;
  padding-bottom: 50px;
`;

export const MintDistributionTitle = styled.p`
  text-align: center;
  font-size: ${props => props.theme.fontSize.large};
  font-family: ${props => props.theme.fonts.interBold};
  color: ${props => props.theme.colors.white};
  @media (max-width: 350px) {
    font-size: ${props => props.theme.fontSize.small};
  }
  margin-bottom: 10px;
`;

export const MintDistributionInformationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 50px;
  padding-top: 20px;
  @media (max-width: 600px) {
    gap: 10px;
  }
  @media (max-width: 320px) {
    gap: 0px;
  }
`;

export const MintDistributionDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0px;
`;

export const MintDistributionCheckContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  gap: 15px;
  height: 50px;
`;

export const MintDistributionCheck = styled.img``;

export const MintDistributionCheckTitle = styled.p`
  text-align: center;
  font-size: ${props => props.theme.fontSize.large};
  font-family: ${props => props.theme.fonts.interBold};
  color: ${props => props.theme.colors.white};
  @media (max-width: 470px) {
    font-size: ${props => props.theme.fontSize.medium};
  }
  @media (max-width: 350px) {
    font-size: ${props => props.theme.fontSize.small};
  }
`;

export const MintDistributionDetalisText = styled.p`
  text-align: center;
  width: 150px;
  height: 30px;
  font-size: ${props => props.theme.fontSize.mSmall};
  font-family: ${props => props.theme.fonts.inter};
  color: ${props => props.theme.colors.white};
  @media (max-width: 470px) {
    font-size: ${props => props.theme.fontSize.xSmall};
    width: 100px;
  }
  @media (max-width: 320px) {
    width: 93px;
  }
`;
export const MintDescriptionText = styled.p`
  text-align: center;
  max-width: 400px;
  padding: 0 10px 0 10px;
  font-size: ${props => props.theme.fontSize.mxSmall};
  font-family: ${props => props.theme.fonts.interReg};
  margin-top: 0px;
  margin-bottom: 10px;
  color: ${props => props.theme.colors.white};
  @media (max-width: 700px) {
    font-size: ${props => props.theme.fontSize.mSmall};
  }
  /* @media (max-width: 700px) {
    font-size: ${props => props.theme.fontSize.xSmall};
  } */
`;
