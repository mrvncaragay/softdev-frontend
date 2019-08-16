import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Shared views
import Homepage from './views/Homepage';
import Login from './views/Login';

const SoftDevApp = () => {
  return (
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/login' component={Login} />
    </Switch>
  );
};

export default SoftDevApp;
