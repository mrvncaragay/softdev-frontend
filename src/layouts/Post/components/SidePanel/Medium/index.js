import React from 'react';
import { Link } from 'react-router-dom';

// External
import moment from 'moment';

// Material UI component
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

// Component styles
import styles from './styles';

const MiniPost = ({ post }) => {
  const classes = styles();

  return (
    <div className={classes.root}>
      {post.posturl && (
        <div className={classes.image}>
          <img alt={post.subtitle} src={post.posturl} title={post.title} />
        </div>
      )}

      <div className={classes.header}>
        <div className={classes.title}>
          <Link
            to={{
              pathname: `/post/${post._id}`,
              state: { id: post._id }
            }}
          >
            <Typography variant='h4'>{post.title}</Typography>
          </Link>
          <Typography variant='h5'>
            {moment(post.createdAt).format('MMMM DD, YYYY')}
          </Typography>
        </div>

        <div className={classes.author}>
          <Link
            to={{ pathname: `/user/${post.user}`, state: { uid: post.user } }}
          >
            <Avatar
              alt={post.name}
              src={post.avatar}
              className={classes.avatar}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MiniPost;
