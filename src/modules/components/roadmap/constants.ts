import marketplace from './assets/marketplace.png';
import staking from './assets/staking.png';
import tree from './assets/tree.png';
import dao from './assets/dao.png';
import bitcoin from './assets/bitcoin.png';
import hunter from './assets/hunter.png';

export interface RoadMapDescriptionInterface {
  title: string;
  description: string;
  imgUrl: string;
  checkText: string[];
  id: number;
  direction: number;
}

export interface RoadMapDescriptionSecondInterface {
  title: string;
  description: string;
  imgUrl: string;
  direction: number;
}

export const RoadMapDescription: RoadMapDescriptionInterface[] = [
  {
    title: 'Join our marketplace.',
    description: 'The Hunter’s Marketplace features rewards for holding a Hunter Pass or for spending $Scraps',
    imgUrl: marketplace,
    checkText: ['Whitelist', 'Weekly Raffles for holders', 'Giveaways', 'Exposure to the best projects'],
    id: 1,
    direction: 0,
  },
  {
    title: 'Begin Staking.',
    description:
      'Stake your Hunter Passes to accumulate 5 $Scraps/day. Our utility token $Scraps will be used to mint NFTs in partner projects and will be needed for subscriptions or perks in our upcoming tools.',
    imgUrl: staking,
    checkText: ['Minting Now Feed', 'Rarity Sniping', 'Voting Power'],
    id: 2,
    direction: 1,
  },
  {
    title: 'Join the Alpha Group.',
    description:
      'Join the ranks of a prestigious group of investors who consistently uncover profitable investment opportunities. Our group provides exceptional analysis of each and every NFT drop.',
    imgUrl: tree,
    checkText: ['Earn $Scraps daily', 'Loyal Holders Raffles', 'Hidden Perks'],
    id: 3,
    direction: 0,
  },
  {
    title: 'Meet The Hunter’s Dao.',
    description: 'The Hunter’s Dao will be our signature tool accessible with our token.',
    imgUrl: dao,
    checkText: ['Minting Now Feed', 'Rarity Sniping', 'Voting Power'],
    id: 4,
    direction: 1,
  },
];

export const RoadMapDescriptionSecond: RoadMapDescriptionSecondInterface[] = [
  {
    title: 'Discover Bitcoin NFTs.',
    description:
      'We aim to collaborate with future Ordinals NFT Projects on the Bitcoin blockchain. Use your accumulated $Scraps to obtain whitelist spots in the upcoming projects that will reshape the web3 space.',
    imgUrl: bitcoin,
    direction: 0,
  },
  {
    title: 'Also for Creators.',
    description:
      'All creators are welcome to join our pack. You will have the opportunity to submit your projects for consideration within the Alpha Group. Upon submission, the project will undergo a detailed evaluation process and be assigned a risk rating.',
    imgUrl: hunter,
    direction: 1,
  },
];

export interface RoadMapGridInterface {
  title: string;
  description: string;
}

export const RoadMapGridDetails: RoadMapGridInterface[] = [
  {
    title: 'Call Channels',
    description:
      'Call channels delivered by our reputable and extremely profitable analysts. Included are Gold Member Calls which come from our most intelligent & successful members.',
  },
  {
    title: 'Whitelist System',
    description: 'Whitelist Giveaways from the most anticipated projects in the space (very often and a lot of spots &  Whitelist Opportunities (first come first served)',
  },
  {
    title: 'FOMO Bot',
    description: 'Detects all volume and momentum on Opensea so you never have to miss another trend again.',
  },
  {
    title: 'Alerts',
    description: 'Trending mints, early calls, top Twitter Follow alerts, Sweep Alerts, New Raffle Alerts, NFT Mint Calendar, Mint Reminders.',
  },
  {
    title: 'Airdrops',
    description: 'Every single Hunter Pass holder will receive one airdrop from our Bitcoin NFT wolves. Those will be released as soon as the infrastructure is in place.',
  },
  {
    title: 'Launchpad',
    description: 'A place where Creators can launch and promote their projects to a high quality audience with interest in NFTs.',
  },
  {
    title: 'Network',
    description: 'Access to a network of founders, top project team members, influencers and other notable individuals in the web2 and web3 space.',
  },
  {
    title: 'NFT Development',
    description: 'Access to our team of developers. You can contact us to launch your own project and we will help you develop it for a discounted price.',
  },
  {
    title: 'Creators Hub',
    description: 'The Hunter Pass holders will have direct access to the creators that decide to share their projects inside the Alpha Group.',
  },
];
