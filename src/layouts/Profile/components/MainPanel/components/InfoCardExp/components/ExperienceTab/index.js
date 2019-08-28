import React from 'react';

// External
import moment from 'moment';

// Shared Components
import { ModalForm, NewExperience } from 'layouts';

// Material UI component
import Typography from '@material-ui/core/Typography';
import Edit from '@material-ui/icons/Create';

// Component styles
import styles from './styles';

const ExperienceTab = ({ experience, actions }) => {
  const classes = styles();

  const iconButton = ({ handleClick }) => {
    const handleOpen = () => {
      handleClick();
    };
    return <Edit onClick={handleOpen} />;
  };

  return (
    <div className={classes.root}>
      <div className={classes.expSections}>
        <Typography variant='h6'>
          {experience.current
            ? `${moment(experience.from).format('MMM YYYY')} - Present`
            : `${moment(experience.from).format('MMM YYYY')} -  ${moment(
                experience.to
              ).format('MMM YYYY')}`}
        </Typography>
        <Typography variant='h4'>{experience.title}</Typography>
        <Typography variant='h5'>{experience.company}</Typography>
      </div>

      {actions && (
        <div className={classes.edit}>
          <ModalForm CustomButton={iconButton}>
            <NewExperience data={experience} update={true} />
          </ModalForm>
        </div>
      )}
    </div>
  );
};

export default ExperienceTab;
