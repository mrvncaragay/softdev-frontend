import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import handleInputChange from 'hooks/handleInputChange';
import { signup } from 'actions/userActions';

// External
import { connect } from 'react-redux';

// External
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

// Material components
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// Component styles
import styles from './styles';

const Form = ({ signup }) => {
  const classes = styles();
  const initValue = {
    name: '',
    email: '',
    password: ''
  };
  const [state, handleChange, reset] = handleInputChange(initValue);

  const handleSubmitForm = () => {
    signup(state);
  };

  useEffect(() => {
    ValidatorForm.addValidationRule(
      'isAtleastSixChars',
      val => val.length >= 6
    );

    ValidatorForm.addValidationRule(
      'isAtleastThreeChars',
      val => val.length >= 3
    );
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.classicLogin}>
        <ValidatorForm onSubmit={handleSubmitForm}>
          <TextValidator
            onChange={handleChange}
            label='Name'
            name='name'
            value={state.name}
            validators={['required', 'isAtleastThreeChars']}
            errorMessages={[
              'This field is required.',
              'Please password must be at least 3 characters.'
            ]}
          />

          <TextValidator
            onChange={handleChange}
            label='Email'
            name='email'
            value={state.email}
            validators={['required', 'isEmail']}
            errorMessages={[
              'This field is required.',
              'Please enter a valid email address.'
            ]}
          />

          <TextValidator
            onChange={handleChange}
            type='password'
            label='Password'
            name='password'
            value={state.password}
            validators={['required', 'isAtleastSixChars']}
            errorMessages={[
              'This field is required.',
              'Please password must be at least 6 characters.'
            ]}
          />

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
      {/* 
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
      </div> */}
    </div>
  );
};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { signup }
)(Form);
