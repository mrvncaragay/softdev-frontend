import {
  SAVE_POST,
  SET_LOADNG_POST,
  ADD_POST,
  ADD_TO_STATE,
  ADD_POST_COMMENT,
  CLEAR_POST
} from 'actions/types';

const initialState = {
  isLoading: false
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_POST: {
      return {
        ...state,
        BigPosts: [...action.payload],
        isLoading: false
      };
    }

    case ADD_POST: {
      return {
        ...state,
        BigPosts: [action.payload, ...state.BigPosts],
        isLoading: false
      };
    }
    case ADD_TO_STATE: {
      return {
        ...state,
        post: state.BigPosts.filter(post => post._id === action.payload),
        isLoading: false
      };
    }

    case ADD_POST_COMMENT: {
      return {
        ...state,
        post: {
          ...state.post,
          comments: [action.payload, ...state.post.comments]
        },

        isLoading: false
      };
    }

    case SET_LOADNG_POST: {
      return {
        ...state,
        isLoading: !state.isLoading
      };
    }

    case CLEAR_POST: {
      return initialState;
    }

    default:
      return state;
  }
};

export default postReducer;
