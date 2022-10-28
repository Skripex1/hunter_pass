import React from 'react';
import { firstSectionData, IAboutProps, secondSectionData } from './constants';
import { AboutFirstContainer, AboutSecondContainer, AfCardContainer, AfCardText, AfCardTitle, AfTitle, AsCardContainer, AsTitle } from './styles';

const About = (): JSX.Element => {
  const buildFirstCard = (props: IAboutProps): JSX.Element => {
    const { title, paddingRight, text } = props;
    return (
      <AfCardContainer key={title} paddingRight={paddingRight}>
        <AfCardTitle>{title}</AfCardTitle>
        <AfCardText>{text}</AfCardText>
      </AfCardContainer>
    );
  };
  const buildSecondCard = (props: IAboutProps): JSX.Element => {
    const { title, paddingRight, text } = props;
    return (
      <AsCardContainer key={title} paddingRight={paddingRight}>
        <AfCardText>{text}</AfCardText>
      </AsCardContainer>
    );
  };
  return (
    <>
      <AboutFirstContainer>
        <AfTitle>Anunnaki Vision are the knowing unknown.</AfTitle>
        {firstSectionData.map(item => buildFirstCard(item))}
      </AboutFirstContainer>
      <AboutSecondContainer>
        <AsTitle>Anunnaki and Mafia Room Declaration</AsTitle>
        {secondSectionData.map(item => buildSecondCard(item))}
      </AboutSecondContainer>
    </>
  );
};

export default About;
