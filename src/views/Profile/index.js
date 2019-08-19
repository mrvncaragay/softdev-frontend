import React, { useEffect } from 'react';
import { fetchProfile } from 'actions/profileActions';

// External
import { connect } from 'react-redux';

// Shared component
import { Navbar, ModalForm, CircularLoading } from 'layouts';
import { Form, Profile as ProfileLayout } from './components';

// Component styles
import styles from './styles';

const Profile = ({ user, fetchProfile }) => {
  const classes = styles();

  /* eslint-disable */
  useEffect(() => {
    fetchProfile();
  }, []);
  /* eslint-enable */

  return (
    <Navbar>
      <div className={classes.root}>
        {user.isLoading ? (
          <CircularLoading />
        ) : user.profile ? (
          <ProfileLayout user={user} />
        ) : (
          <ModalForm>
            <Form />
          </ModalForm>
        )}
      </div>
    </Navbar>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { fetchProfile }
)(Profile);
