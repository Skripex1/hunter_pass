import { Element } from 'react-scroll';
import AppLoaderOverlay from '../../components/app-loader-overlay';
import Footer from '../../components/footer';
import Header from '../../components/header';
import { useAppSelector } from '../../store';
import { blockchainLoadingSelector } from '../../store/selectors/blockchain-selectors';
import { contractLoadingSelector } from '../../store/selectors/contract-selectors';
import About from './components/about';
import Banner from './components/banner';
import Faq from './components/faq';
import Team from './components/team';
import { FixedContainer, HomeContainer, HomeItemCentered } from './styles';
import Esports from './components/esports';
import Gaming from './components/gaming';
import Roadmap from './components/roadmap';
import Utility from './components/utility';

const Home = (): JSX.Element => {
  const blockchainLoading = useAppSelector(blockchainLoadingSelector);
  const contractLoading = useAppSelector(contractLoadingSelector);
  return (
    <HomeContainer>
      <AppLoaderOverlay isLoading={blockchainLoading || contractLoading} />
      <Header />
      <Element name="banner">
        <Banner />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="utility">
        <Utility />
      </Element>
      <Element name="roadmap">
        <Roadmap />
      </Element>
      <Element name="gaming">
        <Gaming />
      </Element>
      <Element name="esports">
        <Esports />
      </Element>
      <FixedContainer>
        <HomeItemCentered name="team">
          <Team />
        </HomeItemCentered>
        <HomeItemCentered name="faq">
          <Faq />
        </HomeItemCentered>
      </FixedContainer>

      <Footer />
    </HomeContainer>
  );
};

export default Home;
