import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Shared views
import Homepage from './views/Homepage';
import Login from './views/Login';
import Signup from './views/Signup';

const SoftDevApp = () => {
  return (
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={Signup} />
    </Switch>
  );
};

export default SoftDevApp;
