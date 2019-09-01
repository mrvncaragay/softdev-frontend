import React from 'react';
import { randomSchools } from '../../../../../../../../util/randomHelpers';
// External
import moment from 'moment';

// Shared Components
import { ModalForm, NewEducation } from '../../../../../../../../layouts';

// Material UI component
import Typography from '@material-ui/core/Typography';
import Edit from '@material-ui/icons/Create';
import CardMedia from '@material-ui/core/CardMedia';

// Component styles
import styles from './styles';

const EducationTab = ({ education }) => {
  const classes = styles();

  const iconButton = ({ handleClick }) => {
    const handleOpen = () => {
      handleClick();
    };
    return <Edit onClick={handleOpen} />;
  };

  return (
    <div className={classes.root}>
      <div className={classes.eduSections}>
        <Typography variant='h6'>
          {education.current
            ? `${moment(education.from).format('MMM YYYY')} - Present`
            : `${moment(education.from).format('MMM YYYY')} -  ${moment(
                education.to
              ).format('MMM YYYY')}`}
        </Typography>
        <Typography variant='h4'>{education.school}</Typography>
        <Typography variant='h5'>{education.degree}</Typography>
      </div>

      <div className={classes.edit}>
        <ModalForm CustomButton={iconButton}>
          <NewEducation data={education} update={true} />
        </ModalForm>
      </div>

      <CardMedia
        className={classes.media}
        image={randomSchools()}
        title='education'
      />
    </div>
  );
};

export default EducationTab;
