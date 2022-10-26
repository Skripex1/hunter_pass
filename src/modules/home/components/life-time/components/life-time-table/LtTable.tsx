import React from 'react';
import { LttCard, LttCardCheckMark, LttCardEmptyMark, LttCardText, LttContainer, LttSpaceDiv, LttTitleContainer, LttTitleText } from './styles';
import { LifeTimeCard, lifeTimeCards } from './constants';

const LtTable = (): JSX.Element => {
  const buildCard = (props: LifeTimeCard): JSX.Element => {
    const { title, isRed, stars } = props;
    return (
      <LttCard isRed={isRed} key={title}>
        <LttCardText isGradient={stars === 1}>{title}</LttCardText>
        {stars === 3 ? <LttCardCheckMark src="assets/checkmark.png" /> : <LttCardEmptyMark />}
        {stars >= 2 ? <LttCardCheckMark src="assets/checkmark.png" /> : <LttCardEmptyMark />}
        {stars >= 1 ? <LttCardCheckMark src="assets/checkmark.png" /> : <LttCardEmptyMark />}
      </LttCard>
    );
  };
  return (
    <LttContainer>
      <LttTitleContainer>
        <LttSpaceDiv />
        <LttTitleText>FREE</LttTitleText>
        <LttTitleText>GENESIS</LttTitleText>
        <LttTitleText>ALPHA</LttTitleText>
      </LttTitleContainer>
      {lifeTimeCards.map(data => buildCard(data))}
    </LttContainer>
  );
};

export default LtTable;
