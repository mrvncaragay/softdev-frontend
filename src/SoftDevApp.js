import React from 'react';
import { Route, Switch } from 'react-router-dom';
import jwtHelper from 'util/jwtHelper';

// Shared views
import Homepage from './views/Homepage';
import Login from './views/Login';
import Signup from './views/Signup';
import Profile from './views/Profile';

// Persist user data if jwt token is valid, if not return to login
let token = localStorage.getItem('x-auth-token');
if (token) {
  jwtHelper.persist(token);
}

const SoftDevApp = () => {
  return (
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={Signup} />
      <Route exact path='/profile/me' component={Profile} />
      <Route exact path='/post/me' component={Profile} />
    </Switch>
  );
};

export default SoftDevApp;
