import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ChampionMaster from './RankedInfo';
import { RankedInfoCard, StyledContainer } from '../styles';
import ChampionMastery from './ChampionMastery';
import { fetchMastery } from '../store/actions';
import { Link } from 'react-router-dom';

function SummonerInfo(props) {
  const { name, summonerLevel, id } = props.summonerInfo;
  const { isLoading, error, region, rankedInfo, mastery, fetchMastery } = props;

  useEffect(() => {
    if (id) {
      fetchMastery(id, region);
    }
  }, [id]);
  return (
    <StyledContainer>
      <h2>
        <Link to='/'>Back To Challenger List</Link>
      </h2>
      <RankedInfoCard>
        {isLoading ? <h2>Loading summoner info...</h2> : null}
        {error ? <p>{error}</p> : null}
        <h2>{name}</h2>
        <p>Summoner Level: {summonerLevel}</p>
        <div>
          <h3>Most Played Champions:</h3>
          <ChampionMastery />
        </div>
      </RankedInfoCard>
      {isLoading
        ? null
        : rankedInfo.map(rankedQue => (
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
    region: state.region,
    mastery: state.mastery,
  };
};

export default connect(mapStateToProps, { fetchMastery })(SummonerInfo);
