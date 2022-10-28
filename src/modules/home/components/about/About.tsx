import React from 'react';
import { firstSectionData, IAboutProps } from './constants';
import { AboutFirstContainer, AboutSecondContainer, AfCardContainer, AfCardText, AfCardTitle, AfTitle, AsTitle } from './styles';

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
  return (
    <>
      <AboutFirstContainer>
        <AfTitle>Anunnaki Vision are the knowing unknown.</AfTitle>
        {firstSectionData.map(item => buildFirstCard(item))}
      </AboutFirstContainer>
      <AboutSecondContainer>
        <AsTitle>Anunnaki and Mafia Room Declaration</AsTitle>
      </AboutSecondContainer>
    </>
  );
};

export default About;
