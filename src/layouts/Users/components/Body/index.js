import React from 'react';

// Component styles
import styles from './styles';

// Shared component
import UserCard from '../UserCard';

const Body = ({ title }) => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
    </div>
  );
};

export default Body;
