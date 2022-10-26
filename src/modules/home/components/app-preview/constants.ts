export interface AppPreviewCardProps {
  title: string;
  image: string;
  text: string;
  isRight?: boolean;
}

export const previewCards: AppPreviewCardProps[] = [
  {
    title: 'Scout the top upcoming projects',
    image: 'assets/app-preview-1.png',
    text: 'Advanced search filters and a wide range of web3 projects. Never miss the 100x projects again!',
  },
  {
    title: 'Claim rewards',
    image: 'assets/app-preview-2.png',
    text: 'Claim whitelist spots, earn NFTs and ETH faster than ever! Always stay ahead of the competition by getting whitelisted to projects before they get released to the broad community.',
    isRight: true,
  },
  {
    title: 'Personalise your account',
    image: 'assets/app-preview-3.png',
    text: 'Create and customize your account by simply connecting with your digital wallet. Creators will be able to promote themselves and build a brand by showcasing their past projects.',
  },
];
