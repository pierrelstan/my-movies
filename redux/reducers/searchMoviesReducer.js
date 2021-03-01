import { GET_SEARCH_MOVIES } from '../types/types';

const initialState = {
  text: '',
  searchMovies: [],
  page: '',
  totalPages: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SEARCH_MOVIES:
      return {
        ...state,
        searchMovies: [...action.searchMovies],
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
