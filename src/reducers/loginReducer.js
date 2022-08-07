import { NEW_TOKEN } from '../actions';

const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
  email: '',
  token: '',
};

function loginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'NEW_ACTION':
    return {
      ...state,
  case NEW_TOKEN:
    return {
      ...state,
      token: action.newToken,
      email: action.email,
      name: action.name,
    };
  default:
    return state;
  }
}

export default loginReducer;
