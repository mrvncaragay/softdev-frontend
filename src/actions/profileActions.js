import {
  SAVE_PROFILE,
  SAVE_USER_PROFILE,
  DELETE_PROFILE,
  clearErrorMessage,
  SET_LOADNG_USER,
  SAVE_EXPERIENCE,
  SAVE_EDUCATION,
  SET_USER_LOADNG_PROFILE
} from './types';
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

    dispatch({ type: SAVE_PROFILE, payload: data });

    // Redirect to User Home Page
    history.push('/profile/me');
  } catch (error) {
    clearErrorMessage(error.response.data, dispatch);
  }
};

/*
 *  @desc     Update profile
 *  @param    user input
 *  @return   none
 */
export const updateProfile = (input, profile) => async dispatch => {
  try {
    const { data } = await axios.put('/api/profiles/' + profile._id, {
      user: profile.user._id,
      ...input,
      skills: Array.isArray(input.skills)
        ? input.skills.toString()
        : input.skills
    });
    dispatch({ type: SAVE_PROFILE, payload: data });
  } catch (error) {
    clearErrorMessage(error.response.data, dispatch);
  }
};

/*
 *  @desc     Delete profile
 *  @param    user input
 *  @return   none
 */
export const deleteProfile = id => async dispatch => {
  dispatch({
    type: SET_LOADNG_USER
  });

  try {
    await axios.delete('/api/profiles/' + id);

    dispatch({ type: DELETE_PROFILE });

    // Redirect to Profile Page
    history.push('/profile/me');
  } catch (error) {
    clearErrorMessage(error.response.data, dispatch);
  }
};

/*
 *  @desc     Create new Experience
 *  @param    user input
 *  @return   none
 */
export const createExperience = input => async dispatch => {
  try {
    const { data } = await axios.put('/api/profiles/me/experience', {
      ...input
    });

    dispatch({ type: SAVE_EXPERIENCE, payload: data });
  } catch (error) {
    clearErrorMessage(error.response.data, dispatch);
  }
};

/*
 *  @desc     Update experience
 *  @param    user input
 *  @return   none
 */
export const updateExperience = (input, id) => async dispatch => {
  const { current, ...rest } = input;

  try {
    const { data } = await axios.put('/api/profiles/me/experience/' + id, {
      ...rest,
      current: current.toString()
    });

    dispatch({ type: SAVE_EXPERIENCE, payload: data });
  } catch (error) {
    clearErrorMessage(error.response.data, dispatch);
  }
};

/*
 *  @desc     Remove experience
 *  @param    user input
 *  @return   none
 */
export const removeExperience = id => async dispatch => {
  try {
    const { data } = await axios.put(
      '/api/profiles/me/experience/remove/' + id
    );

    dispatch({ type: SAVE_EXPERIENCE, payload: data });
  } catch (error) {
    clearErrorMessage(error.response.data, dispatch);
  }
};

/*
 *  @desc     Add new education
 *  @param    user input
 *  @return   none
 */
export const addEducation = input => async dispatch => {
  try {
    const { data } = await axios.put('/api/profiles/me/education', {
      ...input
    });

    dispatch({ type: SAVE_EDUCATION, payload: data });
  } catch (error) {
    clearErrorMessage(error.response.data, dispatch);
  }
};

/*
 *  @desc     Update education
 *  @param    user input
 *  @return   none
 */
export const updateEducation = (input, id) => async dispatch => {
  const { current, ...rest } = input;
  try {
    const { data } = await axios.put('/api/profiles/me/education/' + id, {
      ...rest,
      current: current.toString()
    });

    dispatch({ type: SAVE_EDUCATION, payload: data });
  } catch (error) {
    clearErrorMessage(error.response.data, dispatch);
  }
};

/*
 *  @desc     Remove education
 *  @param    user input
 *  @return   none
 */
export const removeEducation = id => async dispatch => {
  try {
    const { data } = await axios.put('/api/profiles/me/education/remove/' + id);

    dispatch({ type: SAVE_EDUCATION, payload: data });
  } catch (error) {
    clearErrorMessage(error.response.data, dispatch);
  }
};

/*
 *  @desc     Get current user profile
 *  @param    none
 *  @return   none
 */
export const fetchProfile = id => async dispatch => {
  dispatch({
    type: SET_USER_LOADNG_PROFILE
  });

  try {
    const { data } = await axios.get('/api/profiles/user/' + id);

    dispatch({ type: SAVE_USER_PROFILE, payload: data });
  } catch (error) {
    clearErrorMessage(error.response.data, dispatch);
  }
};

/*
 *  @desc     Get current user profile
 *  @param    none
 *  @return   none
 */
export const fetchMyProfile = () => async dispatch => {
  dispatch({
    type: SET_LOADNG_USER
  });

  try {
    const { data } = await axios.get('/api/profiles/me');

    dispatch({ type: SAVE_PROFILE, payload: data });
  } catch (error) {
    clearErrorMessage(error.response.data, dispatch);
  }
};
