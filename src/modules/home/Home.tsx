import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Element } from 'react-scroll';
import AppLoaderOverlay from '../../components/app-loader-overlay';
import Footer from '../../components/footer';
import Header from '../../components/header';
import { emptyAddress } from '../../constants/switch-network-data';
import { useAppDispatch, useAppSelector } from '../../store';
import { setContractRefferalCodeAction } from '../../store/actions/contract-actions';
import { blockchainLoadingSelector } from '../../store/selectors/blockchain-selectors';
import { contractLoadingSelector } from '../../store/selectors/contract-selectors';
import { getReferralFromUri } from '../../utils/convertReferralCode';
import About from './components/about';
import Banner from './components/banner';
import Faq from './components/faq';
import Team from './components/team';
import { FixedContainer, HomeContainer, HomeItemCentered } from './styles';
import Esports from './components/esports';

const Home = (): JSX.Element => {
  const blockchainLoading = useAppSelector(blockchainLoadingSelector);
  const contractLoading = useAppSelector(contractLoadingSelector);
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const ref = getReferralFromUri(location.pathname);
    if (ref !== emptyAddress) dispatch(setContractRefferalCodeAction(ref));
  }, [location, dispatch]);
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
      {/* <Element name="utility">
        <Utility />
      </Element> */}
      <Element name="roadmap">{/* <Roadmap /> */}</Element>
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
