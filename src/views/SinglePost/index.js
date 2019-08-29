import React, { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import history from 'util/history';
import { fetchPost } from 'actions';

// External
import { connect } from 'react-redux';

// Material UI component
import Button from '@material-ui/core/Button';
import ArrowBack from '@material-ui/icons/ArrowBack';

// Shared component
import {
  Navbar,
  CircularLoading,
  SinglePost as SinglePostLayout,
  ModalForm,
  NewPost
} from 'layouts';

// Component styles
import styles from './styles';

const SinglePost = ({ fetchPost, posts, currentUser }) => {
  const classes = styles();

  const button = ({ handleClick }) => {
    return (
      <Button variant='outlined' onClick={handleClick}>
        Edit
      </Button>
    );
  };

  console.log(history);
  /* eslint-disable */
  useEffect(() => {
    fetchPost(history.location.state.id);
  }, []);
  /* eslint-enable */

  const showCurrentUserActions = () => currentUser.id === posts.post.user;

  return (
    <Navbar>
      <div className={classes.root}>
        <div className={classes.postActions}>
          <Link to='/posts'>
            <Button variant='outlined'>
              <ArrowBack />
            </Button>
          </Link>

          {posts.post && showCurrentUserActions() && (
            <ModalForm customWith='md' CustomButton={button}>
              <NewPost update={true} data={posts.post} />
            </ModalForm>
          )}
        </div>

        {posts.post &&
          (posts.isLoading ? (
            <CircularLoading />
          ) : (
            <CSSTransition
              classNames='fade'
              in={true}
              appear={true}
              timeout={500}
            >
              <SinglePostLayout post={posts.post} />
            </CSSTransition>
          ))}
      </div>
    </Navbar>
  );
};

const mapStateToProps = state => ({
  posts: state.posts,
  currentUser: state.currentUser.info
});

export default connect(
  mapStateToProps,
  { fetchPost }
)(SinglePost);
