import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ChampionMaster from './RankedInfo';
import { RankedInfoCard, StyledContainer, Spinner } from '../styles';
import ChampionMastery from './ChampionMastery';
import { fetchMastery } from '../store/actions';
import { Link } from 'react-router-dom';

function SummonerInfo(props) {
  const { name, summonerLevel, id } = props.summonerInfo;
  const { isLoading, error, region, rankedInfo, fetchMastery } = props;

  useEffect(() => {
    if (id) {
      fetchMastery(id, region);
    }
  }, [id]);
  if (isLoading) {
    return (
      <StyledContainer>
        <h2>
          <Link to='/'>Back To Challenger List</Link>
        </h2>
        <RankedInfoCard>{<Spinner />}</RankedInfoCard>
      </StyledContainer>
    );
  }

  if (error) {
    return (
      <StyledContainer>
        <h2>
          <Link to='/'>Back To Challenger List</Link>
        </h2>
        <RankedInfoCard>{<h2>{error}</h2>}</RankedInfoCard>
      </StyledContainer>
    );
  }
  return (
    <StyledContainer>
      <h2>
        <Link to='/'>Back To Challenger List</Link>
      </h2>
      <RankedInfoCard>
        {error ? <p>{error}</p> : null}
        <h2>{name}</h2>
        <p>Summoner Level: {summonerLevel}</p>
        <h3>Most Played Champions:</h3>
        <div>
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
  };
};

export default connect(mapStateToProps, { fetchMastery })(SummonerInfo);
