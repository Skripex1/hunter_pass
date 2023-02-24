import bitcoin from './assets/bitcoin.png';
import hunter from './assets/hunter.png';

export interface OverviewDescriptionInterface {
  title: string;
  description: string[];
  imgUrl: string;
  id: number;
}

export const OverviewDescription: OverviewDescriptionInterface[] = [
  {
    title: 'What is The Hunter Pass?',
    description: [
      'The Hunter Pass grants access to a community Alpha Group, designed for both new and experienced NFT investors. Our mission is to offer a convenient and cost-effective tool for our members to identify and evaluate top-notch NFT projects. ',
      'We are here to guide investors in the upcoming Bitcoin NFT ecosystem by exposing our pack to the most profitable drops.',
      'With the dedication and enthusiasm of our members, we have established a reputation as a pack of unstoppable hunters in the NFT space, consistently discovering profitable opportunities.',
    ],
    imgUrl: hunter,
    id: 1,
  },
  {
    title: 'Bitcoin NFTs',
    description: [
      'We will be the first Alpha Group to collaborate with Bitcoin NFT Drops and we will automatically whitelist every single holder of The Hunter Pass. Our goal is to focus equally on Ethereum Blockchain NFTs and Bitcoin NFTs, especially once they are launched. We will provide the community a place to call work from home in the most productive way.',
    ],
    imgUrl: bitcoin,
    id: 2,
  },
];
