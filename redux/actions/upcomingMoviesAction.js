import axios from 'axios';
import { GET_UPCOMING_MOVIES } from '../types/types';

export function getUpcomingMovies(page = 0) {
  return function (dispatch) {
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_TOKEN}&language=en-US&page=1`;
    return axios.get(url).then((movies) => {
      dispatch({
        type: GET_UPCOMING_MOVIES,
        upcomingMovies: [...movies.data.results],
        page: movies.data.page,
        totalPages: movies.data.total_pages,
      });
    });
  };
}
