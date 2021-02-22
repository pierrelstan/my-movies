import { GET_LATEST_MOVIE } from '../types/types';

const initialState = {
  lastMovie: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LATEST_MOVIE:
      return {
        ...state,
        lastMovie: action.lastMovie,
      };

    default:
      return state;
  }
}
