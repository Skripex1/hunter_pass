import React from 'react';
import { OverViewDescriptionContainer } from '../overview/styles';
import {
  RoadMapContainer,
  RoadMapDescriptionContainer,
  RoadMapInformationContainer,
  RoadMapDescriptionTitle,
  RoadMapDescriptionText,
  RoadMapBenefeciesContainer,
  RoadMapBenefeciesCheckImg,
  RoadMapBenefeciesText,
  RoadMapDescriptionImg,
  RoadMapDescriptionMore,
  Split1,
  RoadMapInformationContainerBig,
  MuchMore,
  MuchMoreContainer,
  MuchMoreGrid,
  MuchMoreGridCheckDiv,
  CheckTitle,
  MuchMoreGridContainer,
  CheckImg,
  MuchMoreGridDescriptionText,
  RoadMapInformationContainerReverse,
} from './styles';
import { RoadMapDescription, RoadMapDescriptionSecond, RoadMapGridDetails } from './constants';
import check from './assets/check_box.png';
import split1 from './assets/split1.png';
import split2 from './assets/split2.png';
import { useAppSelector } from '../../../store';
import { appWidthSelector } from '../../../store/selectors/app-selectors';

const RoadMap = (): JSX.Element => {
  const width = useAppSelector(appWidthSelector);

  return (
    <RoadMapContainer>
      {RoadMapDescription.map(road => (
        <RoadMapInformationContainerBig>
          {Boolean(!road.direction) && (
            <RoadMapInformationContainer key={road.id}>
              <RoadMapDescriptionContainer>
                <RoadMapDescriptionTitle>{road.title}</RoadMapDescriptionTitle>
                <RoadMapDescriptionText>{road.description}</RoadMapDescriptionText>
                {road.checkText.map(e => (
                  <RoadMapBenefeciesContainer key={e}>
                    <RoadMapBenefeciesCheckImg src={check} />
                    <RoadMapBenefeciesText>{e}</RoadMapBenefeciesText>
                  </RoadMapBenefeciesContainer>
                ))}
                {road.id >= 3 && <RoadMapDescriptionMore>&more</RoadMapDescriptionMore>}
              </RoadMapDescriptionContainer>
              <RoadMapDescriptionImg src={road.imgUrl} alt="" />
            </RoadMapInformationContainer>
          )}
          {Boolean(road.direction) && (
            <RoadMapInformationContainerReverse key={road.id}>
              <RoadMapDescriptionImg src={road.imgUrl} alt="" />
              <RoadMapDescriptionContainer>
                <RoadMapDescriptionTitle>{road.title}</RoadMapDescriptionTitle>
                <RoadMapDescriptionText>{road.description}</RoadMapDescriptionText>
                {road.checkText.map(e => (
                  <RoadMapBenefeciesContainer key={e}>
                    <RoadMapBenefeciesCheckImg src={check} />
                    <RoadMapBenefeciesText>{e}</RoadMapBenefeciesText>
                  </RoadMapBenefeciesContainer>
                ))}
                {road.id >= 3 && <RoadMapDescriptionMore>&more</RoadMapDescriptionMore>}
              </RoadMapDescriptionContainer>
            </RoadMapInformationContainerReverse>
          )}
          {Boolean(road.direction) && <Split1 src={split2} />}
          {Boolean(!road.direction) && <Split1 src={split1} />}
        </RoadMapInformationContainerBig>
      ))}
      {RoadMapDescriptionSecond.map(road => (
        <RoadMapInformationContainerBig>
          {Boolean(!road.direction) && (
            <RoadMapInformationContainer key={road.direction}>
              <RoadMapDescriptionContainer>
                <RoadMapDescriptionTitle>{road.title}</RoadMapDescriptionTitle>
                <RoadMapDescriptionText>{road.description}</RoadMapDescriptionText>
              </RoadMapDescriptionContainer>
              <RoadMapDescriptionImg src={road.imgUrl} alt="" />
            </RoadMapInformationContainer>
          )}
          {Boolean(road.direction) && (
            <RoadMapInformationContainerReverse>
              <RoadMapDescriptionImg src={road.imgUrl} alt="" />
              <RoadMapDescriptionContainer>
                <RoadMapDescriptionTitle>{road.title}</RoadMapDescriptionTitle>
                <RoadMapDescriptionText>{road.description}</RoadMapDescriptionText>
              </RoadMapDescriptionContainer>
            </RoadMapInformationContainerReverse>
          )}

          {Boolean(!road.direction) && <Split1 src={split1} />}
        </RoadMapInformationContainerBig>
      ))}
      <MuchMoreContainer>
        <MuchMore>And so much more.</MuchMore>
        <MuchMoreGrid>
          {RoadMapGridDetails.map(e => (
            <MuchMoreGridContainer>
              <MuchMoreGridCheckDiv key={e.title}>
                <CheckImg src={check} />
                <CheckTitle>{e.title}</CheckTitle>
              </MuchMoreGridCheckDiv>
              <MuchMoreGridDescriptionText>{e.description}</MuchMoreGridDescriptionText>
            </MuchMoreGridContainer>
          ))}
        </MuchMoreGrid>
      </MuchMoreContainer>
    </RoadMapContainer>
  );
};

export default RoadMap;
