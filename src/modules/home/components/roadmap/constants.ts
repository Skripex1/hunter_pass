export enum Alignment {
  left,
  right,
}
export interface RoadMapInfo {
  title: string;
  text: string;
  align: Alignment;
}
export const RoadMapData: RoadMapInfo[] = [
  {
    title: 'The beginning',
    text: 'We release a part of the TopBull permits for sale at a discounted price and grow the project’s community. Once we gather a crowd we will leak a part of the UI & UX design of the platform in a “PREVIEW” stage. This is also when the back end of the TopBull Project is being constructed in order to facilitate a faster release.',
    align: Alignment.left,
  },
  {
    title: 'The beta release',
    text: 'A “Beta” version of the platform will be released. It will have the core functionality of the future BEAST we are building. Holders will now be able to access the platform and expose their projects to a high quality web3 community. By this point, both the Collectors and the Creators will appreciate more the power and efficiency of the platform. As demand will keep on rising we will slowly release more passes to expand the community while also keeping the quality of investors high.',
    align: Alignment.right,
  },
  {
    title: 'The community release',
    text: 'Beta is over. The TopBull platform is now ready for release! Our team will improve the platform based on the feedback from the Beta Phase as well as expand the horizon for other web3 project classes such as DAO’s, Tokens, NFT Gaming and others! Many other features will be constructed by this point such as: account personalisation system, follow Creators feature, notification system to notify Collectors of huge projects coming up.',
    align: Alignment.left,
  },
  {
    title: 'The Consolidation phase',
    text: 'We have expanded our community and we have created the TopBull platform. What is next? We plan on taking over the Crypto space by creating the social network of web3 projects. We will give users the ability to chat with one another, post about their favourite projects on a feed and also contact the top personalities in the crypto space for working together. We are building the project that will take over web3 space without a doubt. The question is: Will you be part of it?',
    align: Alignment.right,
  },
];
