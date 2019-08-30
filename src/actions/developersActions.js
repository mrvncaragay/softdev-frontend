import {
  clearErrorMessage,
  SAVE_DEVELOPERS,
  SET_LOADNG_DEVELOPERS
} from './types';

import axios from 'axios';
import history from 'util/history';

/*
 *  @desc     Get users' profile
 *  @param    none
 *  @return   none
 */
export const fetchDevelopersProfile = () => async dispatch => {
  dispatch({
    type: SET_LOADNG_DEVELOPERS
  });

  try {
    const { data } = await axios.get('/api/profiles');

    dispatch({ type: SAVE_DEVELOPERS, payload: data });
  } catch (error) {
    clearErrorMessage(error.response.data, dispatch);
  }
};
