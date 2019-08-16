import React from 'react';

// External
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

// Material components
import Button from '@material-ui/core/Button';

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
      </div>

      <div className={classes.socialMediaLogin}></div>
    </div>
  );
};

export default Form;
