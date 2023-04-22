import {
  GET_MOVIES_SUCCESS,
  LOADING_MOVIES_START,
  LOADING_MOVIES_FAILURE,
} from '../types/types';

const initialState = {
  movies: [],
  page: '',
  totalPages: '',
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        movies: [...action.movies],
        page: action.page,
        totalPages: action.totalPages,
        isLoading: false,
      };
    case LOADING_MOVIES_START:
      return {
        ...state,
        isLoading: true,
      };
    case LOADING_MOVIES_FAILURE:
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
