import {
  FETCH_SUMMONER_START,
  FETCH_SUMMONER_SUCCESS,
  FETCH_SUMMONER_ERROR,
  FETCH_RANKED_INFO,
  FETCH_CHALLENGERS,
} from '../actions';

const initialState = {
  isLoading: false,
  rankedInfo: [],
  error: '',
  summonerInfo: {},
  challengers: [],
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
      };
    case FETCH_SUMMONER_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case FETCH_RANKED_INFO:
      return {
        ...state,
        rankedInfo: action.payload,
        isLoading: false,
      };
    case FETCH_CHALLENGERS:
      return {
        ...state,
        challengers: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
