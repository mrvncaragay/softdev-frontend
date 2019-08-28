import { SAVE_USER_PROFILE, SET_USER_LOADNG_PROFILE } from 'actions/types';
const initialState = {
  isLoading: false
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USER_PROFILE: {
      return {
        ...state,
        ...action.payload,
        isLoading: false
      };
    }

    case SET_USER_LOADNG_PROFILE: {
      return {
        ...state,
        isLoading: !state.isLoading
      };
    }

    default:
      return state;
  }
};

export default profileReducer;
