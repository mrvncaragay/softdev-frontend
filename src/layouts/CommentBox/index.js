import React from 'react';
import { Link } from 'react-router-dom';

// External
import moment from 'moment';

// Material UI component
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

// Component styles
import styles from './styles';

const CommentBox = ({ comment }) => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <div className={classes.userAvatar}>
        <Link to='#'>
          <Avatar
            alt={comment.name}
            src={comment.avatar}
            className={classes.avatar}
          />
        </Link>
      </div>

      <div className={classes.userComment}>
        <Typography variant='h5'>
          <Link to='#'>{comment.name}</Link>
          <span>{moment(comment.date).fromNow()}</span>
        </Typography>

        <Typography className={classes.userTitle} variant='h6'>
          Software Engineer
        </Typography>

        <Typography variant='h6'>{comment.text}</Typography>
      </div>
    </div>
  );
};

export default CommentBox;
