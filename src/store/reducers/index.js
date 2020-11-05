import {
  FETCH_SUMMONER_START,
  FETCH_SUMMONER_SUCCESS,
  FETCH_SUMMONER_ERROR,
  FETCH_CHAMPION_MASTERY,
} from '../actions';

const initialState = {
  isLoading: false,
  championMastery: [],
  error: '',
  summonerInfo: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUMMONER_START:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case FETCH_SUMMONER_SUCCESS:
      return {
        ...state,
        summonerInfo: action.payload,
        isLoading: false,
      };
    case FETCH_SUMMONER_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case FETCH_CHAMPION_MASTERY:
      return {
        ...state,
        championMastery: action.payload,
      };
    default:
      return state;
  }
};
