import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchChallengers } from '../store/actions';
import Challenger from './Challenger';
import { regionName } from '../helpers';
import { StyledContainer } from '../styles';

function ChallengersList(props) {
  const { challengers, error, region } = props;
  useEffect(() => {
    props.fetchChallengers(region);
  }, [region]);
  return (
    <StyledContainer>
      <h2>{regionName(region)} Challenger Rankings</h2>
      <p>{error ? error : null}</p>
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
  };
};

export default connect(mapStateToProps, { fetchChallengers })(ChallengersList);
