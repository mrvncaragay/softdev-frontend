import React from 'react';

// Shared component
import Post from './Post';

// Component styles
import styles from './styles';

const MainPanel = ({ posts }) => {
  const classes = styles();

  return (
    <div className={classes.root}>
      {posts.map(post => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
};

export default MainPanel;
