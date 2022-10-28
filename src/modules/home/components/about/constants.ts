export interface IAboutProps {
  title?: string;
  text: string;
  paddingRight: number;
  // paddingRight: 1 - most right , 3 - most left
}

export const firstSectionData: IAboutProps[] = [
  {
    title: 'You are in the right place, we have a warm WELCOME for you!',
    text: 'We are the souls of space and a portal where powerful minds of Web3 and Gamers meet! We focus gaming because it is the fastest growing industry at the moment and Esports is the key to success for Web3',
    paddingRight: 2,
  },
  {
    title: 'A collection of 3,333 unique generative NFTs waiting to find a loyal soul.',
    text: 'Anunnaki Vision is here to create a new eco-system for Web3 enthusiasts combined with a powerful DAO & Community that will lead to success in the Gaming/Esports industry.We are designed by Mafia Room, a Clan of solid investors and a team supplied with boundless energy!',
    paddingRight: 1,
  },
];
export const secondSectionData: IAboutProps[] = [
  {
    text: 'We are eyes of the future, we learn through our past. The unbreakable soldiers of Web3, we fight for this space which promotes freedom and the end of government rules.',
    paddingRight: 1,
  },
  {
    text: "We value each failure as a great lesson that made us even stronger and now with all our gathered knowledge and experience we bring you Anunnaki Vision; a crazy concept with art out of this world that you haven't seen before and real utility that will bring countless benefits.",
    paddingRight: 2,
  },
  {
    text: 'We stand for sovereignty, truth, art, community, web3 and gamers. We will establish the first web 3 esports org and create the most powerful network yet seen in this space.',
    paddingRight: 1,
  },
];
