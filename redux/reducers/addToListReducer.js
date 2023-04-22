import { TOGGLE_LIST_MOVIES, FETCH_LIST_MOVIES } from "../types/types";

const initialState = {
  listMovies: [],
  title: "List movies",
};

export default function (state = initialState, action) {
  let nextState;

  switch (action.type) {
    case TOGGLE_LIST_MOVIES:
      const listMoviesIndex = state.listMovies.includes(item.id);

      if (listMoviesIndex) {
        nextState = {
          listMovies: state.listMovies.filter(
            (_item, index) => index !== listMoviesIndex
          ),
        };
      } else {
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
    case "CLEAR_FAVORITES_FILM":
      let removeValueInState = [];
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
