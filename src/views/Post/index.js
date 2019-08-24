import React from 'react';

// Material UI components
import Create from '@material-ui/icons/CreateOutlined';
import Button from '@material-ui/core/Button';

// Shared component
import { Navbar, Post as PostLayout } from 'layouts';
import { ModalForm, NewPost } from 'layouts';

// Component styles
import styles from './styles';

const Post = () => {
  const classes = styles();

  const button = ({ handleClick }) => {
    const handleOpen = () => {
      handleClick();
    };

    return (
      <Button
        variant='outlined'
        className={classes.button}
        onClick={handleOpen}
      >
        <Create className={classes.rightIcon} />
        Write
      </Button>
    );
  };

  return (
    <Navbar>
      <div className={classes.writePost}>
        <ModalForm customWith='md' CustomButton={button}>
          <NewPost />
        </ModalForm>
      </div>

      <div className={classes.root}>
        <PostLayout />
      </div>
    </Navbar>
  );
};

export default Post;
