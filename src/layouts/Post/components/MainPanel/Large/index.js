import React from 'react';
import { Link } from 'react-router-dom';

// External
import moment from 'moment';

// Material UI component
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import ThumbUp from '@material-ui/icons/ThumbUpOutlined';
import Comment from '@material-ui/icons/CommentOutlined';

// Component styles
import styles from './styles';

const Post = ({ post }) => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.title}>
          <Link
            to={{
              pathname: `/post/${post._id}`,
              state: { id: post._id }
            }}
          >
            <Typography variant='h2'>{post.title}</Typography>
          </Link>
          <Typography variant='h5'>{post.subtitle}</Typography>
        </div>

        <div className={classes.author}>
          <Typography variant='h4'>
            {moment(post.createdAt).format('MMMM DD, YYYY')}
          </Typography>
          <Link
            to={{
              pathname: `/user/${post.user}`,
              state: { uid: post.user }
            }}
          >
            <span>{post.name}</span>
            <Avatar
              alt={post.name}
              src={`${post.avatar}`}
              className={classes.avatar}
            />
          </Link>
        </div>
      </div>

      {post.posturl && (
        <div className={classes.img}>
          <CardMedia
            className={classes.media}
            image={post.posturl}
            title={post.subtitle}
          />
        </div>
      )}

      <div className={classes.text}>
        <Typography variant='body2'>
          {post.text.substring(0, 300) + '...'}
        </Typography>
      </div>
      <div className={classes.footer}>
        <Link
          to={{
            pathname: `/post/${post._id}`,
            state: { id: post._id }
          }}
        >
          <Button variant='outlined'>Continue Reading</Button>
        </Link>

        <div className={classes.stats}>
          <Link to='#'>
            <ThumbUp />
            <span>{post.likes.length}</span>
          </Link>

          <Link to='#'>
            <Comment />
            <span>{post.comments.length}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
