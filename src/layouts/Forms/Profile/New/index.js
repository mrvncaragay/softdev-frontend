import React from 'react';
import handleInputChange from 'hooks/handleInputChange';
import { createProfile, updateProfile } from 'actions/profileActions';

// External
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { connect } from 'react-redux';

// Material UI component
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

// Component styles
import styles from './styles';

const Form = ({
  createProfile,
  updateProfile,
  error,
  data = {},
  update = false,
  closeForm
}) => {
  const classes = styles();

  const initialState = {
    handle: data.handle || '',
    bio: data.bio || '',
    location: data.location || '',
    status: data.status || '',
    skills: data.skills || '',
    company: data.company || '',
    website: data.website || '',
    githubusername: data.githubusername || '',
    youtube: data.youtube || '',
    facebook: data.facebook || '',
    twitter: data.twitter || '',
    linkedin: data.linkedin || '',
    instagram: data.instagram || ''
  };
  const [state, handleChange] = handleInputChange(initialState);

  const handleSubmitForm = () => {
    update ? updateProfile(state, data) : createProfile(state);
  };

  const handleClose = () => {
    closeForm();
  };

  return (
    <div className={classes.root}>
      <Typography variant='h3'>Create a New Profile</Typography>

      <ValidatorForm onSubmit={handleSubmitForm}>
        <TextValidator
          label='Profile Name (required)'
          name='handle'
          value={state.handle}
          onChange={handleChange}
          validators={['required']}
          errorMessages={['This field is required.']}
        />

        <TextField
          label='About'
          name='bio'
          value={state.bio}
          onChange={handleChange}
          multiline
          rows='4'
          className={classes.textField}
        />

        <TextValidator
          label='Location'
          name='location'
          value={state.location}
          placeholder='City & State... e.g San Francisco, CA'
          onChange={handleChange}
        />

        <TextValidator
          label='Career Status (required)'
          name='status'
          placeholder='Student, Software Developer...'
          value={state.status}
          onChange={handleChange}
          validators={['required']}
          errorMessages={['This field is required.']}
        />

        <TextValidator
          label='Company'
          name='company'
          value={state.company}
          onChange={handleChange}
        />

        <TextValidator
          label='Website'
          name='website'
          value={state.website}
          placeholder='Your porfolio or company...'
          onChange={handleChange}
        />

        <TextValidator
          label='Github'
          name='githubusername'
          placeholder='Link you github repos...'
          value={state.githubusername}
          onChange={handleChange}
        />

        <TextValidator
          label='Skills (required)'
          name='skills'
          placeholder='C++, Java, JavaScript...'
          value={state.skills}
          onChange={handleChange}
          validators={['required']}
          errorMessages={['This field is required.']}
        />

        <Typography variant='h4' className={classes.optional}>
          Optional
        </Typography>

        <TextValidator
          className={classes.url}
          name='youtube'
          value={state.youtube}
          label='Youtube'
          placeholder='Url...'
          margin='dense'
          onChange={handleChange}
        />
        <TextValidator
          className={classes.url}
          label='Facebook'
          name='facebook'
          value={state.facebok}
          placeholder='Url...'
          margin='dense'
          onChange={handleChange}
        />
        <TextValidator
          className={classes.url}
          name='twitter'
          value={state.twitter}
          label='Twitter'
          placeholder='Url...'
          margin='dense'
          onChange={handleChange}
        />
        <TextValidator
          className={classes.url}
          name='linkedin'
          value={state.linkedin}
          label='LinkedIn'
          placeholder='Url...'
          margin='dense'
          onChange={handleChange}
        />
        <TextField
          className={classes.url}
          name='instagram'
          value={state.instagram}
          label='Instagram'
          placeholder='Url...'
          margin='dense'
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
          {update ? 'Update Profile' : 'Create Profile'}
        </Button>

        <Button
          fullWidth={true}
          className={classes.btnCancel}
          variant='outlined'
          onClick={handleClose}
        >
          Cancel
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
)(Form);
