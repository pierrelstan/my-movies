import { SET_AVATAR } from '../types/types';
import IMG from '../../assets/avatar.png';

const initialState = {
  avatar: IMG,
  local: true,
  uri: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_AVATAR:
      return {
        avatar: action.value,
        local: action.local,
        uri: action.uri,
      };
    default:
      return state;
  }
}
