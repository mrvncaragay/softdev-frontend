import React from 'react';

// Shared component
import MiniPost from './MiniPost';

// Component styles
import styles from './styles';

const SidePanel = () => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <MiniPost />
      <MiniPost />
    </div>
  );
};

export default SidePanel;
