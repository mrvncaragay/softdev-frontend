import { LOGIN } from './types';
import axios from 'axios';
import history from 'util/history';
import axiosHelper from 'util/axiosHelper';
import jwtHelper from 'util/jwtHelper';

// Login
export const login = input => async dispatch => {
  const { data: token } = await axios.post('/api/auth/login', {
    ...input
  });

  // Decode data and save the user state to Redux
  const payload = jwtHelper.decode(token);
  dispatch({
    type: LOGIN,
    payload
  });

  // Save to local storage
  jwtHelper.saveToLS(token);

  // Save to axios header for all valid request
  axiosHelper.addJwt(token);

  // Redirect to homepage
  history.push('/');
};
