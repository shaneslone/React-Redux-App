import React, { useEffect } from 'react';
import { StyledHeader } from '../styles';
import { connect } from 'react-redux';
import { fetchSummoner, setRegion } from '../store/actions';
import { useForm } from '../hooks/useForm';
import leaguelogo from '../images/leaguelogo.png';
import { useHistory } from 'react-router-dom';

function Header(props) {
  const [value, handleChanges, clearSearch] = useForm({
    summonerName: '',
    region: 'na1',
  });
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    props.fetchSummoner(value.summonerName, value.region);
    history.push('/summoner');
    clearSearch();
  };

  useEffect(() => {
    props.setRegion(value.region);
  }, [value]);

  console.log(value);
  return (
    <StyledHeader>
      <h1>League of Legends Summoner Info</h1>
      <img src={leaguelogo} alt='league of legends logo' />
      <div className='searchBox'>
        <form onSubmit={handleSubmit}>
          <label>
            Enter Summoner Name:
            <input
              name='summonerName'
              type='text'
              value={value.summonerName}
              onChange={handleChanges}
            />
          </label>
          <button>Search</button>
          <div>
            <label>
              Region:
              <select
                name='region'
                value={value.region}
                onChange={handleChanges}
              >
                <option value='na1'>NA</option>
                <option value='euw1'>EUW</option>
                <option value='eun1'>EUN</option>
                <option value='kr'>KR</option>
              </select>
            </label>
          </div>
        </form>
      </div>
    </StyledHeader>
  );
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, { fetchSummoner, setRegion })(Header);
