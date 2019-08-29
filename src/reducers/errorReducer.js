import { ERROR, CLEAR_ERROR } from 'actions/types';
const initialState = {};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ERROR: {
      return {
        message: action.payload
      };
    }

    case CLEAR_ERROR: {
      return initialState;
    }

    default:
      return state;
  }
};

export default errorReducer;
