import React from 'react';
import { RankedInfoCard } from '../styles';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSummoner } from '../store/actions';

function Challenger(props) {
  const { summonerName, leaguePoints, wins, losses } = props.challenger;
  const { region, fetchSummoner } = props;

  const handleClick = () => {
    fetchSummoner(summonerName, region);
  };
  return (
    <RankedInfoCard>
      <h2>
        <Link onClick={handleClick} to='/summoner'>
          {summonerName}
        </Link>
      </h2>
      <p>Rank: {props.rank}</p>
      <p>League Points: {leaguePoints}</p>
      <p>
        Wins: {wins} Losses: {losses}
      </p>
    </RankedInfoCard>
  );
}

const mapStateToProps = state => {
  return {
    region: state.region,
  };
};

export default connect(mapStateToProps, { fetchSummoner })(Challenger);
