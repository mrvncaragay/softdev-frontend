import React from 'react';
import { Link } from 'react-router-dom';
import handleInputChange from 'hooks/handleInputChange';
import { login } from 'actions/authActions';

// External
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { connect } from 'react-redux';

// Material components
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// Component styles
import styles from './styles';

const Form = ({ login, error }) => {
  const classes = styles();
  const initialState = {
    email: '',
    password: ''
  };
  const [state, handleChange, reset] = handleInputChange(initialState);

  const handleSubmitForm = () => {
    login(state);
  };

  return (
    <div className={classes.root}>
      <div className={classes.classicLogin}>
        <ValidatorForm onSubmit={handleSubmitForm}>
          <TextValidator
            label='Email'
            name='email'
            value={state.email}
            onChange={handleChange}
            validators={['required', 'isEmail']}
            errorMessages={[
              'This field is required.',
              'Please enter a valid email address.'
            ]}
          />

          <TextValidator
            label='Password'
            name='password'
            type='password'
            value={state.password}
            onChange={handleChange}
            validators={['required']}
            errorMessages={['This field is required.']}
          />

          <Typography variant='h6' className={classes.error}>
            {error.error}
          </Typography>

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
          <Link to='/signup'> Create one </Link>
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

const mapStateToProps = state => ({
  error: state.error
});

export default connect(
  mapStateToProps,
  { login }
)(Form);
