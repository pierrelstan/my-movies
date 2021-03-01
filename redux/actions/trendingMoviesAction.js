import axios from 'axios';
import WebAPI from '../../assets/ServicesAxios/service';
import { GET_MOVIES_TRENDING } from '../types/types';

export function getTrendingMovies(page = 0) {
  return function (dispatch) {
    return WebAPI.getTrendingMovies(page).then((movies) => {
      dispatch({
        type: GET_MOVIES_TRENDING,
        trendingMovies: [...movies.data.results],
        page: movies.data.page,
        totalPages: movies.data.total_pages,
      });
    });
  };
}
