import { PropaneSharp } from '@mui/icons-material';
import styled from '../../../../theme';
import utility from './utility_background.png';

export const UtilityContainer = styled.section`
  min-height: 100vh;
  background-image: url(${utility});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  text-transform: uppercase;
`;
export const UtilityTitle = styled.h1`
  font-size: ${props => props.theme.fontSize.gigant};
  ${props => props.theme.colors.primary};
  margin-top: 20px;
`;
export const UtilityCards = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 70px;
  align-items: center;
  width: 60%;
  gap: 15px;
  @media screen and (max-width: 1200px) {
    width: 80%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    gap: 10px;
  }
`;
export const PercentageCard = styled.h1`
  font-size: ${props => props.theme.fontSize.gigant};
  ${props => props.theme.colors.primary};
  @media screen and (max-width: 768px) {
    font-size: ${props => props.theme.fontSize.large};
  }
`;
export const DescripitonCard = styled.p`
  font-size: ${props => props.theme.fontSize.medium};
  color: ${props => props.theme.colors.white};
  text-align: center;
  @media screen and (max-width: 1200px) {
    font-size: ${props => props.theme.fontSize.small};
  }
`;
