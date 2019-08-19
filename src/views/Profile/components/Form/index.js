import React from 'react';
import handleInputChange from 'hooks/handleInputChange';

// External
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

// Material UI component
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

// Component styles
import styles from './styles';

const Form = () => {
  const classes = styles();
  const initialState = {
    handle: '',
    bio: '',
    location: '',
    status: '',
    skills: '',
    company: '',
    website: '',
    githubusername: '',
    youtube: '',
    facebook: '',
    twitter: '',
    linkedin: '',
    instagram: ''
  };
  const [state, handleChange] = handleInputChange(initialState);

  const handleSubmitForm = () => {
    console.log(state);
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
          label='Carreer Status (required)'
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

        {/* <Typography variant='h6' className={classes.error}>
          {error.error}
        </Typography> */}

        <TextField
          className={classes.url}
          name='youtube'
          value={state.youtube}
          label='Youtube'
          placeholder='Url...'
          margin='dense'
          onChange={handleChange}
        />
        <TextField
          className={classes.url}
          label='Facebook'
          name='facebook'
          value={state.facebok}
          placeholder='Url...'
          margin='dense'
          onChange={handleChange}
        />
        <TextField
          className={classes.url}
          name='twitter'
          value={state.twitter}
          label='Twitter'
          placeholder='Url...'
          margin='dense'
          onChange={handleChange}
        />
        <TextField
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

        <Button
          className={classes.btnSubmit}
          fullWidth={true}
          variant='outlined'
          type='submit'
        >
          Create Profile
        </Button>
      </ValidatorForm>
    </div>
  );
};

export default Form;
