import React from 'react';
import { Element } from 'react-scroll';
import ExclusiveBanner from './exclusive-banner';
import { ExclusiveBubble, ExclusiveBubblesWrapper, ExclusiveContainer, ExclusiveTextTitle, ExclusiveTextWrapper } from './styles';

const Exclusive = (): JSX.Element => {
  return (
    <ExclusiveContainer>
      <ExclusiveTextWrapper>
        <ExclusiveTextTitle>AN exclusive quality tool for finding the next bulls.</ExclusiveTextTitle>
        <ExclusiveTextTitle isHighlighted>a tool to end all tools!</ExclusiveTextTitle>
      </ExclusiveTextWrapper>
      <ExclusiveBubblesWrapper>
        <ExclusiveBubble />
        <ExclusiveBubble />
        <ExclusiveBubble />
      </ExclusiveBubblesWrapper>
      <Element style={{ width: '100%', display: 'flex', justifyContent: 'center' }} name="exclusive">
        <ExclusiveBanner />
      </Element>
    </ExclusiveContainer>
  );
};

export default Exclusive;
