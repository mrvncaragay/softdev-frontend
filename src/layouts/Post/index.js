import React from 'react';

// Shared component
import { MainPanel, SidePanel } from './components';

// Component styles
import styles from './styles';

const Post = ({ posts }) => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <SidePanel />
      <MainPanel posts={posts} />
    </div>
  );
};

export default Post;
