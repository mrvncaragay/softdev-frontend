import React from 'react';
import handleInputChange from 'hooks/handleInputChange';
import { addEducation, updateEducation, removeEducation } from 'actions';

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

const Education = ({
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
    school: data.school || '',
    degree: data.degree || '',
    fieldOfStudy: data.fieldOfStudy || '',
    from: data.from ? moment(data.from).format('YYYY-MM-DD') : '',
    to: data.to ? moment(data.to).format('YYYY-MM-DD') : '',
    current: data.current || 'false',
    description: data.description || ''
  };
  const [state, handleChange] = handleInputChange(initialState);

  const handleSubmitForm = () => {
    update ? updateEducation(state, data._id) : addEducation(state);
  };

  const handleDelete = () => {
    if (data._id) removeEducation(data._id);
  };

  return (
    <div className={classes.root}>
      <ValidatorForm onSubmit={handleSubmitForm}>
        <div className={classes.header}>
          <Typography variant='h3'>
            {update ? 'update Education' : 'Add New Education'}
          </Typography>

          {update && (
            <Button variant='outlined' onClick={handleDelete}>
              Delete
            </Button>
          )}
        </div>

        <TextValidator
          label='School name (required)'
          name='school'
          value={state.school}
          onChange={handleChange}
          validators={['required']}
          errorMessages={['This field is required.']}
        />

        <TextValidator
          label='Degree (required)'
          name='degree'
          value={state.degree}
          placeholder='Engineering, Science...'
          onChange={handleChange}
          validators={['required']}
          errorMessages={['This field is required.']}
        />

        <TextValidator
          label='Field Of Study'
          name='fieldOfStudy'
          value={state.fieldOfStudy}
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
          {update ? 'Update Education' : 'Add Education'}
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
  { addEducation, updateEducation, removeEducation }
)(Education);
