import axios from 'axios';
import { GET_MOVIE } from '../types/types';

export function getMovie(id) {
  return function (dispatch) {
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.API_TOKEN}&language=en-US`;
    return axios.get(url).then((movies) => {
      dispatch({
        type: GET_MOVIE,
        movie: [...movies.data.results],
      });
    });
  };
}
