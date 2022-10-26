import { LABEL_WIDTH, MARK_WIDTH } from '../../../../../../constants/styles-constants';
import styled, { css } from '../../../../../../theme';

export const LttContainer = styled.section`
  display: flex;
  padding: 30px;
  flex-direction: column;
  background-color: ${props => props.theme.colors.white};
  border-radius: 20px;
  width: 90%;
  min-width: 700px;
  max-width: 1000px;
  align-self: center;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;
export const LttTitleContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  padding: 10px 30px;
  justify-content: space-between;
`;
export const LttSpaceDiv = styled.div`
  width: ${LABEL_WIDTH}px;
`;
export const LttTitleText = styled.h3`
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${props => props.theme.fontSize.medium};
  color: ${props => props.theme.colors.black};
  text-align: center;
  width: ${MARK_WIDTH}px;
`;
export const LttCard = styled.div<{ isRed?: boolean }>`
  background-color: ${props => (props.isRed ? props.theme.colors.lightRed : props.theme.colors.white)};
  width: 100%;
  border-radius: 20px;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const LttCardText = styled.p<{ isGradient: boolean }>`
  text-transform: uppercase;
  font-family: ${props => props.theme.fonts.regular};
  font-size: ${props => props.theme.fontSize.small};
  color: ${props => props.theme.colors.black};
  ${props =>
    props.isGradient &&
    css`
      background: linear-gradient(180deg, #ff0000 0%, #000000 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    `};
  width: ${LABEL_WIDTH}px;
`;
export const LttCardCheckMark = styled.img`
  height: 35px;
  width: 35px;
  margin: 0 32px;
`;

export const LttCardEmptyMark = styled.div`
  height: 35px;
  width: 35px;
  margin: 0 32px;
`;
