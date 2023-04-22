import axios from "axios";
import WebAPI from "../../assets/ServicesAxios/service";
import {
  GET_MOVIES_TRENDING_SUCCESS,
  LOADING_MOVIES_TRENDING_START,
  LOADING_MOVIES_TRENDING_FAILURE,
} from "../types/types";

export function getTrendingMovies(page = 0) {
  return function (dispatch) {
    dispatch({
      type: LOADING_MOVIES_TRENDING_START,
    });
    return WebAPI.getTrendingMovies(page)
      .then((movies) => {
        console.log(movies);
        dispatch({
          type: GET_MOVIES_TRENDING_SUCCESS,
          trendingMovies: [...movies.data.results],
          page: movies.data.page,
          totalPages: movies.data.total_pages,
        });
      })
      .catch((err) => {
        dispatch({
          type: LOADING_MOVIES_TRENDING_FAILURE,
        });
        if (axios.isCancel(err)) {
          return "axios request cancelled";
        }
        return err;
      });
  };
}
