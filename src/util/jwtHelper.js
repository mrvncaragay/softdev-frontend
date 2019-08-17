// External
import jwt from 'jsonwebtoken';
import history from './history';
import store from '../store';
import { LOGIN } from 'actions/types';

const jwtHelper = {
  /*
   *  @desc     Save jwt to local storage
   *  @param    jwt Token
   *  @return   none
   */
  saveToLS(token) {
    localStorage.setItem('x-auth-token', token);
  },

  /*
   *  @desc     Clear local storage
   *  @param    none
   *  @return   none
   */
  clearLS() {
    localStorage.clear();
  },

  /*
   *  @desc             Verify if token is Valid
   *  @param            jwt Token
   *  @return {valid}   decoded data
   *  @return {invalid} Redirect
   */
  decode(token) {
    try {
      return jwt.verify(token, process.env.REACT_APP_JWT);
    } catch (err) {
      history.push('/');
    }
  },

  /*
   *  @desc     Save the decoded data to Redux if token is valid
   *  @param    jwt Token
   *  @return   none
   */
  persist(token) {
    const payload = this.decode(token);

    store.dispatch({
      type: LOGIN,
      payload
    });
  }
};

export default jwtHelper;
