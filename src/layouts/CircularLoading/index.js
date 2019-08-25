import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2),
    color: theme.palette.background.default
  }
}));

const CircularLoading = () => {
  const classes = styles();

  return (
    <div style={{ textAlign: 'center' }}>
      <CircularProgress className={classes.progress} color='secondary' />
    </div>
  );
};

export default CircularLoading;
