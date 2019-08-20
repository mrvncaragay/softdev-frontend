import React from 'react';

// Shared Component
import { InfoCard, Card } from './components';

// Component Styles
import styles from './styles';

const MainPanel = () => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <Card title='Background'>
        <InfoCard />
      </Card>

      <Card title='Experience'>
        <InfoCard />
      </Card>
    </div>
  );
};

export default MainPanel;
