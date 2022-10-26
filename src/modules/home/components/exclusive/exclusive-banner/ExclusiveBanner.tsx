/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import exclusiveCards from './constants';
import EbCard from './exclusive-banner-card';
import { EbCardsContainer, EbContainer, EbText, EbTextSection, EbTitle } from './styles';

const ExclusiveBanner = (): JSX.Element => {
  return (
    <EbContainer>
      <EbTextSection>
        <EbText>we are proud to announce</EbText>
        <EbTitle>the best. ever.</EbTitle>
        <EbText>blockchain Start up platform</EbText>
      </EbTextSection>
      <EbCardsContainer>
        {exclusiveCards.map(card => (
          <EbCard key={card.title} {...card} />
        ))}
      </EbCardsContainer>
    </EbContainer>
  );
};

export default ExclusiveBanner;
