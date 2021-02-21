import { GET_MOVIES, GET_MOVIES_TRENDING } from '../types/types';

const initialState = {
  movies: [],
  page: '',
  totalPages: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: [...action.movies],
      };

    default:
      return state;
  }
}
