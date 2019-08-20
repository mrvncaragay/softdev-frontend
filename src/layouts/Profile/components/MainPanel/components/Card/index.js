import React from 'react';
// Material UI component
import { Typography } from '@material-ui/core';

// Component style
import styles from './styles';

const Card = ({ children, title }) => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography variant='h4'>{title}</Typography>
      </div>

      {children}
    </div>
  );
};

export default Card;
