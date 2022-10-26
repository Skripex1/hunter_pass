import React from 'react';
import { EbCardContainer, EbcImage, EbcText, EbcTitle } from './styles';
import IEbCardProps from './types';

const EbCard = (props: IEbCardProps): JSX.Element => {
  const { title, text, image, isBigger } = props;
  return (
    <EbCardContainer>
      <EbcImage src={image} isBigger={isBigger} />
      <EbcTitle>{title}</EbcTitle>
      <EbcText>{text}</EbcText>
    </EbCardContainer>
  );
};

export default EbCard;
