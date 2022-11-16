import React from 'react';
import MintModal from '../mint-modal';
import { BannerContainer, BannerInformation, BannerTitle, BannerVisual } from './styles';

const Banner = (): JSX.Element => {
  return (
    <BannerContainer>
      <BannerInformation>
        <BannerTitle>Anunnaki vision</BannerTitle>
        <MintModal />
      </BannerInformation>
      <BannerVisual />
    </BannerContainer>
  );
};

export default Banner;
