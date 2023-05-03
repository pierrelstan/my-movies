import WebAPI from "../../utils/ServicesAxios/service";
import {
  GET_MOVIES_SUCCESS,
  LOADING_MOVIES_START,
  LOADING_MOVIES_FAILURE,
} from "../types/types";

export function getMostPopularMovies(page = 0) {
  return function (dispatch) {
    dispatch({
      type: LOADING_MOVIES_START,
    });
    return WebAPI.getMostPopularMovies(page)
      .then((movies) => {
        dispatch({
          type: GET_MOVIES_SUCCESS,
          movies: [...movies.data.results],
          page: movies.data.page,
          totalPages: movies.data.total_pages,
        });
      })
      .catch(() => {
        dispatch({
          type: LOADING_MOVIES_FAILURE,
        });
      });
  };
}
