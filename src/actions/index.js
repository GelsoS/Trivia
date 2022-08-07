import fetchTokenAPI from '../services/newTokenAPI';

export const NEW_TOKEN = 'NEW_TOKEN';
export const NEW_NAME = 'NEW_NAME';
export const NEW_EMAIL = 'NEW_EMAIL';

export const tokenAction = (newToken) => ({
  type: NEW_TOKEN,
  newToken,
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
