import {
  SIGNUP,
  LOGIN,
  LOGOUT,
  POST_PROFILE,
  SET_LOADNG_USER
} from 'actions/types';

const initialState = {
  isAuthenticated: false,
  isLoading: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        info: { ...action.payload },
        profile: false,
        isAuthenticated: true,
        isLoading: false
      };

    case LOGIN: {
      return {
        ...state,
        info: { ...action.payload },
        isAuthenticated: true,
        isLoading: false
      };
    }

    case POST_PROFILE: {
      return {
        ...state,
        profile: action.payload && { ...action.payload },
        isLoading: false
      };
    }

    case LOGOUT: {
      return {
        ...initialState
      };
    }

    case SET_LOADNG_USER: {
      return {
        ...state,
        isLoading: !state.isLoading
      };
    }

    default:
      return state;
  }
};

export default userReducer;
