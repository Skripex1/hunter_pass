import { ethers } from 'ethers';
import React, { useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../store';
import { blockchainMintNftAsyncAction, fecthBlockchainDataActionAsync } from '../../../../store/actions/blockchain-actions';
import { blockchainIsConnectedSelector } from '../../../../store/selectors/blockchain-selectors';
import { contractDataSelector } from '../../../../store/selectors/contract-selectors';
import { MintModalButton, MintModalContainer, MintModalData, MintModalInformation, MintModalTitle, MMCButton, MMCounter, MMCValueContainer } from './styles';

const MintModal = (): JSX.Element => {
  const isConnected = useAppSelector(blockchainIsConnectedSelector);
  const contractData = useAppSelector(contractDataSelector);
  const [value, setValue] = useState(1);
  const dispatch = useAppDispatch();
  const maxMintPerTx = useMemo(() => {
    if (contractData?.whitelistStatus) {
      return contractData.whitelistMaxPerWallet - contractData.mintedWhitelistNftsByUser;
    }
    return contractData.publicMintPerTx - contractData.mintedNftsByUser;
  }, [contractData]);
  const buildTitle = (): string => {
    if (!isConnected) {
      return 'Private sale is live now!';
    }
    if (contractData.paused) {
      return 'Sale is closed!';
    }
    if (contractData.whitelistStatus) {
      return 'Private sale is live now!';
    }
    return 'Public sale is live now!';
  };
  const buildPrice = (): string => {
    if (!isConnected) {
      return '0.03 ETH';
    }
    if (contractData.presaleStatus) {
      return `${Number(ethers.utils.formatEther(contractData.presalePrice)) * value} ETH`;
    }
    return `${Number(ethers.utils.formatEther(contractData.price)) * value} ETH`;
  };
  const buildSupplyLeft = (): string => {
    if (!isConnected) {
      return '3333';
    }
    return `${contractData.maxSupply - contractData.currentSupply}`;
  };
  const handleIncrement = (): void => {
    if (value + 1 > maxMintPerTx) {
      return;
    }
    setValue(prev => prev + 1);
  };
  const handleDecrement = (): void => {
    if (value === 1) {
      return;
    }
    setValue(prev => prev - 1);
  };
  const buildButton = (): JSX.Element => {
    if (isConnected) {
      return (
        <MintModalButton
          isDisabled={contractData.paused || contractData.maxSupply === contractData.currentSupply}
          disabled={contractData.paused || contractData.currentSupply === contractData.maxSupply}
          onClick={() => dispatch(blockchainMintNftAsyncAction({ amount: value }))}
        >
          Mint now
        </MintModalButton>
      );
    }
    return <MintModalButton onClick={() => dispatch(fecthBlockchainDataActionAsync())}>Connect</MintModalButton>;
  };
  const buildInfoSection = (): JSX.Element => {
    if (isConnected) {
      return (
        <>
          <MintModalTitle>{buildTitle()}</MintModalTitle>
          <MintModalInformation>Supply left</MintModalInformation>
          <MintModalData>{buildSupplyLeft()}</MintModalData>
          <MintModalInformation>Price</MintModalInformation>
          <MintModalData>{buildPrice()}</MintModalData>
          <MMCounter>
            <MMCButton onClick={handleDecrement}>-</MMCButton>
            <MMCValueContainer>{value}</MMCValueContainer>
            <MMCButton onClick={handleIncrement}>+</MMCButton>
          </MMCounter>
        </>
      );
    }
    return <MintModalTitle>Connect your wallet</MintModalTitle>;
  };
  return (
    <MintModalContainer>
      {buildInfoSection()}

      {buildButton()}
    </MintModalContainer>
  );
};

export default MintModal;
