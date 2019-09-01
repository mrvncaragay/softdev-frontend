import React, { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { fetchMyProfile } from '../../actions';

// External
import { connect } from 'react-redux';

// Shared component
import {
  Navbar,
  ModalForm,
  CircularLoading,
  Profile as ProfileLayout,
  NewProfile,
  AddBox
} from '../../layouts';

// Component styles
import styles from './styles';

const Profile = ({ currentUser, fetchMyProfile }) => {
  const classes = styles();

  /* eslint-disable */
  useEffect(() => {
    fetchMyProfile();
  }, []);
  /* eslint-enable */

  const button = ({ handleClick }) => {
    return <AddBox title='Add profile' handleClick={handleClick} />;
  };

  return (
    <Navbar>
      <div className={classes.root}>
        {currentUser.isLoading ? (
          <CircularLoading />
        ) : currentUser.profile ? (
          <CSSTransition
            classNames='fade'
            in={true}
            appear={true}
            timeout={500}
          >
            <ProfileLayout profile={currentUser.profile} />
          </CSSTransition>
        ) : (
          <ModalForm CustomButton={button}>
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
  { fetchMyProfile }
)(Profile);
