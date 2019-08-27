import axiosHelper from './axiosHelper';

// External
import jwt from 'jsonwebtoken';
import history from './history';
import { persistor } from 'store';

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
      axiosHelper.removeJwt();
      this.clearLS();
      persistor.purge();
      history.push('/login');
    }
  },

  /*
   *  @desc     Save the decoded data to Redux and the token o axios header if token is valid
   *  @param    jwt Token
   *  @return   none
   */
  validate(token) {
    this.decode(token);
    axiosHelper.addJwt(token);
  }
};

export default jwtHelper;
