import styled from '../../../../theme';

export const MintModalContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 50px;
  gap: 10px;
  min-height: 600px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  @media screen and (max-width: 1050px) {
    max-width: 600px;
    align-self: center;
  }
`;

export const MintModalTitle = styled.h1`
  text-align: center;
  color: ${props => props.theme.colors.white};
  text-transform: uppercase;
  margin-bottom: 16px;
  font-size: ${props => props.theme.fontSize.xLarge};
  font-family: ${props => props.theme.fonts.normal};
  @media screen and (max-width: 492px) {
    font-size: ${props => props.theme.fontSize.large};
  }
`;

export const MintModalInformation = styled.h4`
  text-align: center;
  color: ${props => props.theme.colors.white};
  text-transform: uppercase;
  font-size: ${props => props.theme.fontSize.medium};
  font-family: ${props => props.theme.fonts.normal};
`;

export const MintModalData = styled.h4`
  text-align: center;
  color: ${props => props.theme.colors.white};
  text-transform: uppercase;
  font-size: ${props => props.theme.fontSize.large};
  font-family: ${props => props.theme.fonts.normal};
  margin-bottom: 10px;
  @media screen and (max-width: 492px) {
    font-size: ${props => props.theme.fontSize.medium};
  }
`;

export const MMCounter = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #8bdcff;
  border-radius: 10px;
`;
export const MMCValueContainer = styled.div`
  border-radius: 10px;
  padding: 10px 30px;
  color: #8bdcff;
  flex: 4;
  font-size: ${props => props.theme.fontSize.xLarge};
  background-color: ${props => props.theme.colors.white};
  text-align: center;
  @media screen and (max-width: 492px) {
    flex: 1;
    padding: 5px 15px;
  }
`;

export const MMCButton = styled.button`
  padding: 10px;
  outline: 0;
  border-radius: 10px;
  border: 0;
  flex: 2;
  background-color: #8bdcff;
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSize.xLarge};
  &:hover {
    outline: 0;
    border: 0;
    cursor: pointer;
  }
  &:focus {
    outline: 0;
    border: 0;
  }
  @media screen and (max-width: 492px) {
    flex: 1;
    padding: 5px 10px;
  }
`;

export const MintModalButton = styled.button<{ isDisabled?: boolean }>`
  padding: 10px 30px;
  outline: 0;
  border: 0;
  border-radius: 10px;
  margin-top: 20px;
  background-color: ${props => (props.isDisabled ? 'gray' : '#8bdcff')};
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSize.large};
  text-transform: uppercase;
  &:hover {
    outline: 0;
    border: 0;
    cursor: pointer;
  }
  &:focus {
    outline: 0;
    border: 0;
  }
  @media screen and (max-width: 492px) {
    font-size: ${props => props.theme.fontSize.medium};
  }
`;
