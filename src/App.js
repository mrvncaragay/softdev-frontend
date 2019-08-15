import React from 'react';
import Navbar from './views/Navbar';
import { makeStyles } from '@material-ui/styles';

const styles = makeStyles(theme => ({}));

function App() {
  const classes = styles();
  return (
    <div className={classes.root}>
      <Navbar />
    </div>
  );
}

export default App;
