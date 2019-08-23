import React from 'react';

// Shared component

// Component styles
import styles from './styles';

const SidePanel = () => {
  const classes = styles();

  return <div className={classes.root}>Side Panel</div>;
};

export default SidePanel;
