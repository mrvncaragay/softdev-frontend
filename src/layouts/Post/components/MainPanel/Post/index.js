import React from 'react';
import { Link } from 'react-router-dom';

// Material UI component
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import ThumbUp from '@material-ui/icons/ThumbUpOutlined';
import Comment from '@material-ui/icons/CommentOutlined';

// Component styles
import styles from './styles';

const Post = () => {
  const classes = styles();
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.title}>
          <Typography variant='h2'>King's of kings</Typography>
          <Typography variant='h5'>
            Lorem Mauris neque quam, fermentum ut nisl vitae Mauris neque quam,
            fermentum ut nisl vitae
          </Typography>
        </div>

        <div className={classes.author}>
          <Typography variant='h4'>November 1, 2001</Typography>
          <Link to='#'>
            <span>John Doe</span>
            <Avatar
              alt='Remy Sharp'
              src='https://previews.123rf.com/images/panyamail/panyamail1809/panyamail180900343/109879063-user-avatar-icon-sign-profile-symbol.jpg'
              className={classes.avatar}
            />
          </Link>
        </div>
      </div>

      <div className={classes.img}>
        <CardMedia
          className={classes.media}
          image='https://hyrav2.s3.amazonaws.com/uploads/kina/1471514344496-breakup+grief.jpg'
          title='kings'
        />
      </div>
      <div className={classes.text}>
        <Typography variant='body2'>
          Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl.
          Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna
          enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non
          congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed
          vitae justo condimentum, porta lectus vitae, ultricies congue gravida
          diam non fringilla.
        </Typography>
      </div>
      <div className={classes.footer}>
        <Link to='#'>
          <Button variant='outlined'>Continue Reading</Button>
        </Link>

        <div className={classes.stats}>
          <Link to='#'>
            <ThumbUp />
            <span>28</span>
          </Link>

          <Link to='#'>
            <Comment />
            <span>32</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
