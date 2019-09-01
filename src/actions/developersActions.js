import {
  clearErrorMessage,
  SAVE_DEVELOPERS,
  PAGINATE_PROFILES,
  SET_LOADNG_DEVELOPERS
} from './types';

import axios from 'axios';

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
    const { data } = await axios.get('api/profiles');

    dispatch({ type: SAVE_DEVELOPERS, payload: data });
  } catch (error) {
    clearErrorMessage(error.response.data, dispatch);
  }
};

/*
 *  @desc     Request the next set of profiles
 *  @param    none
 *  @return   none
 */
export const paginateProfiles = (pageNumber, pageSize) => async dispatch => {
  try {
    const { data } = await axios.get('/api/profiles/paginate', {
      params: {
        pageNumber,
        pageSize
      }
    });

    dispatch({
      type: PAGINATE_PROFILES,
      payload: data
    });
  } catch (error) {
    clearErrorMessage(error.response.data, dispatch);
  }
};
