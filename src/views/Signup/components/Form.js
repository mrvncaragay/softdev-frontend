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
          <TextValidator label='Name' name='name' />
          <TextValidator label='Email' name='email' />
          <TextValidator label='Password' name='password' />

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
          have an account?
          <Link to='/login'> Sign in </Link>
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
