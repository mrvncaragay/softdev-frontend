import React from 'react';
import Button from '@material-ui/core/Button';

// Shared component
import Post from './Post';

// Component styles
import styles from './styles';

const MainPanel = () => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <Post />
      <Post />
    </div>
  );
};

export default MainPanel;
