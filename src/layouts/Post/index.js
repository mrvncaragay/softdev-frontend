import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// Shared component
import { MainPanel, SidePanel } from './components';

// Component styles
import styles from './styles';

const Post = ({ posts }) => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <SidePanel />
      {/* Fade animation on page load */}
      <CSSTransition classNames='fade' in={true} appear={true} timeout={500}>
        <MainPanel posts={posts} />
      </CSSTransition>
    </div>
  );
};

export default Post;
