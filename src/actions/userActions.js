import {
  SIGNUP,
  LOGOUT,
  clearErrorMessage,
  CLEAR_ERROR,
  SET_LOADNG_USER,
  CLEAR_POST,
  CLEAR_PROFILE
} from './types';
import axios from 'axios';
import history from '../util/history';
import jwtHelper from '../util/jwtHelper';
import axiosHelper from '../util/axiosHelper';

import { persistor } from '../store';

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
    clearErrorMessage(error.response.data, dispatch);
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

  // remove user state in redux
  dispatch({
    type: LOGOUT
  });

  // reset posts state in redux
  dispatch({
    type: CLEAR_POST
  });

  // reset profile state in redux
  dispatch({
    type: CLEAR_PROFILE
  });

  // reset error state in redux
  dispatch({
    type: CLEAR_ERROR
  });

  // clear local storage
  jwtHelper.clearLS();

  // clear redux persist storage
  persistor.purge();

  // Redirect to homepage
  history.push('/');
};
