import React, { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { fetchProfile } from 'actions';

// External
import { connect } from 'react-redux';
import history from 'util/history';

// Shared component
import { Navbar, CircularLoading, Profile as ProfileLayout } from 'layouts';

// Component styles
import styles from './styles';

const UserProfile = ({ fetchProfile, profile, currentUser }) => {
  const classes = styles();

  // import { Redirect } from 'react-router-dom';
  // if (history.location.state.uid === currentUser.id) {
  //   return <Redirect to='/profile/me' />;
  // }

  /* eslint-disable */
  useEffect(() => {
       fetchProfile(history.location.state.uid);
  }, []);
  /* eslint-enable */

  return (
    <Navbar>
      <div className={classes.root}>
        {profile.isLoading ? (
          <CircularLoading />
        ) : profile.user ? (
          <CSSTransition
            classNames='fade'
            in={true}
            appear={true}
            timeout={500}
          >
            <ProfileLayout profile={profile} />
          </CSSTransition>
        ) : (
          <div>No Profile for this user</div>
        )}
      </div>
    </Navbar>
  );
};

const mapStateToProps = state => ({
  profile: state.profile,
  currentUser: state.currentUser.info
});

export default connect(
  mapStateToProps,
  { fetchProfile }
)(UserProfile);
