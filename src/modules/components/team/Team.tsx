import React from 'react';
import { TeamContainer, TeameGridContainer, TeamGridPhoto, TeamTitle, TeamGrid, TeamGridName, TeamGridRole } from './styles';
import { TeamObj } from './constants';

const Team = (): JSX.Element => {
  return (
    <TeamContainer>
      <TeamTitle>Meet the founders</TeamTitle>
      <TeamGrid>
        {TeamObj.map(e => (
          <TeameGridContainer key={e.name}>
            <TeamGridPhoto src={e.imageUrl} />
            <TeamGridName>{e.name}</TeamGridName>
            <TeamGridRole>{e.role}</TeamGridRole>
          </TeameGridContainer>
        ))}
      </TeamGrid>
    </TeamContainer>
  );
};

export default Team;
