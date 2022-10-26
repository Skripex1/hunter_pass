import React from 'react';
import { AppPreviewCardProps } from '../constants';
import { ApCardContainer, ApCardImage, ApCardInformation, ApCardText, ApCardTitle } from './styles';

const ApCard = (props: AppPreviewCardProps): JSX.Element => {
  const { title, text, image, isRight } = props;
  return (
    <ApCardContainer isRight={isRight}>
      <ApCardInformation>
        <ApCardTitle>{title}</ApCardTitle>
        <ApCardText isRight={isRight}>{text}</ApCardText>
      </ApCardInformation>
      <ApCardImage src={image} />
    </ApCardContainer>
  );
};

export default ApCard;
