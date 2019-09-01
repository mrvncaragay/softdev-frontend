import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import handleInputChange from '../../../hooks/handleInputChange';
import {
  addPostComment,
  updateEducation,
  removeEducation
} from '../../../actions';

// External
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { connect } from 'react-redux';

// Material UI component
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

// Component styles
import styles from './styles';

const Comment = ({
  currentUser,
  post,
  addPostComment,
  error,
  data = {},
  cancelCommentForm
}) => {
  const classes = styles();

  const initialState = {
    text: data.text || ''
  };

  const [state, handleChange, reset] = handleInputChange(initialState);

  const handleSubmitForm = () => {
    addPostComment(post._id, state);
    reset();
  };

  const handleCancel = () => {
    cancelCommentForm(false);
  };

  useEffect(() => {
    ValidatorForm.addValidationRule(
      'betweenTenToSixHundred',
      val => val.length >= 10 && val.length <= 600
    );
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.userAvatar}>
        <Link to='#'>
          <Avatar
            alt={currentUser.name}
            src={currentUser.avatar}
            className={classes.avatar}
          />
        </Link>
      </div>

      <ValidatorForm onSubmit={handleSubmitForm} instantValidate={false}>
        <TextValidator
          label='Add a comment... (required)'
          name='text'
          multiline={true}
          value={state.text}
          onChange={handleChange}
          validators={['required', 'betweenTenToSixHundred']}
          errorMessages={[
            'This field is required.',
            'Text must between 10 to 600 characters.'
          ]}
        />

        <Typography variant='h6' className={classes.error}>
          {error.message && error.message.error}
        </Typography>

        <div className={classes.actions}>
          <Button className={classes.btnCancel} onClick={handleCancel}>
            Cancel
          </Button>

          <Button
            className={classes.btnSubmit}
            variant='outlined'
            type='submit'
          >
            Post
          </Button>
        </div>
      </ValidatorForm>
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.currentUser.info,
  error: state.error
});

export default connect(
  mapStateToProps,
  { addPostComment, updateEducation, removeEducation }
)(Comment);
