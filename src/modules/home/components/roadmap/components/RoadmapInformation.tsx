import React from 'react';
import { Alignment, RoadMapInfo } from '../constants';
import { RiContainer, RiText, RiTitle } from './styles';

interface IRoadmapInformationProps {
  data: RoadMapInfo;
  index: number;
}
const RoadmapInformation = (props: IRoadmapInformationProps): JSX.Element => {
  const { data } = props;
  const { title, text, align } = data;
  const { index } = props;
  return (
    <RiContainer isRight={align === Alignment.right}>
      <RiTitle>{title}</RiTitle>
      <RiText>{text}</RiText>
    </RiContainer>
  );
};

export default RoadmapInformation;
