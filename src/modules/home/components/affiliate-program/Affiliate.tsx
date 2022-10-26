import React, { useEffect, useState } from 'react';
import alertService from '../../../../services/alert-service';
import { useAppDispatch, useAppSelector } from '../../../../store';
import { fecthBlockchainDataActionAsync } from '../../../../store/actions/blockchain-actions';
import { blockchainAccountSelector, blockchainIsConnectedSelector } from '../../../../store/selectors/blockchain-selectors';
import {
  AffiliateContainer,
  AffiliateInputButton,
  AffiliateInputText,
  AffiliateInputWrapper,
  AffiliateStepButton,
  AffiliateStepContainer,
  AffiliateStepText,
  AffiliateStepWrapper,
  AffiliateText,
  AffiliateTitle,
} from './styles';

const Affiliate = (): JSX.Element => {
  const [step, setStep] = useState(1);
  const [inputField, setInputField] = useState('');
  const isConnected = useAppSelector(blockchainIsConnectedSelector);
  const dispatch = useAppDispatch();
  const account = useAppSelector(blockchainAccountSelector);
  const handleConnect = () => {
    dispatch(fecthBlockchainDataActionAsync());
  };
  const generateLink = () => {
    const newLink = `https://www.topbullnft.com/${account}`;
    setInputField(newLink);
  };
  const handleCopyUrl = () => {
    navigator.clipboard.writeText(inputField);
    alertService.successAlert({ title: 'MLM link', message: 'The link was successfully added in your clipboard' });
  };
  useEffect(() => {
    if (isConnected) {
      setStep(2);
    } else {
      setStep(1);
    }
  }, [isConnected]);
  return (
    <AffiliateContainer>
      <AffiliateTitle>join our affiliate marketing program</AffiliateTitle>
      <AffiliateText>
        For each user that enters the website from your link and mints an NFT you will receive 0.03 ETH instantly. Support TopBull and we will grow together!
      </AffiliateText>
      <AffiliateStepContainer>
        <AffiliateStepWrapper>
          <AffiliateTitle>step 1.</AffiliateTitle>
          <AffiliateStepText>Connect your wallet</AffiliateStepText>
          <AffiliateStepButton onClick={handleConnect} isDisabled={step === 2} disabled={step === 2}>
            Connect
          </AffiliateStepButton>
        </AffiliateStepWrapper>
        <AffiliateStepWrapper>
          <AffiliateTitle>step 2.</AffiliateTitle>
          <AffiliateStepText>Generate your link</AffiliateStepText>
          <AffiliateStepButton onClick={generateLink} isDisabled={step === 1} disabled={step === 1} isLink>
            Generate link
          </AffiliateStepButton>
        </AffiliateStepWrapper>
      </AffiliateStepContainer>
      <AffiliateInputWrapper>
        <AffiliateInputText placeholder="Input address" value={inputField} onChange={e => setInputField(e.target.value)} />
        <AffiliateInputButton onClick={handleCopyUrl}>Copy</AffiliateInputButton>
      </AffiliateInputWrapper>
    </AffiliateContainer>
  );
};

export default Affiliate;
