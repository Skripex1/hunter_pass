import React from 'react';
import { useAppSelector } from '../../../../store';
import { appWidthSelector } from '../../../../store/selectors/app-selectors';
import LtMobile from './components/life-time-mobile';
import LtTable from './components/life-time-table';
import App from './components/life-time-toggle/LtToggle';
import { LifeTimeContainer, LifeTimeData, LifeTimeDataRed, LifeTimeTitle, LifeTimeTitleContainer, LifeTimeTitleDataContainer, LifeTimeTitleWrapper } from './styles';

const LifeTime = (): JSX.Element => {
  const width = useAppSelector(appWidthSelector);
  return (
    <LifeTimeContainer>
      <LifeTimeTitleWrapper>
        <LifeTimeTitleContainer>
          <LifeTimeTitle>Your lifetime access to</LifeTimeTitle>
          <LifeTimeTitle isHighlighted>topbull</LifeTimeTitle>
        </LifeTimeTitleContainer>
        <LifeTimeTitleDataContainer>
          <LifeTimeData>Benefit from all the features Top Bull has to offer without limitations.</LifeTimeData>
          <LifeTimeDataRed>BE AHEAD OF THE GAME</LifeTimeDataRed>
        </LifeTimeTitleDataContainer>
      </LifeTimeTitleWrapper>
      {width < 900 && <App />}
      {width > 900 ? <LtTable /> : <LtMobile />}
    </LifeTimeContainer>
  );
};

export default LifeTime;
