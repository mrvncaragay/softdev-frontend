import React from 'react';

// Component styles
import styles from './styles';

// Shared component
import UserCard from '../UserCard';

const Body = ({ profiles }) => {
  const classes = styles();

  return (
    <div className={classes.root}>
      {profiles.map(profile => (
        <UserCard key={profile._id} profile={profile} />
      ))}
    </div>
  );
};

export default Body;
