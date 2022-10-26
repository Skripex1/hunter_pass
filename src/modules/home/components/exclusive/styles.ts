import styled from '../../../../theme';
import thunderBackground from './thunder-red.gif';

export const ExclusiveContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  position: relative;
  margin-bottom: 70px;
  padding: 0 40px;
  opacity: 1;
  padding-top: 70px;
  &:before {
    content: '';
    background-image: url(${thunderBackground});
    background-size: cover;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.2;
    height: 400px;
  }
  @media screen and (max-width: 768px) {
    padding: 0 20px;
    padding-top: 30px;
    gap: 20px;
    margin-bottom: 30px;
  }
`;
export const ExclusiveTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${props => props.theme.fonts.bold};
  width: 80%;
  max-width: 1400px;
  align-items: center;
  z-index: 10;
  text-align: center;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;
export const ExclusiveTextTitle = styled.h1<{ isHighlighted?: boolean }>`
  color: ${props => (props.isHighlighted ? props.theme.colors.primary : props.theme.colors.white)};
  font-size: ${props => props.theme.fontSize.xLarge};
  text-transform: uppercase;
  z-index: 4;
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
export const ExclusiveBubblesWrapper = styled.div`
  display: flex;
  gap: 16px;
`;
export const ExclusiveBubble = styled.div`
  height: 24px;
  width: 24px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.primary};
  @media screen and (max-width: 512px) {
    height: 16px;
    width: 16px;
  }
`;
