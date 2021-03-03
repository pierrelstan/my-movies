import {
  GET_MOVIES_TRENDING_SUCCESS,
  LOADING_MOVIES_TRENDING_START,
  LOADING_MOVIES_TRENDING_FAILURE,
} from '../types/types';

const initialState = {
  trendingMovies: [],
  page: '',
  totalPages: '',
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES_TRENDING_SUCCESS:
      return {
        ...state,
        trendingMovies: [...action.trendingMovies],
        page: action.page,
        totalPages: action.totalPages,
        isLoading: false,
      };

    case LOADING_MOVIES_TRENDING_START:
      return {
        ...state,
        isLoading: true,
      };
    case LOADING_MOVIES_TRENDING_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case 'RESET': {
      return initialState;
    }
    default:
      return state;
  }
}
