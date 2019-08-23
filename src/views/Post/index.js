import React from 'react';

// Shared component
import { Navbar, Post as PostLayout } from 'layouts';

// Component styles
import styles from './styles';

const Post = () => {
  const classes = styles();

  return (
    <Navbar>
      <div className={classes.root}>
        <PostLayout />
      </div>
    </Navbar>
  );
};

export default Post;
