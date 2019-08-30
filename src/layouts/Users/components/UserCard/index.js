import React from 'react';

// Material UI component
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

// Component styles
import styles from './styles';

const UserCard = ({ profile }) => {
  const classes = styles();

  const skillsComponent = () => {
    return profile.skills[0].split(',').map((skill, i) => (
      <Typography key={i} variant='h6'>
        {skill}
      </Typography>
    ));
  };

  return (
    <div className={classes.root}>
      <div className={classes.user}>
        <Avatar
          alt='Random Pic'
          src={profile.user.avatar}
          className={classes.avatar}
        />

        <div className={classes.userTitle}>
          <Typography variant='h5'>{profile.user.name}</Typography>
          <Typography variant='h6'>{profile.status}</Typography>
        </div>

        <div className={classes.btns}>
          <Button size='small' variant='outlined'>
            connect
          </Button>
        </div>
      </div>

      <div className={classes.userSkills}>{skillsComponent()}</div>
    </div>
  );
};

export default UserCard;
