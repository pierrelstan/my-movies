import { GET_MOVIES_TRENDING } from '../types/types';

const initialState = {
  trendingMovies: [],
  page: '',
  totalPages: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES_TRENDING:
      return {
        ...state,
        trendingMovies: [...action.trendingMovies],
        page: action.page,
        totalPages: action.totalPages,
      };

    case 'RESET': {
      return initialState;
    }
    default:
      return state;
  }
}
