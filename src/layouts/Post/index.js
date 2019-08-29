import React from 'react';

// Shared component
import { MainPanel, SidePanel } from './components';

// Component styles
import styles from './styles';

const Post = ({ large, medium, small }) => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <SidePanel mediumPosts={medium} smallPosts={small} />
      <MainPanel largePosts={large} />
    </div>
  );
};

export default Post;
