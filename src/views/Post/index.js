import React, { useEffect, Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';
import { fetchPosts } from 'actions';

// External
import { connect } from 'react-redux';

// Material UI components
import Create from '@material-ui/icons/CreateOutlined';
import Button from '@material-ui/core/Button';

// Shared component
import { Navbar, Post as PostLayout } from 'layouts';
import { ModalForm, NewPost, CircularLoading } from 'layouts';

// Component styles
import styles from './styles';

const Post = ({ fetchPosts, posts }) => {
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

  /* eslint-disable */
  useEffect(() => { 
    fetchPosts(); 
  }, []);
  /* eslint-enable */

  return (
    <Navbar>
      {posts.isLoading ? (
        <CircularLoading />
      ) : (
        posts.BigPosts && (
          <Fragment>
            <div className={classes.writePost}>
              <ModalForm customWith='md' CustomButton={button}>
                <NewPost />
              </ModalForm>
            </div>
            <div className={classes.root}>
              {/* Fade animation on page load */}
              <CSSTransition
                classNames='fade'
                in={true}
                appear={true}
                timeout={500}
              >
                <PostLayout posts={posts.BigPosts} />
              </CSSTransition>
            </div>
          </Fragment>
        )
      )}
    </Navbar>
  );
};

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(
  mapStateToProps,
  { fetchPosts }
)(Post);
