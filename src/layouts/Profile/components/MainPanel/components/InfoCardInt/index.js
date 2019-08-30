import React from 'react';

// Material UI component
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

// Component styles
import styles from './styles';

const InfoCardInt = ({ title, icon, bio }) => {
  const classes = styles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <div className={classes.title}>
          {icon}

          <p>{title}</p>
        </div>

        <div className={classes.body}>
          <Button variant='outlined'>Web Security</Button>
          <Button variant='outlined'>Cryptography</Button>
          <Button variant='outlined'>Algorithm</Button>
          <Button variant='outlined'>Web Technology</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default InfoCardInt;
