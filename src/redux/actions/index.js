import fetchTokenAPI from '../../services/newTokenAPI';

export const NEW_TOKEN = 'NEW_TOKEN';
export const NEW_PLAYER = 'NEW_PLAYER';
export const NEW_EMAIL = 'NEW_EMAIL';

export const tokenAction = (newToken) => ({
  type: NEW_TOKEN,
  newToken,
});

export const playerAction = (payload) => ({
  type: NEW_PLAYER,
  payload,
});

export const playerEmailAction = (payload) => ({
  type: NEW_EMAIL,
  payload,
});

export const tokenThunk = () => async (dispatch) => {
  try {
    const data = await fetchTokenAPI();
    const { token } = data;
    dispatch(tokenAction(token));
    localStorage.setItem('token', token);
  } catch (error) {
    console.log(error);
  }
};

export const scoreAction = (payload) => ({
  type: 'score',
  payload,
});

export const zerar = (payload) => ({
  type: 'zerar',
  payload,
});
