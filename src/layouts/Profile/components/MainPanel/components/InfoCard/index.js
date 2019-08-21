import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

// Component styles
import styles from './styles';

const InfoCard = ({ title, icon, bio }) => {
  const classes = styles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <div className={classes.title}>
          {icon}

          <p>{title}</p>
        </div>

        <div className={classes.body}>
          <Typography variant='body2' gutterBottom>
            {bio}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
