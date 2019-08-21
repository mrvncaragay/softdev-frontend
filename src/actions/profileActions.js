import { SAVE_PROFILE, ERROR, SET_LOADNG_USER, SAVE_EXPERIENCE } from './types';
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

    dispatch({ type: SAVE_PROFILE, payload: data });

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
 *  @desc     Update profile
 *  @param    user input
 *  @return   none
 */
export const updateProfile = input => async dispatch => {
  const {
    handle,
    bio,
    location,
    status,
    company,
    website,
    githubusername,
    instagram,
    facebook,
    twitter,
    linkedin
  } = input;

  dispatch({
    type: SET_LOADNG_USER
  });

  try {
    const { data } = await axios.put('/api/profiles/' + input._id, {
      user: input.user._id,
      handle,
      bio,
      location,
      status,
      company,
      website,
      githubusername,
      skills: Array.isArray(input.skills)
        ? input.skills.toString()
        : input.skills,
      instagram,
      facebook,
      twitter,
      linkedin
    });

    dispatch({ type: SAVE_PROFILE, payload: data });
    //Redirect to User Home Page
    //history.push('/profile/me');
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response.data
    });
  }
};

/*
 *  @desc     Create new profile
 *  @param    user input
 *  @return   none
 */
export const createExperience = input => async dispatch => {
  // dispatch({
  //   type: SET_LOADNG_USER
  // });

  try {
    const { data } = await axios.put('/api/profiles/me/experience', {
      ...input
    });

    dispatch({ type: SAVE_EXPERIENCE, payload: data });
    // Redirect to User Home Page
    //history.push('/profile/me');
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
    dispatch({ type: SAVE_PROFILE, payload: data });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response.data
    });
  }
};
