import React from 'react';
import { LifeTimeMobileCard } from '../constants';
import { LtmContainer, LtmiImage, LtmInfo, LtmTitle } from './styles';

const LtmCard = (props: LifeTimeMobileCard): JSX.Element => {
  const { title, data, isFree } = props;
  return (
    <LtmContainer isFree={isFree}>
      <LtmTitle>{title}</LtmTitle>
      <hr />
      {data.map(elem => {
        return (
          <LtmInfo key={elem.title} isRed={elem.isRed}>
            <LtmiImage src="assets/checkmark.png" />
            {elem.title}
          </LtmInfo>
        );
      })}
    </LtmContainer>
  );
};

export default LtmCard;
