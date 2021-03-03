import WebAPI from '../../assets/ServicesAxios/service';
import {
  LOADING_UPCOMING_MOVIES_START,
  LOADING_UPCOMING_MOVIES_FAILURE,
  GET_UPCOMING_MOVIES_SUCCESS,
} from '../types/types';

export function getUpcomingMovies(page = 0) {
  return function (dispatch) {
    dispatch({
      type: LOADING_UPCOMING_MOVIES_START,
      isLoading: true,
    });
    return WebAPI.getUpcomingMovies(page)
      .then((movies) => {
        dispatch({
          type: GET_UPCOMING_MOVIES_SUCCESS,
          upcomingMovies: [...movies.data.results],
          page: movies.data.page,
          totalPages: movies.data.total_pages,
          isLoading: movies.isLoading,
        });
      })
      .catch(() => {
        dispatch({
          type: LOADING_UPCOMING_MOVIES_FAILURE,
        });
      });
  };
}
