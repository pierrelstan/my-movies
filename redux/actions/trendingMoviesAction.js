import axios from 'axios';
import { GET_MOVIES_TRENDING } from '../types/types';

export function getTrendingMovies(page = 0) {
  return function (dispatch) {
    const url = `
    https://api.themoviedb.org/3/trending/movies/day?api_key=${
      process.env.API_TOKEN
    }&page=${page + 1}`;
    return axios.get(url).then((movies) => {
      dispatch({
        type: GET_MOVIES_TRENDING,
        trendingMovies: [...movies.data.results],
        page: movies.data.page,
        totalPages: movies.data.total_pages,
      });
    });
  };
}
