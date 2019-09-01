import React from 'react';
import handleInputChange from '../../../../hooks/handleInputChange';
import {
  createExperience,
  updateExperience,
  removeExperience
} from '../../../../actions';

// External
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { connect } from 'react-redux';
import moment from 'moment';

// Material UI component
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

// Component styles
import styles from './styles';

const Experience = ({
  createExperience,
  updateExperience,
  removeExperience,
  error,
  data = {},
  update = false,
  closeForm
}) => {
  const classes = styles();

  const initialState = {
    title: data.title || '',
    company: data.company || '',
    location: data.location || '',
    from: data.from ? moment(data.from).format('YYYY-MM-DD') : '',
    to: data.to ? moment(data.to).format('YYYY-MM-DD') : '',
    current: data.current || false,
    description: data.description || ''
  };
  const [state, handleChange] = handleInputChange(initialState);

  const handleSubmitForm = () => {
    update ? updateExperience(state, data._id) : createExperience(state);
  };

  const handleDelete = () => {
    if (data._id) removeExperience(data._id);
  };

  const handleClose = () => {
    closeForm();
  };

  return (
    <div className={classes.root}>
      <ValidatorForm onSubmit={handleSubmitForm}>
        <div className={classes.header}>
          <Typography variant='h3'>
            {update ? 'update Experience' : 'Add New Experience'}
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
          disabled={state.current}
        />

        <FormControlLabel
          control={
            <Checkbox
              onChange={handleChange}
              checked={state.current}
              name='current'
              value={state.current}
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
          {error.message && error.message.error}
        </Typography>

        <Button
          className={classes.btnSubmit}
          fullWidth={true}
          variant='outlined'
          type='submit'
        >
          {update ? 'Update Experience' : 'Add Experience'}
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
  { createExperience, updateExperience, removeExperience }
)(Experience);
