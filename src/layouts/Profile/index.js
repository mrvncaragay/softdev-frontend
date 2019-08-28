import React from 'react';

// Component Styles
import styles from './styles';

// Components
import { SidePanel, MainPanel } from './components';

const Profile = ({ profile }) => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <div className={classes.sidePanel}>
        <SidePanel profile={profile} />
      </div>

      <div className={classes.mainPanel}>
        <MainPanel profile={profile} />
      </div>
    </div>
  );
};

export default Profile;
