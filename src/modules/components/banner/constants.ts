import discordUrl from './assets/discord.png';
import twitterUrl from './assets/twitter.png';
import mediumUrl from './assets/medium.png';

export interface Logo {
  logoUrl: string;
  id: number;
}

export const Logos: Logo[] = [
  {
    logoUrl: discordUrl,
    id: 1,
  },
  {
    logoUrl: twitterUrl,
    id: 2,
  },
  {
    logoUrl: mediumUrl,
    id: 3,
  },
];
