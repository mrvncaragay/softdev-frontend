import React from 'react';

// Shared component
import MiniPost from './Medium';
import TinyPost from './Small';

// Component styles
import styles from './styles';

const SidePanel = ({ mediumPosts, smallPosts }) => {
  const classes = styles();

  return (
    <div className={classes.root}>
      {mediumPosts.map(post => (
        <MiniPost key={post._id} post={post} />
      ))}

      <div className={classes.smallPost}>
        {mediumPosts.map(post => (
          <TinyPost key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default SidePanel;
