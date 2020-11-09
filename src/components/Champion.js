import React from 'react';
import { MasteryCard } from '../styles';

export default function Champion(props) {
  const { champion, masteryInfo } = props;
  return (
    <MasteryCard>
      <h3>{champion.name}</h3>
      <div>
        <img src={champion.icon} alt='champion' />
      </div>
      <p>Champion Level: {masteryInfo.championLevel}</p>
      <p>Mastery Points: {masteryInfo.championPoints}</p>
    </MasteryCard>
  );
}
