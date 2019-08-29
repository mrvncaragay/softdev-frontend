import {
  SAVE_POST,
  ERROR,
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  ADD_POSTS,
  LIKE_POST,
  UNLIKE_POST,
  ADD_POST_COMMENT,
  DELETE_POST_COMMENT,
  SET_LOADNG_POST
} from './types';
import axios from 'axios';
import history from 'util/history';

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
 *  @desc     Like a post
 *  @param    none
 *  @return   none
 */
export const likePost = id => async dispatch => {
  try {
    const { data } = await axios.put('/api/posts/like/' + id);

    dispatch({
      type: LIKE_POST,
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
 *  @desc     Like a post
 *  @param    none
 *  @return   none
 */
export const unlikePost = id => async (dispatch, getState) => {
  try {
    const { data } = await axios.put('/api/posts/unlike/' + id);

    dispatch({
      type: UNLIKE_POST,
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
 *  @desc     Delete a comment to a post
 *  @param    user input
 *  @return   none
 */
export const deletePostComment = (pid, cid) => async dispatch => {
  try {
    const { data } = await axios.put(`/api/posts/uncomment/${pid}/${cid}`);

    dispatch({
      type: DELETE_POST_COMMENT,
      payload: data.commentId
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
  dispatch({
    type: SET_LOADNG_POST
  });

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

/*
 *  @desc     Edit post
 *  @param    id
 *  @return   none
 */
export const editPost = (input, id) => async dispatch => {
  const { text, title, subtitle, image, posturl } = input;

  // Use form data form set encoding to 'multipart/form-data'
  const form = new FormData();
  form.append('text', text);
  form.append('title', title);
  form.append('subtitle', subtitle);
  form.append('posturl', posturl);
  form.append('image', image);

  try {
    const { data } = await axios.put('/api/posts/' + id, form);

    dispatch({
      type: UPDATE_POST,
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
 *  @desc     Delete post
 *  @param    id
 *  @return   none
 */
export const deletePost = id => async dispatch => {
  dispatch({
    type: SET_LOADNG_POST
  });

  try {
    const { data } = await axios.delete('/api/posts/' + id);

    dispatch({
      type: DELETE_POST,
      payload: data
    });

    history.push('/posts');
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response.data
    });
  }
};
