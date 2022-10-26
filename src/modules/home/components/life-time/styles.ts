import styled from 'styled-components';

export const LifeTimeContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 70px 0;
  @media screen and (max-width: 512px) {
    margin: 30px 0;
  }
`;

export const LifeTimeTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding-bottom: 50px;
  @media screen and (max-width: 512px) {
    padding-bottom: 30px;
  }
`;
export const LifeTimeTitle = styled.h3<{ isHighlighted?: boolean }>`
  color: ${props => (props.isHighlighted ? props.theme.colors.primary : props.theme.colors.white)};
  font-size: ${props => props.theme.fontSize.xLarge};
  text-align: center;
  text-transform: uppercase;
  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: ${props => props.theme.fontSize.large};
  }
  @media screen and (max-width: 512px) {
    font-size: ${props => props.theme.fontSize.medium};
  }
  @media screen and (max-width: 312px) {
    font-size: ${props => props.theme.fontSize.small};
  }
`;
export const LifeTimeTitleContainer = styled.div`
  display: flex;
  gap: 7px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export const LifeTimeTitleDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 20px;
`;
export const LifeTimeData = styled.h6`
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSize.large};
  font-family: ${props => props.theme.fonts.regular};
  text-align: center;
  @media screen and (max-width: 768px) {
    width: 70%;
    font-size: ${props => props.theme.fontSize.medium};
  }
  @media screen and (max-width: 512px) {
    font-size: ${props => props.theme.fontSize.small};
  }
  @media screen and (max-width: 312px) {
    font-size: ${props => props.theme.fontSize.mSmall};
  }
`;
export const LifeTimeDataRed = styled.h6`
  color: ${props => props.theme.colors.primary};
  text-align: center;
  font-family: ${props => props.theme.fonts.regular};
  text-transform: uppercase;
  font-size: ${props => props.theme.fontSize.large};
  @media screen and (max-width: 768px) {
    width: 80%;
    font-size: ${props => props.theme.fontSize.medium};
  }
  @media screen and (max-width: 512px) {
    font-size: ${props => props.theme.fontSize.small};
  }
  @media screen and (max-width: 312px) {
    font-size: ${props => props.theme.fontSize.mSmall};
  }
`;
