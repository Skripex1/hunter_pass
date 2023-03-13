import React from 'react';
import {
  OverViewContainer,
  OverViewDescriptionContainer,
  OverViewDescriptionTitle,
  OverViewDescriptionText,
  OverViewDescriptionImg,
  OverViewInformationContainer,
  OverViewDescriptionImg1,
  OverViewInformationContainerReverse,
  OverViewDescriptionTextSecond,
} from './styles';
import { OverviewDescription } from './constants';
import { useAppSelector } from '../../../store';
import { appWidthSelector } from '../../../store/selectors/app-selectors';

const OverView = (): JSX.Element => {
  const width = useAppSelector(appWidthSelector);

  return (
    <OverViewContainer>
      {OverviewDescription.map(e => (
        <>
          {e.id === 1 && (
            <OverViewInformationContainer key={e.id}>
              <OverViewDescriptionContainer>
                <OverViewDescriptionTitle>{e.title}</OverViewDescriptionTitle>
                {e.description.map(contor => (
                  <OverViewDescriptionText key={contor}>{contor}</OverViewDescriptionText>
                ))}
              </OverViewDescriptionContainer>
              <OverViewDescriptionImg src={e.imgUrl} />
            </OverViewInformationContainer>
          )}
          {e.id === 2 && (
            <OverViewInformationContainerReverse key={e.id}>
              <OverViewDescriptionImg1 src={e.imgUrl} />
              <OverViewDescriptionContainer>
                <OverViewDescriptionTitle>{e.title}</OverViewDescriptionTitle>
                {e.description.map(contor => (
                  <OverViewDescriptionText key={contor}>{contor}</OverViewDescriptionText>
                ))}
              </OverViewDescriptionContainer>
            </OverViewInformationContainerReverse>
          )}
        </>
      ))}
      <OverViewDescriptionContainer>
        <OverViewDescriptionTitle style={{ textAlign: 'center' }}>Find out why we are the best</OverViewDescriptionTitle>
        <OverViewDescriptionTextSecond style={{ textAlign: 'center' }}>
          The Hunter Pass gives you early access to profitable projects, puts you ahead of any trend and provides access to multiple tools.
        </OverViewDescriptionTextSecond>
      </OverViewDescriptionContainer>
    </OverViewContainer>
  );
};

export default OverView;
