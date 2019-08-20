import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({ currentUser, ...props }) => {
  if (!currentUser.isAuthenticated) {
    return <Redirect to='/login' />;
  }
  return <Route {...props} />;
};

PrivateRoute.propTypes = {
  currentUser: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export default connect(mapStateToProps)(PrivateRoute);
