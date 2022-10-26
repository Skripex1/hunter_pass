export interface LifeTimeMobileCard {
  title: string;
  data: LifeTimeMobileInformation[];
  isFree?: boolean;
}
export interface LifeTimeMobileInformation {
  title: string;
  isRed: boolean;
}
export const freeData: LifeTimeMobileInformation[] = [
  {
    title: 'Project scouting',
    isRed: true,
  },
  {
    title: 'Live event FEED',
    isRed: false,
  },
  {
    title: 'Custom profiles',
    isRed: true,
  },
  {
    title: 'rarity tool',
    isRed: false,
  },
];
const genesis: LifeTimeMobileInformation[] = [
  {
    title: 'Project scouting',
    isRed: true,
  },
  {
    title: 'Live event FEED',
    isRed: false,
  },
  {
    title: 'Custom profiles',
    isRed: true,
  },
  {
    title: 'rarity tool',
    isRed: false,
  },
  {
    title: 'List your projects',
    isRed: true,
  },
  {
    title: 'follow creators',
    isRed: false,
  },
  {
    title: 'Custom listing alerts',
    isRed: true,
  },

  {
    title: 'Social system access',
    isRed: true,
  },
  {
    title: 'Post about projects',
    isRed: false,
  },
  {
    title: 'Upvote projects',
    isRed: false,
  },
  {
    title: 'Claim Whitelist feature',
    isRed: true,
  },
  {
    title: 'do fund raising',
    isRed: false,
  },
  {
    title: 'Auto buy',
    isRed: true,
  },
  {
    title: 'Mass bidding',
    isRed: false,
  },
  {
    title: 'minting now feed',
    isRed: true,
  },
  {
    title: 'enter raffles',
    isRed: false,
  },
];
const alpha: LifeTimeMobileInformation[] = [
  {
    title: 'Project scouting',
    isRed: true,
  },
  {
    title: 'Live event FEED',
    isRed: false,
  },
  {
    title: 'Custom profiles',
    isRed: true,
  },
  {
    title: 'rarity tool',
    isRed: false,
  },
  {
    title: 'List your projects',
    isRed: true,
  },
  {
    title: 'follow creators',
    isRed: false,
  },
  {
    title: 'Custom listing alerts',
    isRed: true,
  },
  {
    title: 'Social system access',
    isRed: true,
  },
  {
    title: 'Post about projects',
    isRed: false,
  },
  {
    title: 'Upvote projects',
    isRed: false,
  },
  {
    title: 'Claim Whitelist feature',
    isRed: true,
  },
  {
    title: 'do fund raising',
    isRed: false,
  },
  {
    title: 'Auto buy',
    isRed: true,
  },
  {
    title: 'Mass bidding',
    isRed: false,
  },
  {
    title: 'minting now feed',
    isRed: true,
  },
  {
    title: 'enter raffles',
    isRed: false,
  },
  {
    title: 'work with the biggest creators',
    isRed: true,
  },
  {
    title: 'Access to alpha group',
    isRed: false,
  },
  {
    title: 'decentralized shares in topbull',
    isRed: true,
  },
  {
    title: 'divident payout & voting power',
    isRed: false,
  },
  {
    title: 'Access to investing platform',
    isRed: true,
  },
  {
    title: 'Fixed apy payouts on investments',
    isRed: false,
  },
  {
    title: 'Royality fees redistribution',
    isRed: true,
  },
];
export const LifeTimeMobileCardData: LifeTimeMobileCard[] = [
  {
    title: 'Free',
    data: freeData,
    isFree: true,
  },
  {
    title: 'alpha',
    data: alpha,
  },
  {
    title: 'genesis',
    data: genesis,
  },
];
