import { NEW_TOKEN, NEW_PLAYER, NEW_EMAIL } from '../actions';

const INITIAL_STATE = {
  name: '',
  email: '',
  token: '',
};

function loginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case NEW_TOKEN:
    return {
      ...state,
      token: action.newToken,
    };
  case NEW_PLAYER:
    return {
      ...state,
      name: action.payload,
    };
  case NEW_EMAIL:
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
}

export default loginReducer;
