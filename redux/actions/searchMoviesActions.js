import axios from 'axios';
import WebAPI from '../../assets/ServicesAxios/service';
import { GET_SEARCH_MOVIES } from '../types/types';

export function getSearchMovies(SearchText, page = 0) {
  return function (dispatch) {
    return WebAPI.getSearchMovies(SearchText, page)
      .then((movies) => {
        dispatch({
          type: GET_SEARCH_MOVIES,
          searchMovies: [...movies.data.results],
          page: movies.data.page,
          totalPages: movies.data.total_pages,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };
}
