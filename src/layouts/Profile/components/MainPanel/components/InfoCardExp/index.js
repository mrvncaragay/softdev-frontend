import React from 'react';

// Material UI component
import Card from '@material-ui/core/Card';
import AddBoxOutlined from '@material-ui/icons/AddBoxOutlined';

// Shared Component
import ExperienceTab from './components/ExperienceTab';

// Component styles
import styles from './styles';
import CardContent from '@material-ui/core/CardContent';

const InfoCardExp = ({ title, icon, skills }) => {
  const classes = styles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <div className={classes.title}>
          {icon}
          <p>{title}</p>
          <AddBoxOutlined className={classes.addButton} />
        </div>

        <ExperienceTab />
      </CardContent>
    </Card>
  );
};

export default InfoCardExp;
