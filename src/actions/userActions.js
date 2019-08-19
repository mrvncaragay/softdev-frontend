import { SIGNUP, LOGOUT, ERROR, SET_LOADNG_USER } from './types';
import axios from 'axios';
import history from 'util/history';
import jwtHelper from 'util/jwtHelper';
import axiosHelper from 'util/axiosHelper';

/*
 *  @desc     Signup request
 *  @param    User input
 *  @return   none
 */
export const signup = input => async dispatch => {
  dispatch({
    type: SET_LOADNG_USER
  });

  try {
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
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response.data
    });
  }
};

/*
 *  @desc     Logout
 *  @param    none
 *  @return   none
 */
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
