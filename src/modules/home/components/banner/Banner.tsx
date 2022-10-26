import React from 'react';
import { BannerContainer, BannerInformation, BannerTitle, BannerVisual } from './styles';

const Banner = (): JSX.Element => {
  return (
    <BannerContainer>
      <BannerInformation>
        <BannerTitle>Anunnaki vision</BannerTitle>
      </BannerInformation>
      <BannerVisual />
    </BannerContainer>
  );
};

export default Banner;
