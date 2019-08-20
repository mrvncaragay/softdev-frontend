import React, { useEffect } from 'react';
import { fetchProfile } from 'actions/profileActions';

// External
import { connect } from 'react-redux';

// Shared component
import {
  Navbar,
  ModalForm,
  CircularLoading,
  Profile as ProfileLayout,
  NewProfile
} from 'layouts';

// Component styles
import styles from './styles';

const Profile = ({ currentUser, fetchProfile }) => {
  const classes = styles();

  /* eslint-disable */
  useEffect(() => {
    fetchProfile();
  }, []);
  /* eslint-enable */

  return (
    <Navbar>
      <div className={classes.root}>
        {currentUser.isLoading ? (
          <CircularLoading />
        ) : currentUser.profile ? (
          <ProfileLayout currentUser={currentUser} />
        ) : (
          <ModalForm>
            <NewProfile />
          </ModalForm>
        )}
      </div>
    </Navbar>
  );
};

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export default connect(
  mapStateToProps,
  { fetchProfile }
)(Profile);
