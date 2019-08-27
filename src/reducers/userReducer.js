import {
  SIGNUP,
  LOGIN,
  LOGOUT,
  SAVE_PROFILE,
  DELETE_PROFILE,
  SET_LOADNG_USER,
  SAVE_EXPERIENCE,
  SAVE_EDUCATION
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

    case SAVE_PROFILE: {
      return {
        ...state,
        profile: action.payload && { ...action.payload },
        isLoading: false
      };
    }

    case DELETE_PROFILE: {
      return {
        ...state,
        profile: null,
        isLoading: false
      };
    }
    case SAVE_EXPERIENCE: {
      return {
        ...state,
        profile: {
          ...state.profile,
          experience: [...action.payload.experience]
        }
      };
    }

    case SAVE_EDUCATION: {
      return {
        ...state,
        profile: {
          ...state.profile,
          education: [...action.payload.education]
        }
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
