import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// Shared component
import Post from './Large';

// Component styles
import styles from './styles';

const MainPanel = ({ largePosts }) => {
  const classes = styles();

  return (
    <div className={classes.root}>
      {/* Render two elements at the same time. One element in and Other out*/}
      <TransitionGroup>
        {largePosts.map(post => (
          <CSSTransition key={post._id} classNames='fade' timeout={300}>
            <Post key={post._id} post={post} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default MainPanel;
