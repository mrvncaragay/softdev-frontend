import React from 'react';

// Material UI component
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

// Shared components
import { Navbar } from 'layouts';
import Form from './components/Form';

// Component styles
import styles from './styles';

const Signup = () => {
  const classes = styles();

  return (
    <Navbar>
      <div className={classes.root}>
        <Paper className={classes.paper} square={true}>
          <div className={classes.header}>
            <div className={classes.title}>
              <Typography variant='h2'>Create an Account</Typography>
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
            <Form />
          </div>
        </Paper>
      </div>
    </Navbar>
  );
};

export default Signup;
