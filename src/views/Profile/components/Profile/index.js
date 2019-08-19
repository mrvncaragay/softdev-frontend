import React from 'react';
import Avatar from '@material-ui/core/Avatar';

// Component Styles
import styles from './styles';

const Profile = ({ user }) => {
  const { profile } = user;
  const classes = styles();

  return (
    <div className={classes.root}>
      <Avatar
        alt='Remy Sharp'
        src={`${profile.user.avatar}`}
        className={classes.bigAvatar}
      />

      <div className={classes.info}>
        <div className={classes.name}>
          <h6>Name</h6>
        </div>

        <div className={classes.bio}>
          <h6>Bio</h6>
        </div>

        <div className={classes.footer}>
          <h6>Footer</h6>
        </div>
      </div>
    </div>
  );
};

export default Profile;
