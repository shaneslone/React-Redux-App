import React from 'react';
import { RankedInfoCard } from '../styles';

export default function RankedInfo(props) {
  const {
    tier,
    queueType,
    rank,
    leaguePoints,
    wins,
    losses,
  } = props.rankedInfo;
  return (
    <RankedInfoCard>
      <h2>Queue Type: {queueType.replace(/_/g, ' ')}</h2>
      <p>
        Rank: {tier} {rank}
      </p>
      <p>League Points: {leaguePoints}</p>
      <p>
        Wins: {wins} Losses: {losses}
      </p>
    </RankedInfoCard>
  );
}
