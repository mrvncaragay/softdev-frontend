import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { likePost, unlikePost } from 'actions';

// External
import { connect } from 'react-redux';

// Material UI component
import Button from '@material-ui/core/Button';

// Shared component
import { Header, Body } from './components';

// Component styles
import styles from './styles';

const Users = ({ profiles }) => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <Header />
      <Body profiles={profiles} />

      <div className={classes.paginate}>
        <Button variant='outlined'>Previous Page</Button>
        <Button variant='outlined'>Next Page</Button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.currentUser.info
});

export default connect(
  mapStateToProps,
  { likePost, unlikePost }
)(Users);
