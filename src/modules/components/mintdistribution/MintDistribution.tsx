import React from 'react';
import {
  MintDescriptionText,
  MintDistributionCheck,
  MintDistributionCheckContainer,
  MintDistributionCheckTitle,
  MintDistributionContainer,
  MintDistributionDetailsContainer,
  MintDistributionDetalisText,
  MintDistributionInformationContainer,
  MintDistributionTitle,
} from './styles';
import { MintDistributionFirst, MintDistributionSecond, MintDistributionTexts } from './constants';
import check from './check.png';

const MintDistribution = (): JSX.Element => {
  return (
    <MintDistributionContainer>
      <MintDistributionTitle>Mint Distribution</MintDistributionTitle>
      <MintDescriptionText>Find out how we are splitting the mint</MintDescriptionText>
      <MintDistributionInformationContainer>
        {MintDistributionFirst.map(e => (
          <MintDistributionDetailsContainer key={e.percentage}>
            <MintDistributionCheckContainer>
              <MintDistributionCheck src={check} />
              <MintDistributionCheckTitle>{e.percentage}</MintDistributionCheckTitle>
            </MintDistributionCheckContainer>
            <MintDistributionDetalisText>{e.description}</MintDistributionDetalisText>
          </MintDistributionDetailsContainer>
        ))}
      </MintDistributionInformationContainer>
      <MintDistributionInformationContainer>
        {MintDistributionSecond.map(e => (
          <MintDistributionDetailsContainer key={e.percentage}>
            <MintDistributionCheckContainer>
              <MintDistributionCheck src={check} />
              <MintDistributionCheckTitle>{e.percentage}</MintDistributionCheckTitle>
            </MintDistributionCheckContainer>
            <MintDistributionDetalisText>{e.description}</MintDistributionDetalisText>
          </MintDistributionDetailsContainer>
        ))}
      </MintDistributionInformationContainer>
      <MintDistributionTitle style={{ marginTop: '100px', marginBottom: '10px' }}>Who is behind Ordinal Hunters?</MintDistributionTitle>
      {MintDistributionTexts.map(e => (
        <MintDescriptionText key={e.description}>{e.description}</MintDescriptionText>
      ))}
    </MintDistributionContainer>
  );
};

export default MintDistribution;
