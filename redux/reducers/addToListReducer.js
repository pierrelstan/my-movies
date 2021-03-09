import { TOGGLE_LIST_MOVIES, FETCH_LIST_MOVIES } from '../types/types';

const initialState = {
  listMovies: [],
  title: 'List movies',
};

export default function (state = initialState, action) {
  let nextState;

  switch (action.type) {
    case TOGGLE_LIST_MOVIES:
      const listMoviesIndex = state.listMovies.findIndex(
        (item) => item.id === action.listMovies.id,
      );
      if (listMoviesIndex !== -1) {
        nextState = {
          listMovies: state.listMovies.filter(
            (item, index) => index !== listMoviesIndex,
          ),
        };
      } else {
        //   ajoiuter
        nextState = {
          ...state,
          listMovies: [...state.listMovies, action.listMovies],
        };
      }
      return nextState || state;

    case FETCH_LIST_MOVIES:
      return {
        ...state,
        listMovies: [...state.listMovies, action.listMovies],
      };
    case 'CLEAR_FAVORITES_FILM':
      let removeValueInState;
      if (state.listMovies.length > 0) {
        removeValueInState = state.listMovies.splice(0);
        return {
          ...state,
          listMovies: [],
        };
      }

    default:
      return state;
  }
}
