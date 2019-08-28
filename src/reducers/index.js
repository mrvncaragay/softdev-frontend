import { combineReducers } from 'redux';
import userReducer from './userReducer';
import postReducer from './postReducer';
import profileReducer from './profileReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  currentUser: userReducer,
  posts: postReducer,
  profile: profileReducer,
  error: errorReducer
});
