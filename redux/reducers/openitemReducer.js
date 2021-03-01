import { OPEN_ITEM, CLOSE_ITEM } from '../types/types';

const initialState = {
  action: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case OPEN_ITEM:
      return {
        ...state,
        action: 'OPEN_ITEM',
      };
    case CLOSE_ITEM:
      return {
        ...state,
        action: 'CLOSE_ITEM',
      };
    case 'RESET': {
      return initialState;
    }

    default:
      return state;
  }
}
