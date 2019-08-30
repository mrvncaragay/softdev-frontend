import React, { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { fetchPosts } from 'actions';

// External
import { connect } from 'react-redux';

// Material UI components
import Create from '@material-ui/icons/CreateOutlined';
import Button from '@material-ui/core/Button';

// Shared component
import { Navbar, Users as UsersLayout } from 'layouts';
import { ModalForm, NewPost, CircularLoading } from 'layouts';

// Component styles
import styles from './styles';

const Users = ({ fetchPosts, users, currentUser }) => {
  const classes = styles();

  // const button = ({ handleClick }) => {
  //   const handleOpen = () => {
  //     handleClick();
  //   };

  //   return (
  //     <Button
  //       variant='outlined'
  //       className={classes.button}
  //       onClick={handleOpen}
  //     >
  //       <Create className={classes.rightIcon} />
  //       Write
  //     </Button>
  //   );
  // };

  /* eslint-disable */
  useEffect(() => {
    // fetchPosts()
  }, []);
  /* eslint-enable */

  return (
    <Navbar>
      <div className={classes.root}>
        <UsersLayout />
      </div>
    </Navbar>
  );
};

const mapStateToProps = state => ({
  posts: state.posts,
  currentUser: state.currentUser
});

export default connect(
  mapStateToProps,
  { fetchPosts }
)(Users);
