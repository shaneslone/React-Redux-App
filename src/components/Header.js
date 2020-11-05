import React from 'react';
import { StyledHeader } from '../styles';
import { connect } from 'react-redux';
import { fetchSummoner } from '../store/actions';
import { useForm } from '../hooks/useForm';
import leaguelogo from '../images/leaguelogo.png';
import { useHistory } from 'react-router-dom';

function Header(props) {
  const [value, handleChanges] = useForm('');
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    props.fetchSummoner(value);
    history.push('/summoner');
  };
  return (
    <StyledHeader>
      <h1>League of Legends Summoner Info</h1>
      <img src={leaguelogo} alt='league of legends logo' />
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
  );
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, { fetchSummoner })(Header);
