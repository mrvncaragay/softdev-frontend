import React from 'react';

// Material UI components

// External
import { connect } from 'react-redux';

// Shared component
import { Navbar } from 'layouts';
import { AddProfileBox } from './components';

// Component styles
import styles from './styles';

const Profile = ({ user }) => {
  const classes = styles();

  return (
    <Navbar>
      <div className={classes.root}>{!user.profile && <AddProfileBox />}</div>
    </Navbar>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  {}
)(Profile);
