import axios from 'axios';
import { GET_MOVIES } from '../types/types';

export function getMovies(page = 0) {
  return function (dispatch) {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${
      process.env.API_TOKEN
    }&language=en-US&page=${page + 1}`;
    return axios.get(url).then((movies) => {
      dispatch({
        type: GET_MOVIES,
        movies: [...movies.data.results],
        page: movies.data.page,
        totalPages: movies.data.total_pages,
      });
    });
  };
}
