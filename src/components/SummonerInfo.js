import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSummoner } from '../store/actions';
import ChampionMaster from './ChampionMaster';

function SummonerInfo(props) {
  useEffect(() => {
    props.fetchSummoner();
  }, []);

  return (
    <div>
      <h1>League of Legends Summoner Info</h1>
      {props.isLoading ? <p>Loading summoner info...</p> : null}
      {props.error ? <p>{props.error}</p> : null}
      <p>{props.summonerInfo.name}</p>
      <p>{props.summonerInfo.summonerLevel}</p>
      {props.championMastery.map(champion => (
        <ChampionMaster masteryInfo={champion} />
      ))}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    summonerInfo: state.summonerInfo,
    error: state.error,
    championMastery: state.championMastery,
  };
};

export default connect(mapStateToProps, { fetchSummoner })(SummonerInfo);
