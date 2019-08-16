import React from 'react';

// Material UI component
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

// Shared Component
import { Navbar } from 'layouts';

// Component styles
import styles from './styles';

const Login = () => {
  const classes = styles();

  return (
    <Navbar>
      <div className={classes.root}>
        <Paper className={classes.paper} square={true}>
          <div className={classes.header}>
            <div className={classes.title}>
              <Typography variant='h2'>Welcome back</Typography>
              <Typography variant='h5'>
                sign in and connect with developers around the world.
              </Typography>
            </div>

            <div className={classes.meta}>
              <Typography variant='h4'>Softdeb hub</Typography>
              <Typography variant='h5'>
                Great developers help others.
              </Typography>
            </div>
          </div>

          <div className={classes.body}>
            <div className={classes.meta}>
              <Typography variant='h4'>body</Typography>
            </div>
          </div>

          <div className={classes.footer}>
            <div className={classes.meta}>
              <Typography variant='h4'>footer</Typography>
            </div>
          </div>
        </Paper>
      </div>
    </Navbar>
  );
};

export default Login;
