import React from 'react';
import { StyledHeader } from '../styles';
import { connect } from 'react-redux';
import { fetchSummoner } from '../store/actions';
import { useForm } from '../hooks/useForm';

function Header(props) {
  const [value, handleChanges] = useForm('');

  const handleSubmit = e => {
    e.preventDefault();
    props.fetchSummoner(value);
  };
  return (
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
  );
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, { fetchSummoner })(Header);