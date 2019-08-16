import React from 'react';
import { Link } from 'react-router-dom';

// External
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

// Material components
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// Component styles
import styles from './styles';

const Form = () => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <div className={classes.classicLogin}>
        <ValidatorForm>
          <TextValidator label='Email' name='email' />
          <TextValidator label='Password' name='password' />

          <Typography variant='h6'>
            <Link to='/'> Forgot your email or passowrd? </Link>
          </Typography>

          <Button
            size='medium'
            color='default'
            variant='outlined'
            type='submit'
            className={classes.btnSubmit}
          >
            Submit
          </Button>
        </ValidatorForm>

        <Typography variant='h6' className={classes.createAccountLink}>
          No account?
          <Link to='/'> Create one </Link>
        </Typography>
      </div>

      <div className={classes.socialMediaLogin}>
        <Button
          size='medium'
          color='default'
          variant='outlined'
          type='submit'
          className={classes.btnSubmit}
        >
          Continue with facebook
        </Button>
      </div>
    </div>
  );
};

export default Form;
