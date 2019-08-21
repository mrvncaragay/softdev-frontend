import React from 'react';

// Material UI component
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

// Shared Components
import { ModalForm, NewProfile } from 'layouts';

// Component Styles
import styles from './styles';

const SidePanel = ({ profile }) => {
  const classes = styles();

  const button = ({ handleClick }) => {
    const handleOpen = () => {
      handleClick();
    };
    return (
      <Button fullWidth={true} variant='outlined' onClick={handleOpen}>
        Edit
      </Button>
    );
  };

  return (
    <div className={classes.root}>
      <div className={classes.editBtn}>
        <ModalForm CustomButton={button}>
          <NewProfile data={profile} update={true} />
        </ModalForm>
      </div>

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

      <div className={classes.followBtn}>
        <Button fullWidth={true} variant='outlined'>
          Follow
        </Button>
      </div>

      <div className={classes.stats}>
        <div className={classes.following}>
          <Typography variant='h3'>132</Typography>
          <Typography variant='h6'>Following</Typography>
        </div>

        <div className={classes.followers}>
          <Typography variant='h3'>54</Typography>
          <Typography variant='h6'>Followers</Typography>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
