import WebAPI from '../../assets/ServicesAxios/service';
import { GET_MOVIES } from '../types/types';

export function getMovies(page = 0) {
  return function (dispatch) {
    return WebAPI.getMostPopularMovies(page).then((movies) => {
      dispatch({
        type: GET_MOVIES,
        movies: [...movies.data.results],
        page: movies.data.page,
        totalPages: movies.data.total_pages,
      });
    });
  };
}
