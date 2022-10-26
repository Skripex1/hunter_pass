/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import Carousel from './Carousel';
import { LifeTimeMobileCardData } from './constants';
import LtmCard from './life-time-mobile-card';

const LtMobile = (): JSX.Element => {
  return (
    <Carousel>
      {LifeTimeMobileCardData.map(data => (
        <LtmCard {...data} key={data.title} />
      ))}
    </Carousel>
  );
};

export default LtMobile;
