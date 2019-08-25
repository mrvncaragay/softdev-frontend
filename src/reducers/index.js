import { combineReducers } from 'redux';
import userReducer from './userReducer';
import postReducer from './postReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  currentUser: userReducer,
  posts: postReducer,
  error: errorReducer
});
