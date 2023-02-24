import { Element } from 'react-scroll';
import Header from '../../components/header';
import { useAppSelector } from '../../store';
import { blockchainLoadingSelector } from '../../store/selectors/blockchain-selectors';
import { contractLoadingSelector } from '../../store/selectors/contract-selectors';
import { HomeContainer } from './styles';
import Banner from '../components/banner';
import Overview from '../components/overview';
import RoadMap from '../components/roadmap';
import MintDistribution from '../components/mintdistribution';
import Team from '../components/team';
import Faq from '../components/faq';
import Footer from '../components/footer';

const Home = (): JSX.Element => {
  // const blockchainLoading = useAppSelector(blockchainLoadingSelector);
  // const contractLoading = useAppSelector(contractLoadingSelector);
  return (
    <HomeContainer>
      {/* <AppLoaderOverlay isLoading={blockchainLoading || contractLoading} /> */}
      <Header />
      <Element name="banner">
        <Banner />
      </Element>
      <Element name="overview">
        <Overview />
      </Element>
      <Element name="roadmap">
        <RoadMap />
      </Element>
      <MintDistribution />
      <Element name="team">
        <Team />
      </Element>
      <Element name="faq">
        <Faq />
      </Element>
      <Footer />
    </HomeContainer>
  );
};

export default Home;
