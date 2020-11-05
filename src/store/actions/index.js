import axios from 'axios';
import { SUMMONER_INFO_URL, RANKED_STATS_URL, API_KEY } from '../../constants';

export const FETCH_SUMMONER_START = 'FETCH_SUMMONER_START';
export const FETCH_SUMMONER_SUCCESS = 'FETCH_SUMMONER_SUCCESS';
export const FETCH_SUMMONER_ERROR = 'FETCH_SUMMONER_ERROR';
export const FETCH_RANKED_INFO = 'FETCH_RANKED_INFO';

export const fetchSummoner = summonerName => {
  return dispatch => {
    dispatch({ type: FETCH_SUMMONER_START });

    axios
      .get(`${SUMMONER_INFO_URL}${summonerName}?api_key=${API_KEY}`)
      .then(res => {
        dispatch({ type: FETCH_SUMMONER_SUCCESS, payload: res.data });
        return axios.get(
          `${RANKED_STATS_URL}${res.data.id}?api_key=${API_KEY}`
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
