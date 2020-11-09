import React from 'react';
import { MasteryCard } from '../styles';

export default function Champion(props) {
  const { champion, masteryInfo } = props;
  return (
    <MasteryCard>
      <h3>{champion.name}</h3>
      <img src={champion.icon} alt='champion' />
      <p>Champion Level: {masteryInfo.championLevel}</p>
      <p>Mastery Points: {masteryInfo.championPoints}</p>
    </MasteryCard>
  );
}
