import { SAVE_DEVELOPERS, SET_LOADNG_DEVELOPERS } from 'actions/types';
const initialState = {
  isLoading: false
};

const developersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_DEVELOPERS: {
      return {
        profiles: [...action.payload],
        isLoading: false
      };
    }

    case SET_LOADNG_DEVELOPERS: {
      return {
        ...state,
        isLoading: !state.isLoading
      };
    }

    default:
      return state;
  }
};

export default developersReducer;
