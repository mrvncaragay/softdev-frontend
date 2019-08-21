import React from 'react';
import handleInputChange from 'hooks/handleInputChange';
import { createProfile, updateProfile } from 'actions/profileActions';

// External
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { connect } from 'react-redux';

// Material UI component
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

// Component styles
import styles from './styles';

const Experience = ({
  createProfile,
  updateProfile,
  error,
  data,
  update = false
}) => {
  const classes = styles();

  const initialState = { ...data } && {
    title: '',
    company: '',
    location: '',
    from: '',
    to: '',
    current: 'false',
    description: ''
  };
  const [state, handleChange] = handleInputChange(initialState);

  const handleSubmitForm = () => {
    update ? updateProfile(state) : createProfile(state);
  };

  console.log(state);
  return (
    <div className={classes.root}>
      <Typography variant='h3'>Add New Experience</Typography>

      <ValidatorForm onSubmit={handleSubmitForm}>
        <TextValidator
          label='Title (required)'
          name='title'
          value={state.title}
          onChange={handleChange}
          validators={['required']}
          errorMessages={['This field is required.']}
        />

        <TextValidator
          label='Company (required)'
          name='company'
          value={state.company}
          placeholder='Google, Facebook...'
          onChange={handleChange}
          validators={['required']}
          errorMessages={['This field is required.']}
        />

        <TextValidator
          label='location'
          name='location'
          value={state.location}
          onChange={handleChange}
        />

        <TextValidator
          label='From'
          name='from'
          type='date'
          value={state.from}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
          validators={['required']}
          errorMessages={['This field is required.']}
        />

        <TextValidator
          label='To'
          name='to'
          type='date'
          value={state.to}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
          disabled={state.current === 'false' ? false : true}
        />

        <FormControlLabel
          control={
            <Checkbox
              onChange={handleChange}
              checked={state.current === 'false' ? false : true}
              name='current'
              value={state.current === 'false' ? 'true' : 'false'}
              color='primary'
            />
          }
          label='I am currently working in this role.'
        />

        <TextValidator
          label='Description'
          name='description'
          value={state.description}
          onChange={handleChange}
        />

        <Typography variant='h6' className={classes.error}>
          {error.error}
        </Typography>

        <Button
          className={classes.btnSubmit}
          fullWidth={true}
          variant='outlined'
          type='submit'
        >
          {update ? 'Update Experience' : 'Add Experience'}
        </Button>
      </ValidatorForm>
    </div>
  );
};

const mapStateToProps = state => ({
  error: state.error
});

export default connect(
  mapStateToProps,
  { createProfile, updateProfile }
)(Experience);
