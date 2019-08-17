import { SIGNUP } from 'actions/types';

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

    default:
      return state;
  }
};

export default userReducer;
