import React from 'react';

import Create from '@material-ui/icons/CreateOutlined';
import Button from '@material-ui/core/Button';

// Shared component
import { Navbar, Post as PostLayout } from 'layouts';

// Component styles
import styles from './styles';

const Post = () => {
  const classes = styles();

  return (
    <Navbar>
      <div className={classes.writePost}>
        <Button variant='outlined' className={classes.button}>
          <Create className={classes.rightIcon} />
          Write
        </Button>
      </div>

      <div className={classes.root}>
        <PostLayout />
      </div>
    </Navbar>
  );
};

export default Post;
