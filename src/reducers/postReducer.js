import { SAVE_POST, SET_LOADNG_POST, ADD_POST } from 'actions/types';

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

    case SET_LOADNG_POST: {
      return {
        ...state,
        isLoading: !state.isLoading
      };
    }

    default:
      return state;
  }
};

export default postReducer;
