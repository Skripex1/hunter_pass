import React from 'react';
import { WhitePaperContainer, WhitePaperPageContainer } from './styles';
import { Images } from './constants';

const WhitePaper = (): JSX.Element => {
  return (
    <WhitePaperContainer>
      {Images.map(e => (
        <WhitePaperPageContainer key={e.url} src={e.url} />
      ))}
    </WhitePaperContainer>
  );
};

export default WhitePaper;
