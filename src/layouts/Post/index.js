import React from 'react';

// Shared component
import { MainPanel, SidePanel } from './components';

// Component styles
import styles from './styles';

const Post = ({ medium, small }) => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <SidePanel posts={small} />
      <MainPanel posts={medium} />
    </div>
  );
};

export default Post;
