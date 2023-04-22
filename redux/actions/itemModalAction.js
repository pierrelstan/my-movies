import { GET_ITEM_MODAL } from '../types/types';

export function getItemModal(
  id,
  image,
  description,
  title,
  voteCount,
  voteAverage,
  dateRelease,
) {
  return function (dispatch) {
    return dispatch({
      type: GET_ITEM_MODAL,
      id: id,
      image: image,
      description: description,
      title: title,
      voteCount: voteCount,
      voteAverage: voteAverage,
      dateRelease: dateRelease,
    });
  };
}
