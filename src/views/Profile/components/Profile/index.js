import React from 'react';
import Avatar from '@material-ui/core/Avatar';

// Material UI component
import Typography from '@material-ui/core/Typography';

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
        <SidePanel />
      </div>

      <div className={classes.mainPanel}>
        <MainPanel />
      </div>
    </div>
  );
};

export default Profile;
