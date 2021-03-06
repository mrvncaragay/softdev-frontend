// Auth
export const LOGIN = 'LOGIN';
export const SET_LOADNG_AUTH = 'SET_LOADNG_AUTH';

// User
export const SIGNUP = 'SIGNUP';
export const LOGOUT = 'LOGOUT';
export const SET_LOADNG_USER = 'SET_LOADNG_USER';

// Profile
export const SAVE_PROFILE = 'SAVE_PROFILE';
export const SAVE_USER_PROFILE = 'SAVE_USER_PROFILE';
export const DELETE_PROFILE = 'DELETE_PROFILE';
export const SAVE_EXPERIENCE = 'SAVE_EXPERIENCE';
export const SAVE_EDUCATION = 'SAVE_EDUCATION';
export const SET_LOADNG_PROFILE = 'SET_LOADNG_PROFILE';
export const SET_USER_LOADNG_PROFILE = 'SET_USER_LOADNG_PROFILE';
export const CLEAR_PROFILE = 'CLEAR_PROFILE';

// Profile Developers
export const SAVE_DEVELOPERS = 'SAVE_DEVELOPERS';
export const PAGINATE_PROFILES = 'PAGINATE_PROFILES';
export const SET_LOADNG_DEVELOPERS = 'SET_LOADNG_DEVELOPERS';

// Post
export const SAVE_POST = 'SAVE_POST';
export const ADD_POST = 'ADD_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const ADD_POSTS = 'ADD_POSTS';
export const DELETE_POST = 'DELETE_POST';
export const LIKE_POST = 'LIKE_POST';
export const UNLIKE_POST = 'UNLIKE_POST';
export const ADD_POST_COMMENT = 'ADD_POST_COMMENT';
export const DELETE_POST_COMMENT = 'DELETE_POST_COMMENT';
export const SET_LOADNG_POST = 'SET_LOADNG_POST';
export const CLEAR_POST = 'CLEAR_POST';
export const PAGINATE_POST = 'PAGINATE_POST';

// Error
export const ERROR = 'ERROR';
export const CLEAR_ERROR = 'CLEAR_ERROR';

export const clearErrorMessage = (error, dispatch) => {
  dispatch({
    type: ERROR,
    payload: error
  });

  setTimeout(() => {
    dispatch({
      type: CLEAR_ERROR
    });
  }, 5000);
};
