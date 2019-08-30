import React from 'react';
import { Route, Switch } from 'react-router-dom';
import jwtHelper from 'util/jwtHelper';
import styles from './SoftDevAppStyles';

// Shared views
import Homepage from './views/Homepage';
import Login from './views/Login';
import Signup from './views/Signup';
import Profile from './views/Profile';
import UserProfile from './views/UserProfile';
import Post from './views/Post';
import Users from './views/Users';
import SinglePost from './views/SinglePost';

// Private uitl/Routes
import PrivateRoutes from 'util/privateRoutes';

// Persist user data if jwt token is valid, if not return to login
let token = localStorage.getItem('x-auth-token');
if (token) {
  jwtHelper.validate(token);
}

const SoftDevApp = () => {
  // Initialized global css
  styles();

  return (
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/developers' component={Users} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={Signup} />
      <Route exact path='/posts' component={Post} />
      <PrivateRoutes exact path='/post/:id' component={SinglePost} />
      <PrivateRoutes exact path='/user/:id' component={UserProfile} />
      <PrivateRoutes exact path='/profile/me' component={Profile} />
    </Switch>
  );
};

export default SoftDevApp;
