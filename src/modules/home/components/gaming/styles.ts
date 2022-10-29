import styled from '../../../../theme';
import triangle from './triangle.png';

export const GamingContainer = styled.section`
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${triangle});
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  @media screen and (max-width: 800px) {
    align-items: center;
    justify-content: center;
  }
`;
export const GamingInformation = styled.div`
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSize.large};
  display: flex;
  text-align: right;
  align-items: center;
  height: 100%;
  width: 50%;
  margin-right: 50px;
  @media screen and (max-width: 1200px) {
    width: 60%;
  }
  @media screen and (max-width: 800px) {
    width: 90%;
    margin: 0;
    align-self: center;
    text-align: center;
    padding: 0 20px;
  }
  @media screen and (max-width: 512px) {
    font-size: ${props => props.theme.fontSize.medium};
  }
  @media screen and (max-width: 512px) {
    font-size: ${props => props.theme.fontSize.medium};
  }
  @media screen and (max-width: 312px) {
    font-size: ${props => props.theme.fontSize.small};
  }
`;
