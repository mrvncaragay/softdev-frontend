import { POST_PROFILE, ERROR, SET_LOADNG_USER } from './types';
import axios from 'axios';
import history from 'util/history';

/*
 *  @desc     Create new profile
 *  @param    user input
 *  @return   none
 */
export const createProfile = input => async dispatch => {
  dispatch({
    type: SET_LOADNG_USER
  });

  try {
    const { data } = await axios.post('/api/profiles', {
      ...input
    });

    dispatch({ type: POST_PROFILE, payload: data });

    // Redirect to User Home Page
    history.push('/profile/me');
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response.data
    });
  }
};

/*
 *  @desc     Get current user profile
 *  @param    none
 *  @return   none
 */
export const fetchProfile = () => async dispatch => {
  dispatch({
    type: SET_LOADNG_USER
  });

  try {
    const { data } = await axios.get('/api/profiles/me');
    dispatch({ type: POST_PROFILE, payload: data });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response.data
    });
  }
};
