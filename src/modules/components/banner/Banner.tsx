import React from 'react';
import {
  BannerBigText,
  BannerContainer,
  BannerContainerOverlay,
  BannerFooter,
  BannerLogo,
  BannerLogoContainer,
  BannerMediumText,
  BannerSmallText,
  BannerTextContainer,
} from './styles';
import { Logos } from './constants';
import { useAppSelector } from '../../../store';
import { appWidthSelector } from '../../../store/selectors/app-selectors';

const Banner = (): JSX.Element => {
  const width = useAppSelector(appWidthSelector);

  const handleOpenDiscord = () => {
    window.open('https://discord.gg/3t9C3pbBeD');
  };

  const handleOpenTwitter = () => {
    window.open('https://twitter.com/LunaHunters');
  };

  const handleOpenMedia = () => {
    window.open(' https://medium.com/@lunahunters/luna-hunters-alpha-group-32b010e964df');
  };
  if (width > 650) {
    return (
      <BannerContainer>
        <BannerFooter>
          <BannerLogoContainer>
            <BannerLogo src={Logos[0].logoUrl} onClick={() => handleOpenDiscord()} style={{ width: '50px', height: '50px' }} />
            <BannerLogo src={Logos[1].logoUrl} onClick={() => handleOpenTwitter()} />
            <BannerLogo src={Logos[2].logoUrl} onClick={() => handleOpenMedia()} style={{ width: '45px', height: '45px' }} />
          </BannerLogoContainer>
          <BannerTextContainer>
            <BannerSmallText>Alpha. Whitelist. Staking. Bitcoin NFTs. Community. </BannerSmallText>
            <BannerBigText>THE HUNTER PASS NFT </BannerBigText>
            <BannerMediumText>Revealing the secrets to profitable trades</BannerMediumText>
          </BannerTextContainer>
        </BannerFooter>
      </BannerContainer>
    );
  }
  return (
    <BannerContainer>
      <BannerContainerOverlay />
      <BannerFooter>
        <BannerTextContainer>
          <BannerSmallText>Alpha. Whitelist. Staking. Bitcoin NFTs. Community. </BannerSmallText>
          <BannerBigText>THE HUNTER PASS {width > 475 && <>NFT</>}</BannerBigText>
          <BannerMediumText>Revealing the secrets to profitable trades</BannerMediumText>
        </BannerTextContainer>
      </BannerFooter>
    </BannerContainer>
  );
};

export default Banner;
