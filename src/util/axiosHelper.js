import axios from 'axios';

const axiosHelper = {
  /*
   *  @desc     Make jwt token default for all valid request
   *  @param    jwt Token
   *  @return   none
   */
  addJwt(token) {
    axios.defaults.headers.common['x-auth-token'] = token;
  },

  /*
   *  @desc     Remove jwt token in header
   *  @param    none
   *  @return   none
   */
  removeJwt() {
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

export default axiosHelper;
