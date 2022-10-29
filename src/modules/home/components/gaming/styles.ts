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
`;
export const GamingInformation = styled.div`
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSize.large};
  display: flex;
  text-align: center;
  align-items: center;
  height: 100%;
  width: 50%;
  margin-right: 50px;
  @media screen and (max-width: 1200px) {
    width: 70%;
    margin-right: 20px;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
    font-size: ${props => props.theme.fontSize.medium};
  }
`;
