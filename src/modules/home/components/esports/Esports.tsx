import React from 'react';
import { EsportsDescription, EsportsContainer, EsportsTitle, EsportsQuestion, EsportsCards, LeftEsportsCards, RightEsportsCards } from './styles';
import { leftEsportsCards, rightEsportsCards } from './constants';
import checkbox from './checkbox.png';

const Esports = (): JSX.Element => {
  return (
    <EsportsContainer>
      <EsportsTitle>ESPORTS ORG</EsportsTitle>
      <EsportsQuestion>How Anunnaki Esports ORG makes the money?</EsportsQuestion>
      <EsportsDescription>
        As alluded to above, the more traditionally accepted esports revenue channels are pretty effective when looking at how teams make money from network, sponsorships etc.
        Anunnaki will break down the key revenues channels listed below:
      </EsportsDescription>
      <EsportsCards>
        <LeftEsportsCards>
          {leftEsportsCards.map(card => (
            <p key={card.title}>
              <img src={checkbox} alt="" style={{ marginRight: '10px' }} />
              {card.title}
            </p>
          ))}
        </LeftEsportsCards>
        <RightEsportsCards>
          {rightEsportsCards.map(card => (
            <p key={card.title}>
              <img src={checkbox} alt="" style={{ marginRight: '10px' }} />
              {card.title}
            </p>
          ))}
        </RightEsportsCards>
      </EsportsCards>
    </EsportsContainer>
  );
};

export default Esports;
