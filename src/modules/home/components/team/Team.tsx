/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { teamData } from './constants';
import { TeamContainer, TeamContainerCards, TeamMafiaRoomContainer, TeamTitle, TmrImage, TmrText } from './styles';
import TeamCard from './team-card';

const Team = (): JSX.Element => {
  return (
    <TeamContainer>
      <TeamTitle>Team</TeamTitle>
      <TeamContainerCards>
        {teamData.map(item => (
          <TeamCard key={item.title} {...item} />
        ))}
      </TeamContainerCards>
      <TeamMafiaRoomContainer>
        <TmrText>Backed up by our dedicated investors</TmrText>
        <TmrImage src="assets/mafia-room.png" />
      </TeamMafiaRoomContainer>
    </TeamContainer>
  );
};

export default Team;
