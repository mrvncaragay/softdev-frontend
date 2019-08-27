import {
  SAVE_POST,
  SET_LOADNG_POST,
  ADD_POST,
  ADD_POSTS,
  ADD_POST_COMMENT,
  DELETE_POST_COMMENT,
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
        MediumPosts: [...action.payload],
        isLoading: false
      };
    }

    case ADD_POST: {
      return {
        ...state,
        post: action.payload,
        isLoading: false
      };
    }

    case ADD_POSTS: {
      return {
        ...state,
        MediumPosts: [action.payload, ...state.MediumPosts],
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

    case DELETE_POST_COMMENT: {
      return {
        ...state,
        post: {
          ...state.post,
          comments: state.post.comments.filter(
            comment => comment._id !== action.payload
          )
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
