import { SAVE_POST, ERROR, SET_LOADNG_POST, ADD_POST } from './types';
import axios from 'axios';

/*
 *  @desc     Add send the post to the server and it to the state
 *  @param    user input
 *  @return   none
 */
export const addPost = input => async dispatch => {
  const { text, title, subtitle, image } = input;

  // Use form data form set encoding to 'multipart/form-data'
  const form = new FormData();
  form.append('text', text);
  form.append('title', title);
  form.append('subtitle', subtitle);
  form.append('image', image);

  try {
    const { data } = await axios.post('/api/posts', form);

    dispatch({
      type: ADD_POST,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response.data
    });
  }
};

/*
 *  @desc     Fetch the newest 10 post
 *  @param    none
 *  @return   none
 */
export const fetchPosts = () => async dispatch => {
  dispatch({
    type: SET_LOADNG_POST
  });

  try {
    const { data } = await axios.get('/api/posts');

    dispatch({
      type: SAVE_POST,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response.data
    });
  }
};
