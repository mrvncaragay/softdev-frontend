import {
  SAVE_POST,
  ERROR,
  ADD_POST,
  ADD_POSTS,
  ADD_POST_COMMENT,
  SET_LOADNG_POST
} from './types';
import axios from 'axios';

/*
 *  @desc     Add a post
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
      type: ADD_POSTS,
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
 *  @desc     Add a comment to a post
 *  @param    user input
 *  @return   none
 */
export const addPostComment = (id, text) => async dispatch => {
  try {
    const { data } = await axios.put('/api/posts/comment/' + id, {
      ...text
    });

    dispatch({
      type: ADD_POST_COMMENT,
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
 *  @desc     Fetch a single post
 *  @param    none
 *  @return   none
 */
export const fetchPost = id => async dispatch => {
  try {
    const { data } = await axios.get('/api/posts/' + id);

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
