import { GET_UPCOMING_MOVIES } from '../types/types';

const initialState = {
  upcomingMovies: [],
  page: '',
  totalPages: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_UPCOMING_MOVIES:
      return {
        ...state,
        upcomingMovies: [...action.upcomingMovies],
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
