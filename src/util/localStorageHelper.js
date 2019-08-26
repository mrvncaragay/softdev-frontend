const lsHelper = {
  /*
   *  @desc     Save Post id
   *  @param    key name and Post ID
   *  @return   none
   */
  saveKey(field, data) {
    localStorage.setItem(field, JSON.stringify(data));
  },

  /*
   *  @desc     Retrieve Post id
   *  @param    key
   *  @return   none
   */
  retrieveItem(key) {
    return JSON.parse(localStorage.getItem(key));
  },

  /*
   *  @desc     Clear local storage
   *  @param    none
   *  @return   none
   */
  clearLS() {
    localStorage.clear();
  }
};

export default lsHelper;
