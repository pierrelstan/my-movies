import { TOGGLE_LIST_MOVIES } from '../types/types';

const addToListAction = (item) => {
  return function (dispatch) {
    return dispatch({
      type: TOGGLE_LIST_MOVIES,
      listMovies: item,
    });
  };
};
export default addToListAction;
