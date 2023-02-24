import MintDistribution from './MintDistribution';

export interface MintDistribution {
  percentage: string;
  description: string;
}

export const MintDistributionFirst: MintDistribution[] = [
  {
    percentage: '20%',
    description: 'for marketing',
  },
  {
    percentage: '10%',
    description: 'for the best Alpha callers + Trades',
  },
  {
    percentage: '15%',
    description: 'for the team',
  },
];

export const MintDistributionSecond: MintDistribution[] = [
  {
    percentage: '45%',
    description: 'for development costs',
  },
  {
    percentage: '10%',
    description: 'for the community wallet',
  },
];

export interface MintDistributionText {
  description: string;
}

export const MintDistributionTexts: MintDistributionText[] = [
  {
    description: 'We are a team of talented developers that have successfully launched over 50 projects in the web3 space',
  },
  {
    description: 'Together with out marketing team, designers, artists, copywriters and professional traders, we have established and unstoppable force.',
  },
  {
    description: 'We want to bring our share to the community and give life to all of the suggestions our pack has in mind.',
  },
];
