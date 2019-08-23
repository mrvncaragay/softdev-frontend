import React from 'react';
import { Link } from 'react-router-dom';

// Material UI component
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CardMedia from '@material-ui/core/CardMedia';

// Component styles
import styles from './styles';

const MiniPost = () => {
  const classes = styles();
  return (
    <div className={classes.root}>
      <CardMedia
        className={classes.media}
        image='https://hyrav2.s3.amazonaws.com/uploads/kina/1471514344496-breakup+grief.jpg'
        title='kings'
      />

      <div className={classes.header}>
        <div className={classes.title}>
          <Link to='#'>
            <Typography variant='h4'>King's of kings</Typography>{' '}
          </Link>
          <Typography variant='h5'>November 1, 2001</Typography>
        </div>

        <div className={classes.author}>
          <a href='#'>
            <Avatar
              alt='Remy Sharp'
              src='https://previews.123rf.com/images/panyamail/panyamail1809/panyamail180900343/109879063-user-avatar-icon-sign-profile-symbol.jpg'
              className={classes.avatar}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MiniPost;
