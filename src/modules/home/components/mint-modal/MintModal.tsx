import React from 'react';
import { MintModalButton, MintModalContainer, MintModalData, MintModalInformation, MintModalTitle, MMCButton, MMCounter, MMCValueContainer } from './styles';

const MintModal = (): JSX.Element => {
  return (
    <MintModalContainer>
      <MintModalTitle>Private sale is live now!</MintModalTitle>
      <MintModalInformation>Supply left</MintModalInformation>
      <MintModalData>3333</MintModalData>
      <MintModalInformation>Price</MintModalInformation>
      <MintModalData>0.125 ETH</MintModalData>
      <MMCounter>
        <MMCButton>-</MMCButton>
        <MMCValueContainer>1</MMCValueContainer>
        <MMCButton>+</MMCButton>
      </MMCounter>
      <MintModalButton>Mint now</MintModalButton>
    </MintModalContainer>
  );
};

export default MintModal;
