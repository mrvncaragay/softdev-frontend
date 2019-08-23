import React from 'react';

// Shared component
import { MainPanel, SidePanel } from './components';

// Component styles
import styles from './styles';

const Post = () => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <SidePanel />
      <MainPanel />
    </div>
  );
};

export default Post;
