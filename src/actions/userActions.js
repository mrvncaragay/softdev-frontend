import { SIGNUP, LOGOUT } from './types';
import axios from 'axios';
import history from 'util/history';
import jwtHelper from 'util/jwtHelper';
import axiosHelper from 'util/axiosHelper';

export const signup = input => async dispatch => {
  const { data, headers } = await axios.post('/api/users/', {
    ...input
  });

  // Save jwt token in axios header
  axiosHelper.addJwt(headers['x-auth-token']);
  // Save jwt to local storage
  jwtHelper.saveToLS(headers['x-auth-token']);

  // Save the user state to redux
  dispatch({
    type: SIGNUP,
    payload: data
  });

  // Redirect to User Home Page
  history.push('/');
};

export const logout = () => dispatch => {
  // remove jwt token in axios header
  axiosHelper.removeJwt();
  // clear local storage
  jwtHelper.clearLS();

  // remove user state in redux
  dispatch({
    type: LOGOUT
  });

  // Redirect to homepage
  history.push('/');
};
