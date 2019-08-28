import React, { useState, useEffect } from 'react';
import handleInputChange from 'hooks/handleInputChange';
import { addPost, updateEducation, removeEducation } from 'actions';

// External
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { connect } from 'react-redux';

// Material UI component
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// Component styles
import styles from './styles';

const Post = ({
  addPost,
  updateEducation,
  removeEducation,
  error,
  data = {},
  update = false,
  closeForm
}) => {
  const classes = styles();

  const initialState = {
    title: data.title || '',
    subtitle: data.subtitle || '',
    text: data.text || '',
    image: null
  };

  const [state, handleChange] = handleInputChange(initialState);
  const [imgName, setName] = useState('');

  const handleSubmitForm = () => {
    addPost(state);
    setTimeout(() => {
      closeForm(false);
    }, 300);
    // update ? updateEducation(state, data._id) : addPost(state);
  };

  const handleDelete = () => {
    if (data._id) removeEducation(data._id);
  };

  const handleUpload = e => {
    const file = e.target.files[0];

    if (file) setName(file.name);
    handleChange(null, file);
  };

  const handleClose = () => {
    closeForm(false);
  };

  useEffect(() => {
    ValidatorForm.addValidationRule(
      'betweenTenToFiveThousand',
      val => val.length >= 10 && val.length <= 5000
    );

    ValidatorForm.addValidationRule(
      'betweenFiveToOneHundred',
      val => val.length >= 5 && val.length <= 100
    );
  }, []);

  return (
    <div className={classes.root}>
      <ValidatorForm onSubmit={handleSubmitForm}>
        <div className={classes.header}>
          <Typography variant='h3'>
            {update ? 'update Post' : 'Add Post'}
          </Typography>

          {update && (
            <Button variant='outlined' onClick={handleDelete}>
              Delete
            </Button>
          )}
        </div>

        <TextValidator
          label='Title (required)'
          name='title'
          value={state.title}
          onChange={handleChange}
          validators={['required', 'betweenFiveToOneHundred']}
          errorMessages={[
            'This field is required.',
            'Text must between 5 to 100 characters.'
          ]}
        />

        <TextValidator
          label='Subtitle (required)'
          name='subtitle'
          value={state.subtitle}
          onChange={handleChange}
          validators={['required', 'betweenFiveToOneHundred']}
          errorMessages={[
            'This field is required.',
            'Text must between 5 to 100 characters.'
          ]}
        />

        <TextValidator
          label='What do you want to talk about? (required)'
          name='text'
          multiline
          rows='10'
          value={state.text}
          onChange={handleChange}
          validators={['required', 'betweenTenToFiveThousand']}
          errorMessages={[
            'This field is required.',
            'Text must between 10 to 5000 characters.'
          ]}
        />

        <input
          accept='image/*'
          className={classes.input}
          id='contained-button-file'
          type='file'
          name='image'
          onChange={handleUpload}
        />
        <label htmlFor='contained-button-file'>
          <Button
            variant='outlined'
            component='span'
            className={classes.btnCancel}
          >
            Upload Image
          </Button>
        </label>

        <Typography variant='h6'>{imgName}</Typography>

        <Typography variant='h6' className={classes.error}>
          {error.error}
        </Typography>

        <div className={classes.actions}>
          <Button
            className={classes.btnSubmit}
            variant='outlined'
            type='submit'
          >
            {update ? 'Update Post' : 'Add Post'}
          </Button>

          <Button
            variant='outlined'
            className={classes.btnCancel}
            onClick={handleClose}
          >
            Cancel
          </Button>
        </div>
      </ValidatorForm>
    </div>
  );
};

const mapStateToProps = state => ({
  error: state.error
});

export default connect(
  mapStateToProps,
  { addPost, updateEducation, removeEducation }
)(Post);
