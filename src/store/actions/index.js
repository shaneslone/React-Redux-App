import axios from 'axios';

import {
  SUMMONER_INFO_URL_1,
  SUMMONER_INFO_URL_2,
  RANKED_STATS_URL_1,
  RANKED_STATS_URL_2,
  CHALLENGER_URL_1,
  CHALLENGER_URL_2,
  API_KEY,
} from '../../constants';

export const FETCH_SUMMONER_START = 'FETCH_SUMMONER_START';
export const FETCH_SUMMONER_SUCCESS = 'FETCH_SUMMONER_SUCCESS';
export const FETCH_SUMMONER_ERROR = 'FETCH_SUMMONER_ERROR';
export const FETCH_RANKED_INFO = 'FETCH_RANKED_INFO';
export const FETCH_CHALLENGERS = 'FETCH_CHALLENGERS';
export const SET_REGION = 'SET_REGION';

const sortByLP = (a, b) => {
  if (a.leaguePoints < b.leaguePoints) {
    return 1;
  } else if (a.leaguePoints > b.leaguePoints) {
    return -1;
  } else {
    return 0;
  }
};

export const fetchSummoner = (summonerName, region) => {
  return dispatch => {
    dispatch({ type: FETCH_SUMMONER_START });

    axios
      .get(
        `${SUMMONER_INFO_URL_1}${region}${SUMMONER_INFO_URL_2}${summonerName}`,
        {
          headers: {
            'X-Riot-Token': API_KEY,
          },
        }
      )
      .then(res => {
        dispatch({ type: FETCH_SUMMONER_SUCCESS, payload: res.data });
        return axios.get(
          `${RANKED_STATS_URL_1}${region}${RANKED_STATS_URL_2}${res.data.id}`,
          {
            headers: {
              'X-Riot-Token': API_KEY,
            },
          }
        );
      })
      .then(res => {
        dispatch({ type: FETCH_RANKED_INFO, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_SUMMONER_ERROR, payload: err.message });
      });
  };
};

export const fetchChallengers = region => {
  return dispatch => {
    dispatch({ type: FETCH_SUMMONER_START });

    axios
      .get(`${CHALLENGER_URL_1}${region}${CHALLENGER_URL_2}`, {
        headers: {
          'X-Riot-Token': API_KEY,
        },
      })
      .then(res => {
        console.log(res.data);
        dispatch({
          type: FETCH_CHALLENGERS,
          payload: res.data.entries.sort(sortByLP),
        });
      })
      .catch(err => {
        dispatch({ type: FETCH_SUMMONER_ERROR, payload: err.message });
      });
  };
};

export const setRegion = region => {
  return dispatch => {
    dispatch({ type: SET_REGION, payload: region });
  };
};
