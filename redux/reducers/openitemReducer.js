import { OPEN_ITEM, CLOSE_ITEM } from '../types/types';

const initialState = {
  action: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case OPEN_ITEM:
      return {
        ...state,
        action: true,
      };
    case CLOSE_ITEM:
      return {
        ...state,
        action: false,
      };
    case 'RESET': {
      return initialState;
    }

    default:
      return state;
  }
}
