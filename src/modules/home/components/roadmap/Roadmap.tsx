import React from 'react';
import RoadmapInformation from './components';
import { RoadMapData } from './constants';
import { RoadmapContainer, RoadmapInfoContainer, RoadmapTitle } from './styles';

const Roadmap = (): JSX.Element => {
  return (
    <RoadmapContainer>
      <RoadmapTitle>Roadmap</RoadmapTitle>
      <RoadmapInfoContainer>
        {RoadMapData.map((data, idx) => (
          <RoadmapInformation key={data.title} index={idx} data={data} />
        ))}
      </RoadmapInfoContainer>
    </RoadmapContainer>
  );
};

export default Roadmap;
