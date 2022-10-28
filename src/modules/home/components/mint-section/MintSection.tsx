/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import MintCard from './components';
import { mintCards } from './constants';
import { MintSectionCards, MintSectionContainer, MintSectionInfo, MintSectionTextTitle, MintSectionTextWrapper } from './styles';

const MintSection = (): JSX.Element => {
  return (
    <MintSectionContainer>
      <MintSectionTextWrapper>
        <MintSectionTextTitle isHighlighted>Join now.</MintSectionTextTitle>
        <MintSectionTextTitle>prepare for the bull run</MintSectionTextTitle>
      </MintSectionTextWrapper>
      <MintSectionInfo>Join the 100x investor’s community and become the next Crypto millionare</MintSectionInfo>
      <MintSectionCards>
        {mintCards.map(data => (
          <MintCard key={data.title} {...data} />
        ))}
      </MintSectionCards>
    </MintSectionContainer>
  );
};

export default MintSection;
