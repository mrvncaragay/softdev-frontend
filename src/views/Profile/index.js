import React, { useEffect } from 'react';
import { fetchProfile } from 'actions/profileActions';

// External
import { connect } from 'react-redux';

// Shared component
import { Navbar, ModalForm, CircularLoading } from 'layouts';
import { Form } from './components';

// Component styles
import styles from './styles';

const Profile = ({ user, fetchProfile }) => {
  const classes = styles();

  /* eslint-disable */
  useEffect(() => {
    fetchProfile();
  }, []);
  /* eslint-enable */

  const profileForm = () => {
    return (
      !user.profile && (
        <ModalForm>
          <Form />
        </ModalForm>
      )
    );
  };

  return (
    <Navbar>
      <div className={classes.root}>
        {user.isLoading ? <CircularLoading /> : profileForm()}
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
