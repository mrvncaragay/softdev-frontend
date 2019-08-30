import React from 'react';

// Material UI component
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

// Component styles
import styles from './styles';

const UserCard = () => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <div className={classes.user}>
        <Avatar alt='Random Pic' className={classes.avatar} />

        <div className={classes.userTitle}>
          <Typography variant='h5'>Marcel Toliau</Typography>
          <Typography variant='h6'>Software Developer</Typography>
        </div>

        <div className={classes.btns}>
          <Button size='small' variant='outlined'>
            connect
          </Button>
        </div>
      </div>

      <div className={classes.userSkills}>
        <Typography variant='h6'>C++</Typography>
        <Typography variant='h6'>JavaScript</Typography>
      </div>
    </div>
  );
};

export default UserCard;
