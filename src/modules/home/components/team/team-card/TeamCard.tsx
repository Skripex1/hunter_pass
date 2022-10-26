import React from 'react';
import { ITeamData } from '../constants';
import { TeamCardContainer, TeamCardInfoContainer, TeamCardInfoText, TeamCardInfoTitle } from './styles';

const TeamCard = (props: ITeamData): JSX.Element => {
  const { title, info } = props;
  return (
    <TeamCardContainer>
      <TeamCardInfoContainer>
        <TeamCardInfoTitle>{title}</TeamCardInfoTitle>
        <TeamCardInfoText>{info}</TeamCardInfoText>
      </TeamCardInfoContainer>
    </TeamCardContainer>
  );
};

export default TeamCard;
