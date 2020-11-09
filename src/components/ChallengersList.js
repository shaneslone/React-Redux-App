import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchChallengers } from '../store/actions';
import Challenger from './Challenger';
import { regionName } from '../helpers';
import { StyledContainer, Spinner, RankedInfoCard } from '../styles';

function ChallengersList(props) {
  const { challengers, error, region, isLoading } = props;
  useEffect(() => {
    props.fetchChallengers(region);
  }, [region]);

  if (isLoading) {
    return (
      <StyledContainer>
        <RankedInfoCard>
          <Spinner />
        </RankedInfoCard>
      </StyledContainer>
    );
  }
  if (error) {
    return (
      <StyledContainer>
        <RankedInfoCard>
          <h2>{error}</h2>
        </RankedInfoCard>
      </StyledContainer>
    );
  }

  return (
    <StyledContainer>
      <h2>{regionName(region)} Challenger Rankings</h2>
      {challengers.map((challenger, index) => (
        <Challenger challenger={challenger} rank={index + 1} />
      ))}
    </StyledContainer>
  );
}

const mapStateToProps = state => {
  return {
    challengers: state.challengers,
    error: state.error,
    region: state.region,
    isLoading: state.isLoading,
  };
};

export default connect(mapStateToProps, { fetchChallengers })(ChallengersList);
