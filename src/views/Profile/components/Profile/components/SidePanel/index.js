import React from 'react';

// Material UI component
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

// Component Styles
import styles from './styles';

const SidePanel = ({ profile }) => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <div className={classes.editBtn}>edit</div>

      <Avatar
        alt='User Avatar'
        src={`${profile.user.avatar}`}
        className={classes.bigAvatar}
      />

      <div className={classes.info}>
        <Typography variant='h3'>{profile.user.name}</Typography>
        <Typography variant='h4'>{profile.status}</Typography>
        <Typography variant='h5'>{profile.location}</Typography>
      </div>

      <div className={classes.follow}>
        <Button fullWidth={true} variant='outlined'>
          Follow
        </Button>
      </div>

      <div className={classes.stats}>
        <div className={classes.following}>
          <Typography variant='h3'>200</Typography>
          <Typography variant='h6'>Following</Typography>
        </div>

        <div className={classes.followers}>
          <Typography variant='h3'>200</Typography>
          <Typography variant='h6'>Followers</Typography>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
