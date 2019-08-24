import React, { useState } from 'react';
import handleInputChange from 'hooks/handleInputChange';
import { addEducation, updateEducation, removeEducation } from 'actions';

// External
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { connect } from 'react-redux';

// Material UI component
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// Component styles
import styles from './styles';

// notes: spinner and have a state in redux that when
// it returns a data it will call dispatch to stop spinnner
// and exit form.

const Post = ({
  addEducation,
  updateEducation,
  removeEducation,
  error,
  data = {},
  update = false,
  closeForm
}) => {
  const classes = styles();

  const initialState = {
    text: data.text || ''
  };

  const imageState = {
    uploading: false,
    name: ''
  };
  const [state, handleChange] = handleInputChange(initialState);
  const [image, setImage] = useState(imageState);

  const handleSubmitForm = () => {
    // update ? updateEducation(state, data._id) : addEducation(state);
  };

  const handleDelete = () => {
    if (data._id) removeEducation(data._id);
  };

  const handleUpload = e => {
    const file = e.target.files[0];

    setImage({
      uploading: true,
      name: file.name
    });
  };

  const handleClose = () => {
    closeForm(false);
  };

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
          label='What do you want to talk about? (required)'
          name='text'
          multiline
          rows='10'
          value={state.text}
          onChange={handleChange}
          validators={['required']}
          errorMessages={['This field is required.']}
        />

        <input
          accept='image/*'
          className={classes.input}
          id='contained-button-file'
          type='file'
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

        <Typography variant='h6'>{image.name}</Typography>

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
  { addEducation, updateEducation, removeEducation }
)(Post);
