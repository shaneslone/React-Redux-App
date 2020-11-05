import React from 'react';
import { connect } from 'react-redux';
import ChampionMaster from './RankedInfo';
import { RankedInfoCard, StyledContainer } from '../styles';
import { fetchSummoner } from '../store/actions';
import { Link } from 'react-router-dom';

function SummonerInfo(props) {
  return (
    <StyledContainer>
      <Link to='/'>Back To Challenger List</Link>
      <RankedInfoCard>
        {props.isLoading ? <h2>Loading summoner info...</h2> : null}
        {props.error ? <p>{props.error}</p> : null}
        <h2>Summoner Name: {props.summonerInfo.name}</h2>
        <p>Summoner Level: {props.summonerInfo.summonerLevel}</p>
      </RankedInfoCard>
      {props.isLoading
        ? null
        : props.rankedInfo.map(rankedQue => (
            <ChampionMaster key={rankedQue.leagueId} rankedInfo={rankedQue} />
          ))}
    </StyledContainer>
  );
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    summonerInfo: state.summonerInfo,
    error: state.error,
    rankedInfo: state.rankedInfo,
  };
};

export default connect(mapStateToProps, { fetchSummoner })(SummonerInfo);
