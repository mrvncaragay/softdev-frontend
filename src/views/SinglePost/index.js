import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import lsHelper from 'util/localStorageHelper';

// Material UI component
import Button from '@material-ui/core/Button';

// Shared component
import {
  Navbar,
  SinglePost as SinglePostLayout,
  ModalForm,
  NewPost
} from 'layouts';

// Component styles
import styles from './styles';

const SinglePost = ({ post, getPost }) => {
  const classes = styles();
  const selected = lsHelper.retrieveItem('post');
  // const button = ({ handleClick }) => {
  //   return <AddBox title='Add profile' handleClick={handleClick} />;
  // };

  return (
    <Navbar>
      <div className={classes.root}>
        <Link to='/posts'>
          <Button variant='outlined'>Go Back</Button>
        </Link>

        <CSSTransition classNames='fade' in={true} appear={true} timeout={500}>
          <SinglePostLayout post={selected} />
        </CSSTransition>

        {/* <ModalForm>
          <NewPost />
        </ModalForm> */}
      </div>
    </Navbar>
  );
};

export default SinglePost;