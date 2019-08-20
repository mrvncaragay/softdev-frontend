import React from 'react';

// Component Styles
import styles from './styles';

// Components
import { SidePanel, MainPanel } from './components';

const Profile = ({ user }) => {
  const { profile } = user;
  const classes = styles();

  return (
    <div className={classes.root}>
      <div className={classes.sidePanel}>
        <SidePanel profile={profile} />
      </div>

      <div className={classes.mainPanel}>
        <MainPanel />
      </div>
    </div>
  );
};

export default Profile;
