import { OPEN_ITEM, CLOSE_ITEM } from '../types/types';

export function OpenItem(open) {
  return function (dispatch) {
    return dispatch({
      type: OPEN_ITEM,
    });
  };
}

export function CloseItem() {
  return function (dispatch) {
    return dispatch({
      type: CLOSE_ITEM,
    });
  };
}
