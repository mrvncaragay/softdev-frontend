import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';

// External
import moment from 'moment';

// Material UI component
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import ThumbUp from '@material-ui/icons/ThumbUpOutlined';
import Comment from '@material-ui/icons/CommentOutlined';

// Shared component
import { CommentBox, NewComment } from 'layouts';

// Component styles
import styles from './styles';

const SinglePost = ({ post }) => {
  const classes = styles();
  const [open, setOpen] = useState(true);

  const handleCommentForm = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.title}>
          <Typography variant='h2'>{post.title}</Typography>
          <Typography variant='h5'>{post.subtitle}</Typography>
        </div>

        <div className={classes.author}>
          <Typography variant='h4'>
            {moment(post.createdAt).format('MMMM DD, YYYY')}
          </Typography>
          <Link to='#'>
            <span>{post.name}</span>
            <Avatar
              alt={post.name}
              src={post.avatar}
              className={classes.avatar}
            />
          </Link>
        </div>
      </div>

      {post.posturl && (
        <div className={classes.img}>
          <CardMedia
            className={classes.media}
            image={`${post.posturl}`}
            title='kings'
          />
        </div>
      )}

      <div className={classes.text}>
        <Typography variant='body2'>{post.text}</Typography>
      </div>

      <div className={classes.footer}>
        <div className={classes.stats}>
          <Button>
            <ThumbUp />
            <span>{post.likes.length} likes</span>
          </Button>

          <Button onClick={handleCommentForm}>
            <Comment />
            <span>{post.comments.length} Comment</span>
          </Button>
        </div>
      </div>

      {open && (
        <CSSTransition
          classNames='fade'
          in={true}
          appear={true}
          exit={true}
          timeout={400}
        >
          <NewComment post={post} cancelCommentForm={setOpen} />
        </CSSTransition>
      )}

      <div className={classes.comments}>
        <TransitionGroup>
          {post.comments.map(comment => (
            <CSSTransition
              key={comment._id}
              classNames='fade'
              in={true}
              appear={true}
              exit={true}
              timeout={400}
            >
              <CommentBox pid={post._id} key={comment._id} comment={comment} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </div>
  );
};

export default SinglePost;
