import axios from 'axios';
import { GET_LATEST_MOVIE } from '../types/types';

export function getLatestMovie(page = 0) {
  return function (dispatch) {
    const url = `https://api.themoviedb.org/3/movie/latest?api_key=${process.env.API_TOKEN}&language=en-US`;
    return axios.get(url).then((movies) => {
      dispatch({
        type: GET_LATEST_MOVIE,
        lastMovie: movies.data,
      });
    });
  };
}
