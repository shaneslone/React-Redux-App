import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchChallengers } from '../store/actions';
import Challenger from './Challenger';
import { StyledContainer } from '../styles';

function ChallengersList(props) {
  useEffect(() => {
    props.fetchChallengers();
  }, []);
  return (
    <StyledContainer>
      <h2>North American Challenger Rankings</h2>
      {props.challengers.map((challenger, index) => (
        <Challenger challenger={challenger} rank={index + 1} />
      ))}
    </StyledContainer>
  );
}

const mapStateToProps = state => {
  return {
    challengers: state.challengers,
  };
};

export default connect(mapStateToProps, { fetchChallengers })(ChallengersList);
