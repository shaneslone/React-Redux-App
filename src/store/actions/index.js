import axios from 'axios';
import {
  SUMMONER_INFO_URL,
  CHAMPION_MASTERY_URL,
  API_KEY,
} from '../../constants';

export const FETCH_SUMMONER_START = 'FETCH_SUMMONER_START';
export const FETCH_SUMMONER_SUCCESS = 'FETCH_SUMMONER_SUCCESS';
export const FETCH_SUMMONER_ERROR = 'FETCH_SUMMONER_ERROR';
export const FETCH_CHAMPION_MASTERY = 'FETCH_CHAMPION_MASTERY';

export const fetchSummoner = () => {
  return dispatch => {
    dispatch({ type: FETCH_SUMMONER_START });

    axios
      .get(`${SUMMONER_INFO_URL}Jamis7?api_key=${API_KEY}`)
      .then(res => {
        dispatch({ type: FETCH_SUMMONER_SUCCESS, payload: res.data });
        return axios.get(
          `${CHAMPION_MASTERY_URL}${res.data.id}?api_key=${API_KEY}`
        );
      })
      .then(res => {
        dispatch({ type: FETCH_CHAMPION_MASTERY, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_SUMMONER_ERROR, payload: err.message });
      });
  };
};
