import hunter from './assets/hunter.png';
import lunaSneakPeek from './assets/luna_sneakpeek.jpg';

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
      'We are here to guide investors in the Ethereum and Bitcoin NFT ecosystems by exposing our pack to the most profitable drops.',
      'With the dedication and enthusiasm of our members, we have established a reputation as a pack of unstoppable hunters in the NFT space, consistently discovering profitable opportunities.',
    ],
    imgUrl: hunter,
    id: 1,
  },
  {
    title: 'A collection of 888 wolves.',
    description: [
      'To reward our community we will draw an entire collection which acts as the access pass of the Alpha Group. 888 unique wolves will be generated from a pool of 70 hand drawn traits, including 3 legendary NFTs that hold the highest of value.',
    ],
    imgUrl: lunaSneakPeek,
    id: 2,
  },
];
