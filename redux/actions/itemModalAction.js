import { GET_ITEM_MODAL } from '../types/types';

export function getItemModal(id, image, description) {
  return function (dispatch) {
    return dispatch({
      type: GET_ITEM_MODAL,
      id: id,
      image: image,
      description: description,
    });
  };
}
