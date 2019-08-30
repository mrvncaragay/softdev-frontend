import React from 'react';

// Material UI component
import Typography from '@material-ui/core/Typography';

// Component styles
import styles from './styles';

const Header = ({ title }) => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <Typography variant='h4'>Developers</Typography>
    </div>
  );
};

export default Header;
