const INITIAL_STATE = {
  name: nome,
  assertions: número,
  score: pontuação,
  gravatarEmail: email,
};

function myReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'NEW_ACTION':
    return {
      ...state,
    };
  default:
    return state;
  }
}

export default myReducer;
