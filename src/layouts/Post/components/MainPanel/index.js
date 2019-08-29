import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// Material UI component
import Button from '@material-ui/core/Button';

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

      <div className={classes.pagination}>
        <Button variant='outlined'>Previous Page</Button>
        <Button variant='outlined'>Next Page</Button>
      </div>
    </div>
  );
};

export default MainPanel;
