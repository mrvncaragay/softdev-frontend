import React from 'react';

// Material UI component
import Typography from '@material-ui/core/Typography';

// Component styles
import styles from './styles';

const ExperienceTab = () => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <div className={classes.eduSections}>
        <Typography variant='h6'>1999 - Present</Typography>
        <Typography variant='h4'>Co-Founder, Chairman</Typography>
        <Typography variant='h5'>Microsoft</Typography>
      </div>
    </div>
  );
};

export default ExperienceTab;
