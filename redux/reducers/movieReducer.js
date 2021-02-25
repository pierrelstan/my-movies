import { GET_MOVIE, GET_MOVIES_TRENDING } from '../types/types';

const initialState = {
  movie: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MOVIE:
      return {
        ...state,
        movie: [...action.movie],
      };

    default:
      return state;
  }
}
