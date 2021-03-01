import WebAPI from '../../assets/ServicesAxios/service';
import { GET_UPCOMING_MOVIES } from '../types/types';

export function getUpcomingMovies(page = 0) {
  return function (dispatch) {
    return WebAPI.getUpcomingMovies(page).then((movies) => {
      dispatch({
        type: GET_UPCOMING_MOVIES,
        upcomingMovies: [...movies.data.results],
        page: movies.data.page,
        totalPages: movies.data.total_pages,
      });
    });
  };
}
