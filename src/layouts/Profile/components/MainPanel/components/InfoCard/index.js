import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// Component styles
import styles from './styles';

const InfoCard = () => {
  const classes = styles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color='textSecondary'
          gutterBottom
        >
          Icon Title
        </Typography>

        <Typography variant='h5' component='h2'>
          text
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
