import React from 'react';
import { FaqContainer, FaqDetail, FaqGridQuestion, FaqTextContainer, FaqTitle, FaqGridContainer, FaqGridPhoto, FaqGridAns, FaqGrid } from './styles';
import star from './star.png';
import { FaqObj } from './constants';

const Faq = (): JSX.Element => {
  return (
    <FaqContainer>
      <FaqTextContainer>
        <FaqTitle>FAQ</FaqTitle>
        <FaqDetail>Have questions about the Hunter Pass?</FaqDetail>
        <FaqGrid>
          {FaqObj.map(e => (
            <FaqGridContainer key={e.ans}>
              <FaqGridPhoto src={star} />
              <FaqTextContainer>
                <FaqGridQuestion>{e.question}</FaqGridQuestion>
                <FaqGridAns>{e.ans}</FaqGridAns>
              </FaqTextContainer>
            </FaqGridContainer>
          ))}
        </FaqGrid>
      </FaqTextContainer>
    </FaqContainer>
  );
};

export default Faq;
