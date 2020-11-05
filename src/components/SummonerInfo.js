import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSummoner } from '../store/actions';
import ChampionMaster from './RankedInfo';
import { useForm } from '../hooks/useForm';
import { StyledHeader, RankedInfoCard, StyledContainer } from '../styles';

function SummonerInfo(props) {
  const [value, handleChanges] = useForm('');

  useEffect(() => {
    props.fetchSummoner('Doublelift');
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    props.fetchSummoner(value);
  };

  return (
    <>
      <StyledHeader>
        <h1>League of Legends Summoner Info</h1>
        <div className='searchBox'>
          <form onSubmit={handleSubmit}>
            <label>
              Enter Summoner Name:
              <input
                name='summoner name'
                type='text'
                value={value}
                onChange={handleChanges}
              />
            </label>
            <button>Search</button>
          </form>
        </div>
      </StyledHeader>
      <StyledContainer>
        <RankedInfoCard>
          {props.isLoading ? <h2>Loading summoner info...</h2> : null}
          {props.error ? <p>{props.error}</p> : null}
          <h2>Summoner Name: {props.summonerInfo.name}</h2>
          <p>Summoner Level: {props.summonerInfo.summonerLevel}</p>
        </RankedInfoCard>
        {!props.isLoading
          ? props.rankedInfo.map(rankedQue => (
              <ChampionMaster key={rankedQue.leagueId} rankedInfo={rankedQue} />
            ))
          : null}
      </StyledContainer>
    </>
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
