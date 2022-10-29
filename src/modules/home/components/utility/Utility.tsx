import React from 'react';
import { DescripitonCard, PercentageCard, UtilityCards, UtilityContainer, UtilityTitle } from './styles';
import { utilityCards } from './constants';

const Utility = (): JSX.Element => {
  return (
    <UtilityContainer>
      <UtilityTitle>Utility</UtilityTitle>
      {utilityCards.map(card => (
        <UtilityCards key={card.percentage}>
          <PercentageCard>{card.percentage}</PercentageCard>
          <DescripitonCard>{card.description}</DescripitonCard>
        </UtilityCards>
      ))}
    </UtilityContainer>
  );
};

export default Utility;
