import { GET_ITEM_MODAL } from '../types/types';

const initialState = {
  id: '',
  image: '',
  description: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ITEM_MODAL:
      return {
        ...state,
        id: action.id,
        image: action.image,
        description: action.description,
      };

    default:
      return state;
  }
}
