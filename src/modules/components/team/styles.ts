import styled from '../../../theme';

export const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.darkerBlue};
  align-items: center;
  justify-content: center;
  padding-top: 100px;
`;
export const TeamTitle = styled.p`
  font-size: ${props => props.theme.fontSize.large};
  font-family: ${props => props.theme.fonts.interBold};
  color: ${props => props.theme.colors.white};
  @media (max-width: 850px) {
    font-size: ${props => props.theme.fontSize.medium};
  }
  @media (max-width: 350px) {
    font-size: ${props => props.theme.fontSize.small};
  }
  margin-bottom: 50px;
`;

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 40px;
  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    margin-bottom: 150px;
  }
  @media (max-width: 450px) {
    gap: 20px;
  }
  @media (max-width: 350px) {
    gap: 10px;
  }
`;
export const TeameGridContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media (max-width: 700px) {
    gap: 10px;
  }
`;

export const TeamGridPhoto = styled.img``;

export const TeamGridName = styled.p`
  font-size: ${props => props.theme.fontSize.small};
  font-family: ${props => props.theme.fonts.interBold};
  color: ${props => props.theme.colors.white};
`;

export const TeamGridRole = styled.p`
  font-size: ${props => props.theme.fontSize.mxSmall};
  font-family: ${props => props.theme.fonts.inter};
  color: ${props => props.theme.colors.lighterBlue};
`;
