import styled, { css } from '../../../../theme';
import bgImage from './faq-bg.png';

export const FaqContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: ${`url(${bgImage})`};
  background-repeat: no-repeat;
  background-size: cover;
  flex: 1;
  gap: 40px;
  padding: 0 40px;
`;

export const FaqData = styled.div`
  display: flex;
  width: 70%;
  gap: 10px;
  align-items: center;
  padding-bottom: 20px;
  max-width: 800px;
  @media screen and (max-width: 950px) {
    flex-direction: column;
    gap: 12px;
    align-items: center;
  }
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const FaqWrapper = styled.div`
  flex: 1;
  display: flex;
  padding-top: 20px;
  align-self: flex-start;
  flex-direction: column;
`;
export const FaqSectionTitle = styled.h3`
  color: ${props => props.theme.colors.aquaBlue};
  font-size: ${props => props.theme.fontSize.large};
  font-family: ${props => props.theme.fonts.bold};
  margin-bottom: 30px;
  @media screen and (max-width: 600px) {
    font-size: ${props => props.theme.fontSize.medium};
  }
`;
export const FaqSectionLine = styled.div<{ marginTop?: boolean }>`
  background-color: ${props => props.theme.colors.aquaBlue};
  height: 2px;
  width: 100%;
  margin-top: ${props => (props.marginTop ? '22px' : '0')};
`;
export const FaqCard = styled.article`
  display: flex;
  padding-top: 25px;
  flex-direction: column;
`;
export const FaqCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 10px;
  align-items: center;
`;
export const FaqCardTitle = styled.h6<{ isHighlighted?: boolean }>`
  color: ${props => (props.isHighlighted ? props.theme.colors.aquaBlue : props.theme.colors.textWhite)};
  font-size: ${props => props.theme.fontSize.medium};
  font-family: ${props => props.theme.fonts.regular};
  max-width: 90%;
  @media screen and (max-width: 600px) {
    max-width: 85%;
    font-size: ${props => props.theme.fontSize.small};
  }
`;
export const FaqCardButton = styled.button`
  align-self: center;
`;
export const FaqCardText = styled.p<{ isActive?: boolean }>`
  height: 0;
  visibility: hidden;
  transition: height 0.4s ease-in-out;
  margin-top: 7px;
  color: ${props => props.theme.colors.faqText};
  opacity: 0.85;
  font-size: ${props => props.theme.fontSize.small};
  font-family: ${props => props.theme.fonts.inter};
  max-width: 95%;
  ${props =>
    props.isActive &&
    css`
      transition: visibility 1.4s ease-in;
      visibility: visible;
      height: auto;
    `}
  @media screen and (max-width: 600px) {
    font-size: ${props => props.theme.fontSize.mSmall};
    max-width: 90%;
  }
  @media screen and (max-width: 312px) {
    font-size: ${props => props.theme.fontSize.xSmall};
  }
`;
