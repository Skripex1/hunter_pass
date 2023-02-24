import React from 'react';
import { BannerBigText, BannerContainer, BannerFooter, BannerLogo, BannerLogoContainer, BannerMediumText, BannerSmallText, BannerTextContainer } from './styles';
import { Logos } from './constants';
import { useAppSelector } from '../../../store';
import { appWidthSelector } from '../../../store/selectors/app-selectors';

const Banner = (): JSX.Element => {
  const width = useAppSelector(appWidthSelector);
  const handleOpenDiscord = () => {
    window.open(' https://discord.gg/3t9C3pbBeD');
  };

  const handleOpenTwitter = () => {
    window.open(' https://twitter.com/OrdinalHunters');
  };
  if (width > 650) {
    return (
      <BannerContainer>
        <BannerFooter>
          <BannerLogoContainer>
            <BannerLogo src={Logos[0].logoUrl} onClick={() => handleOpenDiscord()} />
            <BannerLogo src={Logos[1].logoUrl} onClick={() => handleOpenTwitter()} />
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
      <BannerFooter>
        <BannerTextContainer>
          <BannerSmallText>Alpha. Whitelist. Staking. Bitcoin NFTs. Community. </BannerSmallText>
          <BannerBigText>THE HUNTER PASS {width > 475 && <>NFT</>}</BannerBigText>
          <BannerMediumText>Revealing the secrets to profitable trades</BannerMediumText>
        </BannerTextContainer>
        <BannerLogoContainer>
          {Logos.map(logo => (
            <BannerLogo key={logo.logoUrl} src={logo.logoUrl} />
          ))}
        </BannerLogoContainer>
      </BannerFooter>
    </BannerContainer>
  );
};

export default Banner;
