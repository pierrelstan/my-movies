import { GET_ITEM_MODAL } from '../types/types';

const initialState = {
  id: '',
  image: '',
  description: '',
  title: '',
  voteCount: '',
  voteAverage: '',
  dateRelease: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ITEM_MODAL:
      return {
        ...state,
        id: action.id,
        image: action.image,
        description: action.description,
        title: action.title,
        voteCount: action.voteCount,
        voteAverage: action.voteAverage,
        dateRelease: action.dateRelease,
      };
    case 'RESET': {
      return initialState;
    }

    default:
      return state;
  }
}
