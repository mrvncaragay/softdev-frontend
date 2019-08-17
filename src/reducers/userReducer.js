import { SIGNUP, LOGIN, LOGOUT } from 'actions/types';

const initialState = {
  isAuthenticated: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true
      };

    case LOGIN: {
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true
      };
    }

    case LOGOUT: {
      return {
        ...initialState
      };
    }

    default:
      return state;
  }
};

export default userReducer;
