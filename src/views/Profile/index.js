import React, { useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { fetchProfile } from 'actions';

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
            <ProfileLayout currentUser={currentUser} />
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
  { fetchProfile }
)(Profile);
