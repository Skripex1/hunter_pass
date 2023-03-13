import styled from '../../../theme';

export const RoadMapContainer = styled.div`
  min-height: 100vh;
  display: flex;
  padding-top: 100px;
  flex-direction: column;
  background-color: ${props => props.theme.colors.darkerBlue};
  align-items: center;
  gap: 50px;
  padding-bottom: 50px;
`;

export const RoadMapInformationContainer = styled.div`
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

export const RoadMapInformationContainerReverse = styled.div`
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

export const RoadMapDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  padding-left: 20px;
  padding-right: 20px;
  @media (max-width: 750px) {
    padding-right: 20px;
  }
`;

export const RoadMapDescriptionTitle = styled.p`
  text-align: left;
  font-size: ${props => props.theme.fontSize.large};
  font-family: ${props => props.theme.fonts.interBold};
  color: ${props => props.theme.colors.white};
  margin-bottom: 20px;
  @media (max-width: 850px) {
    font-size: ${props => props.theme.fontSize.medium};
  }
  @media (max-width: 350px) {
    font-size: ${props => props.theme.fontSize.small};
  }
`;

export const RoadMapDescriptionText = styled.p`
  text-align: left;
  font-size: ${props => props.theme.fontSize.mxSmall};
  font-family: ${props => props.theme.fonts.interReg};
  color: ${props => props.theme.colors.lightBlue};
  margin-top: 10px;
  @media (max-width: 1100px) {
    font-size: ${props => props.theme.fontSize.mSmall};
  }
  @media (max-width: 900px) {
    font-size: ${props => props.theme.fontSize.xSmall};
  }
  padding-bottom: 10px;
`;

export const RoadMapBenefeciesContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  align-items: center;
  gap: 10px;
`;

export const RoadMapBenefeciesCheckImg = styled.img``;

export const RoadMapBenefeciesText = styled.p`
  text-align: left;
  font-size: ${props => props.theme.fontSize.mxSmall};
  font-family: ${props => props.theme.fonts.interReg};
  color: ${props => props.theme.colors.lightBlue};
`;

export const RoadMapDescriptionImg = styled.img`
  max-width: 400px;
  max-height: 400px;
  @media (max-width: 400px) {
    width: 350px;
  }
  @media (max-width: 350px) {
    width: 320px;
  }
  @media (max-width: 320px) {
    width: 300px;
  }
  @media (max-width: 320px) {
    width: 280px;
  }
`;
export const Split1 = styled.img`
  margin-top: 20px;
  @media (max-width: 850px) {
    display: none;
  }
`;

export const RoadMapDescriptionMore = styled.p`
  text-align: left;
  font-size: ${props => props.theme.fontSize.mxSmall};
  font-family: ${props => props.theme.fonts.interReg};
  color: ${props => props.theme.colors.blue};
  margin-top: 10px;
`;

export const RoadMapInformationContainerBig = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const MuchMoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media (max-width: 1100px) {
    justify-content: center;
  }
  @media (max-width: 850px) {
    padding: 0;
  }

  @media (max-width: 500px) {
    justify-content: flex-start;
  }
  gap: 30px;
`;

export const MuchMore = styled.p`
  text-align: left;
  padding: 0 15px 0 15px;
  font-size: ${props => props.theme.fontSize.large};
  font-family: ${props => props.theme.fonts.interBold};
  color: ${props => props.theme.colors.white};
  margin-bottom: 10px;
  @media (max-width: 850px) {
    font-size: ${props => props.theme.fontSize.medium};
  }
  @media (max-width: 350px) {
    font-size: ${props => props.theme.fontSize.small};
  }
`;

export const MuchMoreGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 40px;
  padding-right: 15px;
  justify-content: center;
  margin-bottom: 20px;
  padding: 0 15px 0 15px;
  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
  @media (max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
    gap: 20px;
  }
`;

export const MuchMoreGridContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
`;

export const MuchMoreGridCheckDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 20px;
`;

export const CheckImg = styled.img`
  width: 20px;
  height: 20px;
`;

export const CheckTitle = styled.p`
  text-align: left;
  font-size: ${props => props.theme.fontSize.mxSmall};
  font-family: ${props => props.theme.fonts.interReg};
  color: ${props => props.theme.colors.blue};
  @media (max-width: 450px) {
    font-size: ${props => props.theme.fontSize.small};
  }
`;

export const MuchMoreGridDescriptionText = styled.div`
  text-align: left;

  max-width: 250px;
  max-height: 100px;
  font-size: ${props => props.theme.fontSize.xSmall};
  font-family: ${props => props.theme.fonts.interReg};
  color: ${props => props.theme.colors.lighterBlue};
  @media (max-width: 450px) {
    font-size: ${props => props.theme.fontSize.xSmall};
    max-width: 100%;
    max-height: 300px;
  }
`;
