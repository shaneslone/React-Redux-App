import React from 'react';
import { RankedInfoCard } from '../styles';

export default function Challenger(props) {
  const { summonerName, leaguePoints, wins, losses } = props.challenger;
  return (
    <RankedInfoCard>
      <h2>Summoner Name: {summonerName}</h2>
      <p>Rank: {props.rank}</p>
      <p>League Points: {leaguePoints}</p>
      <p>
        Wins: {wins} Losses: {losses}
      </p>
    </RankedInfoCard>
  );
}
