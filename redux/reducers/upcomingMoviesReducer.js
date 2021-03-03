import {
  GET_UPCOMING_MOVIES_SUCCESS,
  LOADING_UPCOMING_MOVIES_START,
  LOADING_UPCOMING_MOVIES_FAILURE,
} from '../types/types';

const initialState = {
  upcomingMovies: [],
  page: '',
  totalPages: '',
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_UPCOMING_MOVIES_SUCCESS:
      return {
        ...state,
        upcomingMovies: [...action.upcomingMovies],
        page: action.page,
        totalPages: action.totalPages,
        isLoading: false,
      };

    case LOADING_UPCOMING_MOVIES_START:
      return {
        ...state,
        isLoading: true,
      };
    case LOADING_UPCOMING_MOVIES_FAILURE:
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
