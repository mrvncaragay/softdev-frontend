import { POST_PROFILE, ERROR } from './types';
import axios from 'axios';
import history from 'util/history';

/*
 *  @desc     Create new profile
 *  @param    user input
 *  @return   none
 */
export const createProfile = input => async dispatch => {
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
