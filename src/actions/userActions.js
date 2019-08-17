import { SIGNUP } from './types';
import axios from 'axios';
import history from 'util/history';
import setAuthJwtToken from 'util/setAuthJwtToken';

export const signup = input => async dispatch => {
  const { data, headers } = await axios.post('/api/users/', {
    ...input
  });

  // Save jwt token in axios header
  setAuthJwtToken(headers['x-auth-token']);

  // Save the user state to redux
  dispatch({
    type: SIGNUP,
    payload: data
  });

  // Redirect to User Home Page
  history.push('/');
};
