import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

// Component styles
import styles from './styles';

const InfoCard = ({ title, icon }) => {
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
            Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl.
            Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna
            enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non
            congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed
            vitae justo condimentum, porta lectus vitae, ultricies congue
            gravida diam non fringilla.
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
