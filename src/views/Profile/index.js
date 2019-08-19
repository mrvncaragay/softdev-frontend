import React from 'react';

// External
import { connect } from 'react-redux';

// Shared component
import { Navbar, ModalForm } from 'layouts';
import { Form } from './components';

// Component styles
import styles from './styles';

const Profile = ({ user }) => {
  const classes = styles();

  return (
    <Navbar>
      <div className={classes.root}>
        {!user.profile && (
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
  {}
)(Profile);
