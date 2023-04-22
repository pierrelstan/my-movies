import { SET_AVATAR } from '../types/types';

export const setAvatar = (value, local, uri) => (dispatch) => {
  dispatch({
    type: SET_AVATAR,
    avatar: value,
    local: local,
    uri: uri,
  });
};
