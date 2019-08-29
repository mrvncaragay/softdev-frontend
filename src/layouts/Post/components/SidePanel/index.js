import React from 'react';

// Shared component
import MiniPost from './Small';

// Component styles
import styles from './styles';

const SidePanel = ({ posts }) => {
  const classes = styles();

  return (
    <div className={classes.root}>
      {posts.map(post => (
        <MiniPost key={post._id} post={post} />
      ))}
    </div>
  );
};

export default SidePanel;
