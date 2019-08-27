import React, { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import history from 'util/history';
import { fetchPost } from 'actions';

// External
import { connect } from 'react-redux';

// Material UI component
import Button from '@material-ui/core/Button';

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

const SinglePost = ({ fetchPost, posts }) => {
  const classes = styles();

  // const button = ({ handleClick }) => {
  //   return <AddBox title='Add profile' handleClick={handleClick} />;
  // };

  /* eslint-disable */
  useEffect(() => {
    fetchPost(history.location.state.id);

  }, []);
  /* eslint-enable */

  return (
    <Navbar>
      <div className={classes.root}>
        <Link to='/posts'>
          <Button variant='outlined'>Go Back</Button>
        </Link>

        {posts.post && (
          <CSSTransition
            classNames='fade'
            in={true}
            appear={true}
            timeout={500}
          >
            {/* Big posts is undefined when refresh */}
            <SinglePostLayout post={posts.post} />
          </CSSTransition>
        )}

        {/* <ModalForm>
          <NewPost />
        </ModalForm> */}
      </div>
    </Navbar>
  );
};

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(
  mapStateToProps,
  { fetchPost }
)(SinglePost);
