import styled from '../../../theme';

export const FaqContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.darkerBlue};
  align-items: center;
  justify-content: center;
`;

export const FaqTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const FaqTitle = styled.p`
  text-align: left;
  font-size: ${props => props.theme.fontSize.large};
  font-family: ${props => props.theme.fonts.interBold};
  color: ${props => props.theme.colors.white};
  @media (max-width: 850px) {
    font-size: ${props => props.theme.fontSize.medium};
  }
  @media (max-width: 350px) {
    font-size: ${props => props.theme.fontSize.small};
  }
`;

export const FaqDetail = styled.p`
  text-align: left;
  font-size: ${props => props.theme.fontSize.mxSmall};
  font-family: ${props => props.theme.fonts.interReg};
  color: ${props => props.theme.colors.white};
  margin-top: 10px;
  @media (max-width: 1100px) {
    font-size: ${props => props.theme.fontSize.mSmall};
  }
`;

export const FaqGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 40px;
  margin-top: 30px;
  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    margin-bottom: 150px;
  }
  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
    gap: 10px;
  }
  @media (max-width: 450px) {
    gap: 20px;
  }
  @media (max-width: 350px) {
    gap: 10px;
  }
`;
export const FaqGridContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  @media (max-width: 700px) {
    gap: 10px;
  }
`;

export const FaqGridPhoto = styled.img`
  margin-top: 0;
  padding-top: 0;
`;

export const FaqGridQuestion = styled.p`
  max-width: 300px;
  font-size: ${props => props.theme.fontSize.mxSmall};
  font-family: ${props => props.theme.fonts.interBold};
  color: ${props => props.theme.colors.white};
`;

export const FaqGridAns = styled.p`
  text-align: justify;
  max-width: 300px;
  min-height: 100px;
  font-size: ${props => props.theme.fontSize.mxSmall};
  font-family: ${props => props.theme.fonts.inter};
  color: ${props => props.theme.colors.lighterBlue};
  margin-top: 10px;
`;
