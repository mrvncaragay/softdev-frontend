import React from 'react';
import { randomPics } from 'util/randomHelpers';

// Material UI component
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

// Component styles
import styles from './styles';

const InfoCardRecom = () => {
  const classes = styles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <div className={classes.body}>
          <div className={classes.recommendCard}>
            <div className={classes.textBody}>
              <Typography variant='body2'>
                Ex vix causae aperiam splendide? Ex cum debitis antiopam.
                Ornatus detraxit te eum, democritum consetetur efficiendi mea
                ea. Ex quis exerci epicuri vix!
              </Typography>
            </div>

            <div className={classes.footer}>
              <Avatar alt='Random Pic' src={randomPics(1)[0]} />

              <div className={classes.nameJob}>
                <Typography variant='h5'>Salsalito Sanchez</Typography>
                <span>Graphics Kicker</span>
              </div>
            </div>
          </div>

          {/* Second Recommendation */}

          <div className={classes.recommendCard}>
            <div className={classes.textBody}>
              <Typography variant='body2'>
                Ex vix causae aperiam splendide? Ex cum debitis antiopam.
                Ornatus detraxit te eum, democritum consetetur efficiendi mea
                ea. Ex quis exerci epicuri vix!
              </Typography>
            </div>

            <div className={classes.footer}>
              <Avatar
                alt='Random Pic'
                src={randomPics(1)[0]}
                className={classes.avatar}
              />

              <div className={classes.nameJob}>
                <Typography variant='h5'>Salsalito Sanchez</Typography>
                <span>UX Designer</span>
              </div>
            </div>
          </div>

          {/* Third Recommendation */}

          <div className={classes.recommendCard}>
            <div className={classes.textBody}>
              <Typography variant='body2'>
                Ex vix causae aperiam splendide? Ex cum debitis antiopam.
                Ornatus detraxit te eum, democritum consetetur efficiendi mea
                ea. Ex quis exerci epicuri vix!
              </Typography>
            </div>

            <div className={classes.footer}>
              <Avatar
                alt='Random Pic'
                src={randomPics(1)[0]}
                className={classes.avatar}
              />

              <div className={classes.nameJob}>
                <Typography variant='h5'>Salsalito Sanchez</Typography>
                <span>Software Developwer</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InfoCardRecom;
